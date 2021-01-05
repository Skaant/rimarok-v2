> L'abstraction est l'une des compétence-clé du programmeur.

Il existe plusieurs façons de partager du code à travers ses projets : du simple copié-collé au partage de modules sur des registres publics dédiés à un langage (npm pour le JavaScript, Composer pour PHP, Maven etc.).

Dans cet article, j'aborde le sujet **de la publication de module npm sur le registre public**.

Je l'illustre avec le processus de mise au point, de partage et d'intégration de **mon framework [`motifs-js`](https://github.com/Skaant/motifs-js)**, dont je me sers pour le "test" et le "build" de mes différents sites internet ([rimarok.com](https://rimarok.com), [imrok.fr](https://imrok.fr), [highbs-bok.art](https://highbs-bok.art) ou encore le [site de la documentation du module](https://motifs-js-website.vercel.app)).

Mais revenons une bonne fois pour toute sur les motivations nécessaires à la création d'un module npm. 

## Pourquoi sortir du détails / du spécifique ?

Le problème à être toujours la tête dans le guidon c'est qu'on risque de ne pas correctement percevoir l'environnement alentour. 

Nous ratons alors l'opportunité de dériver des motifs (*patterns*) à la fois **plus pertinents** (car ceux dans lesquels l'application va véritablement évoluer) et **plus ré-utilisables**.

Cette seconde préoccupation ne présente réellement un intérêt que dans la perspective d'industrialiser des parties d'un produit, en repliquant des concepts (et éventuellement leur implémentation) d'un contexte à l'autre.

Voyant le temps nécessaire pour développer et tester le contenu commun qu'est `motifs-js`, je ne pourrais que trop mettre en garde sur le fait que **le travail requis pour la mise-au-point d'un module npm ne se justifie que s'il en économise d'avantage à moyen et long termes**.

Alors, quand est-ce le bon moment ?

### Identifier le besoin d'abstraction

Prenons pour exemple l'historique de ma flotille de sites.

1. Initialement, j'ai l'envie de partager mes créations artistiques avec [imrok.fr](https://imrok.fr),
2. Rapidement, je cherche à isoler une partie de ma production (un livre et ses storyboards) sur [highbs-bok.art](https://highbs-bok.art), et à me constituer une *landing page* professionnelle sur [rimarok.com](rimarok.com).

Déjà à ce moment, je me retrouve à copier-coller des parties du code du premier projet au second.

Mais bien évidemment lorsque j'améliore, corrige ou étend, une fonctionnalité sur un projet je suis **obligé de répercuter les modifications sur l'autre manuellement**.

Toutefois, voilà une bonne illustration de l'**émergence du besoin d'abstraction** : quand deux consommateurs (au moins) commencent à partager le même bloc logique.

Dans la section suivante, nous nous servirons des fonctionnalités `motifs-js` pour continuer à imager le partage de concepts entre projets.

### Grands blocs logiques de `motifs-js`

Reprenons l'historique commencé plus haut pour re-tracer l'acquisition de nouvelles fonctionnalités par le framework.

À ce stade, je développe en commun :

* Un builder de site statique,
* Une interface en ligne de commande,
* Des outils de manipulation du file-system,
* Un moteur de tests unitaires pour les spécifications des blocs précédents.

*Les raisons pour lesquelles j'ai fait le choix de développer la racine du framework sans en intégrer d'autres (ex: `jest` pour les tests, `gatsby` pour la génération de site) seront détaillées dans un autre article.*

En partant d'une approche UX / DX (developer experience), l'objectif est de **réduire au maximum les points de résistance lors de l'usage de l'outil**, notamment en évitant de ré-écrire (et de maintenir) le même contenu.

Conjointement, d'autres fonctionnalités génériques moins visibles sont également présentes :

* Un serveur de développement local,
* Un builder de README,
* Une commande pour la création de nouveaux motifs.

À ceci s'ajoute la difficulté de pouvoir lancer le framework en *standalone* (lorsqu'on développe le framework lui-même) et comme dépendance d'autres projets.

La somme des problématiques soulevées et partagées par ces fonctionnalités mènent à dériver des concepts encore plus abstraits, tels que :

* Les énumérations,
* Les types de contenu et leurs occurences,
* Les divers états d'une instance (*runtime*, *fichier texte*, *fichier interprété* ...),
* Le cache (ou *memoization*),
* Et bien d'autres encores.

## La forme d'un module npm

La façon minimale pour publier un module est :

```bash
npm init
npm login
npm publish
```

De là, il nous serait possible, après un `npm install <nom-du-module>` dans le projet concerné, d'importer le module depuis n'importe quel fichier avec la ligne (exemple) :

```javascript
import motifsJs from 'motifs-js'
```

Cependant, comme je vais m'en apercevoir, entre [le répertoire GitHub](https://github.com/Skaant/motifs-js) que je clonais à la racine de chaque projet et la publication d'un module npm, il y a quelques subtilités.

Intéressons-nous donc aux quelques contraintes apportées par le format du module npm.

### Le point d'entrée

Un module npm est (re)présenté par le fichier `package.json`, obtenu lors de l'execution du script `npm init`.

Pour le moment c'est un point qui souffre encore de ne pas être inclus dans un motif du framework, mais envisagé (avec l'ajout de PROJECT).

