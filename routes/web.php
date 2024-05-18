<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\DestinationController;
use App\Http\Controllers\LoginController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/




Route::get('/loginpage', function () {
    return Inertia::render("LoginPage");
});

Route::get('/registerpage', function () {
    return Inertia::render("RegisterForm");
});

//Destination
Route::get('/upload', function () {
    return Inertia::render("Upload");
});
Route::post('/destupload', [DestinationController::class,'store']);
Route::get('/destination', function () {
    return Inertia::render("destinasi");
});
Route::get('/destination', [DestinationController::class,'index']);

//Article
Route::get('/artupload', function () {
    return Inertia::render("ArticleUpload");
});
Route::get('/articles', function () {
    return Inertia::render("ArticlePage");
});

Route::get('/articles/{article}', [ArticleController::class, 'show'])->name('articles.show');

Route::post('/articleupload', [ArticleController::class,'store']);
Route::get('/articles', [ArticleController::class,'index'])->name('article.index');
Route::get('/articles/edit/{article}', [ArticleController::class,'edit']);
Route::put('/articles/edit/{article}', [ArticleController::class,'update']);
Route::delete('/articles/{id}/delete', [ArticleController::class, 'destroy'])->name('articles.destroy');


Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
