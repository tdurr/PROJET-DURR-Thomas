<?php

namespace App\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Doctrine\ORM\EntityManager;
use Produit;

class ProductController
{
    private EntityManager $m_entityManager;
    public function __construct(EntityManager $entityManager) {
        $this->m_entityManager = $entityManager;
    }

    public function getProducts(Request $request, Response $response, array $args): Response
    {
        $repository = $this->m_entityManager->getRepository("Produit");
        $dbProduits = $repository->findAll();

        if ($dbProduits == null) {
            $response->getBody()->write(json_encode(["success" => false]));
            return $response
            ->withHeader('Content-Type', 'application/json')
            ->withStatus(204);
        }

        $produits = [];

        foreach ($dbProduits as $produit) {
            $produits[] = [
                "id" => $produit->getId(),
                "name" => $produit->getName(),
                "price" => $produit->getPrice(),
                "brand" => $produit->getBrand(),
                "category" => $produit->getCategory(),
                "hp" => $produit->getHp(),
                "torque" => $produit->getTorque(),
                "image" => $produit->getImage()
            ];
        }

        $response->getBody()->write(json_encode($produits));

        return $response
            ->withHeader('Content-Type', 'application/json')
            ->withStatus(200);
    }

    public function getProductById(Request $request, Response $response, array $args): Response
    {
        $id = $args["id"] ?? "";

        if (!preg_match("/^[1-9]\d*$/",$id)) {
            return $response
                ->withStatus(400);
        }

        $repository = $this->m_entityManager->getRepository("Produit");
        $produit = $repository->findOneBy(["id" => $id]);

        if ($produit == null) {
            $response->getBody()->write(json_encode(["success" => false]));
            return $response
            ->withHeader('Content-Type', 'application/json')
            ->withStatus(204);
        }

        $body = array(
            "id" => $produit->getId(),
            "name" => $produit->getName(),
            "price" => $produit->getPrice(),
            "brand" => $produit->getBrand(),
            "category" => $produit->getCategory(),
            "hp" => $produit->getHp(),
            "torque" => $produit->getTorque(),
            "image" => $produit->getImage()
        );

        $response->getBody()->write(json_encode($body));

        return $response
            ->withHeader('Content-Type', 'application/json')
            ->withStatus(200);
    }
}