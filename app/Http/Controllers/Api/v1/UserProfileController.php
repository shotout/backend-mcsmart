<?php

namespace App\Http\Controllers\Api\v1;

use App\Models\User;
use App\Models\Schedule;
use App\Jobs\GenerateTimer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserProfileController extends Controller
{
    public function show()
    {
        $user = User::with('schedule','topics','themes', 'categories','subscription')
            ->find(auth('sanctum')->user()->id);

        return response()->json([
            'status' => 'success',
            'data' => $user
        ], 200);
    }

    public function update(Request $request)
    {
        $user = User::find(auth('sanctum')->user()->id);

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

        return response()->json([
            'status' => 'success',
            'data' => $user
        ], 200);
    }
}