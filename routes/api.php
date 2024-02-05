<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TaskController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::get('projects', 'ProjectController@index');
Route::get('/projects', [ProjectController::class, 'index']);
Route::post('/projects', [ProjectController::class, 'store']);
Route::get('projects/{id}', [ProjectController::class, 'show']);
Route::post('projects/{project}', [ProjectController::class, 'markAsCompleted']);
Route::post('tasks', [TaskController::class, 'store']);
Route::post('tasks/{task}', [TaskController::class, 'markAsCompleted']);

// Route::post('/projects', 'ProjectController@store');
// Route::get('projects/{id}', 'ProjectController@show');
// Route::get('projects/{project}', 'ProjectController@markAsCompleted');
// Route::post('tasks', 'TaskController@index');
// Route::post('tasks', 'TaskController@store');
// Route::get('tasks/{task}', 'TaskController@markAsCompleted');

