<?php

namespace Lencse\WorkCalendarAdminBundle\JsonApi;

use Lencse\WorkCalendarDBBundle\Entity\User;
use Neomerx\JsonApi\Schema\SchemaProvider;

class UserSchema extends SchemaProvider
{

    /**
     * @var string
     */
    protected $resourceType = 'user';

    /**
     * Get resource identity.
     *
     * @param User $resource
     *
     * @return string
     *
     * @SuppressWarnings(PHPMD.UnusedFormalParameter)
     */
    public function getId($resource): string
    {
        return 'me';
    }

    /**
     * Get resource attributes.
     *
     * @param User $resource
     *
     * @return array
     */
    public function getAttributes($resource): array
    {
        return [
            'username' => $resource->getUsername(),
            'email' => $resource->getEmail(),
        ];
    }
}
