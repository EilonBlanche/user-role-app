<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RoleController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// User routes
Route::prefix('users')->group(function () {
    Route::post('/', [UserController::class, 'store']);       // Create user
    Route::get('/', [UserController::class, 'index']);        // List users
    Route::get('{id}', [UserController::class, 'get_user']);  // Get single user
});

// Role routes
Route::get('roles', [RoleController::class, 'index']);        // List roles