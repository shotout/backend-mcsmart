<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\v1\AuthController;
use App\Http\Controllers\Api\v1\ListController;
use App\Http\Controllers\Api\v1\AdmobController;
use App\Http\Controllers\Api\v1\QuoteController;
use App\Http\Controllers\Api\v1\SettingController;
use App\Http\Controllers\Api\v1\UserLikeController;
use App\Http\Controllers\Api\v1\UserNotifController;
use App\Http\Controllers\Api\v1\UserThemeController;
use App\Http\Controllers\Api\v1\UserRatingController;
use App\Http\Controllers\Api\v1\UserRepeatController;
use App\Http\Controllers\Api\v1\UserProfileController;
use App\Http\Controllers\Api\v1\UserCategoryController;
use App\Http\Controllers\Api\v1\UserPastQuoteController;
use App\Http\Controllers\Api\v1\UserCollectionController;
use App\Http\Controllers\Api\v1\SubscriptionsController;
use App\Http\Controllers\Api\v1\PurchaselyController;

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

Route::prefix('v1/auth')->name('auth.')->group(
    function() {
        Route::post('/check-device', [AuthController::class, 'checkDevice'])->name('checkDevice');
        Route::post('/register', [AuthController::class, 'register'])->name('register');
        Route::post('/delete', [AuthController::class, 'delete'])->name('delete');
    }
);

Route::prefix('v1/list')->name('list.')->group(
    function() {
        Route::get('/icons', [ListController::class, 'icons'])->name('icons');
        Route::get('/topics', [ListController::class, 'topics'])->name('topics');
        Route::get('/themes', [ListController::class, 'themes'])->name('themes');
        Route::get('/categories', [ListController::class, 'categories'])->name('categories');
        Route::get('/links', [ListController::class, 'links'])->name('links');
    }
);

Route::middleware('auth:sanctum')->prefix('v1/rating')->name('rating.')->group(
    function() {
        Route::get('/', [UserRatingController::class, 'show'])->name('show');
        Route::post('/', [UserRatingController::class, 'store'])->name('store');
    }
);

Route::middleware('auth:sanctum')->prefix('v1/user')->name('user.')->group(
    function() {
        Route::get('/', [UserProfileController::class, 'show'])->name('show');
        Route::patch('/', [UserProfileController::class, 'update'])->name('update');
    }
);

Route::middleware('auth:sanctum')->prefix('v1/collection')->name('collection.')->group(
    function() {
        Route::get('/', [UserCollectionController::class, 'index'])->name('index');
        Route::get('/{id}', [UserCollectionController::class, 'show'])->name('show');
        Route::post('/', [UserCollectionController::class, 'store'])->name('store');
        Route::patch('/{id}', [UserCollectionController::class, 'update'])->name('update');
        Route::delete('/{id}', [UserCollectionController::class, 'destroy'])->name('destroy');
        Route::post('/quote/{collection}/{quote}', [UserCollectionController::class, 'storeQuote'])->name('quote.store');
        Route::delete('/quote/{collection}/{quote}', [UserCollectionController::class, 'destroyQuote'])->name('quote.destroy');
    }
);

Route::middleware('auth:sanctum')->prefix('v1/category')->name('category.')->group(
    function() {
        Route::patch('/', [UserCategoryController::class, 'update'])->name('update');
    }
);

Route::middleware('auth:sanctum')->prefix('v1/theme')->name('theme.')->group(
    function() {
        Route::patch('/', [UserThemeController::class, 'update'])->name('update');
    }
);

Route::middleware('auth:sanctum')->prefix('v1/quotes')->name('quote.')->group(
    function() {
        Route::get('/', [QuoteController::class, 'index'])->name('index');
        Route::post('/share/{id}', [QuoteController::class, 'share'])->name('share');
        Route::get('/filter', [QuoteController::class, 'filter'])
            ->withoutMiddleware('auth:sanctum')
            ->name('filter');
    }
);

Route::middleware('auth:sanctum')->prefix('v1/like')->name('like.')->group(
    function() {
        Route::get('/', [UserLikeController::class, 'index'])->name('index');
        Route::post('/{id}', [UserLikeController::class, 'store'])->name('store');
        Route::delete('/{id}', [UserLikeController::class, 'destroy'])->name('destroy');

    }
);

Route::middleware('auth:sanctum')->prefix('v1/past-quote')->name('past-quote.')->group(
    function() {
        Route::get('/', [UserPastQuoteController::class, 'index'])->name('index');
        Route::post('/{id}', [UserPastQuoteController::class, 'store'])->name('store');
        Route::delete('/{id}', [UserPastQuoteController::class, 'destroy'])->name('destroy');
    }
);

Route::middleware('auth:sanctum')->prefix('v1/setting')->name('setting.')->group(
    function() {
        Route::get('/paywall', [SettingController::class, 'paywall'])->name('paywall');
    }
);

Route::middleware('auth:sanctum')->prefix('v1/notif')->name('notif.')->group(
    function() {
        Route::get('/', [UserNotifController::class, 'index'])->name('index');
        Route::post('/reset-badge', [UserNotifController::class, 'reset_count'])->name('reset-badge');
    }
);

Route::middleware('auth:sanctum')->prefix('v1/repeat')->name('repeat.')->group(
    function() {
        Route::get('/', [UserRepeatController::class, 'index'])->name('index');
        Route::post('/{id}', [UserRepeatController::class, 'store'])->name('store');
        Route::delete('/{id}', [UserRepeatController::class, 'destroy'])->name('destroy');
    }
);

Route::prefix('v1/admob')->name('admob.')->group(
    function() {
        Route::get('/', [AdmobController::class, 'callback'])->name('callback');
    }
);

Route::middleware('auth:sanctum')->prefix('v1/subscription')->name('subscription.')->group(
    function() {
        Route::get('/', [SubscriptionsController::class, 'index'])->name('index');
        Route::post('/update', [SubscriptionsController::class, 'subscribe'])->name('subscribe');
    }
);

Route::prefix('v1/purchasely')->name('purchasely.')->group(
    function() {
        Route::post('/', [PurchaselyController::class, 'index'])->name('purchasely');
    }
);