Cependant, même s'il faut la copier manuellement, tous les projets partagent la même implémentation de leur point d'entrée avec un `index.js` qui importe `motifs-js` pour l'initialiser et ouvrir le "réceptionneur" du CLI.

Par exemple, dans [le projet-source du site rimarok](https://github.com/Skaant/rimarok), on a [pour index](https://github.com/Skaant/rimarok/blob/master/index.js) :

```javascript
import motifsJs from 'motifs-js'

motifsJs(
  import.meta.url,
  { log: true }
)
  .cli(
    process.argv.slice(3),
    { log: true }
  )
```

Le fichier `index.js` est le **point d'entrée de chaque projet**, et `motifs-js` n'y échappe pas (*standalone*).

Le sens donné à cette notion dans le framework est renforcé par la necessité de `motifs-js` d'être initialisé avant d'être utilisable.

De là, on récupère MOTIF (ou `motifMotif`), qui nous permet d'accéder aux fonctionnalités principales du framework.

Comme la racine d'un backend API REST, **le point d'entrée d'un module, doit contenir tous les outils nécessaires à l'usage des fonctionnalités que ce module propose**, documentation comprise.

Passons à la considération suivante.

### Affiner le coeur générique du framework

Le module doit être minimaliste : **il ne doit emporter avec lui que les fonctionnalités qui vont être utilisées par ses consommateurs**.

Avec ça en tête, je décide d'**externaliser le site de la documentation dans un répertoire auxiliaire** afin de ne pas le voir dupliquer dans chaque projet.

Cela met en relief l'accessibilité des consommateurs par rapport au module : elle est nulle.

Pour dériver ainsi le nombre d'instances de PROJET, de MOTIFS spécifiques, d'ARTICLES et de contenu en général, il faudra cloner les consommateurs identifiés.

### Tester en local : comment ?

Avant de publier, il semble de bon sens de tester le module localement.

Or, on sera surpris que l'installation d'un module local, bien que possible, ne s'effectue pas dans les mêmes conditions qu'on module externe.

En effet, lorsqu'on lance `npm i <chemin-relatif-vers-le-module>` **npm ne copie pas le contenu du module mais référence simplement son chemin** dans `package.json`.

Dans mon projet, j'ai besoin de récupérer le contenu du répertoire du module pour, entre autres, lister les fichiers qu'il contient : c'est là la seule problématique majeure que j'ai rencontre durant cette migration.

Pour l'heure, dans les tests du module, je vérifiais l'accessibilité du dossier `node_modules/motifs-js` lorsque le projet ne tourne pas en standalone (donc mode consommateur) ... sauf qu'avec l'installation locale ce dossier n'existe pas.

L'astuce un peu sale que j'ai trouvé pour le moment est de cloner le répertoire de `motifs-js` dans les `node_modules` des projets dont sur lesquels je teste l'intégration du framework.

Bien entendu, et comme toujours, **à différents niveaux de tests, différents besoins**.

Il est tout à faire possible de copier-coller le dossier, mais l'avantage du git c'est de pouvoir récupérer les modifications automatiquement lors de la mise à jour du répertoire ainsi que de travailler sur des branches de développement.

## Conclusion

Développer un projet comme un module npm nécessite de bien garder en tête la forme standard d'un module.

En plus de rendre simplement accessible les fichiers du module, comme avec ces lignes de `mapping.util.js` :

```javascript
import WEBSITE_PAGE from 'motifs-js/_motifs/website-page/website-page.motif.js'
import FOLDER from 'motifs-js/_motifs/folder/folder.motif.js'
```

... le module dispose d'un point d'entrée autour duquel maximiser les accès aux fonctionnalités.

On cherche **au maximum à encapsuler les blocs derrière des abstractions**, ainsi que leurs implémentations.

Une attention particulière sera portée à la pertinence des fonctionnalités embarquées dans le module : **seulement le contenu partagé par les consommateurs**.

On vérifiera également que ces consommateurs intègrent correctement le framework, bien que la façon de tester nécessite un point de vue méta que je n'ai pas encore poussé.

*La roadmap est infinie, les fonctionnalités critiques à développer puis à fiabiliser nombreuses !**

À bientôt pour des nouvelles de mes projets de développement, et d'autres réflexions sur le code.