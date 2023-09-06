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
                "name" => "Theme 43",
                "is_free" => false,
                "font_family" => "Lobster",
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
                "name" => "Theme 44",
                "is_free" => false,
                "font_family" => "Anton",
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
                "name" => "Theme 45",
                "is_free" => false,
                "font_family" => "Caveat-Bold",
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
                "name" => "Theme 46",
                "is_free" => false,
                "font_family" => "CarterOne-Regular",
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
                "name" => "Theme 47",
                "is_free" => false,
                "font_family" => "Anton",
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
                "name" => "Theme 48",
                "is_free" => false,
                "font_family" => "Hoefler Text Black",
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
                "name" => "Theme 49",
                "is_free" => false,
                "font_family" => "FjallaOne-Regular",
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
                "name" => "Theme 50",
                "is_free" => false,
                "font_family" => "Tinos",
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
                "name" => "Theme 51",
                "is_free" => false,
                "font_family" => "Prata",
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
                "name" => "Theme 52",
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
                "owner_id" => 43,
                "type" => "theme",
                "name" => "43.png",
                "url" => "/assets/images/themes/bg/43.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 44,
                "type" => "theme",
                "name" => "44.png",
                "url" => "/assets/images/themes/bg/44.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 45,
                "type" => "theme",
                "name" => "45.png",
                "url" => "/assets/images/themes/bg/45.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 46,
                "type" => "theme",
                "name" => "46.png",
                "url" => "/assets/images/themes/bg/46.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 47,
                "type" => "theme",
                "name" => "47.png",
                "url" => "/assets/images/themes/bg/47.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 48,
                "type" => "theme",
                "name" => "48.png",
                "url" => "/assets/images/themes/bg/48.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 49,
                "type" => "theme",
                "name" => "49.png",
                "url" => "/assets/images/themes/bg/49.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 50,
                "type" => "theme",
                "name" => "50.png",
                "url" => "/assets/images/themes/bg/50.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 51,
                "type" => "theme",
                "name" => "51.png",
                "url" => "/assets/images/themes/bg/51.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 52,
                "type" => "theme",
                "name" => "52.png",
                "url" => "/assets/images/themes/bg/52.png",
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
