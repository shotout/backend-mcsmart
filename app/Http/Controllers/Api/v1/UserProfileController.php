<?php

namespace App\Http\Controllers\Api\v1;

use App\Models\User;
use App\Models\Schedule;
use App\Jobs\GenerateTimer;
use Illuminate\Http\Request;
use App\Jobs\GenerateTimerAds;
use App\Http\Controllers\Controller;
use App\Models\Collection;
use App\Models\PastQuote;
use App\Models\Subscription;
use App\Models\UserCategory;
use App\Models\UserQuote;
use App\Models\UserRepeat;
use App\Models\UserTheme;

class UserProfileController extends Controller
{
    public function show()
    {
        $user = User::with('icon','schedule','topics','themes', 'categories','subscription')
            ->find(auth('sanctum')->user()->id);

        return response()->json([
            'status' => 'success',
            'data' => $user
        ], 200);
    }

    public function update(Request $request)
    {
        $user = User::find(auth('sanctum')->user()->id);

        if ($request->has('icon')) {
            $user->icon_id = $request->icon;
            $user->update();
        }

        if ($request->has('name')) {
            $user->name = $request->name;
            $user->update();
        }

        if ($request->has('gender')) {
            $user->gender = $request->gender;
            $user->update();
        }

        if ($request->has('fcm_token') && $request->fcm_token != '') {
            $user->fcm_token = $request->fcm_token;
            $user->update();
        }

        if ($request->has('purchasely_id')) {
            $user->purchasely_id = $request->purchasely_id;
            $user->update();
        }

        if ($request->has('commit_goal') && $request->commit_goal != '') {
            $user->commit_goal = $request->commit_goal;
            $user->update();

            //reset subscription registered device
            $subscription = Subscription::where('user_id', $user->id)->first();
            if ($subscription) {
                $subscription->plan_id = 1;
                $subscription->type = 1;
                $subscription->update();
            }

            //reset repeat list
            $repeat = UserRepeat::where('user_id', $user->id)->get();
            if($repeat) {                
               foreach($repeat as $r) {
                   $r->delete();
               }
            }

            //reset like list
            $liked = UserQuote::where('user_id', $user->id)->get();
            if($liked) {                
               foreach($liked as $l) {
                   $l->delete();
               }
            }

            //reset category
            $categories = UserCategory::where('user_id', $user->id)->whereNotIn('category_id',[1,2])->get();
            if($categories) {                
               foreach($categories as $c) {
                   $c->delete();
               }
            }

            //reset collection
            $collections = Collection::where('user_id', $user->id)->get();
            if($collections) {                
               foreach($collections as $cl) {
                   $cl->delete();
               }
            }

            //reset past facts
            $facts = PastQuote::where('user_id', $user->id)->get();
            if($facts) {                
               foreach($facts as $f) {
                   $f->delete();
               }
            }

            //reset to random theme
            $themes = UserTheme::where('user_id', $user->id)->get();
            if($themes) {                
                $themes->theme_id = 1;
                $themes->update();
               }
            
        }

        // schedule reminder ------------
            $schedule = Schedule::where('user_id', auth('sanctum')->user()->id)->first();

            if ($request->has('often') && $request->often != '') {
                $schedule->often = $request->often;
            }
            if ($request->has('start') && $request->start != '') {
                $schedule->start = $request->start;
            }
            if ($request->has('end') && $request->end != '') {
                $schedule->end = $request->end;
            }
            if ($request->has('anytime') && $request->anytime != '') {
                $schedule->anytime = true;
            }

            if ($request->has('timezone') && $request->timezone != '') {
                $schedule->timezone = $request->timezone;
            }
            
            $schedule->save();
            GenerateTimer::dispatch($user->id)->onQueue(env('SUPERVISOR'));
        // -------------------------

        // reset user notif counter
        if ($request->has('notif_count')) {
            $user->notif_count = 0;
            $user->update();
        }

        // reset notif ads count
        if ($request->has('notif_ads_count')) {
            $user->notif_ads_count = 0;
            $user->update();

            GenerateTimerAds::dispatch($user->id)->onQueue(env('SUPERVISOR'));
        }

        return response()->json([
            'status' => 'success',
            'data' => $user
        ], 200);
    }
}