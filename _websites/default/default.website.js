import langEnum from 'motifs-js/_motifs/lang/_enums/lang.enum.js'
import provisionUtil from "./_utils/_provision/provision.util.js"
import mappingUtil from "./_utils/_mapping/mapping.util.js"

export default {
  id: 'default',
  title: 'RIMAROK, ingénierie web et éco-conception',
  lang: langEnum.FR,
  url: 'https://rimarok.com',
  provision: provisionUtil,
  mapping: mappingUtil,
  redirects: [
    [ '/articles/1', '/articles/motifs-js-publier-un-module' ],
    [ '/articles/2', '/articles/roadmap-open-source-1' ],
    [ '/articles/3', '/articles/motifs-js-0-4-specs-et-website-sitemap' ],
    [ '/articles/4', '/articles/visualisation-codebase-complexe' ],
    [ '/articles/5', '/articles/dev-rimarok-en-deploiement-continu' ],
    [ '/articles/6', '/articles/dans-le-code-rien-est-eternel' ],
    [ '/articles/7', '/articles/le-langage-des-specifications' ]
  ]
}