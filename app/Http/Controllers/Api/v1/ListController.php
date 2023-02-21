<?php

namespace App\Http\Controllers\Api\v1;

use App\Models\Theme;
use App\Models\Topic;
use App\Models\Category;
use App\Models\UserCategory;
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

        $categories = $query->get();

        $data = array(
            "category" => $categories,
            "alternative" => null
        );

        // alternative category
        if ($request->has('search') && $request->input('search') != '') {
            if (!count($categories)) {
                if (auth('sanctum')->check()) {
                    $myCategory = UserCategory::where('user_id', auth('sanctum')->user()->id)
                        ->pluck('category_id')
                        ->toArray();

                    $data['alternative'] = Category::with('icon')
                        ->whereNotIn('id', $myCategory)
                        ->where('status', 2)
                        ->get();
                }
            }
        }

        return response()->json([
            'status' => 'success',
            'data' => $data
        ], 200);
    }
}
