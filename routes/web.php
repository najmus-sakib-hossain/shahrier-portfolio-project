<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

// Route::get('/', function () {
//     return Inertia::render('welcome', [
//         'canRegister' => Features::enabled(Features::registration()),
//     ]);
// })->name('home');

Route::get('/', function () {
    return Inertia::render('Home/Page/Home');
})->name('home');

Route::get('/aboutme', function () {
    return Inertia::render('AboutMe/Page/AboutMe');
})->name('aboutme');

Route::get('/blogs', function () {
    return Inertia::render('Blogs/Page/Blogs');
})->name('blogs');

Route::get('/books', function () {
    return Inertia::render('Books/Page/Books');
})->name('books');

Route::get('/contact', function () {
    return Inertia::render('Contact/Page/Contact');
})->name('contact');

Route::get('/donate-details', function () {
    return Inertia::render('DonateDetails/Page/DonateDetails');
})->name('donate-details');

Route::get('/donation', function () {
    return Inertia::render('Donation/Page/Donation');
})->name('donation');

Route::get('/entrepreneurship', function () {
    return Inertia::render('Entepreneourship/Page/Entepreneouship');
})->name('entrepreneurship');

Route::get('/events', function () {
    return Inertia::render('Events/Page/Events');
})->name('events');

Route::get('/home', function () {
    return Inertia::render('Home/Page/Home');
})->name('home-page');

Route::get('/life-events', function () {
    return Inertia::render('LifeEvents/Page/LifeEvent');
})->name('life-events');

Route::get('/technology', function () {
    return Inertia::render('Technology/Page/Technology');
})->name('technology');

Route::get('/videos', function () {
    return Inertia::render('Videos/Page/Videos');
})->name('videos');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('shadcn-dashboard', function () {
        return Inertia::render('shadcn-dashboard');
    })->name('shadcn-dashboard');

    Route::get('test', function () {
        return Inertia::render('test');
    })->name('test');
});

require __DIR__.'/settings.php';
