# Exercice 1

Réaliser une application web "Evento" permettant de gérer des évènements.
L'app doit être codée de préférence avec un framework MVC NodeJS en typescript si possible.
Il est possible d'utiliser une librairie JS de votre choix si vous le souhaitez,
ReactJS si possible. Si un framework CSS est utilisé, préférez Material si possible.

## Page "Home"

- Afficher une liste des évènements avec toutes leurs caractéristiques (cf. ci-dessous)
- Afficher un bouton "Ajouter un évènement" pour ouvrir un formulaire "Évènement" (cf. partie suivante)
- Ajouter un lien sur le titre des évènements pour afficher la page "Évènement"
- Les évènements dont la date est dans les 10 prochains jours, doivent avoir leur titre affiché en rouge
- Les évènements dont la date est déjà passée doivent avoir leur titre affiché en gris
- Les évènements dont la date est déjà passée depuis plus de 10 jours ne doivent pas être affichés
- 2 possibilités pour trier les évènements :
  - Tri par date des évènements
  - Tri par organisateur et nom
    - Facultatif : Affichage d'un histogramme avec le nombre d'évènements par jour, allant d'il y a 10 jours à dans 10 jours (soit 21 jours en tout)

## Formulaire "Évènement"

Formulaire permettant d'ajouter des évènements en base de données :

- Nom de l'évènement (obligatoire, 60 caractères max)
- Date de l'évènement (obligatoire)
- Description (300 caractères max)
- Email de l’organisateur (obligatoire, email valide requis)

Tous les champs doivent être valides pour pouvoir enregistrer un événement.
Ce formulaire est affiché sous forme de modal ou directement dans la page "Home".

## Page vue "Évènement" unique

- Afficher toutes les caractéristiques de l'évènement
- Afficher la liste des commentaires par ordre chronologique, du plus ancien au plus récent.
- Afficher un formulaire permettant d'ajouter un commentaire sur l'évènement. 2 informations :
  - Auteur (obligatoire)
  - Message (obligatoire, 140 caractères max)
