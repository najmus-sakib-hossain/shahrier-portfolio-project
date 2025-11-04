<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\BlogPost;
use App\Models\Video;
use App\Models\Event;
use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ActivityController extends Controller
{
    /**
     * Get recent activity data for charts
     * Returns aggregated data for blog posts, videos, events, and books
     */
    public function getRecentActivity(Request $request)
    {
        $days = $request->input('days', 90); // Default to 90 days
        $startDate = Carbon::now()->subDays($days)->startOfDay();
        
        // Generate date range
        $dates = [];
        for ($i = $days - 1; $i >= 0; $i--) {
            $dates[] = Carbon::now()->subDays($i)->format('Y-m-d');
        }
        
        // Initialize data structure
        $activityData = collect($dates)->mapWithKeys(function ($date) {
            return [$date => [
                'date' => $date,
                'blog_posts' => 0,
                'videos' => 0,
                'events' => 0,
                'books' => 0,
                'total' => 0,
            ]];
        });
        
        // Get blog posts created per day
        $blogPosts = BlogPost::where('created_at', '>=', $startDate)
            ->selectRaw('DATE(created_at) as date, COUNT(*) as count')
            ->groupBy('date')
            ->get()
            ->keyBy('date');
        
        // Get videos created per day
        $videos = Video::where('created_at', '>=', $startDate)
            ->selectRaw('DATE(created_at) as date, COUNT(*) as count')
            ->groupBy('date')
            ->get()
            ->keyBy('date');
        
        // Get events created per day
        $events = Event::where('created_at', '>=', $startDate)
            ->selectRaw('DATE(created_at) as date, COUNT(*) as count')
            ->groupBy('date')
            ->get()
            ->keyBy('date');
        
        // Get books created per day
        $books = Book::where('created_at', '>=', $startDate)
            ->selectRaw('DATE(created_at) as date, COUNT(*) as count')
            ->groupBy('date')
            ->get()
            ->keyBy('date');
        
        // Merge data
        $activityData = $activityData->map(function ($item) use ($blogPosts, $videos, $events, $books) {
            $date = $item['date'];
            
            $item['blog_posts'] = $blogPosts->get($date)?->count ?? 0;
            $item['videos'] = $videos->get($date)?->count ?? 0;
            $item['events'] = $events->get($date)?->count ?? 0;
            $item['books'] = $books->get($date)?->count ?? 0;
            $item['total'] = $item['blog_posts'] + $item['videos'] + $item['events'] + $item['books'];
            
            return $item;
        });
        
        return response()->json([
            'success' => true,
            'data' => $activityData->values(),
        ]);
    }
    
    /**
     * Get visitor statistics (simulated for now - you can integrate with actual analytics)
     */
    public function getVisitorStats(Request $request)
    {
        $days = $request->input('days', 90);
        $startDate = Carbon::now()->subDays($days)->startOfDay();
        
        // Generate date range
        $dates = [];
        for ($i = $days - 1; $i >= 0; $i--) {
            $dates[] = Carbon::now()->subDays($i)->format('Y-m-d');
        }
        
        // For now, we'll return aggregated activity data as a proxy for visitors
        // You can replace this with actual analytics data later
        $activityData = collect($dates)->map(function ($date) {
            // Get activity for this date
            $blogCount = BlogPost::whereDate('created_at', $date)->count();
            $videoCount = Video::whereDate('created_at', $date)->count();
            $eventCount = Event::whereDate('created_at', $date)->count();
            $bookCount = Book::whereDate('created_at', $date)->count();
            
            // Calculate "desktop" and "mobile" based on activity
            // This is a placeholder - integrate with real analytics
            $totalActivity = ($blogCount * 10) + ($videoCount * 15) + ($eventCount * 8) + ($bookCount * 5);
            $desktop = intval($totalActivity * 0.6 + rand(50, 150));
            $mobile = intval($totalActivity * 0.4 + rand(50, 150));
            
            return [
                'date' => $date,
                'desktop' => $desktop,
                'mobile' => $mobile,
            ];
        });
        
        return response()->json([
            'success' => true,
            'data' => $activityData,
        ]);
    }
    
    /**
     * Get content statistics
     */
    public function getContentStats()
    {
        return response()->json([
            'success' => true,
            'data' => [
                'total_blog_posts' => BlogPost::count(),
                'total_videos' => Video::count(),
                'total_events' => Event::count(),
                'total_books' => Book::count(),
                'recent_blog_posts' => BlogPost::where('created_at', '>=', Carbon::now()->subDays(30))->count(),
                'recent_videos' => Video::where('created_at', '>=', Carbon::now()->subDays(30))->count(),
                'recent_events' => Event::where('created_at', '>=', Carbon::now()->subDays(30))->count(),
                'recent_books' => Book::where('created_at', '>=', Carbon::now()->subDays(30))->count(),
            ],
        ]);
    }
}
