# TP05 Thomas DURR

## Repository
Il y a un premier dossier qui contient tout le front-end Angular et un second dossier qui contient le back-end avec l'API php.

## Utiliser le projet
**Site Angular:**
```
ng serve --open
```

**API (Optionnel car déployée en ligne (voir plus bas)):**
```
php -S localhost:8080 -t public
```

**Disponible sur stackblitz:**
[https://stackblitz.com/github/tdurr/tp05_durr_thomas/tree/master/front-end](https://stackblitz.com/github/tdurr/tp05_durr_thomas/tree/master/front-end)

## Déploiment et utilisation de l'API
L'API est aussi déployée sur `Heroku` pour que l'utilisation soit plus pratique pour tout le monde. Du coup seule l'app Angular est à lancer avec un `ng serve --open`. Les en-têtes HTTP sont totalement gérées côté serveur plutôt que d'utiliser un proxy sur le front-end Angular ce qui est la bonne pratique.

Adresse de l'API: [https://tp05-tdr.herokuapp.com/](https://tp05-tdr.herokuapp.com/)

Les deux endpoints sont:
```bash
https://tp05-tdr.herokuapp.com/user/register
https://tp05-tdr.herokuapp.com/user/login
```

Pour les tester, il est possible d'utiliser `postman` et d'y envoyer des requêtes `POST`:
```
Sur https://tp05-tdr.herokuapp.com/user/login: 
Ex: un body x-www-form-urlencoded login:tdr password:P@$$w0rd renvoie un succès + token JWT

Sur https://tp05-tdr.herokuapp.com/user/register 
Ex: un body x-www-form-urlencoded contenant un Client renvoie ce même Client.
```

Le git de l'API sur lesquels sont basés les déploiements est un git privé identique au contenu du dossier `back-end`.