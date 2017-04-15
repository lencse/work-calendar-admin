<?php

namespace Lencse\WorkCalendarAdminBundle\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class UserApiControllerTest extends WebTestCase
{
    public function testGetcurrentuser()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/me');
    }

}
