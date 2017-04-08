<?php

namespace Lencse\UserBundle\Model;

interface UserFactoryInterface
{

    /**
     * @return UserInterface
     */
    public function createUser(): UserInterface;
}
