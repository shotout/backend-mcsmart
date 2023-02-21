<?php

namespace App\Http\Controllers\Api\v1;

use App\Models\Theme;
use App\Models\Topic;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ListController extends Controller
{
    public function topics()
    {
        $data = Topic::where('status', 2)->get();

        return response()->json([
            'status' => 'success',
            'data' => $data
        ], 200);
    }

    public function themes()
    {
        $data = Theme::with('background')->where('status', 2)->get();
        // $data = Group::with('themes')->where('flag', 2)->where('status', 2)->get();

        return response()->json([
            'status' => 'success',
            'data' => $data
        ], 200);
    }

    public function categories(Request $request)
    {
        $query = Category::with('icon')->where('status', 2);

        if ($request->has('search') && $request->input('search') != '') {
            $query->where(function($q) use($request) {
                $q->where('name', 'like', '%' . $request->input('search') . '%');
            });
        }

        $data = $query->get();

        return response()->json([
            'status' => 'success',
            'data' => $data
        ], 200);
    }
}
