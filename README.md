# Projet SI-WEB Thomas DURR

## Repository
Il y a un premier dossier qui contient tout le front-end Angular et un second dossier qui contient le back-end avec l'API php.

## Utiliser le projet

Reminder: `npm install` dans front-end/ et `composer install` dans back-end/

**Site Angular:**
```
ng serve --open
```

**API:**

Pour utiliser l'API en local:

1) Ne pas oublier de se mettre en localhost dans le dossier `environnement` du front-end angular

2)
```
php -S localhost:8080 -t public
```

Les endpoints sont:
```bash
/user/register # Nouveau compte
/user/login # Se connecter
/user/{login} # Informations sur son compte
/product/all # Liste des produits
/product/{id} # Fiche d'un produit
/order/buy # Passer une commande
/order/{login} # Historique des commandes par utilisateur
```

**Base de données PostgreSQL déployée sur Heroku**

Table Client
```sql
CREATE TABLE Client 
(
    id SERIAL PRIMARY KEY, 
    nom text, 
    prenom text, 
    adresse text, 
    cp text, 
    ville text, 
    tel text, 
    email text, 
    civilite text, 
    login text, 
    password text, 
    CONSTRAINT UC_Client UNIQUE (login)
);
```

Table Produit
```sql
CREATE TABLE Produit 
(
    id SERIAL PRIMARY KEY, 
    name text, 
    price NUMERIC(10,2), 
    brand text, 
    category text, 
    hp int, 
    torque int, 
    image text
);
```

Table Commande
```sql
CREATE TABLE Commande
(
    id SERIAL PRIMARY KEY, 
    amount NUMERIC(10,2), 
    date text, 
    loginClient text,
);
```

Table LigneDeCommande
```sql
CREATE TABLE LigneDeCommande
(
    id SERIAL PRIMARY KEY,
    orderId int,
    productName text,
    quantity int,
    lineAmount NUMERIC(10,2),
    CONSTRAINT FK_Commande FOREIGN KEY(orderId) REFERENCES Commande(id)
);
```

**Disponible sur stackblitz:**

[https://stackblitz.com/github/tdurr/projet/tree/master/front-end](https://stackblitz.com/github/tdurr/projet/tree/master/front-end)
