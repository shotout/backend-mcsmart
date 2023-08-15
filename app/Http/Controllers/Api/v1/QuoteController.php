<?php

namespace App\Http\Controllers\Api\v1;

use Carbon\Carbon;
use App\Models\User;
use App\Models\Quote;
use App\Models\MyQuote;
use App\Models\PastQuote;
use App\Models\UserQuote;
use App\Models\UserRepeat;
use App\Models\Subscription;
use App\Models\UserCategory;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

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


        // here ---------
        // check user category
        $isGeneral = UserCategory::where('user_id', auth('sanctum')->user()->id)
            ->where('category_id', 1)
            ->exists();
        $isFavorite = UserCategory::where('user_id', auth('sanctum')->user()->id)
            ->where('category_id', 2)
            ->exists();
        $userCategories = UserCategory::where('user_id', auth('sanctum')->user()->id)
            ->whereNotIn('category_id', [1,2])
            ->pluck('category_id')
            ->toArray();
        $userFavorites = UserQuote::where('user_id', auth('sanctum')->user()->id)
            ->where('type', 1)
            ->pluck('quote_id')
            ->toArray();
        $pastQuotes = PastQuote::where('user_id', auth('sanctum')->user()->id)
            ->pluck('quote_id')
            ->toArray();
        $myQuotes = MyQuote::where('user_id', auth('sanctum')->user()->id)->first();

        if ($isGeneral) {
            if ($isFavorite && count($userFavorites)) {
                $pastQuotes = PastQuote::where('user_id', auth('sanctum')->user()->id)
                    ->whereNotIn('quote_id', $userFavorites)
                    ->pluck('quote_id')
                    ->toArray();

                if ($myQuotes) {
                    // order by
                    if (count($userCategories)) {
                        $query = Quote::with('like','repeat')
                            ->whereIn('id', $myQuotes->quotes)
                            ->whereNotIn('id', $pastQuotes)
                            ->whereIn('category_id', $userCategories)
                            ->where('status', 2)
                            ->orderBy($column, $dir);
                    } else {
                        $query = Quote::with('like','repeat')
                            ->whereIn('id', $myQuotes->quotes)
                            ->whereNotIn('id', $pastQuotes)
                            ->where('status', 2)
                            ->orderBy($column, $dir);
                    }
                    
                    // pagination
                    $data = $query->paginate($length);

                    // check if past quotes full
                    if ($data->total() == 0) {
                        if (count($userCategories)) {
                            $query = Quote::with('like','repeat')
                                ->whereIn('id', $myQuotes->quotes)
                                ->whereIn('category_id', $userCategories)
                                ->where('status', 2)
                                ->orderBy($column, $dir);
                        } else {
                            $query = Quote::with('like','repeat')
                                ->whereIn('id', $myQuotes->quotes)
                                ->where('status', 2)
                                ->orderBy($column, $dir);
                        } 

                        $data = $query->paginate($length);
                    }
                } else {
                    // order by
                    if (count($userCategories)) {
                        $query = Quote::with('like','repeat')
                            ->whereNotIn('id', $pastQuotes)
                            ->whereIn('category_id', $userCategories)
                            ->where('status', 2)
                            ->orderBy($column, $dir);
                    } else {
                        $query = Quote::with('like','repeat')
                            ->whereNotIn('id', $pastQuotes)
                            ->where('status', 2)
                            ->orderBy($column, $dir);
                    }

                    // pagination
                    $data = $query->paginate($length);

                    // check if past quotes full
                    if ($data->total() == 0) {
                        if (count($userCategories)) {
                            $query = Quote::with('like','repeat')
                                ->whereIn('category_id', $userCategories)
                                ->where('status', 2)
                                ->orderBy($column, $dir);
                        } else {
                            $query = Quote::with('like','repeat')
                                ->where('status', 2)
                                ->orderBy($column, $dir);
                        }
                        
                        $data = $query->paginate($length);
                    }
                }
            } else {
                if ($myQuotes) {
                    // order by
                    if (count($userCategories)) {
                        $query = Quote::with('like','repeat')
                            ->whereIn('id', $myQuotes->quotes)
                            ->whereNotIn('id', $pastQuotes)
                            ->whereIn('category_id', $userCategories)
                            ->where('status', 2)
                            ->orderBy($column, $dir);
                    } else {
                        $query = Quote::with('like','repeat')
                            ->whereIn('id', $myQuotes->quotes)
                            ->whereNotIn('id', $pastQuotes)
                            ->where('status', 2)
                            ->orderBy($column, $dir);
                    }
                    
                    // pagination
                    $data = $query->paginate($length);

                    // check if past quotes full
                    if ($data->total() == 0) {
                        if (count($userCategories)) {
                            $query = Quote::with('like','repeat')
                                ->whereIn('id', $myQuotes->quotes)
                                ->whereIn('category_id', $userCategories)
                                ->where('status', 2)
                                ->orderBy($column, $dir);
                        } else {
                            $query = Quote::with('like','repeat')
                                ->whereIn('id', $myQuotes->quotes)
                                ->where('status', 2)
                                ->orderBy($column, $dir);
                        } 

                        $data = $query->paginate($length);
                    }
                } else {
                    // order by
                    if (count($userCategories)) {
                        $query = Quote::with('like','repeat')
                            ->whereNotIn('id', $pastQuotes)
                            ->whereIn('category_id', $userCategories)
                            ->where('status', 2)
                            ->orderBy($column, $dir);
                    } else {
                        $query = Quote::with('like','repeat')
                            ->whereNotIn('id', $pastQuotes)
                            ->where('status', 2)
                            ->orderBy($column, $dir);
                    }

                    // pagination
                    $data = $query->paginate($length);

                    // check if past quotes full
                    if ($data->total() == 0) {
                        if (count($userCategories)) {
                            $query = Quote::with('like','repeat')
                                ->whereIn('category_id', $userCategories)
                                ->where('status', 2)
                                ->orderBy($column, $dir);
                        } else {
                            $query = Quote::with('like','repeat')
                                ->where('status', 2)->orderBy($column, $dir);
                        }
                        
                        $data = $query->paginate($length);
                    }
                }
            }
        } else {
            if ($isFavorite && count($userFavorites)) {
                $pastQuotes = PastQuote::where('user_id', auth('sanctum')->user()->id)
                    ->whereNotIn('quote_id', $userFavorites)
                    ->pluck('quote_id')
                    ->toArray();

                // order by
                if (count($userCategories)) {
                    $query = Quote::with('like','repeat')
                        ->whereNotIn('id', $pastQuotes)
                        ->whereIn('category_id', $userCategories)
                        ->where('status', 2)
                        ->orderBy($column, $dir);
                } else {
                    $query = Quote::with('like','repeat')
                        ->whereNotIn('id', $pastQuotes)
                        ->where('status', 2)
                        ->orderBy($column, $dir);
                }
                

                // pagination
                $data = $query->paginate($length);

                // check if past quotes full
                if ($data->total() == 0) {
                    if (count($userCategories)) {
                        $query = Quote::with('like','repeat')
                            ->whereIn('category_id', $userCategories)
                            ->where('status', 2)
                            ->orderBy($column, $dir);
                    } else {
                        $query = Quote::with('like','repeat')
                            ->where('status', 2)
                            ->orderBy($column, $dir);
                    }
                    
                    $data = $query->paginate($length);
                }
            } else {
                // order by
                if (count($userCategories)) {
                    $query = Quote::with('like','repeat')
                        ->whereNotIn('id', $pastQuotes)
                        ->whereIn('category_id', $userCategories)
                        ->where('status', 2)
                        ->orderBy($column, $dir);
                } else {
                    $query = Quote::with('like','repeat')
                        ->whereNotIn('id', $pastQuotes)
                        ->where('status', 2)
                        ->orderBy($column, $dir);
                }
                
                // pagination
                $data = $query->paginate($length);

                // check if past quotes full
                if ($data->total() == 0) {
                    if (count($userCategories)) {
                        $query = Quote::with('like','repeat')
                            ->whereIn('category_id', $userCategories)
                            ->where('status', 2)
                            ->orderBy($column, $dir);
                    } else {
                        $query = Quote::with('like','repeat')
                            ->where('status', 2)
                            ->orderBy($column, $dir);
                    }
                    
                    $data = $query->paginate($length);
                }
            }
        }
        // ------------


        // user past quote
        // $up = PastQuote::where('user_id', auth('sanctum')->user()->id)
        //     ->pluck('quote_id')
        //     ->toArray();

        // $query = Quote::with('like','repeat')
        //     ->whereNotIn('id', $up)
        //     ->where('status', 2)
        //     ->orderBy($column, $dir);

        // my quote
        // $myQuotes = MyQuote::where('user_id', auth('sanctum')->user()->id)->first();
        // if ($myQuotes) {
        //     $query->whereIn('id', $myQuotes->quotes);
        // }
                    
        // pagination
        // $data = $query->paginate($length);

        // add repeat quote ---------------
        // $user = User::find(auth('sanctum')->user()->id);
        // $now = now()->setTimezone($user->schedule->timezone)->format('Y-m-d H:i:s');
        // $ur = UserRepeat::where('user_id', auth('sanctum')->user()->id)
        //     ->whereDate('time', '<=', $now)
        //     ->orderBy('time','asc')
        //     ->pluck('quote_id')
        //     ->toArray();
        // $quoteRepeat = Quote::with('like','repeat')->whereIn('id', $ur)->get();
        // foreach ($quoteRepeat as $item) {
        //     $data->prepend($item);
        // }

        // $next = UserRepeat::whereIn('quote_id', $ur)->get();
        // foreach ($next as $item) {
        //     $time = Carbon::createFromFormat('Y-m-d H:i:s', $item->time)->addMinute(1440);
        //     $item->time = $time;
        //     $item->update();
        // }
        // ------------------
        
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

    public function filter(Request $request)
    {
        if ($request->has('category') && $request->category != '') {
            $data = Quote::where('show_onboarding', 1)
                ->where('category_id', $request->category)
                ->get();
        } else {
            $data = Quote::where('show_onboarding', 1)->get();
        }

        return response()->json([
            'status' => 'success',
            'data' => $data
        ], 200);
    }
}