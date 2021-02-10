import websitePageMotif from 'motifs-js/_motifs/website-page/website-page.motif.js'
import websiteFolderMotif from 'motifs-js/_motifs/website-folder/website-folder.motif.js'
import legalsTemplate from '../../../_templates/legals/legals.template.js'
import articlesListTemplate from '../../../_templates/articlesList/articlesList.template.js'
import articleTemplate from '../../../_templates/article/article.template.js'

export default (
  data,
  options
) => ({
  '': websitePageMotif.shape(
    '_websites/_templates/home/home.pug',
    data
  ),
  'prestations': websitePageMotif.shape(
    '_websites/_templates/prestations/prestations.pug',
    data
  ),
  'blog': websiteFolderMotif.shape({
    '': websitePageMotif.shape(
      articlesListTemplate,
      data
    ),
    ...data.articles.reduce(
      (acc, article, index) => ({
        ...acc,
        [index + 1]: websitePageMotif.shape(
          articleTemplate,
          {
            ...data,
            article: {
              index: index + 1,
              ...article
            }
          }
        )
      }),
      {}
    )
  }),
  'a-propos': websitePageMotif.shape(
    '_websites/_templates/prestations/prestations.pug',
    data
  ),
  'mentions-legales': websitePageMotif.shape(
    legalsTemplate,
    data
  ),
})