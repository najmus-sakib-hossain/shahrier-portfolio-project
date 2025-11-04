<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\EntrepreneurshipContent;

class EntrepreneurshipContentSeeder extends Seeder
{
    public function run(): void
    {
        $content = [
            [
                'type' => 'blog',
                'title' => 'Building a Startup Ecosystem',
                'content' => 'How to create and nurture a thriving startup community in emerging markets.',
                'image' => './assets/entepreneourship/blog1.png',
                'author' => 'Shahriar Khan',
                'publish_date' => now()->subDays(7),
                'is_featured' => true,
                'order' => 1,
            ],
            [
                'type' => 'quote',
                'title' => 'Innovation Quote',
                'content' => 'The best way to predict the future is to invent it.',
                'image' => null,
                'author' => 'Alan Kay',
                'publish_date' => null,
                'is_featured' => false,
                'order' => 1,
            ],
            [
                'type' => 'innovation',
                'title' => 'AI-Powered Business Solutions',
                'content' => 'Leveraging artificial intelligence to solve real business problems.',
                'image' => './assets/entepreneourship/innovation1.png',
                'author' => null,
                'publish_date' => now()->subDays(14),
                'is_featured' => true,
                'order' => 1,
            ],
        ];

        foreach ($content as $item) {
            EntrepreneurshipContent::create($item);
        }
    }
}
