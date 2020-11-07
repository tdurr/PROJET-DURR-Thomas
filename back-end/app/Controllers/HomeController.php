<?php

namespace App\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class HomeController
{
    public function home(request $request, Response $response, array $args)
    {
        $response->getBody()->write("Page d'accueil");
        return $response;
    }
}