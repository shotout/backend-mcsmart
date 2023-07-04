<?php

namespace App\Http\Controllers\Api\v1;

use App\Models\User;
use App\Models\Quote;
use App\Models\UserRepeat;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserRepeatController extends Controller
{
    public function index(Request $request)
    {
        // limit
        if ($request->has('length') && $request->input('length') != '') {
            $length = $request->input('length');
        } else {
            $length = 10;
        }

        // order by field
        if ($request->has('column') && $request->input('column') != '') {
            $column = $request->input('column');
        } else {
            $column = 'order';
        }

        // order direction
        if ($request->has('dir') && $request->input('dir') != '') {
            $dir = $request->input('dir');
        } else {
            $dir = 'asc';
        }

        $ur = UserRepeat::where('user_id', auth('sanctum')->user()->id)
            // ->orderBy('id','desc')
            ->pluck('quote_id')
            ->toArray();

        // order by
        $query = Quote::with('like')
            ->whereIn('id', $ur)
            ->where('status', 2)
            ->orderBy($column, $dir);

        // search
        if ($request->has('search') && $request->input('search') != '') {
            $query->where(function($q) use($request) {
                $q->where('title', 'like', '%' . $request->input('search') . '%');
            });
        }

        // pagination
        $data = $query->paginate($length);

        // retun response
        return response()->json([
            'status' => 'success',
            'data' => $data
        ], 200);
    }

    public function store($id)
    {
        $quote = Quote::find($id);
        if (!$quote) {
            return response()->json([
                'status' => 'failed',
                'message' => 'data not found'
            ], 404);
        }

        $userRepeat = UserRepeat::where('user_id', auth('sanctum')->user()->id)
            ->where('quote_id', $id)
            ->first();
        if (!$userRepeat) {
            $userRepeat = new UserRepeat;
        }

        $user = User::with('schedule')->find(auth('sanctum')->user()->id);
        if (!$user) {
            return response()->json([
                'status' => 'failed',
                'message' => 'user not found'
            ], 404);
        }

        $time = now()->addMinute(1440)
            ->setTimezone($user->schedule->timezone)
            ->format('Y-m-d H:i:s');

        $userRepeat->user_id = auth('sanctum')->user()->id;
        $userRepeat->quote_id = $id;
        $userRepeat->time = $time;
        $userRepeat->save();

        return response()->json([
            'status' => 'success',
            'data' => $userRepeat
        ], 200);
    }

    public function destroy($id)
    {      
        $userRepeat = UserRepeat::where('user_id', auth('sanctum')->user()->id)
            ->where('quote_id', $id)
            ->first();

        if (!$userRepeat) {
            return response()->json([
                'status' => 'failed',
                'message' => 'data not found'
            ], 404);
        }

        $userRepeat->delete();

        return response()->json([
            'status' => 'success',
            'data' => $userRepeat
        ], 200);
    }
}