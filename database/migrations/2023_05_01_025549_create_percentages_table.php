<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePercentagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('percentages', function (Blueprint $table) {
            $table->id();
            $table->tinyInteger('type')->default(1);
            $table->string('flag')->nullable();
            $table->tinyInteger('value')->nullable();
            $table->timestamps();
        });

        DB::table('percentages')->insert([
            ["flag" => "impress_friends", "value" => 25, "created_at" => now()],
            ["flag" => "impress_business", "value" => 25, "created_at" => now()],
            ["flag" => "impress_children", "value" => 25, "created_at" => now()],
            ["flag" => "impress_members", "value" => 25, "created_at" => now()],
        ]);

        Schema::create('percentage_categories', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('percentage_id')->nullable();
            $table->bigInteger('category_id')->nullable();
            $table->float('yes')->nullable();
            $table->float('no')->nullable();
            $table->timestamps();
        });

        DB::table('percentage_categories')->insert([
            ["percentage_id" => 1, "category_id" => 3, "yes" => 4.17, "no" => 2.50, "created_at" => now()],
            ["percentage_id" => 1, "category_id" => 4, "yes" => 0, "no" => 2.50, "created_at" => now()],
            ["percentage_id" => 1, "category_id" => 5, "yes" => 4.17, "no" => 2.50, "created_at" => now()],
            ["percentage_id" => 1, "category_id" => 6, "yes" => 0, "no" => 2.50, "created_at" => now()],
            ["percentage_id" => 1, "category_id" => 7, "yes" => 0, "no" => 2.50, "created_at" => now()],
            ["percentage_id" => 1, "category_id" => 8, "yes" => 4.17, "no" => 2.50, "created_at" => now()],
            ["percentage_id" => 1, "category_id" => 9, "yes" => 4.17, "no" => 2.50, "created_at" => now()],
            ["percentage_id" => 1, "category_id" => 10, "yes" => 0, "no" => 2.50, "created_at" => now()],
            ["percentage_id" => 1, "category_id" => 11, "yes" => 4.17, "no" => 2.50, "created_at" => now()],
            ["percentage_id" => 1, "category_id" => 12, "yes" => 4.17, "no" => 2.50, "created_at" => now()],

            ["percentage_id" => 2, "category_id" => 3, "yes" => 0, "no" => 2.50, "created_at" => now()],
            ["percentage_id" => 2, "category_id" => 4, "yes" => 3.13, "no" => 2.50, "created_at" => now()],
            ["percentage_id" => 2, "category_id" => 5, "yes" => 3.13, "no" => 2.50, "created_at" => now()],
            ["percentage_id" => 2, "category_id" => 6, "yes" => 3.13, "no" => 2.50, "created_at" => now()],
            ["percentage_id" => 2, "category_id" => 7, "yes" => 3.13, "no" => 2.50, "created_at" => now()],
            ["percentage_id" => 2, "category_id" => 8, "yes" => 0, "no" => 2.50, "created_at" => now()],
            ["percentage_id" => 2, "category_id" => 9, "yes" => 3.13, "no" => 2.50, "created_at" => now()],
            ["percentage_id" => 2, "category_id" => 10, "yes" => 3.13, "no" => 2.50, "created_at" => now()],
            ["percentage_id" => 2, "category_id" => 11, "yes" => 3.13, "no" => 2.50, "created_at" => now()],
            ["percentage_id" => 2, "category_id" => 12, "yes" => 3.13, "no" => 2.50, "created_at" => now()],

            ["percentage_id" => 3, "category_id" => 3, "yes" => 3.57, "no" => 2.50, "created_at" => now()],
            ["percentage_id" => 3, "category_id" => 4, "yes" => 0, "no" => 2.50, "created_at" => now()],
            ["percentage_id" => 3, "category_id" => 5, "yes" => 3.57, "no" => 2.50, "created_at" => now()],
            ["percentage_id" => 3, "category_id" => 6, "yes" => 3.57, "no" => 2.50, "created_at" => now()],
            ["percentage_id" => 3, "category_id" => 7, "yes" => 0, "no" => 2.50, "created_at" => now()],
            ["percentage_id" => 3, "category_id" => 8, "yes" => 3.57, "no" => 2.50, "created_at" => now()],
            ["percentage_id" => 3, "category_id" => 9, "yes" => 3.57, "no" => 2.50, "created_at" => now()],
            ["percentage_id" => 3, "category_id" => 10, "yes" => 0, "no" => 2.50, "created_at" => now()],
            ["percentage_id" => 3, "category_id" => 11, "yes" => 3.57, "no" => 2.50, "created_at" => now()],
            ["percentage_id" => 3, "category_id" => 12, "yes" => 3.57, "no" => 2.50, "created_at" => now()],

            ["percentage_id" => 4, "category_id" => 3, "yes" => 6.25, "no" => 2.50, "created_at" => now()],
            ["percentage_id" => 4, "category_id" => 4, "yes" => 0, "no" => 2.50, "created_at" => now()],
            ["percentage_id" => 4, "category_id" => 5, "yes" => 6.25, "no" => 2.50, "created_at" => now()],
            ["percentage_id" => 4, "category_id" => 6, "yes" => 0, "no" => 2.50, "created_at" => now()],
            ["percentage_id" => 4, "category_id" => 7, "yes" => 0, "no" => 2.50, "created_at" => now()],
            ["percentage_id" => 4, "category_id" => 8, "yes" => 6.25, "no" => 2.50, "created_at" => now()],
            ["percentage_id" => 4, "category_id" => 9, "yes" => 0, "no" => 2.50, "created_at" => now()],
            ["percentage_id" => 4, "category_id" => 10, "yes" => 0, "no" => 2.50, "created_at" => now()],
            ["percentage_id" => 4, "category_id" => 11, "yes" => 6.25, "no" => 2.50, "created_at" => now()],
            ["percentage_id" => 4, "category_id" => 12, "yes" => 0, "no" => 2.50, "created_at" => now()],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('percentages');
        Schema::dropIfExists('category_percentages');
    }
}
