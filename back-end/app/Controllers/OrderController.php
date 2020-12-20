<?php

namespace App\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Doctrine\ORM\EntityManager;
use Commande;
use LigneDeCommande;

class OrderController
{
    private EntityManager $m_entityManager;
    public function __construct(EntityManager $entityManager) {
        $this->m_entityManager = $entityManager;
    }

    public function getClientOrders(Request $request, Response $response, array $args): Response
    {
        $login = $args["login"] ?? "";

        $repository = $this->m_entityManager->getRepository("Commande");
        $dbOrders = $repository->findBy(array('colClient' => '{loginClient}'));

        if ($dbOrders == null) {
            $response->getBody()->write(json_encode(["success" => false]));
            return $response
            ->withHeader('Content-Type', 'application/json')
            ->withStatus(204);
        }

        $repo = $this->m_entityManager->getRepository("LigneDeCommande");
        $orders = [];
        
        foreach ($dbOrders as $order) {
            
            $dbOrderLines = $repository->findBy(array('orderId' => $order->getId()));
            $orderLines = [];
            foreach ($dbOrderLines as $line) {
                $orderLines[] = [
                    "id" => $line->getId(),
                    "orderId" => $line->getOrderId(),
                    "productName" => $line->getProductname(),
                    "quantity" => $line->getQuantity(),
                    "lineAmount" => $line->getLineamount()
                ];
            }

            $orders[] = [
                "id" => $order->getId(),
                "amount" => $order->getAmount(),
                "date" => $order->getDate(),
                "loginClient" => $order->getLoginclient(),
                "lines" => $orderLines
            ];
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
        $login = $data['login'] ?? "";
        $lines = $data['lines'] ?? "";


        if (!preg_match("/[0-9a-zA-Z-_]{3,20}/",$login)) {
            return $response->withStatus(400);
        }

        if (!preg_match("/^[1-9]\d*$/",$amount)) {
            return $response
                ->withStatus(400);
        }

        if (!preg_match("/[0-9]{1,4}/[0-9]{1,2}/[0-9]{1,2} [0-9]{1,2}:[0-9]{1,2}:[0-9]{1,2}/",$date)) {
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

        $orderId = $orderCreated->getOrderid();   

        foreach ($lines as $line) {
            $newOrderLine = new LigneDeCommande;
            $newOrderLine->setOrderId($orderId);
            $newOrderLine->setProductname($line[0]);
            $newOrderLine->setQuantity($line[1]);
            $newOrderLine->setLineamount($line[2]);
            $this->m_entityManager->persist($newOrderLine);
            $this->m_entityManager->flush();
        }

        $response->getBody()->write(json_encode(["success" => true]));
        return $response
            ->withHeader("Content-Type", "application/json")
            ->withStatus(201);
    } 
}