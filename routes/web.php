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


Route::group([
    'namespace' => 'App\Http\Controllers'
], function () {
    Route::post('/auth', 'Auth\AuthenticationController@authenticate');
    Route::post('/register', 'Auth\RegistrationController@register');

    Route::group(['middleware' => ['auth:sanctum']], function () {
        Route::get('/me', function () {
            return auth()->user();
        });
        Route::post('logout', 'Auth\LogoutController@logout');
    });

    Route::group([
        'prefix' => 'app',
        'namespace' => 'Application',
        'middleware' => ['auth:sanctum'],
    ], function () {
        Route::get('/dashboard', 'DashboardController');
    });
});

Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');