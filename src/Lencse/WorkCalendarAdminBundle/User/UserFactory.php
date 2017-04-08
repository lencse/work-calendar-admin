<?php

namespace Lencse\WorkCalendarAdminBundle\User;

use Lencse\UserBundle\Model\UserFactoryInterface;
use Lencse\UserBundle\Model\UserInterface;
use Lencse\WorkCalendarDBBundle\Entity\User;

class UserFactory implements UserFactoryInterface
{

    /**
     * @return UserInterface
     */
    public function createUser(): UserInterface
    {
        return new User();
    }
}
