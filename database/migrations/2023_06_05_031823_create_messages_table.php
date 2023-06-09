<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMessagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('messages', function (Blueprint $table) {
            $table->id();
            $table->tinyInteger('type')->default(1);
            $table->integer('order')->nullable();
            $table->string('name')->nullable();
            $table->integer('time')->nullable();
            $table->string('sendout_time')->nullable();
            $table->string('offer')->nullable();
            $table->text('push_text')->nullable();
            $table->string('paywall')->nullable();
            $table->tinyInteger('status')->default(2);
            $table->timestamps();
        });

        Schema::create('user_messages', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id')->nullable();
            $table->bigInteger('message_id')->nullable();
            $table->dateTime('time')->nullable();
            $table->boolean('has_notif')->default(false);
            $table->timestamps();
        });

        DB::table('messages')->insert([
            [
                "order" => 1,
                "name" => "Push 1",
                "time" => 10,
                "sendout_time" => "10 mins after seeing the paywall for the first time",
                "offer" => "-50% (USD10)",
                "push_text" => "🏆 Keep pushing towards your learning goal, [name]! Get 50% off on the McSmart Premium Plan and accelerate your journey towards being a Knowledge King - get the mega deal now! 🔥",
                "created_at" => now()
            ],
            [
                "order" => 2,
                "name" => "Push 2",
                "time" => 250,
                "sendout_time" => "4 h after push 1",
                "offer" => "-50% (USD10)",
                "push_text" => "Unlimited Facts, Themes and Categories with no advertising! Get McSmart Premium now with 50% discount! 😎",
                "created_at" => now()
            ],
            [
                "order" => 3,
                "name" => "Push 3",
                "time" => 1450,
                "sendout_time" => "24h after push 1",
                "offer" => "-75% (USD5)",
                "push_text" => "🎉 Congratulations, [name]! You're on the right track to achieve your learning goals. Get 75% off on the McSmart Premium Plan now and accelerate your progress. Get the mega deal now! 💥",
                "created_at" => now()
            ],
            [
                "order" => 4,
                "name" => "Push 4",
                "time" => 1690,
                "sendout_time" => "24h after push 2",
                "offer" => "-75% (USD5)",
                "push_text" => "⚡️Hurry up! Get your 75% discount offer for McSmart Premium now - just for you! 😍",
                "created_at" => now()
            ],
            [
                "order" => 5,
                "name" => "Push 5",
                "time" => 2890,
                "sendout_time" => "24h after push 3",
                "offer" => "-75% (USD5)",
                "push_text" => "💪 Don't give up on your progress, [name]! Get 75% off on the McSmart Premium Plan and unlock your full potential. Get the mega deal now! 🚀",
                "created_at" => now()
            ],
            [
                "order" => 6,
                "name" => "Push 6",
                "time" => 3130,
                "sendout_time" => "24h after push 4",
                "offer" => "-75% (USD5)",
                "push_text" => "⚡️Still not sure about McSmart Premium? Get 75% discount only now and unlock the full potential! 🔥",
                "created_at" => now()
            ],
            [
                "order" => 7,
                "name" => "Push 7",
                "time" => 4330,
                "sendout_time" => "24h after push 5",
                "offer" => "-75% (USD5)",
                "push_text" => "🚀 Don't let anything stop you, [name]! Get 75% off on the McSmart Premium Plan and achieve your learning goals faster. Get the mega deal now! 💯",
                "created_at" => now()
            ],
            [
                "order" => 8,
                "name" => "Push 8",
                "time" => 4570,
                "sendout_time" => "24h after push 6",
                "offer" => "-75% (USD5)",
                "push_text" => "🎉 Get 75% discount on McSmart Premium now - be quick! 💥",
                "created_at" => now()
            ],
            [
                "order" => 9,
                "name" => "Push 9",
                "time" => 5770,
                "sendout_time" => "24h after push 7",
                "offer" => "-75% (USD5)",
                "push_text" => "🏋️‍♀️ Don't let anything hold you back, [name]! Get 75% off on the McSmart Premium Plan and accelerate your journey. Get the mega deal now! 🔥",
                "created_at" => now()
            ],
            [
                "order" => 10,
                "name" => "Push 10",
                "time" => 6010,
                "sendout_time" => "24h after push 8",
                "offer" => "-75% (USD5)",
                "push_text" => "😍 Enjoying McSmart? Upgrade to the Full Ad-Free version with unlimited Facts, Themes, Categories and more - now with 75% off! 🚀",
                "created_at" => now()
            ],
            [
                "order" => 11,
                "name" => "Push 11",
                "time" => 7210,
                "sendout_time" => "24h after push 9",
                "offer" => "-75% (USD5)",
                "push_text" => "🌟 Keep shining, [name]! Get 75% off on the McSmart Premium Plan and make your way towards your learning goals. Get the mega deal now! 🎉",
                "created_at" => now()
            ],
            [
                "order" => 12,
                "name" => "Push 12",
                "time" => 7450,
                "sendout_time" => "24h after push 10",
                "offer" => "-75% (USD5)",
                "push_text" => "💪 Great progress! Achieve your Goals even quicker with McSmart Premium - only now with 75% discount! 😍",
                "created_at" => now()
            ],
            [
                "order" => 13,
                "name" => "Push 13",
                "time" => 8650,
                "sendout_time" => "24h after push 11",
                "offer" => "-75% (USD5)",
                "push_text" => "🏆 Keep pushing towards your learning goal, [name]! Get 75% off on the McSmart Premium Plan and accelerate your journey towards being a Knowledge King - get the mega deal now! 🔥",
                "created_at" => now()
            ],
            [
                "order" => 14,
                "name" => "Push 14",
                "time" => 8890,
                "sendout_time" => "24h after push 12",
                "offer" => "-75% (USD5)",
                "push_text" => "😎 Unlimited Facts, Themes and Categories with no advertising! Get McSmart Premium now with 75% discount! 🔥",
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
        Schema::dropIfExists('messages','user_messages');
    }
}
