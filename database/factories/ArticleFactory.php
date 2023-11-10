<?php

namespace Database\Factories;

use App\Models\Post;
use App\Models\Responsable;
use App\Models\Section;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Article>
 */
class ArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $post = Post::inRandomOrder()->first();
        $section = Section::inRandomOrder()->first();
        $responsable = Responsable::inRandomOrder()->first();

        return [
            'post_id' => $post->id,
            'section_id' => $section->id,
            'responsable_id' => $responsable->id
        ];
    }
}
