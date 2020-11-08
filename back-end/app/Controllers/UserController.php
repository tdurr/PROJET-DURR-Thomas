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
                ->withHeader("Content-Type", "application/json");
        }

        $issuedAt = time();

        $payload = [
            "user" => [
                "id" => $_ENV["ID"],
                "email" => $_ENV["EMAIL"]
            ],
            "iat" => $issuedAt,
            "exp" => $issuedAt + 60 // 60 secondes
        ];

        $token_jwt = JWT::encode($payload, $_ENV["JWT_SECRET"], "HS256");

        $response->getBody()->write(json_encode([
            "success" => true,
            "user" => [
                "id" => $_ENV["ID"],
                "login" => $_ENV["LOGIN"],
                "email" => $_ENV["EMAIL"],
            ]
        ]));
        return $response
            ->withHeader("Authorization", $token_jwt)
            ->withHeader("Content-Type", "application/json");
    }

    public function register(Request $request, Response $response, array $args): Response
    {
        $user = $request->getParsedBody();

        $result = [
            "success" => true,
            "user" => $user
        ];

        $response->getBody()->write(json_encode($result));
        return $response
            ->withHeader("Content-Type", "application/json");
    }
}