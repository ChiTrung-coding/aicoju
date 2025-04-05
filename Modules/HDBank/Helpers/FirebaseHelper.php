<?php

namespace Modules\HDBank\Helpers;

use Kreait\Firebase\Messaging\CloudMessage;
use Kreait\Firebase\Messaging\Notification as FirebaseNotification;
use UtilityLog;

class FirebaseHelper
{
    public static function push_notifications(array $tokens, FirebaseNotification|array $notification)
    {

        try {
            $messaging = app('firebase.messaging');

            $message = CloudMessage::new();

            if (is_array($notification)) {
                $message = $message->withData($notification);
            } else {
                $message = $message->withNotification($notification);
            }

            $messaging->sendMulticast($message, $tokens);
        } catch (\Throwable $th) {
            UtilityLog::writeLog('error', 'Push notification error', $th, [
                'tokens' => $tokens, 
                'notification' => $notification
            ]);
        }

    }
}