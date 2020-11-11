<?php

namespace App\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

use Firebase\JWT\JWT;

class UserController
{
    public function login(Request $request, Response $response, array $args): Response
    {
        $data = $request->getParsedBody();

        $login = $data["login"] ?? "";
        $password = $data["password"] ?? "";

        if ($login != $_ENV["LOGIN"] || $password != $_ENV["PASSWORD"]) {
            $response->getBody()->write(json_encode([
                "success" => false
            ]));
            return $response
                ->withHeader("Content-Type", "application/json")
                ->withStatus(401);
        }

        $issuedAt = time();

        $payload = [
            "userId" => 1,
            "iat" => $issuedAt,
            "exp" => $issuedAt + 60
        ];

        $token_jwt = JWT::encode($payload, $_ENV["JWT_SECRET"], "HS256");

        $response->getBody()->write(json_encode([
            "success" => true,
            "user" => [
                "login" => $_ENV["LOGIN"],
            ]
        ]));
        return $response
            ->withHeader("Authorization", "Bearer {$token_jwt}")
            ->withHeader("Content-Type", "application/json");
    }

    public function register(Request $request, Response $response, array $args): Response
    {
        $user = $request->getParsedBody();

        $response->getBody()->write(json_encode($user));
        return $response
            ->withHeader("Content-Type", "application/json");
    }
}