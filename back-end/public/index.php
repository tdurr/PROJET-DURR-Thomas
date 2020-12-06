<?php

use Slim\Factory\AppFactory;

require __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/../bootstrap.php';

$app = AppFactory::create();

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . "/..");
$dotenv->load();

/* PHP-DI https://php-di.org/doc/getting-started.html
$containerBuilder = new DI\ContainerBuilder();
$containerBuilder->useAutowiring(true);
$container = $containerBuilder->build();
$container->get(EntityManager::class); */


$routes = require __DIR__ . '/../router.php';
$routes($app);

$app->run();