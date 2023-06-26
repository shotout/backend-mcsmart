<?php

namespace App\Jobs;

use App\Models\Pool;
use App\Models\User;
use App\Models\Category;
use Illuminate\Bus\Queueable;
use App\Models\PercentageCategory;
use Illuminate\Support\Facades\Log;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Contracts\Queue\ShouldBeUnique;

class UserPool implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $user;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($id)
    {
        $this->user = User::with('topics')->find($id);
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $categories = Category::where('status', 2)->get();

        if (count($categories)) {
            foreach ($categories as $category) {
                $pool = new Pool;
                $pool->user_id = $this->user->id;
                $pool->category_id = $category->id;

                // impress_friends ------------
                if ($this->user->impress_friends) {
                    $pc = PercentageCategory::where('percentage_id', 1)
                        ->where('category_id', $category->id)
                        ->first();
                    if ($pc) {
                        $pool->impress_friends = $pc->yes;
                    }
                } else {
                    $pc = PercentageCategory::where('percentage_id', 1)
                        ->where('category_id', $category->id)
                        ->first();
                    if ($pc) {
                        $pool->impress_friends = $pc->no;
                    }
                }
                // -------------------------

                // impress_business ------------
                if ($this->user->impress_business) {
                    $pc = PercentageCategory::where('percentage_id', 2)
                        ->where('category_id', $category->id)
                        ->first();
                    if ($pc) {
                        $pool->impress_business = $pc->yes;
                    }
                } else {
                    $pc = PercentageCategory::where('percentage_id', 2)
                        ->where('category_id', $category->id)
                        ->first();
                    if ($pc) {
                        $pool->impress_business = $pc->no;
                    }
                }
                // -------------------------

                // impress_children ------------
                if ($this->user->impress_children) {
                    $pc = PercentageCategory::where('percentage_id', 3)
                        ->where('category_id', $category->id)
                        ->first();
                    if ($pc) {
                        $pool->impress_children = $pc->yes;
                    }
                } else {
                    $pc = PercentageCategory::where('percentage_id', 3)
                        ->where('category_id', $category->id)
                        ->first();
                    if ($pc) {
                        $pool->impress_children = $pc->no;
                    }
                }
                // -------------------------

                // impress_members ------------
                if ($this->user->impress_members) {
                    $pc = PercentageCategory::where('percentage_id', 4)
                        ->where('category_id', $category->id)
                        ->first();
                    if ($pc) {
                        $pool->impress_members = $pc->yes;
                    }
                } else {
                    $pc = PercentageCategory::where('percentage_id', 4)
                        ->where('category_id', $category->id)
                        ->first();
                    if ($pc) {
                        $pool->impress_members = $pc->no;
                    }
                }
                // -------------------------

                $pool->save();
                $pool->total = $pool->impress_friends + $pool->impress_business + $pool->impress_children + $pool->impress_members;
                $pool->update();
            }
        }

        UserPoolQuote::dispatch($this->user->id)->onQueue(env('SUPERVISOR'));
        Log::info('Job UserPool Success ...');
    }
}
