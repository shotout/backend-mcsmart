<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\v1\AuthController;
use App\Http\Controllers\Api\v1\ListController;

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
        Route::get('/topics', [ListController::class, 'topics'])->name('topics');
        Route::get('/themes', [ListController::class, 'themes'])->name('themes');
        Route::get('/categories', [ListController::class, 'categories'])->name('categories');
    }
);
