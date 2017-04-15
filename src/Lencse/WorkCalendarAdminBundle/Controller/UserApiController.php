<?php

namespace Lencse\WorkCalendarAdminBundle\Controller;

use Lencse\WorkCalendarAdminBundle\JsonApi\UserSchema;
use Lencse\WorkCalendarDBBundle\Entity\User;
use Neomerx\JsonApi\Encoder\Encoder;
use Neomerx\JsonApi\Encoder\EncoderOptions;
use Neomerx\JsonApi\Http\Headers\MediaType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Response;

/**
 * @Route("/api/user")
 */
class UserApiController extends Controller
{
    /**
     * @Route("/me")
     */
    public function getCurrentUserAction()
    {
        $user = $this->get('security.token_storage')->getToken()->getUser();
        $encoder = Encoder::instance([
            User::class => UserSchema::class
        ], new EncoderOptions(JSON_PRETTY_PRINT, '/api'));

        return Response::create($encoder->encodeData($user), 200, [
            'Content-Type' => MediaType::JSON_API_MEDIA_TYPE
        ]);
    }

}
