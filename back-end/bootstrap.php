<?php
require_once "vendor/autoload.php";

use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();
$isDevMode = true;


// the connection configuration
$dbParams = array(
    'driver' => 'pdo_pgsql',
    'host' => $_ENV['DB_HOST'],
    'dbname' => $_ENV['DB_NAME'],
    'user' => $_ENV['DB_USER'],
    'port' => $_ENV['DB_PORT'],
    'password' => $_ENV['DB_PW']
);

$config = Setup::createYAMLMetadataConfiguration(array(__DIR__."/config/yaml"), $isDevMode);
$entityManager = EntityManager::create($dbParams, $config);