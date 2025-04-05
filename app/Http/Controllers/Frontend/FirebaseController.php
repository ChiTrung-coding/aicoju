<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FirebaseController extends Controller
{
    public function setFCMToken(Request $request)
    {
        $request->validate([
            'fcm_token_web' => 'required'
        ]);

        $token = $request->input('fcm_token_web');

        $request->user()->update([
            'fcm_token_web' => $token
        ]); //Get the currrently logged in user and set their token
        
        return response()->json([
            'message' => 'Successfully Updated FCM Token'
        ]);
    }
}
