Début d'année 2021, mon objectif est clair :
**Il me faut constituer un portoflio**

Celui-ci se déploiera autour des différentes prestations que je propose :
* **Maîtrise de la totalité des étapes du développement de projets web**,
* Conception : réception du besoin, maquettage, architecture logicielle,
* **Déploiement et développement de fonctionnalités spécifiques** sur CMS (WordPress) et statiques (JAMStack + CI/CD),
* Développement **full-stack JavaScript** (Node.js + ES6).

Pour cela ma flotille de sites (et autres productions) **doit présenter et pouvoir répondre à un ensemble de *use cases***.

Heureusement, parce que je dédie mon temps aux projets dont j'ai moi-même vraiment besoin, les cas pratiques sont clairs et adressés.

Faisons un point sur ces différents travaux, leurs objectifs et leur roadmap.

## [rimarok.com](/)

Pour le moment, bien qu'en discutant avec ma coach [Anaëlle Sorignet](https://freetheideas.fr/) la séparation me semble moins pertinente qu'il y a quelques mois, **rimarok.com a pour vocation de présenter mon activité de freelance développeur web** (par opposition à imrok.fr, dédié lui à mes activités créatives).

Les restes d'une croyance selon laquelle un employeur ne saurait apprécier les parts sensible et artistique de ma personnalité.

### Articles

Très récemment, rimarok.com vient de récupérer le motif ARTICLE de [`motifs-js`](https://github.com/Skaant/motifs-js) et je commence à y ajouter des articles que je souhaite de plus en plus consistents, bien rédigés et fréquents.

Les sujets en perspective :
* **L'éco-conception**, évidemment,
* **Le développement web**, évidemment aussi,
* Les actualités "techniques" de mes sites internet,
* La présentation de mes prestations secondaires.

J'aimerais avoir le temps d'y **adjoindre des tutoriels**. À court terme, je souhaiterais parler de la création de thème WordPress, de thème Bootstrap et des autres sujets rencontrés lors du développement du framework `motifs-js`.

### Sujets transverses

Comme pour le reste de mes sites, l'objectif est de rapidement pouvoir intégrer (toujours par le biais de `motifs-js`) :
* Un générateur de sitemap (JSON vers XML) à adjoindre au script `mapping` (génération des page depuis les données et les templates) des projets,
* Un backlog, une roadmap et des patch notes.

Enfin, dans le but d'harmoniser les sites du réseau, un travail sur la convergence des UI est dans les tuyaux (merci de ne pas s'arrêter au design du site imrok.fr lol).

