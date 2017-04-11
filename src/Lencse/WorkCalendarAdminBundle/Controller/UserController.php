<?php

namespace Lencse\WorkCalendarAdminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class UserController extends Controller
{
    /**
     * @Route("/login")
     */
    public function loginAction(Request $request)
    {
        print_r($_POST); exit;
    }

}
