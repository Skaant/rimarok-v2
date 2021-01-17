import websitePageMotif from 'motifs-js/_motifs/website-page/website-page.motif.js'
import websiteFolderMotif from 'motifs-js/_motifs/website-folder/website-folder.motif.js'
import homeTemplate from "../../../_templates/home/home.template.js"
import legalsTemplate from '../../../_templates/legals/legals.template.js'
import articlesListTemplate from '../../../_templates/articlesList/articlesList.template.js'
import articleTemplate from '../../../_templates/article/article.template.js'

export default (
  data,
  options
) => ({
  '': websitePageMotif.shape(
    homeTemplate,
    data
  ),
  'mentions-legales': websitePageMotif.shape(
    legalsTemplate,
    data
  ),
  'articles': websiteFolderMotif.shape({
    '': websitePageMotif.shape(
      articlesListTemplate,
      data
    ),
    ...data.articles.reduce(
      (acc, article, index) => ({
        ...acc,
        [index]: websitePageMotif.shape(
          articleTemplate,
          {
            ...data,
            article: {
              index,
              ...article
            }
          }
        )
      }),
      {}
    )
  })
})