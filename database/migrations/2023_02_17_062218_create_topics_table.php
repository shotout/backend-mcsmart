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
        Schema::create('topics', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->float('percentage')->default(0);
            $table->tinyInteger('status')->default(2);
            $table->timestamps();
        });

        Schema::create('user_topic', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id')->nullable();
            $table->integer('topic_id')->nullable();
            $table->timestamps();
        });

        DB::table('topics')->insert([
            ["name" => "Celebrities", "created_at" => now()],
            ["name" => "Economy & Business", "created_at" => now()],
            ["name" => "Food & Drink", "created_at" => now()],
            ["name" => "Geography & Travel", "created_at" => now()],
            ["name" => "History & Politics", "created_at" => now()],
            ["name" => "Music & Entertainment", "created_at" => now()],
            ["name" => "Nature", "created_at" => now()],
            ["name" => "Science & Technology", "created_at" => now()],
            ["name" => "Sports", "created_at" => now()],
            ["name" => "Wonders of the World", "created_at" => now()],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('topics','user_topic');
    }
};
