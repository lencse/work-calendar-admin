<?php

namespace Test\Lencse\WorkCalendarAdminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class DefaultControllerTest extends WebTestCase
{
    public function testIndex()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/');

        $this->assertContains('Your application is now ready', $client->getResponse()->getContent());
    }
}
