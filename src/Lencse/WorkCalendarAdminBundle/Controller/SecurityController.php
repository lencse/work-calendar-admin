<?php

namespace Lencse\WorkCalendarAdminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class SecurityController extends Controller
{

    /**
     * @Route("/login")
     */
    public function loginAction()
    {
        $auth = $this->get('security.authentication_utils');
        $error = $auth->getLastAuthenticationError();

//        dump($this->get('translator')); exit;

        return $this->render('@LencseWorkCalendarAdmin/login.html.twig', ['error' => $error]);
    }

    /**
     * @Route("/logout")
     */
    public function logout()
    {
    }
}
