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
                'description' => 'Recognized for outstanding entrepreneurial achievements',
                'organization' => 'Bangladesh Chamber of Commerce',
                'image' => './assets/about_me/award1.png',
                'award_date' => now()->subYear(),
                'order' => 1,
            ],
            [
                'title' => 'Tech Innovation Award',
                'description' => 'For innovative technology solutions',
                'organization' => 'Tech Summit Asia',
                'image' => './assets/about_me/award2.png',
                'award_date' => now()->subYears(2),
                'order' => 2,
            ],
        ];

        foreach ($awards as $award) {
            Award::create($award);
        }
    }
}
