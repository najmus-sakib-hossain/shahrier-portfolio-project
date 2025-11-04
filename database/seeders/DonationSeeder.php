<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Donation;

class DonationSeeder extends Seeder
{
    public function run(): void
    {
        $donations = [
            [
                'title' => 'Education for Underprivileged Children',
                'description' => 'Help provide quality education to children in need',
                'image' => './assets/donation/education.png',
                'goal_amount' => 50000.00,
                'raised_amount' => 25000.00,
                'category' => 'Education',
                'end_date' => now()->addMonths(3),
                'is_active' => true,
                'beneficiary_info' => 'Rural schools in Bangladesh',
            ],
            [
                'title' => 'Tech Training for Youth',
                'description' => 'Empowering youth with technology skills',
                'image' => './assets/donation/tech-training.png',
                'goal_amount' => 30000.00,
                'raised_amount' => 18000.00,
                'category' => 'Technology',
                'end_date' => now()->addMonths(2),
                'is_active' => true,
                'beneficiary_info' => 'Youth in urban slums',
            ],
        ];

        foreach ($donations as $donation) {
            Donation::create($donation);
        }
    }
}
