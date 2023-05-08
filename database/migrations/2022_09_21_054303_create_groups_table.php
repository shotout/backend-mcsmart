<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGroupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('groups', function (Blueprint $table) {
            $table->id();
            $table->string('entry_id')->nullable();
            $table->tinyInteger('flag')->default(1);
            $table->string('name')->nullable();
            $table->tinyInteger('status')->default(2);
            $table->timestamps();
        });

        DB::table('groups')->insert([
            ["flag" => 2, "name" => "Abstract", "created_at" => now()],
            ["flag" => 2, "name" => "Knowledge", "created_at" => now()],
            ["flag" => 2, "name" => "Photography", "created_at" => now()],
            ["flag" => 2, "name" => "Illustration", "created_at" => now()],
            ["flag" => 2, "name" => "Cityscape", "created_at" => now()],
            ["flag" => 2, "name" => "Nature", "created_at" => now()],
            ["flag" => 2, "name" => "Texture", "created_at" => now()],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('groups');
    }
}
