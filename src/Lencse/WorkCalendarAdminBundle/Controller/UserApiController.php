<?php

namespace Lencse\WorkCalendarAdminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

/**
 * @Route("/api/user")
 */
class UserApiController extends Controller
{
    /**
     * @Route("/login")
     */
    public function loginAction(Request $request)
    {
        print_r($request->attributes); exit;
    }

    /**
     * @Route("/logout")
     */
    public function logoutAction()
    {
        return $this->render('LencseWorkCalendarAdminBundle:UserApi:logout.html.twig', array(
            // ...
        ));
    }

}
