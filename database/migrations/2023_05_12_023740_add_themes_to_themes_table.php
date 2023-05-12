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
                "name" => "Theme 9",
                "is_free" => false,
                "font_family" => "Palatino",
                "font_size" => 24,
                "line_height" => 38,
                "text_color" => "#F0CD96",
                "text_shadow" => null,
                "text_shadow_offset" => null,
                "background_color" => null,
                "created_at" => now()
            ],
            [
                "group_id" => 1,
                "name" => "Theme 10",
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
                "group_id" => 2,
                "name" => "Theme 11",
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
                "group_id" => 2,
                "name" => "Theme 12",
                "is_free" => false,
                "font_family" => "Calistoga-Regular",
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
                "name" => "Theme 13",
                "is_free" => false,
                "font_family" => "Hoefler Text Black",
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
                "name" => "Theme 14",
                "is_free" => false,
                "font_family" => "Kreon-Regular",
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
                "name" => "Theme 15",
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
                "group_id" => 3,
                "name" => "Theme 16",
                "is_free" => false,
                "font_family" => "Calistoga-Regular",
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
                "name" => "Theme 17",
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
                "name" => "Theme 18",
                "is_free" => false,
                "font_family" => "Libre Baskerville",
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
                "name" => "Theme 19",
                "is_free" => false,
                "font_family" => "Merienda-Bold",
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
                "name" => "Theme 20",
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
                "group_id" => 4,
                "name" => "Theme 21",
                "is_free" => false,
                "font_family" => "Rowdies-Regular",
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
                "name" => "Theme 22",
                "is_free" => false,
                "font_family" => "PatuaOne-Regular",
                "font_size" => 24,
                "line_height" => 38,
                "text_color" => "#F0CD96",
                "text_shadow" => null,
                "text_shadow_offset" => null,
                "background_color" => null,
                "created_at" => now()
            ],
            [
                "group_id" => 5,
                "name" => "Theme 23",
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
                "name" => "Theme 24",
                "is_free" => false,
                "font_family" => "Russo One",
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
                "name" => "Theme 25",
                "is_free" => false,
                "font_family" => "Palatino",
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
                "name" => "Theme 26",
                "is_free" => false,
                "font_family" => "Frank Ruhl Libre",
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
                "name" => "Theme 27",
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
                "group_id" => 6,
                "name" => "Theme 28",
                "is_free" => false,
                "font_family" => "IM FELL DW Pica",
                "font_size" => 24,
                "line_height" => 38,
                "text_color" => "#000000",
                "text_shadow" => null,
                "text_shadow_offset" => null,
                "background_color" => null,
                "created_at" => now()
            ],
            [
                "group_id" => 7,
                "name" => "Theme 29",
                "is_free" => false,
                "font_family" => "Prata",
                "font_size" => 24,
                "line_height" => 38,
                "text_color" => "#FFC700",
                "text_shadow" => null,
                "text_shadow_offset" => null,
                "background_color" => null,
                "created_at" => now()
            ],
            [
                "group_id" => 7,
                "name" => "Theme 30",
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
                "group_id" => 7,
                "name" => "Theme 31",
                "is_free" => false,
                "font_family" => "Calistoga-Regular",
                "font_size" => 24,
                "line_height" => 38,
                "text_color" => "#FFC76D",
                "text_shadow" => null,
                "text_shadow_offset" => null,
                "background_color" => null,
                "created_at" => now()
            ],
            [
                "group_id" => 7,
                "name" => "Theme 32",
                "is_free" => false,
                "font_family" => "Libre Baskerville",
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
                "owner_id" => 9,
                "type" => "theme",
                "name" => "9.png",
                "url" => "/assets/images/themes/bg/9.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 10,
                "type" => "theme",
                "name" => "10.png",
                "url" => "/assets/images/themes/bg/10.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 11,
                "type" => "theme",
                "name" => "11.png",
                "url" => "/assets/images/themes/bg/11.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 12,
                "type" => "theme",
                "name" => "12.png",
                "url" => "/assets/images/themes/bg/12.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 13,
                "type" => "theme",
                "name" => "13.png",
                "url" => "/assets/images/themes/bg/13.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 14,
                "type" => "theme",
                "name" => "14.png",
                "url" => "/assets/images/themes/bg/14.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 15,
                "type" => "theme",
                "name" => "15.png",
                "url" => "/assets/images/themes/bg/15.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 16,
                "type" => "theme",
                "name" => "16.png",
                "url" => "/assets/images/themes/bg/16.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 17,
                "type" => "theme",
                "name" => "17.png",
                "url" => "/assets/images/themes/bg/17.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 18,
                "type" => "theme",
                "name" => "18.png",
                "url" => "/assets/images/themes/bg/18.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 19,
                "type" => "theme",
                "name" => "19.png",
                "url" => "/assets/images/themes/bg/19.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 20,
                "type" => "theme",
                "name" => "20.png",
                "url" => "/assets/images/themes/bg/20.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 21,
                "type" => "theme",
                "name" => "21.png",
                "url" => "/assets/images/themes/bg/21.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 22,
                "type" => "theme",
                "name" => "22.png",
                "url" => "/assets/images/themes/bg/22.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 23,
                "type" => "theme",
                "name" => "23.png",
                "url" => "/assets/images/themes/bg/23.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 24,
                "type" => "theme",
                "name" => "24.png",
                "url" => "/assets/images/themes/bg/24.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 25,
                "type" => "theme",
                "name" => "25.png",
                "url" => "/assets/images/themes/bg/25.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 26,
                "type" => "theme",
                "name" => "26.png",
                "url" => "/assets/images/themes/bg/26.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 27,
                "type" => "theme",
                "name" => "27.png",
                "url" => "/assets/images/themes/bg/27.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 28,
                "type" => "theme",
                "name" => "28.png",
                "url" => "/assets/images/themes/bg/28.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 29,
                "type" => "theme",
                "name" => "29.png",
                "url" => "/assets/images/themes/bg/29.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 30,
                "type" => "theme",
                "name" => "30.png",
                "url" => "/assets/images/themes/bg/30.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 31,
                "type" => "theme",
                "name" => "31.png",
                "url" => "/assets/images/themes/bg/31.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 32,
                "type" => "theme",
                "name" => "32.png",
                "url" => "/assets/images/themes/bg/32.png",
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
