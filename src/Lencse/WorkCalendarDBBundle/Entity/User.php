<?php

namespace Lencse\WorkCalendarDBBundle\Entity;

use Lencse\UserBundle\Model\UserEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="wc_user")
 */
class User extends UserEntity
{
}
