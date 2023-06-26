<?php

namespace App\Http\Controllers\Api\v1;

use Carbon\Carbon;
use App\Models\User;
use App\Models\Topic;
use App\Jobs\UserPool;
use App\Models\Schedule;
use App\Models\Subscription;
use Illuminate\Http\Request;
use App\Jobs\GenerateTimerAds;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class AuthController extends Controller
{
    public function checkDevice(Request $request)
    {
        $request->validate(['device_id' => 'required']);

        $user = User::where('device_id', $request->device_id)->first();

        if ($user) {
            // reset notif ads count -------
                $user->notif_ads_count = 0;
                $user->update();

                GenerateTimerAds::dispatch($user->id)->onQueue(env('SUPERVISOR'));
            // ---------

            $token = $user->createToken('auth_token')->plainTextToken;

            $data = User::with('icon','schedule','topics','subscription','themes','categories')->find($user->id);

            return response()->json([
                'status' => 'success',
                'token' => $token,
                'data' => $data
            ], 200); 
        }

        return response()->json([
            'status' => 'failed',
            'message' => 'device not register'
        ], 400); 
    }

    public function register(Request $request)
    {
        $request->validate([
            'device_id' => 'required',
            // 'topics' => 'required',
        ]);

        $isRegister = User::where('device_id', $request->device_id)->first();
        if ($isRegister) {
            return response()->json([
                'status' => 'failed',
                'message' => 'device has register'
            ], 400); 
        }

        $user = DB::transaction(function () use ($request) {

            // user --------------
                $user = new User;
                $user->icon_id = 1;
                
                // if ($request->has('icon')) {
                //     $user->icon_id = $request->icon;
                // }
                if ($request->has('name')) {
                    $user->name = $request->name;
                }
                if ($request->has('gender')) {
                    $user->gender = $request->gender;
                }
                if ($request->has('device_id')) {
                    $user->device_id = $request->device_id;
                }
                if ($request->has('fcm_token')) {
                    $user->fcm_token = $request->fcm_token;
                }
                if ($request->has('purchasely_id')) {
                    $user->purchasely_id = $request->purchasely_id;
                }

                if ($request->has('impress_friends')) {
                    if ($request->impress_friends == 'yes') {
                        $user->impress_friends = 1;
                    }
                }
                if ($request->has('impress_business')) {
                    if ($request->impress_business == 'yes') {
                        $user->impress_business = 1;
                    }
                }
                if ($request->has('impress_children')) {
                    if ($request->impress_children == 'yes') {
                        $user->impress_children = 1;
                    }
                }
                if ($request->has('impress_members')) {
                    if ($request->impress_members == 'yes') {
                        $user->impress_members = 1;
                    }
                }

                if ($request->has('commit_goal')) {
                    $user->commit_goal = $request->commit_goal;
                }
                
                // $user->remember_token = Str::random(16);
                $user->save();
            // ------------------------------

            // subscription ---------
                $sub = new Subscription;
                $sub->user_id = $user->id;
                $sub->plan_id = 1;
                $sub->started = now();
                $sub->renewal = Carbon::now()->addDay(3);
                $sub->save();
            // ----------------------

            // schedule ------------
                $schedule = new Schedule;
                $schedule->user_id = $user->id;

                if ($request->has('timezone')) {
                    $schedule->timezone = $request->timezone;
                }
              
                if ($request->has('anytime') && $request->anytime != '') {
                    $schedule->anytime = true;
                    $schedule->often = 6;
                    $schedule->start = '08:00';
                    $schedule->end = '22:00';
                } else {
                    if ($request->has('often')) {                       
                        $schedule->often = $request->often;
                    }
                    if ($request->has('start')) {
                        $schedule->start = $request->start;
                    }
                    if ($request->has('end')) {
                        $schedule->end = $request->end;
                    }
                }
                
                $schedule->save();
            // -------------------------

            // topics ---------------
                if ($request->has('topics') && $request->topics != '') {
                    $topics = Topic::whereIn('id', $request->topics)->pluck('id')->toArray();
                    $user->topics()->sync($topics);
                }
            // ----------------------

            // themes ------------
                $user->themes()->sync([1]);
            // -----------------------

            // categories ------------
                $user->categories()->sync([1]);
            // -----------------------

            return $user;
        });

        if ($user) {
            // generate token
            $token = $user->createToken('auth_token')->plainTextToken;

            // data
            $data = User::with('icon','schedule','topics','subscription','themes','categories')->find($user->id);

            // count user pool
            UserPool::dispatch($user->id)->onQueue(env('SUPERVISOR'));

            // response
            return response()->json([
                'status' => 'success',
                'token' => $token,
                'data' => $data
            ], 201); 
        } 
    }

    public function delete(Request $request)
    {
        $request->validate([
            'device_id' => 'required',
        ]);

        $user = User::where('device_id', $request->device_id)->first();
        if ($user) {
            $user->delete();

            return response()->json([
                'status' => 'success',
                'message' => 'user deleted'
            ], 200); 
        }

        return response()->json([
            'status' => 'failed',
            'message' => 'device not register'
        ], 400); 
    }

    // public function categoryResult(Request $request)
    // {
    //     $request->validate([
    //         'impress_friends' => 'required',
    //         'impress_business' => 'required',
    //         'impress_children' => 'required',
    //         'impress_members' => 'required',
    //     ]);

    //     // response
    //     return response()->json([
    //         'status' => 'success',
    //         'data' => null
    //     ], 201); 
    // }
}
