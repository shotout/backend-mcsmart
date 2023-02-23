<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\v1\AuthController;
use App\Http\Controllers\Api\v1\ListController;
use App\Http\Controllers\Api\v1\QuoteController;
use App\Http\Controllers\Api\v1\UserThemeController;
use App\Http\Controllers\Api\v1\UserRatingController;
use App\Http\Controllers\Api\v1\UserProfileController;
use App\Http\Controllers\Api\v1\UserCategoryController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(
    [
        'prefix' => 'v1/auth',
        'name' => 'auth.'
    ],
    function() {
        Route::post('/check-device', [AuthController::class, 'checkDevice'])->name('checkDevice');
        Route::post('/register', [AuthController::class, 'register'])->name('register');
    }
);

Route::group(
    [
        'prefix' => 'v1/list',
        'name' => 'list.'
    ],
    function() {
        Route::get('/icons', [ListController::class, 'icons'])->name('icons');
        Route::get('/topics', [ListController::class, 'topics'])->name('topics');
        Route::get('/themes', [ListController::class, 'themes'])->name('themes');
        Route::get('/categories', [ListController::class, 'categories'])->name('categories');
        Route::get('/links', [ListController::class, 'links'])->name('links');
    }
);

Route::group(
    [
        'middleware' => 'auth:sanctum',
        'prefix' => 'v1/rating',
        'name' => 'rating.'
    ],
    function() {
        Route::get('/', [UserRatingController::class, 'show'])->name('show');
        Route::post('/', [UserRatingController::class, 'store'])->name('store');
    }
);

Route::group(
    [
        'middleware' => 'auth:sanctum',
        'prefix' => 'v1/user',
        'name' => 'user.'
    ],
    function() {
        Route::get('/', [UserProfileController::class, 'show'])->name('show');
        Route::patch('/', [UserProfileController::class, 'update'])->name('update');
    }
);

Route::group(
    [
        'middleware' => 'auth:sanctum',
        'prefix' => 'v1/category',
        'name' => 'category.'
    ],
    function() {
        Route::patch('/', [UserCategoryController::class, 'update'])->name('update');
    }
);

Route::group(
    [
        'middleware' => 'auth:sanctum',
        'prefix' => 'v1/theme',
        'name' => 'theme.'
    ],
    function() {
        Route::patch('/', [UserThemeController::class, 'update'])->name('update');
    }
);

Route::group(
    [
        'middleware' => 'auth:sanctum',
        'prefix' => 'v1/quotes',
        'name' => 'quote.'
    ],
    function() {
        Route::get('/', [QuoteController::class, 'index'])->name('index');
        Route::post('/share/{id}', [QuoteController::class, 'share'])->name('share');
    }
);
