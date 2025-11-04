<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Video;

class VideoSeeder extends Seeder
{
    public function run(): void
    {
        $videos = [
            [
                'title' => 'How to Build a Successful Startup',
                'description' => 'Key lessons from building multiple startups',
                'video_url' => 'https://youtube.com/watch?v=example1',
                'thumbnail' => './assets/videos/thumb1.png',
                'platform' => 'youtube',
                'category' => 'Entrepreneurship',
                'duration' => 1200,
                'is_short' => false,
                'published_at' => now()->subDays(5),
            ],
            [
                'title' => 'Quick Tech Tip: Docker Basics',
                'description' => '60-second Docker tutorial',
                'video_url' => 'https://youtube.com/shorts/example2',
                'thumbnail' => './assets/videos/thumb2.png',
                'platform' => 'youtube',
                'category' => 'Technology',
                'duration' => 60,
                'is_short' => true,
                'published_at' => now()->subDays(2),
            ],
            [
                'title' => 'Leadership in Tech Industry',
                'description' => 'Building and leading high-performing teams',
                'video_url' => 'https://youtube.com/watch?v=example3',
                'thumbnail' => './assets/videos/thumb3.png',
                'platform' => 'youtube',
                'category' => 'Leadership',
                'duration' => 1800,
                'is_short' => false,
                'published_at' => now()->subDays(10),
            ],
        ];

        foreach ($videos as $video) {
            Video::create($video);
        }
    }
}
