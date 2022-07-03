<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegistrationRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class RegistrationController extends Controller
{
    public function register(RegistrationRequest $request)
    {
        $user = User::create($request->only('email', 'nickname', 'password'));

        return $user->createToken('app')->plainTextToken;
    }
}
