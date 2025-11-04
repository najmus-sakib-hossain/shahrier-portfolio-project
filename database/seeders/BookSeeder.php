<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Book;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $books = [
            [
                'title' => 'Atomic Habits',
                'author' => 'James Clear',
                'cover_image' => './assets/books/atomic-habits.png',
                'description' => 'An Easy & Proven Way to Build Good Habits & Break Bad Ones',
                'summary' => 'James Clear presents a proven framework for improving every day.',
                'highlights' => 'Focus on systems, not goals. Make it obvious, attractive, easy, and satisfying.',
                'review' => 'A transformative book that changed how I approach daily habits and productivity.',
                'rating' => 5,
                'isbn' => '9780735211292',
                'read_date' => now()->subMonths(6),
                'is_recommended' => true,
                'order' => 1,
            ],
            [
                'title' => 'Thinking, Fast and Slow',
                'author' => 'Daniel Kahneman',
                'cover_image' => './assets/books/thinking-fast-slow.png',
                'description' => 'Understanding how we make decisions',
                'summary' => 'Explores the two systems that drive the way we think.',
                'highlights' => 'System 1 is fast and intuitive. System 2 is slow and deliberate.',
                'review' => 'Essential reading for anyone interested in psychology and decision-making.',
                'rating' => 5,
                'isbn' => '9780374533557',
                'read_date' => now()->subMonths(8),
                'is_recommended' => true,
                'order' => 2,
            ],
            [
                'title' => 'Zero to One',
                'author' => 'Peter Thiel',
                'cover_image' => './assets/books/zero-to-one.png',
                'description' => 'Notes on Startups, or How to Build the Future',
                'summary' => 'Insights on innovation and building breakthrough companies.',
                'highlights' => 'Competition is for losers. Create monopolies through innovation.',
                'review' => 'A must-read for entrepreneurs and innovators.',
                'rating' => 4,
                'isbn' => '9780804139298',
                'read_date' => now()->subMonths(10),
                'is_recommended' => true,
                'order' => 3,
            ],
        ];

        foreach ($books as $book) {
            Book::create($book);
        }
    }
}
