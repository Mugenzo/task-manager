<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegistrationRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class RegistrationController extends Controller
{
    /**
     * @param RegistrationRequest $request
     * @return JsonResponse
     */
    public function register(RegistrationRequest $request): JsonResponse
    {
        $credentials = $request->only('email', 'nickname', 'password');

        $credentials['password'] = Hash::make($credentials['password']);

        $user = User::create($credentials);

        $api_key = $user->createToken('app')->plainTextToken;

        return response()->json(compact('user', 'api_key'));

    }
}
