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
        Schema::create('themes', function (Blueprint $table) {
            $table->id();
            $table->integer('group_id')->nullable();
            $table->string('name')->nullable();
            $table->string('flag')->nullable();
            $table->boolean('is_free')->default(false);
            $table->string('font_family')->nullable();
            $table->tinyInteger('font_size')->default(18);
            $table->tinyInteger('line_height')->default(24);
            $table->string('text_color')->nullable();
            $table->string('text_shadow')->nullable();
            $table->string('text_shadow_offset')->nullable();
            $table->string('background_color')->nullable();
            $table->string('bg_image_color')->nullable();
            $table->tinyInteger('status')->default(2);
            $table->timestamps();
        });

        Schema::create('user_themes', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id')->nullable();
            $table->integer('theme_id')->nullable();
            $table->timestamps();
        });

        DB::table('themes')->insert([
            [
                "group_id" => null,
                "name" => "Random",
                "is_free" => true,
                "font_family" => null,
                "font_size" => 0,
                "line_height" => 0,
                "text_color" => null,
                "text_shadow" => null,
                "text_shadow_offset" => null,
                "background_color" => null,
                "created_at" => now()
            ],
            [
                "group_id" => 4,
                "name" => "Theme 1",
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
                "group_id" => 4,
                "name" => "Theme 2",
                "is_free" => false,
                "font_family" => "Lucida Grande",
                "font_size" => 24,
                "line_height" => 38,
                "text_color" => "#000000",
                "text_shadow" => null,
                "text_shadow_offset" => null,
                "background_color" => null,
                "created_at" => now()
            ],
            [
                "group_id" => 1,
                "name" => "Theme 3",
                "is_free" => false,
                "font_family" => "Krona One",
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
                "name" => "Theme 4",
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
                "group_id" => 4,
                "name" => "Theme 5",
                "is_free" => false,
                "font_family" => "FjallaOne-Regular",
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
                "name" => "Theme 6",
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
                "name" => "Theme 7",
                "is_free" => false,
                "font_family" => "Abril Fatface",
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
                "owner_id" => 1,
                "type" => "theme",
                "name" => "1.png",
                "url" => "/assets/images/themes/bg/1.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 2,
                "type" => "theme",
                "name" => "2.png",
                "url" => "/assets/images/themes/bg/2.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 3,
                "type" => "theme",
                "name" => "3.png",
                "url" => "/assets/images/themes/bg/3.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 4,
                "type" => "theme",
                "name" => "4.png",
                "url" => "/assets/images/themes/bg/4.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 5,
                "type" => "theme",
                "name" => "5.png",
                "url" => "/assets/images/themes/bg/5.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 6,
                "type" => "theme",
                "name" => "6.png",
                "url" => "/assets/images/themes/bg/6.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 7,
                "type" => "theme",
                "name" => "7.png",
                "url" => "/assets/images/themes/bg/7.png",
                "created_at" => now()
            ],
            [
                "owner_id" => 8,
                "type" => "theme",
                "name" => "8.png",
                "url" => "/assets/images/themes/bg/8.png",
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
        Schema::dropIfExists('themes','user_themes');
    }
};
