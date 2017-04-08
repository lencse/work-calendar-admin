<?php

namespace Lencse\UserBundle\Model;

use Serializable;
use Symfony\Component\Security\Core\User\UserInterface as SymfonyUserInterface;

interface UserInterface extends SymfonyUserInterface, Serializable
{

    /**
     * @return string
     */
    public function getId(): string;

    /**
     * @param string $id
     * @return UserInterface
     */
    public function setId(string $id): UserInterface;

    /**
     * @param string $username
     * @return UserInterface
     */
    public function setUserName(string $username): UserInterface;

    /**
     * @return string
     */
    public function getEmail():string;

    /**
     * @param string $email
     * @return UserInterface
     */
    public function setEmail(string $email): UserInterface;

    /**
     * @param string $password
     * @return UserInterface
     */
    public function setPassword(string $password): UserInterface;
}
