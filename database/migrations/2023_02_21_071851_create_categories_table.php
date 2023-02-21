<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->integer('group_id')->nullable();
            $table->string('name')->nullable();
            $table->boolean('is_free')->default(false);
            $table->tinyInteger('status')->default(2);
            $table->timestamps();
        });

        Schema::create('user_category', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id')->nullable();
            $table->integer('category_id')->nullable();
            $table->timestamps();
        });

        DB::table('categories')->insert([
            // basic
            ["group_id" => null, "name" => "General", "is_free" => true, "created_at" => now()],
            ["group_id" => null, "name" => "My Favorites", "is_free" => true, "created_at" => now()],

            ["group_id" => null, "name" => "Celebrities", "is_free" => false, "created_at" => now()],
            ["group_id" => null, "name" => "Economy & Business", "is_free" => false, "created_at" => now()],
            ["group_id" => null, "name" => "Food & Drink", "is_free" => false, "created_at" => now()],
            ["group_id" => null, "name" => "Geography & Travel", "is_free" => false, "created_at" => now()],
            ["group_id" => null, "name" => "History & Politics", "is_free" => false, "created_at" => now()],
            ["group_id" => null, "name" => "Music & Entertainment", "is_free" => false, "created_at" => now()],
            ["group_id" => null, "name" => "Nature", "is_free" => false, "created_at" => now()],
            ["group_id" => null, "name" => "Science & Technology", "is_free" => false, "created_at" => now()],
            ["group_id" => null, "name" => "Sports", "is_free" => false, "created_at" => now()],
            ["group_id" => null, "name" => "Wonder of the world", "is_free" => false, "created_at" => now()],
        ]);

        DB::table('media')->insert([
            [
                "owner_id" => 1,
                "type" => "category",
                "name" => "general.png",
                "url" => "/assets/icons/categories/general.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 2,
                "type" => "category",
                "name" => "favorite.png",
                "url" => "/assets/icons/categories/favorite.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 3,
                "type" => "category",
                "name" => "celebrities.png",
                "url" => "/assets/icons/categories/celebrities.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 4,
                "type" => "category",
                "name" => "economy_&_business.png",
                "url" => "/assets/icons/categories/economy_&_business.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 5,
                "type" => "category",
                "name" => "food_&_drink.png",
                "url" => "/assets/icons/categories/food_&_drink.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 6,
                "type" => "category",
                "name" => "geography_&_travel.png",
                "url" => "/assets/icons/categories/geography_&_travel.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 7,
                "type" => "category",
                "name" => "history_&_politics.png",
                "url" => "/assets/icons/categories/history_&_politics.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 8,
                "type" => "category",
                "name" => "music_&_entertainment.png",
                "url" => "/assets/icons/categories/music_&_entertainment.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 9,
                "type" => "category",
                "name" => "nature.png",
                "url" => "/assets/icons/categories/nature.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 10,
                "type" => "category",
                "name" => "science_&_technology.png",
                "url" => "/assets/icons/categories/science_&_technology.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 11,
                "type" => "category",
                "name" => "sports.png",
                "url" => "/assets/icons/categories/sports.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 12,
                "type" => "category",
                "name" => "wonder.png",
                "url" => "/assets/icons/categories/wonder.png",
                "created_at" => now()
            ],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('categories','user_category');
    }
};
