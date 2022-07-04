<?php

namespace App\Http\Controllers\Application;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function __invoke(): \Illuminate\Http\JsonResponse
    {
        return response()->json(User::all());
        // TODO: Implement __invoke() method.
    }
}
