<?php

namespace App\Http\Controllers\Api\v1;

use App\Models\Icon;
use App\Models\Link;
use App\Models\Group;
use App\Models\Theme;
use App\Models\Topic;
use App\Models\Category;
use App\Models\UserCategory;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ListController extends Controller
{
    public function icons()
    {
        $data = Icon::with('image')->where('status', 2)->get();

        return response()->json([
            'status' => 'success',
            'data' => $data
        ], 200);
    }
    
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
        // $data = Theme::with('background')->where('status', 2)->get();
        $data = Group::with('themes')->where('flag', 2)->where('status', 2)->get();

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

    public function links(Request $request)
    {
        // order by field
        if ($request->has('column') && $request->input('column') != '') {
            $column = $request->input('column');
        } else {
            $column = 'id';
        }

        // order direction
        if ($request->has('dir') && $request->input('dir') != '') {
            $dir = $request->input('dir');
        } else {
            $dir = 'desc';
        }

        $query = Link::with('icon')->where('status', 2)->orderBy($column, $dir);

        if ($request->has('flag') && $request->flag != '') {
            $query->where('flag', $request->flag);
        }

        if ($request->has('search') && $request->input('search') != '') {
            $query->where(function($q) use($request) {
                $q->where('title', 'like', '%' . $request->input('search') . '%');
            });
        }

        $data = $query->get();

        return response()->json([
            'status' => 'success',
            'data' => $data
        ], 200);
    }
}
