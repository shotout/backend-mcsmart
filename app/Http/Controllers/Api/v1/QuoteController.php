<?php

namespace App\Http\Controllers\Api\v1;

use App\Models\User;
use App\Models\Quote;
use App\Models\PastQuote;
use App\Models\UserRepeat;
use App\Models\Subscription;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Carbon\Carbon;

class QuoteController extends Controller
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

        // user past quote
        $up = PastQuote::where('user_id', auth('sanctum')->user()->id)
            ->pluck('quote_id')
            ->toArray();

        $query = Quote::with('like','repeat')
            ->whereNotIn('id', $up)
            ->where('status', 2)
            ->orderBy($column, $dir);
                    
        // pagination
        $data = $query->paginate($length);

        // add repeat quote
        $user = User::find(auth('sanctum')->user()->id);
        $now = now()->setTimezone($user->schedule->timezone)->format('Y-m-d H:i:s');
        $ur = UserRepeat::where('user_id', auth('sanctum')->user()->id)
            ->whereDate('time', '<=', $now)
            ->orderBy('time','asc')
            ->pluck('quote_id')
            ->toArray();
        $quoteRepeat = Quote::with('like','repeat')->whereIn('id', $ur)->get();
        foreach ($quoteRepeat as $item) {
            $data->prepend($item);
        }

        
        $next = UserRepeat::whereIn('quote_id', $ur)->get();
        foreach ($next as $item) {
            $time = Carbon::createFromFormat('Y-m-d H:i:s', $item->time)->addMinute(1440);
            $item->time = $time;
            $item->update();
        }
        
        // quote notif detail
        if ($request->has('notif') && $request->notif != '') {
            $quoteNotif = Quote::with('like','repeat')->find($request->notif);
            if ($quoteNotif) {
                $data[0] = $quoteNotif;
            }
        }

        // free 1 month
        $isFreeUser = Subscription::where('user_id', auth('sanctum')->user()->id)
            ->where('type', 1)
            ->where('status', 2)
            ->exists();
        $hasMonthFree = Subscription::where('user_id', auth('sanctum')->user()->id)
            ->where('type', 5)
            ->exists();
        if ($isFreeUser && $hasMonthFree) {
            $month_free = true;
        } else {
            $month_free = false;
        }

        // retun response
        return response()->json([
            'status' => 'success',
            'data' => $data,
            'flag' => (object) array(
                'month_free' => $month_free
            )
        ], 200);
    }

    public function share($id)
    {
        $quote = Quote::find($id);

        if (!$quote) {
            return response()->json([
                'status' => 'failed',
                'message' => 'data not found'
            ], 404);
        }

        $quote->count_share++;
        $quote->update();

        return response()->json([
            'status' => 'success',
            'data' => null
        ], 200);
    }
}