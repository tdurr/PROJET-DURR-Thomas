<?php

namespace App\Controllers;

require_once __DIR__ . '/../../bootstrap.php';
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Doctrine\ORM\EntityManager;
use App\Controllers\TokenController;
use Client;

class UserController
{
    private EntityManager $entityManager;
    public function __construct(EntityManager $entityManager) {
        $this->entityManager = $entityManager;
    }

    public function getClient(Response $response, array $args): Response
    {
        $login = $args["login"] ?? "";

        if (!preg_match("/[0-9a-zA-Z-_]{3,20}/",$login)) {
            return $response
                ->withStatus(400);
        }

        $repository = $this->entityManager->getRepository("Client");
        $client = $repository->findOneBy(["login" => $login]);

        if ($client == null) {
            $response->getBody()->write(json_encode(["success" => false]));
        }

        return $response
            ->withHeader('Content-Type', 'application/json')
            ->withStatus(401);

    }

    public function login(Request $request, Response $response): Response
    {
        $data = $request->getParsedBody();

        $login = $data["login"] ?? "";
        $password = $data["password"] ?? "";

        if (!preg_match("/[0-9a-zA-Z-_]{3,20}/",$login)) {
            return $response
                ->withStatus(400);
        }
        if (!preg_match("/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,32}$/",$password)) {
            return $response
                ->withStatus(400);
        }

        $repository = $this->entityManager->getRepository("Client");
        $client = $repository->findOneBy(["login" => $login]);

        if ($client == null || $client->getPassword() != $password) {
            $response->getBody()->write(json_encode(["success" => false]));
            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus(401);
        }

        $response = TokenController::makeJWT($response);

        $response->getBody()->write(json_encode([
            "success" => true,
            "user" => [
                "login" => $login,
            ]
        ]));
        return $response
            ->withHeader("Content-Type", "application/json")
            ->withStatus(200);
            
    }

    public function register(Request $request, Response $response): Response
    {
        $data = $request->getParsedBody();

        $nom = $data['nom'] ?? "";
        $prenom = $data['prenom'] ?? "";
        $adresse = $data['adresse'] ?? "";
        $cp = $data['cp'] ?? "";
        $ville = $data['ville'] ?? "";
        $tel = $data['tel'] ?? "";
        $email = $data['email'] ?? "";
        $civilite = $data['civilite'] ?? "";
        $login = $data['login'] ?? "";
        $pw = $data['pw'] ?? "";

        if (!preg_match("/[A-Za-z]{2,30}/",$nom)) {
            return $response->withStatus(400);
        }

        if (!preg_match("/[A-Za-z]{2,30}/",$prenom)) {
            return $response->withStatus(400);
        }
        
        if (!preg_match("/[0-9A-Za-z-.*, ]{5,50}/",$adresse)) {
            return $response->withStatus(400); 
        }

        if (!preg_match("/^((0[1-9])|([1-8][0-9])|(9[0-8])|(2A)|(2B))[0-9]{3}$/",$cp)) {
            return $response->withStatus(400);
        } 

        if (!preg_match("/[A-Za-z- ]{2,40}/",$ville)) {
            return $response->withStatus(400);
        }

        if (!preg_match("/(0|(\\+33)|(0033))[1-9][0-9]{8}/",$tel)) {
            return $response->withStatus(400);
        }

        if (!preg_match("/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/",$email)) {
            return $response->withStatus(400);
        } 
        if (!preg_match("/[A-Za-z]{2,30}/",$civilite)) {
            return $response->withStatus(400);
        }
        
        if (!preg_match("/[0-9a-zA-Z-_]{3,20}/",$login)) {
            return $response->withStatus(400);
        }

        if (!preg_match("/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,32}$/",$pw)) {
            return $response->withStatus(400);
        }

        $newClient = new Client;

        $newClient->setNom($nom);
        $newClient->setPrenom($prenom);
        $newClient->setAdresse($adresse);
        $newClient->setCp($cp);
        $newClient->setVille($ville);
        $newClient->setTel($tel);
        $newClient->setEmail($email);
        $newClient->setCivilite($civilite);
        $newClient->setLogin($login);
        $newClient->setPassword($pw);
        $this->entityManager->persist($newClient);
        $this->entityManager->flush();

        $response->getBody()->write(json_encode(["success" => true]));
        return $response
            ->withHeader("Content-Type", "application/json")
            ->withStatus(200);
    } 
}