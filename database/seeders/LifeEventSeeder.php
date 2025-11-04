<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\LifeEvent;

class LifeEventSeeder extends Seeder
{
    public function run(): void
    {
        $lifeEvents = [
            [
                'title' => 'Founded First Tech Startup',
                'description' => 'Launched my first technology company with a vision to solve real-world problems through innovation',
                'image' => '/assets/nex-fly.png',
                'event_date' => now()->subYears(5),
                'category' => 'Career',
                'location' => 'Dhaka, Bangladesh',
                'is_featured' => true,
                'order' => 1,
            ],
            [
                'title' => 'Graduated from University',
                'description' => 'Completed my degree in Computer Science with honors. A milestone that shaped my career.',
                'image' => '/assets/nex-academy.png',
                'event_date' => now()->subYears(8),
                'category' => 'Education',
                'location' => 'Dhaka University',
                'is_featured' => false,
                'order' => 2,
            ],
            [
                'title' => 'International Conference Speaker',
                'description' => 'Spoke at Tech Summit Asia on the future of entrepreneurship and innovation in emerging markets',
                'image' => '/assets/ict-olympiad-bangladesh.png',
                'event_date' => now()->subYears(2),
                'category' => 'Achievement',
                'location' => 'Singapore',
                'is_featured' => true,
                'order' => 3,
            ],
            [
                'title' => 'Launched Education Initiative',
                'description' => 'Started a program to provide free tech education to underprivileged youth',
                'image' => '/assets/mindshaper.png',
                'event_date' => now()->subYears(3),
                'category' => 'Social Impact',
                'location' => 'Bangladesh',
                'is_featured' => true,
                'order' => 4,
            ],
            [
                'title' => 'Won Entrepreneur Award',
                'description' => 'Recognized as Entrepreneur of the Year for innovation and social impact',
                'image' => '/assets/my-brand-story.png',
                'event_date' => now()->subYear(),
                'category' => 'Achievement',
                'location' => 'Dhaka, Bangladesh',
                'is_featured' => true,
                'order' => 5,
            ],
        ];

        foreach ($lifeEvents as $event) {
            LifeEvent::create($event);
        }
    }
}
