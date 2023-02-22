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
        Schema::create('quotes', function (Blueprint $table) {
            $table->id();
            $table->integer('order')->nullable();
            $table->integer('category_id')->nullable();
            $table->text('title')->nullable();
            $table->string('author')->nullable();
            $table->boolean('has_notif')->default(false);
            $table->integer('count_share')->default(0);
            $table->tinyInteger('status')->default(2);
            $table->timestamps();
        });

        Schema::create('user_quote', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id')->nullable();
            $table->integer('quote_id')->nullable();
            $table->tinyInteger('type')->nullable();
            $table->string('flag')->nullable();
            $table->timestamps();
        });

        DB::table('quotes')->insert([
            [
                "category_id" => 8,
                "title" => "The type of music you listen to affects the way you perceive the world.",
                "created_at" => now()
            ],
            [
                "category_id" => 7,
                "title" => "People who view TV crime shows consistently overestimate the frequency of crime in the world.",
                "created_at" => now()
            ],
            [
                "category_id" => 9,
                "title" => "The two most effective treatments for battling depression are exercise and spending time with pets.",
                "created_at" => now()
            ],
            [
                "category_id" => 9,
                "title" => "A chameleon’s tongue is twice the length of its body.",
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
        Schema::dropIfExists('quotes','user_quote');
    }
};
