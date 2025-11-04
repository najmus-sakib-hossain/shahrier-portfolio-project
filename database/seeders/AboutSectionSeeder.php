<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\AboutSection;

class AboutSectionSeeder extends Seeder
{
    public function run(): void
    {
        $sections = [
            [
                'section_type' => 'story',
                'title' => 'My Story',
                'content' => 'I began my journey in technology over a decade ago, driven by a passion for innovation and creating meaningful impact.',
                'image' => './assets/about_me/story.png',
                'additional_data' => null,
                'order' => 1,
                'is_active' => true,
            ],
            [
                'section_type' => 'impact',
                'title' => 'Creating Impact',
                'content' => 'Through technology and entrepreneurship, I have worked to create positive change in communities.',
                'image' => './assets/about_me/impact.png',
                'additional_data' => null,
                'order' => 2,
                'is_active' => true,
            ],
            [
                'section_type' => 'travel',
                'title' => 'Global Experiences',
                'content' => 'Traveled to over 20 countries, learning from diverse cultures and business practices.',
                'image' => './assets/about_me/travel.png',
                'additional_data' => null,
                'order' => 3,
                'is_active' => true,
            ],
        ];

        foreach ($sections as $section) {
            AboutSection::create($section);
        }
    }
}
