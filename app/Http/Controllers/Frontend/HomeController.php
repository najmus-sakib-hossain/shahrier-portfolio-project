<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\HeroSection;
use App\Models\Statistic;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        // Return the Index page (landing page with SHAHRIAR text)
        return Inertia::render('Index');
    }
    
    public function home()
    {
        $hero = HeroSection::where('is_active', true)
            ->orderBy('order')
            ->first();
            
        $statistics = Statistic::where('is_active', true)
            ->orderBy('order')
            ->get();

        return Inertia::render('Home/Page/Home', [
            'hero' => $hero,
            'statistics' => $statistics,
        ]);
    }
}
