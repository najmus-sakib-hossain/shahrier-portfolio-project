<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Award;

class AwardSeeder extends Seeder
{
    public function run(): void
    {
        $awards = [
            [
                'title' => 'Entrepreneur of the Year 2023',
                'description' => 'Recognized for outstanding entrepreneurial achievements and business innovation',
                'organization' => 'Bangladesh Chamber of Commerce',
                'image' => '/assets/ict-olympiad-bangladesh.png',
                'award_date' => '2023-12-15',
                'order' => 1,
            ],
            [
                'title' => 'Tech Innovation Award',
                'description' => 'For innovative technology solutions that transformed the industry',
                'organization' => 'Tech Summit Asia',
                'image' => '/assets/nex-academy.png',
                'award_date' => '2022-09-20',
                'order' => 2,
            ],
            [
                'title' => 'Social Impact Award',
                'description' => 'Recognition for creating positive social change through technology',
                'organization' => 'Global Impact Foundation',
                'image' => '/assets/mindshaper.png',
                'award_date' => '2021-06-10',
                'order' => 3,
            ],
            [
                'title' => 'Best Startup Founder',
                'description' => 'Awarded for exceptional leadership in building successful startups',
                'organization' => 'Startup Bangladesh',
                'image' => '/assets/mechanix.png',
                'award_date' => '2020-11-05',
                'order' => 4,
            ],
        ];

        foreach ($awards as $award) {
            Award::create($award);
        }
    }
}
