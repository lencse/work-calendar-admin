<?php

namespace Lencse\UserBundle\Manager;

use Doctrine\ORM\EntityManagerInterface;
use Lencse\UserBundle\Model\UserFactoryInterface;
use Lencse\UserBundle\Model\UserInterface;
use Ramsey\Uuid\Uuid;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserManager
{

    /**
     * @var UserFactoryInterface
     */
    private $factory;

    /**
     * @var UserPasswordEncoderInterface
     */
    private $encoder;

    /**
     * @var EntityManagerInterface
     */
    private $entityManager;

    /**
     * @param UserFactoryInterface $factory
     * @param UserPasswordEncoderInterface $encoder
     * @param EntityManagerInterface $entityManager
     */
    public function __construct(
        UserFactoryInterface $factory,
        UserPasswordEncoderInterface $encoder,
        EntityManagerInterface $entityManager
    ) {
        $this->factory = $factory;
        $this->encoder = $encoder;
        $this->entityManager = $entityManager;
    }

    /**
     * @param string $username
     * @param string $email
     * @param string $password
     * @return UserInterface
     */
    public function createUser(string $username, string $email, string $password): UserInterface
    {
        $user = $this->factory->createUser();
        $encodedPassword = $this->encoder->encodePassword($user, $password);
        $user->setId(Uuid::uuid4())
            ->setUserName($username)
            ->setEmail($email)
            ->setPassword($encodedPassword);

        $this->entityManager->persist($user);
        $this->entityManager->flush();

        return $user;
    }
}
