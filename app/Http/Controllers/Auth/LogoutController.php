<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LogoutRequest;
use Illuminate\Http\Request;

class LogoutController extends Controller
{
    public function logout(LogoutRequest $request)
    {
        return $request->user()->currentAccessToken()->delete();
    }
}
