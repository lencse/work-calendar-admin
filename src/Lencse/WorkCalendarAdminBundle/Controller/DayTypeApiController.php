<?php

namespace Lencse\WorkCalendarAdminBundle\Controller;

use Lencse\WorkCalendar\Day\DayType;
use Lencse\WorkCalendarAdminBundle\JsonApi\DayTypeSchema;
use Neomerx\JsonApi\Document\Link;
use Neomerx\JsonApi\Encoder\Encoder;
use Neomerx\JsonApi\Encoder\EncoderOptions;
use Neomerx\JsonApi\Encoder\Parameters\EncodingParameters;
use Neomerx\JsonApi\Http\Headers\MediaType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * @Route("/api/day-type")
 */
class DayTypeApiController extends Controller
{

    /**
     * @Route("/")
     */
    public function listAction()
    {
        $types = DayType::getAllTypes();

        $encoder = Encoder::instance([
            DayType::class => DayTypeSchema::class
        ], new EncoderOptions(JSON_PRETTY_PRINT, '/api'));

        return Response::create($encoder->encodeData($types), 200, [
            'Content-Type' => MediaType::JSON_API_MEDIA_TYPE
        ]);
    }
}
