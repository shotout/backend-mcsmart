<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Models\Topic;
use Illuminate\Http\Request;

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
}
