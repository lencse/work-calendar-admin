<?php

namespace Lencse\UserBundle\DependencyInjection;

use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\HttpKernel\DependencyInjection\Extension;
use Symfony\Component\DependencyInjection\Loader;

/**
 * This is the class that loads and manages your bundle configuration.
 *
 * @link http://symfony.com/doc/current/cookbook/bundles/extension.html
 */
class LencseUserExtension extends Extension
{

    /**
     * {@inheritdoc}
     */
    public function load(array $configs, ContainerBuilder $container)
    {
        $configuration = new Configuration();
        $config = $this->processConfiguration($configuration, $configs);

        $parameters = [$this->getAlias()];
        $this->process($container, $parameters, $config);

        $loader = new Loader\YamlFileLoader($container, new FileLocator(__DIR__.'/../Resources/config'));
        $loader->load('services.yml');
    }

    /**
     * @param ContainerBuilder $container
     * @param array $parameters
     * @param mixed $config
     */
    private function process(ContainerBuilder $container, array $parameters, $config)
    {
        if (!is_array($config)) {
            $container->setParameter(implode('.', $parameters), $config);
            return;
        }

        foreach ($config as $key => $value) {
            $parameters[] = $key;
            $this->process($container, $parameters, $value);
        }
    }
}
