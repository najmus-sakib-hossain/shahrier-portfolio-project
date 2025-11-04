<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Technology;

class TechnologySeeder extends Seeder
{
    public function run(): void
    {
        $technologies = [
            [
                'title' => 'Cloud Architecture Best Practices',
                'description' => 'Building scalable cloud infrastructure',
                'image' => './assets/technology/cloud.png',
                'category' => 'cloud',
                'content' => 'Comprehensive guide to cloud architecture patterns and best practices.',
                'is_featured' => true,
                'order' => 1,
            ],
            [
                'title' => 'Cybersecurity Essentials',
                'description' => 'Protecting your digital assets',
                'image' => './assets/technology/security.png',
                'category' => 'cybersecurity',
                'content' => 'Essential cybersecurity practices for modern businesses.',
                'is_featured' => true,
                'order' => 2,
            ],
            [
                'title' => 'AI and Machine Learning',
                'description' => 'Introduction to AI technologies',
                'image' => './assets/technology/ai.png',
                'category' => 'ai',
                'content' => 'Getting started with artificial intelligence and machine learning.',
                'is_featured' => false,
                'order' => 3,
            ],
        ];

        foreach ($technologies as $tech) {
            Technology::create($tech);
        }
    }
}
