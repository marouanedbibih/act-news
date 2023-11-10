<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Membre>
 */
class MembreFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $user = User::whereDoesntHave('admin')
            ->whereDoesntHave('membre')
            ->whereDoesntHave('responsable')
            ->inRandomOrder()
            ->first();
        return [
            'user_id' => $user->id,
        ];
    }

    
}
