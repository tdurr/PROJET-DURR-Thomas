# TP06 Thomas DURR

## Repository
Il y a un premier dossier qui contient tout le front-end Angular et un second dossier qui contient le back-end avec l'API php.

## Utiliser le projet

Reminder: `npm install` dans front-end/ et `composer install` dans back-end/

**Site Angular:**
```
ng serve --open
```

**API (Optionnel car déployée en ligne (voir plus bas)):**
Ne pas oublier de se mettre en localhost dans le dossier environnement dans le front-end/src/ si on souhaite appeler le serv local.
```
php -S localhost:8080 -t public
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

**Disponible sur stackblitz:**
[https://stackblitz.com/github/tdurr/tp06_durr_thomas/tree/master/front-end](https://stackblitz.com/github/tdurr/tp06_durr_thomas/tree/master/front-end)

## Déploiment et utilisation de l'API
L'API est aussi déployée sur `Heroku` pour que l'utilisation soit plus pratique pour tout le monde. Du coup seule l'app Angular est à lancer avec un `ng serve --open`. Les en-têtes HTTP sont totalement gérées côté serveur plutôt que d'utiliser un proxy sur le front-end Angular ce qui est la bonne pratique.

```diff
- /!\ Lors de la première utilisation depuis un certain temps,
- il se peut qu'il faille patienter quelques secondes avant d'avoir une réponse de l'API
- car elle se met en "sommeil" après une longue inactivité. /!\
```

Adresse de l'API: [https://tp05-tdr.herokuapp.com/](https://tp05-tdr.herokuapp.com/)

Les trois endpoints sont:
```bash
https://tp05-tdr.herokuapp.com/user/register
https://tp05-tdr.herokuapp.com/user/login
https://tp05-tdr.herokuapp.com/customers/{login}
```

Pour les tester, il est possible d'utiliser `postman` et d'y envoyer des requêtes `POST`:
```
POST Sur https://tp05-tdr.herokuapp.com/user/login :
Ex: un body x-www-form-urlencoded login:tdr password:P@$$w0rd renvoie un succès + token JWT

POST Sur https://tp05-tdr.herokuapp.com/user/register :
Ex: un body x-www-form-urlencoded login password renvoie un token JWT et le login.

GET Sur https://tp05-tdr.herokuapp.com/customers/{login}:
Ex: permet de retrouver les informations client à partir d'un login.
```

Le git de l'API sur lesquels sont basés les déploiements est un git privé identique au contenu du dossier `back-end`. Contactez-moi si il y a un quelconque soucis avec celle-ci svp. Je la re-déploierai.