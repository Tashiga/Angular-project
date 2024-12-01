# Angular-project

Un projet de blog simple développé avec Angular et un backend JSON Server. Ce projet permet aux utilisateurs de voir des articles, de commenter et d'ajouter des likes.

## Prérequis

- [Node.js](https://nodejs.org/) (version 14 ou plus récente)
- [Angular CLI](https://angular.io/cli) (version 16)
- [JSON Server](https://github.com/typicode/json-server)

## Membres

- Sashtiga SASIRAJAH
- Brahim BEN EL HADJ

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
  
- **Gestion des articles** : Affichage des articles avec les commentaires et les likes. Il peut créer un articles et le visualiser. Il peut visualiser un article en detail ou visualiser tous les articles.

- **Profil de l'utilisateur** : Gérer son profil. Il peut consulter et modifier ses informations.

- **Système de bloc-notes** : Il peut sauvegardé des notes et supprimer un note. Seul les notes créer par l'utilisateur sont affichées.
