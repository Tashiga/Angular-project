# Angular-project

Un projet de blog simple développé avec Angular et un backend JSON Server. Ce projet permet aux utilisateurs de voir des articles, de commenter et d'ajouter des likes.

## Prérequis

- [Node.js](https://nodejs.org/) (version 14 ou plus récente)
- [Angular CLI](https://angular.io/cli) (version 16)
- [JSON Server](https://github.com/typicode/json-server)

## Installation

1. **Cloner le dépôt** :

   ```bash
   git clone https://github.com/Tashiga/angular-quiz.git
   cd angular-project

2. **Installer les dépendances pour Angular et JSON Server** :

    ```bash
    npm install

3. **Installer JSON Server si vous ne l'avez pas déjà installé globalement** : 

    ```bash
    npm install -g json-server

## Lancer le projet

1. **Lancer le serveur JSON** : 

    ```bash
    json-server --watch back/db.json --port 3000

Le serveur JSON sera lancé sur `http://localhost:3000.`

2. **Lancer l'application Angular** :

    ```bash
    ng serve

L'application sera disponible à l'adresse `http://localhost:4200`.


## Fonctionnalités attendues 

- **Authentification** : Inscription et connexion des utilisateurs.
  
- **Gestion des articles** : Affichage des articles avec les commentaires et les likes.

- **Système de commentaires** : Ajout de commentaires aux articles.

- **Likes sur les articles** : Possibilité d'ajouter des likes aux articles.

- **Filtrage et recherche** : Possibilité de trouver des articles filtrés par le titre, l'auteur ou catégorie.

- **Profil de l'utilisateur** : Gérer son profil et affichage des articles et commentaires publié par l'utilisateur.

- **Système de notification** (optionnel) : Réception d'une notification lorsqu'un de ses articles est commenté ou liké.
