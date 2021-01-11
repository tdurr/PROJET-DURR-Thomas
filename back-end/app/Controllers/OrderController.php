<?php

namespace App\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Doctrine\ORM\EntityManager;
use Commande;
use Lignedecommande;

class OrderController
{
    private EntityManager $m_entityManager;
    public function __construct(EntityManager $entityManager) {
        $this->m_entityManager = $entityManager;
    }

    public function getClientOrders(Request $request, Response $response, array $args): Response
    {
        $login = $args["login"] ?? "";

        if (!preg_match("/[0-9a-zA-Z-_]{3,20}/",$login)) {
            return $response
                ->withStatus(400);
        }

        $repository = $this->m_entityManager->getRepository("Commande");
        $dbOrders = $repository->findBy(['loginclient' => $login], ['date' => 'DESC']);

        if ($dbOrders == null) {
            $response->getBody()->write(json_encode(["success" => false]));
            return $response
            ->withHeader('Content-Type', 'application/json')
            ->withStatus(204);
        }

        $repo = $this->m_entityManager->getRepository("Lignedecommande");

        // $orders = les commandes du client
        $orders = [];
        
        // pour chaques commandes passées par le client
        foreach ($dbOrders as $order) {

            // on cherche toutes les lignes de commande d'une commande en base de données
            $dbOrderLines = $repo->findBy(['orderid' => $order->getId()]);

            // on initialise une liste de lignes pour la commande
            $orderLines = [];

            // pour chaque lignes de commande trouvée on récupère chaque colonne de la table Lignedecommande
            foreach ($dbOrderLines as $line) {
                $oneLine = [];
                $oneLine["productName"] = $line->getProductname();
                $oneLine["quantity"] =  $line->getQuantity();
                $oneLine["lineAmount"] =  $line->getLineamount();

                // puis on ajoute la ligne de commande à la liste des lignes de commande pour une commande donnée
                array_push($orderLines, $oneLine);
            }

            // une fois toutes les lignes de commande d'une commande récupérées, on construit la commande intégrale
            $oneOrder = [];
            $oneOrder["id"] = $order->getId();
            $oneOrder["amount"] = $order->getAmount();
            $oneOrder["date"] = $order->getDate();
            $oneOrder["loginClient"] = $order->getLoginclient();
            $oneOrder["lignes"] = $orderLines;

            // et enfin on ajoute la commande complete à la liste des commandes passées par le client
            array_push($orders, $oneOrder);
        }

        $response->getBody()->write(json_encode($orders));

        return $response
            ->withHeader('Content-Type', 'application/json')
            ->withStatus(200);
    }

    public function buy(Request $request, Response $response, array $args): Response
    {
        $body = $request->getParsedBody();
        $json = $body['order'] ?? "";
        $data = json_decode($json, true);

        $amount = $data['amount'] ?? "";
        $date = $data['date'] ?? "";
        $login = $data['loginClient'] ?? "";
        $lines = $data['lignes'] ?? "";

        if (!preg_match("/[0-9a-zA-Z-_]{3,20}/",$login)) {
            return $response->withStatus(400);
        }

        if (!preg_match("/^[1-9]\d*$/",$amount)) {
            return $response
                ->withStatus(400);
        }

        if (!preg_match("/^([0-9]{4})-([0-1][0-9])-([0-3][0-9])\s([0-1][0-9]|[2][0-3]):([0-5][0-9]):([0-5][0-9])$/",$date)) {
            return $response
                ->withStatus(400);
        }
        
        $newOrder = new Commande;
        $newOrder->setAmount($amount);
        $newOrder->setDate($date);
        $newOrder->setLoginclient($login);
        $this->m_entityManager->persist($newOrder);
        $this->m_entityManager->flush();

        $repository = $this->m_entityManager->getRepository("Commande");
        $orderCreated = $repository->findOneBy(["date" => $date, "amount" => $amount]);

        if ($orderCreated == null) {
            $response->getBody()->write(json_encode(["success" => false]));
            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus(204);
        }

        foreach ($lines as $line) {
            $newOrderLine = new Lignedecommande;
            $newOrderLine->setOrderId($orderCreated);
            $newOrderLine->setProductname($line["productName"]);
            $newOrderLine->setQuantity($line["quantity"]);
            $newOrderLine->setLineamount($line["lineAmount"]);
            $this->m_entityManager->persist($newOrderLine);
            $this->m_entityManager->flush();
        }

        $response->getBody()->write(json_encode(["success" => true]));
        return $response
            ->withHeader("Content-Type", "application/json")
            ->withStatus(201);
    } 
}