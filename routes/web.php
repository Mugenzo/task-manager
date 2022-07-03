<?php

use Illuminate\Support\Facades\Route;

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

Route::post('/auth', [\App\Http\Controllers\Auth\AuthenticationController::class, 'authenticate']);
Route::post('/register', [\App\Http\Controllers\Auth\RegistrationController::class, 'register']);

Route::group([
    'namespace' => 'App\Http\Controllers\Application'
], function () {
    Route::group([
        'prefix' => 'app',
        'middleware' => ['auth:sanctum'],
    ], function () {
        Route::get('/', 'DashboardController');
    });
});

Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');