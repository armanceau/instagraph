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


