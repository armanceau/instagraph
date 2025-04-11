# instagraph

## Installation

Clonez ce repository :
```bash
git clone https://github.com/armanceau/instagraph.git
```

### Frontend

```bash
cd frontend/instagraph-app
```


Installez les dépendances :
```bash
npm i
```

Démarrez l'application en mode développement :
```bash
npm run dev
```

Accédez à l'application via `http://localhost:5173/`.

### Backend

```bash
cd backend
```

Créez un fichier `.env` à la racine du projet :
    ```
    DATABASE_URL="file:./dev.db"
    JWT_SECRET="monSecret"
    ```

Installez les dépendances :
```bash
npm i
```

Initialiser la base : 
```bash
npm run prisma migrate dev --name init
```


Démarrez l'application en mode développement :
    ```bash
    npm run dev
    ```

Accédez à l'application via `http://localhost:4000/`.

# 📌 Modèle de Données

## 🧑‍💻 Table : User
| Champ      | Type   | Contraintes         | Description                       |
|------------|--------|---------------------|-----------------------------------|
| `id`       | STRING | PRIMARY KEY         | Identifiant unique de l'utilisateur |
| `username` | STRING | UNIQUE, NOT NULL    | Nom d'utilisateur |
| `password` | STRING | NOT NULL            | Mot de passe haché |
| `email` | STRING | NOT NULL            | Email de l'utilisateur |
| `ntel` | STRING | NOT NULL            | Numéro de téléphone de l'utilisateur |


---
## 📝 Table : Article
| Champ        | Type   | Contraintes                | Description                        |
|-------------|--------|----------------------------|------------------------------------|
| `id`        | STRING | PRIMARY KEY                | Identifiant unique de l'article  |
| `titre`     | STRING | NOT NULL                   | Titre de l'article               |
| `description` | STRING | NOT NULL                   | Contenu de l'article             |
| `author`    | STRING | FOREIGN KEY → User(id)    | Auteur de l'article              |
| `like`      | INT    | DEFAULT 0                  | Nombre de likes                  |
| `date`      | DATE   | NOT NULL                   | Date de publication              |

---

## 💬 Table : Commentaire
| Champ        | Type   | Contraintes                | Description                        |
|-------------|--------|----------------------------|------------------------------------|
| `id`        | STRING | PRIMARY KEY                | Identifiant unique du commentaire |
| `description` | STRING | NOT NULL                   | Contenu du commentaire            |
| `date`      | DATE   | NOT NULL                   | Date du commentaire               |
| `author`    | STRING | FOREIGN KEY → User(id)    | Auteur du commentaire             |
| `article_id` | STRING | FOREIGN KEY → Article(id) | Article associé                   |

---
## 🔗 Relations entre les tables
- Un **User** peut écrire plusieurs **Articles**.
- Un **Article** peut recevoir plusieurs **Commentaires**.
- Un **User** peut poster plusieurs **Commentaires**.


-------
## Présentation de notre serveur Apollo et du client Prisma
- La liste de nos différentes Mutations:
  <img width="316" alt="image" src="https://github.com/user-attachments/assets/81016e72-fff8-4e67-aa41-c482e9ca6972" />
- Puis de nos getters:
  <img width="334" alt="image" src="https://github.com/user-attachments/assets/8717ba0d-40f7-4a13-83ad-64ea48e5e167" />

- On peut voir que chaque Article est lié à un utilisateur par relation:
  <img width="956" alt="image" src="https://github.com/user-attachments/assets/cc02941d-8145-47be-9e93-bd994fe3f7fa" />

- Quant aux commentaires, chaque commentaire sont en relation avec un utilisateur et une publication
  <img width="959" alt="image" src="https://github.com/user-attachments/assets/2621d17a-d509-42a3-8eb1-074db57b2718" />


## Résultat de notre application !
- Les view de **Register/Sign in**
<img width="762" alt="image" src="https://github.com/user-attachments/assets/79e70f27-50ae-4063-86c7-498da15ca4d4" />
<img width="678" alt="image" src="https://github.com/user-attachments/assets/ebd125c1-1017-471f-8dba-d7a08625be6e" />

- La view principale pour **Créer et voir ses les articles**
<img width="688" alt="image" src="https://github.com/user-attachments/assets/d6d49ad1-351c-4261-8bcf-09d1326797ec" />
<img width="395" alt="image" src="https://github.com/user-attachments/assets/11cff5ab-2d80-4378-a4a4-2917281cc621" />

-  **La vue par utilisateur** pouvant regarder ses articles.  
<img width="755" alt="image" src="https://github.com/user-attachments/assets/15b43b55-7f58-4296-a663-a8710063a0a0" />






