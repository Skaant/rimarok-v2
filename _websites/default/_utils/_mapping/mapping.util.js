import WEBSITE_PAGE from 'motifs-js/_motifs/website-page/website-page.motif.js'
import FOLDER from 'motifs-js/_motifs/folder/folder.motif.js'
import homeTemplate from "../../../_templates/home/home.template.js"
import legalsTemplate from '../../../_templates/legals/legals.template.js'
import articlesListTemplate from '../../../_templates/articlesList/articlesList.template.js'
import articleTemplate from '../../../_templates/article/article.template.js'

export default (
  scope,
  data,
  options
) => ([
  /** / */
  WEBSITE_PAGE.create(
    homeTemplate,
    data,
    scope,
    options
  ),
  FOLDER.create(
    scope,
    'mentions-legales',
    folderScope => [
      WEBSITE_PAGE.create(
        legalsTemplate,
        data,
        folderScope,
        options
      )
    ]
  ),
  FOLDER.create(
    scope,
    'articles',
    folderScope => [
      WEBSITE_PAGE.create(
        articlesListTemplate,
        data,
        folderScope,
        options
      ),
      ...data.articles.map((article, index) =>
        FOLDER.create(
          folderScope,
          article.id,
          folderScope => [
            WEBSITE_PAGE.create(
              articleTemplate,
              {
                ...data,
                article: {
                  index,
                  ...article
                }
              },
              folderScope,
              options
            )
          ]
        ))
    ]
  )
])