*Les [sources du projet rimarok sur GitHub](https://github.com/Skaant/rimarok)*.

## [`motifs-js`](https://motifs-js-website.vercel.app/)

Un [immense changement apporté récemment au framework est sa publication (voir l'article sur le site)](/articles/1) sur le [registre public npm](https://www.npmjs.com/package/motifs-js).

Le projet a toujours eu pour vocation a être utilisé entre plusieurs projets, mais sa formalisation en un module Node apporte praticité ainsi qu'une touche de sérieux.

### Rédaction

En conséquence, une des actions prioritaires est de corriger l'aspect présentationnel du module.

Sur le README notamment, **on note beaucoup d'informations obsolètes**, à commencer par le nom affiché du package : "MOTIFS".

Le chantier a pour vocation à rendre utilisable le module par d'autres que moi, même si je suis conscient qu'à l'heure actuelle monter sur ce framework est bien moins pertinent que d'autres générateurs de site.

On veut faire également disparaître une bonne fois pour toute les dernières traces de `kami.js`, la version précédente du projet.

### Fiabilisation

De nombreuses parties du projet demeurent non-testées.

Néanmoins, je note de plus en plus de **parts du projet fréquemment utilisées dont j'aimerais fiabiliser le fonctionnement** grâce à, au moins, des tests unitaires.

Les points d'intérêt majeurs sont :
* **Le motif GLOBAL**, la formalisation des variables globales en instances de ce motif avec leur initialiseur, leur *getter*, leur *updater*.
* **Les motifs FOLDER et FILE**, dont on aimerait alléger également la syntaxe,
* **Les motifs SPEC et SPEC-SECTION**, dont on aimerait améliorer le *logging* (label fonctionnel + détails des spécifications d'instances) et son export dans des fichiers

### Autres fonctionnalités

Une fonctionnalité que j'aimerais rapidement voir dans le framework est la **gestion des templates Pug**.

En effet, c'est très pénible de taper du HTML dans un fichier JS (sans auto-complétion ni *hints*).

L'autre option est d'utiliser la syntaxe JSX mais de souvenir, pour du SSR, Pug est plus performant ... et sa syntaxe plus light aussi.

Bien entendu, **la liste des évolutions et *fixes* envisagés est disponible [sur la page *issues* du projet GitHub](https://github.com/Skaant/motifs-js/issues)**.

Au passage, si tu lis ces lignes sache aussi que je suis tout à fait ouvert à la collaboration, sur ce projet ou un autre.

## [imrok.fr](https://imrok.fr)

Alors là, ça ne va plus ! Pour mon site créatif, **une UI/UX aussi confuse n'est plus tolérable** : je ne sais pas où chercher quoi, et tout semble en travaux.

*imrok.fr est sans doute le projet de la saison.*

J'ai été récemment approché par l'[agence créative Nounours](https://www.agencenounours.com/) pour travailler sur de le déploiement de sites et l'intégration de templates, notamment sur WordPress.

Touché par leur confiance, je cherche maintenant à illustrer mes compétences sur le sujet, conjointement à mes autres activités de développement.

Si la boutique d'IMROK (le BAZAR, [voir dernière section de l'article, juste après](bazar.imrok.fr)) aura cette fonction de démonstration de *theming* et de boutique e-commerce (WooCommerce), **imrok.fr en lui-même a pour fonction d'attester ma capacité d'industrialiation** (JAMStack et développement modulaire).

## Identité graphique

La mise au point d'**un thème SCSS/Bootstrap adaptable entre mes différents sites, et intégrable à un thème WordPress** devient nécessaire.

La publication de la bêta de Bootstrap 5 me donne une bonne occasion d'imaginer des templates dans lesquelles facilement insérer l'identité graphique de chaque site.

La notion de "réseau" (réseau de sites imrok/rimarok et satellites) justifie l'emploi d'éléments d'UI communs.

Je dois maintenant travailler à la conception : **imaginer les symboles du site**, l'expérience de navigation (scroll, menu, cartographie), jusqu'aux couleurs, police etc.

### Exploration de l'existant

Il y a déjà du contenu sur imrok.fr, mais difficile de savoir qu'est-ce qu'on peut y faire ni la qualité de ce qu'on peut y trouver (article rédigé ou simple scan sans transcription).

En parlant de cartographie, **il faudrait être accueil par le panneau indicateur** plutôt que par de nombreuses lignes de contenu : ça peut être rebutant.

Il semble nécessaire de mieux permettre d'identifier les différentes options proposées par le site :
* Les idées (articles et carnets de pensées),
* L'HIGHBS-BOK (actualités et storyboards),
* La boutique,
* Mes lectures,
* Ma vidéothèque (YouTube seulement pour le moment).

### Funding

Enfin, en décomposant les blocs créatifs je peux sans doute **proposer à la communauté du réseau de financer l'avancement des projets qui les intéresse le plus**.

Un bon moyen de créer de l'échange, de l'engagement et des perspectives professionnelles disruptives !

Le concept pourrait être étendu à tous les sites et projets, notamment `motifs-js`.

La difficulté majeure que je vois est la possibilité de payer directement sur le site imrok.fr.

On pourrait donc envisager de passer par une plateforme de financement participatif, en proposant **différentes combinaison de tâches à réaliser et de contreparties** :
* HIGHBS-BOK, un chapitre / une illustration > le livret concerné et/ou une impression,
* motifs-js, une fonctionnalité achetée > la fonctionnalité disponible publiquement pour tous,
* imrok.fr, un projet sponsorisé > une impression, un cadeau sur le thème financé.

Je ne suis pas très à l'aise pour demander de l'argent, alors il faut que ma production soit suffisament qualitative pour le justifier.

**C'est mon engagement.**

## [bazar.imrok.fr](https://bazar.imrok.fr)

Le voici le site WordPress (en travaux) !

J'ai installé le module WooCommerce, je l'ai connecté à Stripe ... c'était la partie simple.

### Thème WordPress

Maintenant je vais devoir m'occuper de créer un thème WordPress, ce qui implique (comme mentionné précédemment) une phase de design.

Néanmoins, j'ai commencé à me renseigner plus en détails sur la création d'un thème *from scratch*, notamment avec [le thème _s](https://github.com/Automattic/_s) proposé comme *boilerplate* aux développeurs.

Toutefois, après un fork puis un rapide test sur le site (navigation privée, donc sans scripts d'administration), **le thème pèse déjà 400 kb**.

Deux solutions s'offrent alors à moi :

* Procéder par élimination, mais le problème des frameworks est souvent de ne pas permettre de distinguer le nécessaire du superflu,
* Repartir de "zéro", c'est-à-dire juste des templates et leurs fragments (*template-parts*).

Dans tous les cas, je cherche à mener parallèllement la **mise au point d'un thème Bootstrap** que je pourrais ensuite décliner sur chacun de mes sites.

### Aspect matériel

Ensuite, un aspect important de la boutique c'est l'alimentation du stock.

Pour le moment je n'ai qu'une vague idée de comment matérialiser et envoyer **les premiers produits : les impressions** (cartes postales et formats plus larges).

J'ai donc un tour à faire chez l'imprimeur et sur le site de la poste afin de tirer ça au clair avant d'aller plus loin.

### Aspect légal

Enfin, dernier point mais non des moindres : le statut requis pour effectuer une activité de vente.

Jusque là micro-entrepreneur du tertiaire, **je ne sais pas encore à quelle obligations légales je dois répondre pour pouvoir déclarer le chiffre d'affaire réalisé** par ce nouveau canal de vente.

Là c'est un tour sur le site de l'URSSAF et sans doute à la CCI qui est de mise.

Si jamais vous avez des pistes, vous trouverez bien un canal par lequel me contacter, merci ;)