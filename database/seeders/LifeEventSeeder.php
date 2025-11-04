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
                'description' => 'Launched my first technology company',
                'image' => './assets/life_events/startup.png',
                'event_date' => now()->subYears(5),
                'category' => 'Career',
                'location' => 'Dhaka, Bangladesh',
                'is_featured' => true,
                'order' => 1,
            ],
            [
                'title' => 'Graduated from University',
                'description' => 'Completed my degree in Computer Science',
                'image' => './assets/life_events/graduation.png',
                'event_date' => now()->subYears(8),
                'category' => 'Education',
                'location' => 'Dhaka University',
                'is_featured' => false,
                'order' => 2,
            ],
            [
                'title' => 'International Conference Speaker',
                'description' => 'Spoke at Tech Summit Asia',
                'image' => './assets/life_events/conference.png',
                'event_date' => now()->subYears(2),
                'category' => 'Achievement',
                'location' => 'Singapore',
                'is_featured' => true,
                'order' => 3,
            ],
        ];

        foreach ($lifeEvents as $event) {
            LifeEvent::create($event);
        }
    }
}
