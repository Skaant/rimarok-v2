Pour pouvoir se répérer dans une codebase complexe,
Pouvoir visualiser les liens entre les fichiers,
Visualiser les liens avec les autres services,
Visualiser l'exécution (en debug ou en temps réel)

Notre perception de seulement trois dimensions est un handicap considérable.

Deux axes pour améliorer notre exploration des codebases complexes :
* Ludifier l'expérience de navigation et d'interaction,
* Tirer au mieux parti de la troisième dimension avec la VR.

## Ludification
Il y a longtemps je jouais à Heroes of the Storm quand j'eus soudain une révélation.

Les personnages, la carte, les mécanismes ...
Tout n'était que des changements de variables.

Des points ici, des points là,
De la conversion de l'un en l'autre :
Tant les repères spatio-temporels que les
valeurs de mes caractéristiques et de mes points de dégâts
ne faisaient que se dérouler en fonction des contraintes logiques mises en place par les game designers et les développeurs.

**Imaginez que la code base prennent la forme du jeu de votre choix :**
* Vous créez un univers de MMORPG où les modules donnent naissance à des territoires, vos personnas à des PNJ, les quêtes répondent à des tâches,
* Vous créez un plateau de jeu 4X où les fichiers sont des villes, les routes entre elles sont les liens de consommation et les autres dirigeants les web-service avec lesquels vous collaborer ...

Avec de l'imagination, on pourrait voir apparaître des FPS, des MOBA, des ci- des ça- comme autant de thème de votre IDE préféré.

La seule limite alors c'est garder la cohérence du gameplay et du design avec les dimensions interreliées du code (ex: réseau, données, runtime client, etc.).

## Une piste avec la 3D
Déjà s'il on pouvait enfiler un casque de VR et naviguer en trois dimensions entre les différents fichiers, ça serait intense.

Pour chaque élément présent sur un plan, et donnant naissance à de nouveaux, une arborescence en trois dimensions peut grandement soulager l'UX.

Une autre situation qui bénéficierait grandement d'une vision arborescente (ou nodale plutôt) en 3D est le réseau d'hyperliens d'un site ou d'un groupe de sites internet.

Pour bien comprendre **comment éclater de multiples dimensions vers seulement une deux ou trois**, je vais prendre un exemple avec un jeu que je connais bien (Civilization) :

* Vue stratégique : 2D (visuellement 3 mais sans intérêt pour le sujet),
* Séléction ville, **possibilité de passer d'une ville à une autre avec flèches précédentes et suivantes** (étalement des villes positionnées en 2D maintenant sur une ligne),
* Sélection file de construction, par une matrice bâtiments sur matrices technologies disponibles x bâtiments déjà construits (3D sur une seule);

De la vue 2D initiale on peut connecter 4 nouvelles dimensions et donc **naviguer dans 6, grâce à une succession de listes et de vues de dimensions inférieures.**

## Conclusion
Avant de trouver comment percevoir de nouvelles dimensions,
adaptons-nous aux contraintes de notre petit corps de singe partiel !

Jouons à construire ces cathédrales de code, ludiques,
dans lesquelles naviguer de façon nodale.