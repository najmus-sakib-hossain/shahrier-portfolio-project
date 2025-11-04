<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Event;

class EventSeeder extends Seeder
{
    public function run(): void
    {
        $events = [
            [
                'title' => 'Tech Innovation Summit 2024',
                'description' => 'Annual technology and innovation conference',
                'image' => './assets/events/event1.png',
                'location' => 'Dhaka, Bangladesh',
                'event_date' => now()->addDays(30),
                'event_time' => '09:00:00',
                'category' => 'Conference',
                'organizer' => 'Tech BD',
                'is_featured' => true,
                'is_past' => false,
            ],
            [
                'title' => 'Startup Networking Meetup',
                'description' => 'Connect with fellow entrepreneurs and investors',
                'image' => './assets/events/event2.png',
                'location' => 'Gulshan, Dhaka',
                'event_date' => now()->addDays(15),
                'event_time' => '18:00:00',
                'category' => 'Networking',
                'organizer' => 'Startup Bangladesh',
                'is_featured' => false,
                'is_past' => false,
            ],
            [
                'title' => 'Digital Marketing Workshop',
                'description' => 'Learn advanced digital marketing strategies',
                'image' => './assets/events/event3.png',
                'location' => 'Online',
                'event_date' => now()->subDays(10),
                'event_time' => '14:00:00',
                'category' => 'Workshop',
                'organizer' => 'Marketing Pro',
                'is_featured' => false,
                'is_past' => true,
            ],
        ];

        foreach ($events as $event) {
            Event::create($event);
        }
    }
}
