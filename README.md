# instagraph

# Modelisation BDD

User 		
id STRING
username !STRING
password !STRING
ListeArticles[Article]


Commentaire

id STRING!
description STRING!
date DATE
author  STRING!


Articles

id STRING

Titre !STRING
Description !String
Author !STRING
Comment STRING
Like !INT
Date DATE!

# 📌 Modèle de Données

## 🧑‍💻 Table : User
| Champ      | Type   | Contraintes         | Description                       |
|------------|--------|---------------------|-----------------------------------|
| `id`       | STRING | PRIMARY KEY         | Identifiant unique de l'utilisateur |
| `username` | STRING | UNIQUE, NOT NULL    | Nom d'utilisateur |
| `password` | STRING | NOT NULL            | Mot de passe haché |

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




