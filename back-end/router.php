<?php

use Slim\App;
use Slim\Interfaces\RouteCollectorProxyInterface as Group;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use App\Middlewares\CorsMiddleware;
use Tuupola\Middleware\JwtAuthentication;

return function (App $app) {

    $app->options('/{routes:.*}', function (Request $request, Response $response) {
        return $response;
    });
    $app->add(CorsMiddleware::class);

    $options = [
        "attribute" => "token",
        "header" => "Authorization",
        "secure" => false,
        "algorithm" => ["HS256"],
        "secret" => $_ENV["JWT_SECRET"],
        "path" => ["/user"],
        "ignore" => ["/user/login", "/user/register"],
        "error" => function ($response, $arguments) {
            $data = array('ERREUR' => 'Connexion', 'ERREUR' => 'JWT Non valide');
            $response = $response->withStatus(401);
            return $response
                ->withHeader("Content-Type", "application/json")
                ->getBody()->write(json_encode($data));
        }
    ];
    
    // Chargement du Middleware
    $app->add(new JwtAuthentication($options));

    $app->group('/user', function (Group $group) {
        $group->post('/login', "App\Controllers\UserController:login");
        $group->post('/register', "App\Controllers\UserController:register");
        $group->get('/{login}', "App\Controllers\UserController:getClient");
    });

    $app->group('/product', function (Group $group) {
        $group->get('/all', "App\Controllers\ProductController:getProducts");
        $group->get('/{id}', "App\Controllers\ProductController:getProductById");
    });

    $app->group('/order', function (Group $group) {
        $group->post('/buy', "App\Controllers\OrderController:buy");
        $group->get('/{login}', "App\Controllers\OrderController:getClientOrders");
    });
};