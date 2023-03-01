<?php

namespace App\Http\Controllers\Api\v1;

use App\Models\Quote;
use App\Models\UserNotif;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserNotifController extends Controller
{
    public function index(Request $request)
    {
        if ($request->has('length') && $request->input('length') != '') {
            $length = $request->input('length');
        } else {
            $length = 1;
        }

        $notif = UserNotif::where('user_id', auth('sanctum')->user()->id)
            ->pluck('quote_id')
            ->toArray();

        $query = Quote::whereNotIn('id', $notif)->orderBy('order', 'asc');
        $data = $query->paginate($length);

        // adding flag has notif
        foreach ($data as $quote) {
            $un = new UserNotif;
            $un->user_id = auth('sanctum')->user()->id;
            $un->quote_id = $quote->id;
            $un->save();
        }

        // check if quotes empty
        if ($data->total() == 0) {
            UserNotif::where('user_id', auth('sanctum')->user()->id)->delete();
        }

        return response()->json([
            'status' => 'success',
            'data' => $data
        ], 200);
    }
}

    