<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory(100)->create();
        \App\Models\Membre::factory(80)->create();
        \App\Models\Admin::factory(5)->create();
        \App\Models\Section::factory(10)->create();
        \App\Models\Responsable::factory(15)->create();
        \App\Models\Post::factory(250)->create();
        \App\Models\Image::factory(350)->create();
        \App\Models\Vedio::factory(150)->create();
        \App\Models\Article::factory(50)->create();
        \App\Models\Like::factory(5000)->create();
        \App\Models\Comment::factory(1000)->create();


        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
