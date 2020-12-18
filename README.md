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

L'API est déployée sur Heroku comme expliqué plus bas. Cependant pour utiliser l'API en local:

1) Ne pas oublier de se mettre en localhost dans le dossier `environnement` du front-end angular

2)
```
php -S localhost:8080 -t public
```

**Base de données PostgreSQL (aussi déployée sur Heroku)**

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
    date timestamp, 
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
    CONSTRAINT FK_Commande FOREIGN KEY(orderId) REFERENCES Commande(id)
);
```

**Disponible sur stackblitz:**

[https://stackblitz.com/github/tdurr/projet/tree/master/front-end](https://stackblitz.com/github/tdurr/projet/tree/master/front-end)


## Heroku
L'API est déployée sur `Heroku` pour que l'utilisation soit plus pratique pour tout le monde. Du coup seule l'app Angular est à lancer avec un `ng serve --open`.

```diff
- /!\ Lors de la première utilisation depuis un certain temps,
- il se peut qu'il faille patienter quelques secondes avant d'avoir une réponse de l'API
- car elle se met en "sommeil" après une longue inactivité. /!\
```

Adresse de l'API: [https://tp05-tdr.herokuapp.com/](https://tp05-tdr.herokuapp.com/)

Les endpoints sont:
```bash
https://tp05-tdr.herokuapp.com/user/register
https://tp05-tdr.herokuapp.com/user/login
https://tp05-tdr.herokuapp.com/user/{login}
https://tp05-tdr.herokuapp.com/product/all
https://tp05-tdr.herokuapp.com/product/{id}
```

Le git de l'API sur lesquels sont basés les déploiements est un git privé identique au contenu du dossier `back-end`. Contactez-moi si il y a un quelconque soucis avec celle-ci svp. Je la re-déploierai.