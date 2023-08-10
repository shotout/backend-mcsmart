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
        DB::table('themes')->insert([
            [
                "group_id" => 1,
                "name" => "Theme 33",
                "is_free" => false,
                "font_family" => "Montserrat-SemiBold",
                "font_size" => 24,
                "line_height" => 38,
                "text_color" => "#000000",
                "text_shadow" => null,
                "text_shadow_offset" => null,
                "background_color" => null,
                "created_at" => now()
            ],
            [
                "group_id" => 2,
                "name" => "Theme 34",
                "is_free" => false,
                "font_family" => "Montserrat-SemiBold",
                "font_size" => 24,
                "line_height" => 38,
                "text_color" => "#F0CD96",
                "text_shadow" => null,
                "text_shadow_offset" => null,
                "background_color" => null,
                "created_at" => now()
            ],
            [
                "group_id" => 3,
                "name" => "Theme 35",
                "is_free" => false,
                "font_family" => "Menlo",
                "font_size" => 24,
                "line_height" => 34,
                "text_color" => "#FFFFFF",
                "text_shadow" => "rgba(0, 0, 0, 0.75)",
                "text_shadow_offset" => '{"width":1,"height":1}',
                "background_color" => null,
                "created_at" => now()
            ],
            [
                "group_id" => 3,
                "name" => "Theme 36",
                "is_free" => false,
                "font_family" => "Fondamento-Regular",
                "font_size" => 24,
                "line_height" => 34,
                "text_color" => "#FFFFFF",
                "text_shadow" => "rgba(0, 0, 0, 0.75)",
                "text_shadow_offset" => '{"width":1,"height":1}',
                "background_color" => null,
                "created_at" => now()
            ],
            [
                "group_id" => 4,
                "name" => "Theme 37",
                "is_free" => false,
                "font_family" => "DeliusSwashCaps-Regular",
                "font_size" => 24,
                "line_height" => 38,
                "text_color" => "#000000",
                "text_shadow" => null,
                "text_shadow_offset" => null,
                "background_color" => null,
                "created_at" => now()
            ],
            [
                "group_id" => 5,
                "name" => "Theme 38",
                "is_free" => false,
                "font_family" => "IbarraRealNova-Bold",
                "font_size" => 24,
                "line_height" => 34,
                "text_color" => "#FFFFFF",
                "text_shadow" => "rgba(0, 0, 0, 0.75)",
                "text_shadow_offset" => '{"width":1,"height":1}',
                "background_color" => null,
                "created_at" => now()
            ],
            [
                "group_id" => 5,
                "name" => "Theme 39",
                "is_free" => false,
                "font_family" => "PatuaOne-Regular",
                "font_size" => 24,
                "line_height" => 34,
                "text_color" => "#FFFFFF",
                "text_shadow" => "rgba(0, 0, 0, 0.75)",
                "text_shadow_offset" => '{"width":1,"height":1}',
                "background_color" => null,
                "created_at" => now()
            ],
            [
                "group_id" => 6,
                "name" => "Theme 40",
                "is_free" => false,
                "font_family" => "Fredoka One",
                "font_size" => 24,
                "line_height" => 38,
                "text_color" => "#FFD600",
                "text_shadow" => null,
                "text_shadow_offset" => null,
                "background_color" => null,
                "created_at" => now()
            ],
            [
                "group_id" => 6,
                "name" => "Theme 41",
                "is_free" => false,
                "font_family" => "Optima",
                "font_size" => 24,
                "line_height" => 34,
                "text_color" => "#FFFFFF",
                "text_shadow" => "rgba(0, 0, 0, 0.75)",
                "text_shadow_offset" => '{"width":1,"height":1}',
                "background_color" => null,
                "created_at" => now()
            ],
            [
                "group_id" => 7,
                "name" => "Theme 42",
                "is_free" => false,
                "font_family" => "Koulen-Regular",
                "font_size" => 24,
                "line_height" => 34,
                "text_color" => "#FFFFFF",
                "text_shadow" => "rgba(0, 0, 0, 0.75)",
                "text_shadow_offset" => '{"width":1,"height":1}',
                "background_color" => null,
                "created_at" => now()
            ],
        ]);

        DB::table('media')->insert([
            [
                "owner_id" => 33,
                "type" => "theme",
                "name" => "33.png",
                "url" => "/assets/images/themes/bg/33.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 34,
                "type" => "theme",
                "name" => "34.png",
                "url" => "/assets/images/themes/bg/34.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 35,
                "type" => "theme",
                "name" => "35.png",
                "url" => "/assets/images/themes/bg/35.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 36,
                "type" => "theme",
                "name" => "36.png",
                "url" => "/assets/images/themes/bg/36.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 37,
                "type" => "theme",
                "name" => "37.png",
                "url" => "/assets/images/themes/bg/37.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 38,
                "type" => "theme",
                "name" => "38.png",
                "url" => "/assets/images/themes/bg/38.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 39,
                "type" => "theme",
                "name" => "39.png",
                "url" => "/assets/images/themes/bg/39.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 40,
                "type" => "theme",
                "name" => "40.png",
                "url" => "/assets/images/themes/bg/40.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 41,
                "type" => "theme",
                "name" => "41.png",
                "url" => "/assets/images/themes/bg/41.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 42,
                "type" => "theme",
                "name" => "42.png",
                "url" => "/assets/images/themes/bg/42.png",
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
        Schema::table('themes', function (Blueprint $table) {
            //
        });
    }
};
