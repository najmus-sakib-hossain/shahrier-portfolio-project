<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Video;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VideoController extends Controller
{
    public function index()
    {
        $regularVideos = Video::where('is_short', false)
            ->orderBy('published_at', 'desc')
            ->get();

        $shortVideos = Video::where('is_short', true)
            ->orderBy('published_at', 'desc')
            ->get();

        return Inertia::render('Videos/Page/Videos', [
            'videos' => $regularVideos,
            'shortVideos' => $shortVideos,
        ]);
    }
}
