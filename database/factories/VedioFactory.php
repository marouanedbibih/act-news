<?php

namespace Database\Factories;

use App\Models\Post;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Vedio>
 */
class VedioFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $post = Post::inRandomOrder()->first();
        return [
            'url' => $this->faker->url(),
            'duration' => $this->faker->numberBetween(10, 300),
            'post_id' => $post->id
        ];
    }
}
