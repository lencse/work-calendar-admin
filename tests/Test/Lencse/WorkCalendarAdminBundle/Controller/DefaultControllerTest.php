<?php

namespace Test\Lencse\WorkCalendarAdminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class DefaultControllerTest extends WebTestCase
{
    public function testIndex()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/');

        $this->assertContains('react-main', $client->getResponse()->getContent());
    }
}
