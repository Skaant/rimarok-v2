J'ai maintenant **quatre sites construits avec [`motifs-js`](https://github.com/Skaant/motifs-js)**, dont trois que je dois déployer manuellement à chaque mise-à-jour (de structure ou de contenu).

Ce léger **pain point** vient d'être adressé pour la version [DEV de `rimarok.com`](https://dev.rimarok.com) **grâce à GitHub Actions**.

D'une rapidité exceptionnelle (sérieusement, les tests et builds sont trois ou quatre fois plus rapide que sur ma machine), le workflow **construit les fichiers du site et les déploie** sur l'environnement de DEV.

\> [Voir l'execution de la pipeline](https://github.com/Skaant/rimarok/runs/1877467259?check_suite_focus=true)

Mais, première limite, je n'ai pas encore paramétré plusieurs environnements sur le repo et donc j'utilise un secret `FTP_DEV_SERVER_DIR` (au lieu d'un `FTP_SERVER_DIR` lié à un environnement de DEV).

La deuxième limite, et la plus "coûteuse", c'est **l'impossibilité de déployer seulement les fichiers modifiés depuis le dernier déploiement**.

Ce point peut être implémenté de diverses façons, mais je n'ai pas encore choisi laquelle.

C'est l'un des sujets brûlants du développement de `motifs-js`, et sera sans doute inclut dans la mise-à-jour 0.5, d'une façon ou d'une autre.

À plus !