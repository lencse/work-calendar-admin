<?php

namespace Lencse\WorkCalendarAdminBundle\JsonApi;

use Lencse\WorkCalendar\Day\DayType;
use Neomerx\JsonApi\Schema\SchemaProvider;

class DayTypeSchema extends SchemaProvider
{

    /**
     * @var string
     */
    protected $resourceType = 'day-type';

    /**
     * Get resource identity.
     *
     * @param DayType $resource
     *
     * @return string
     */
    public function getId($resource): string
    {
        return $resource->getKey();
    }

    /**
     * Get resource attributes.
     *
     * @param DayType $resource
     *
     * @return array
     */
    public function getAttributes($resource): array
    {
        return [
            'key' => $resource->getKey(),
            'name' => $resource->getName(),
            'is-rest-day' => $resource->isRestDay(),
        ];
    }

    /**
     * @inheritdoc
     */
    public function getResourceLinks($resource): array
    {
        return [];
    }
}
