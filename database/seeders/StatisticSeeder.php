<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Statistic;

class StatisticSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $statistics = [
            ['label' => 'Years Journey', 'value' => '11', 'order' => 1],
            ['label' => 'Projects', 'value' => '200', 'order' => 2],
            ['label' => 'Certification', 'value' => '6', 'order' => 3],
            ['label' => 'Int Article', 'value' => '5', 'order' => 4],
            ['label' => 'Books', 'value' => '4', 'order' => 5],
            ['label' => 'Books', 'value' => '4', 'order' => 6],
            ['label' => 'Mentoring', 'value' => '100', 'order' => 7],
        ];

        foreach ($statistics as $stat) {
            Statistic::create($stat);
        }
    }
}
