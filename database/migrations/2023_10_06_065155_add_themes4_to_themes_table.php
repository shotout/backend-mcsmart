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
                "name" => "Theme 53",
                "is_free" => false,
                "font_family" => "Sora",
                "font_size" => 24,
                "line_height" => 34,
                "text_color" => "#FFFFFF",
                "text_shadow" => "rgba(0, 0, 0, 0.75)",
                "text_shadow_offset" => '{"width":1,"height":1}',
                "background_color" => null,
                "created_at" => now()
            ],
            [
                "group_id" => 2,
                "name" => "Theme 54",
                "is_free" => false,
                "font_family" => "Sansation",
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
                "name" => "Theme 55",
                "is_free" => false,
                "font_family" => "Rosario",
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
                "name" => "Theme 56",
                "is_free" => false,
                "font_family" => "Merienda-Bold",
                "font_size" => 24,
                "line_height" => 38,
                "text_color" => "#000000",
                "text_shadow" => null,
                "text_shadow_offset" => null,
                "background_color" => null,
                "created_at" => now()
            ],
            [
                "group_id" => 3,
                "name" => "Theme 57",
                "is_free" => false,
                "font_family" => "Anton",
                "font_size" => 24,
                "line_height" => 38,
                "text_color" => "#FFD600",
                "text_shadow" => null,
                "text_shadow_offset" => null,
                "background_color" => null,
                "created_at" => now()
            ],
            [
                "group_id" => 4,
                "name" => "Theme 58",
                "is_free" => false,
                "font_family" => "PlayfairDisplay-Bold",
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
                "name" => "Theme 59",
                "is_free" => false,
                "font_family" => "Lato",
                "font_size" => 24,
                "line_height" => 38,
                "text_color" => "#0F2F02",
                "text_shadow" => null,
                "text_shadow_offset" => null,
                "background_color" => null,
                "created_at" => now()
            ],
            [
                "group_id" => 6,
                "name" => "Theme 60",
                "is_free" => false,
                "font_family" => "Montserrat-SemiBold",
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
                "name" => "Theme 61",
                "is_free" => false,
                "font_family" => "Bebas Neue",
                "font_size" => 24,
                "line_height" => 38,
                "text_color" => "#FFD600",
                "text_shadow" => null,
                "text_shadow_offset" => null,
                "background_color" => null,
                "created_at" => now()
            ],
            [
                "group_id" => 7,
                "name" => "Theme 62",
                "is_free" => false,
                "font_family" => "Lobster",
                "font_size" => 24,
                "line_height" => 38,
                "text_color" => "#1E2136",
                "text_shadow" => null,
                "text_shadow_offset" => null,
                "background_color" => null,
                "created_at" => now()
            ],
        ]);

        DB::table('media')->insert([
            [
                "owner_id" => 53,
                "type" => "theme",
                "name" => "53.png",
                "url" => "/assets/images/themes/bg/53.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 54,
                "type" => "theme",
                "name" => "54.png",
                "url" => "/assets/images/themes/bg/54.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 55,
                "type" => "theme",
                "name" => "55.png",
                "url" => "/assets/images/themes/bg/55.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 56,
                "type" => "theme",
                "name" => "56.png",
                "url" => "/assets/images/themes/bg/56.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 57,
                "type" => "theme",
                "name" => "57.png",
                "url" => "/assets/images/themes/bg/57.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 58,
                "type" => "theme",
                "name" => "58.png",
                "url" => "/assets/images/themes/bg/58.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 59,
                "type" => "theme",
                "name" => "59.png",
                "url" => "/assets/images/themes/bg/59.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 60,
                "type" => "theme",
                "name" => "60.png",
                "url" => "/assets/images/themes/bg/60.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 61,
                "type" => "theme",
                "name" => "61.png",
                "url" => "/assets/images/themes/bg/61.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 62,
                "type" => "theme",
                "name" => "62.png",
                "url" => "/assets/images/themes/bg/62.png",
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
