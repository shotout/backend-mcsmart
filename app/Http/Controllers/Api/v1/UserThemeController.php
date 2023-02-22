<?php

namespace App\Http\Controllers\Api\v1;

use App\Models\User;
use App\Models\Theme;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserThemeController extends Controller
{
    public function update(Request $request)
    {
        if ($request->has('themes') && $request->themes != '') {
            $themes = Theme::whereIn('id', $request->themes)->pluck('id')->toArray();

            $user = User::find(auth('sanctum')->user()->id);
            $user->themes()->sync($themes);

            $data = User::with('themes')->find(auth('sanctum')->user()->id);

            return response()->json([
                'status' => 'success',
                'data' => $data
            ], 200);
        }
    }
}