<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        \App\Models\Quote::factory(10)->create([
            "category_id" => 3,
            "title" => "Fact Celebrities",
            "author" => "Celebrities",
            "created_at" => now(),
        ]);

        \App\Models\Quote::factory(10)->create([
            "category_id" => 4,
            "title" => "Fact Economy & Business",
            "author" => "Economy & Business",
            "created_at" => now(),
        ]);

        \App\Models\Quote::factory(10)->create([
            "category_id" => 5,
            "title" => "Fact Food & Drink",
            "author" => "Food & Drink",
            "created_at" => now(),
        ]);

        \App\Models\Quote::factory(10)->create([
            "category_id" => 6,
            "title" => "Fact Geography & Travel",
            "author" => "Geography & Travel",
            "created_at" => now(),
        ]);

        \App\Models\Quote::factory(10)->create([
            "category_id" => 7,
            "title" => "Fact History & Politics",
            "author" => "History & Politics",
            "created_at" => now(),
        ]);

        \App\Models\Quote::factory(10)->create([
            "category_id" => 8,
            "title" => "Fact Music & Entertainment",
            "author" => "Music & Entertainment",
            "created_at" => now(),
        ]);

        \App\Models\Quote::factory(10)->create([
            "category_id" => 9,
            "title" => "Fact Nature",
            "author" => "Nature",
            "created_at" => now(),
        ]);

        \App\Models\Quote::factory(10)->create([
            "category_id" => 10,
            "title" => "Fact Science & Technology",
            "author" => "Science & Technology",
            "created_at" => now(),
        ]);

        \App\Models\Quote::factory(10)->create([
            "category_id" => 11,
            "title" => "Fact Sports",
            "author" => "Sports",
            "created_at" => now(),
        ]);

        \App\Models\Quote::factory(10)->create([
            "category_id" => 12,
            "title" => "Fact Wonder of the world",
            "author" => "Wonder of the world",
            "created_at" => now(),
        ]);
    }
}
