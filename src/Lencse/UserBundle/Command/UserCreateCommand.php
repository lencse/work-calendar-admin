<?php

namespace Lencse\UserBundle\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class UserCreateCommand extends ContainerAwareCommand
{

    protected function configure()
    {
        $this
            ->setName('user:create')
            ->setDescription('Creates a user')
            ->addArgument('username', InputArgument::REQUIRED, 'Username')
            ->addArgument('password', InputArgument::REQUIRED, 'Username')
            ->addArgument('email', InputArgument::REQUIRED, 'Email')
        ;
    }

    /**
     * @param InputInterface $input
     * @param OutputInterface $output
     * @return int
     */
    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $username = $input->getArgument('username');
        $password = $input->getArgument('password');
        $email = $input->getArgument('email');

        $manager = $this->getContainer()->get('lencse_user_manager');
        $user = $manager->createUser($username, $email, $password);

        $output->writeln(sprintf('User %s created', $user->getUsername()));

        return 0;
    }
}
