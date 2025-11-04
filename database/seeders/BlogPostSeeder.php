<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\BlogPost;

class BlogPostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $blogs = [
            [
                'title' => 'The Future of AI in Bangladeshi Businesses',
                'slug' => 'future-of-ai-in-bangladeshi-businesses',
                'excerpt' => 'Exploring how artificial intelligence is transforming the business landscape in Bangladesh.',
                'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                'featured_image' => './assets/blogs/img6.png',
                'category' => 'Technology',
                'tags' => 'AI, Business, Bangladesh',
                'read_time' => 10,
                'published_at' => now()->subDays(5),
                'is_published' => true,
            ],
            [
                'title' => 'Cybersecurity Best Practices for SMEs',
                'slug' => 'cybersecurity-best-practices-for-smes',
                'excerpt' => 'Essential cybersecurity measures every small and medium enterprise should implement.',
                'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                'featured_image' => './assets/blogs/img2.png',
                'category' => 'Security',
                'tags' => 'Cybersecurity, SME, Best Practices',
                'read_time' => 8,
                'published_at' => now()->subDays(10),
                'is_published' => true,
            ],
            [
                'title' => 'Digital Transformation Strategies',
                'slug' => 'digital-transformation-strategies',
                'excerpt' => 'A comprehensive guide to implementing digital transformation in your organization.',
                'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                'featured_image' => './assets/blogs/img3.png',
                'category' => 'Business',
                'tags' => 'Digital Transformation, Strategy',
                'read_time' => 12,
                'published_at' => now()->subDays(15),
                'is_published' => true,
            ],
            [
                'title' => 'Cloud Computing Trends in 2024',
                'slug' => 'cloud-computing-trends-2024',
                'excerpt' => 'The latest trends and innovations in cloud computing for 2024.',
                'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                'featured_image' => './assets/blogs/img4.png',
                'category' => 'Cloud',
                'tags' => 'Cloud Computing, Trends, 2024',
                'read_time' => 9,
                'published_at' => now()->subDays(20),
                'is_published' => true,
            ],
            [
                'title' => 'Building Scalable Tech Startups',
                'slug' => 'building-scalable-tech-startups',
                'excerpt' => 'Key principles for building and scaling a successful tech startup.',
                'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                'featured_image' => './assets/blogs/img5.png',
                'category' => 'Startup',
                'tags' => 'Startup, Scalability, Tech',
                'read_time' => 11,
                'published_at' => now()->subDays(25),
                'is_published' => true,
            ],
        ];

        foreach ($blogs as $blog) {
            BlogPost::create($blog);
        }
    }
}
