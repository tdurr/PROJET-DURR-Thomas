<?php 
namespace App\Controllers;
use Psr\Http\Message\ResponseInterface as Response;
use Firebase\JWT\JWT;

class TokenController{

    public static function makeJWT(Response $response) : Response {
        
        $issuedAt = time();

        $payload = [
            "userID" => 1,
            "iat" => $issuedAt,
            "exp" => $issuedAt + 120 //120sec
        ];

        $token_jwt = JWT::encode($payload, $_ENV["JWT_SECRET"], "HS256");

        $response = $response->withHeader("Authorization", "Bearer {$token_jwt}");

        return $response;
    }
}