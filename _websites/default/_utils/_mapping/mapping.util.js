import websitePageMotif from 'motifs-js/_motifs/website-page/website-page.motif.js'
import websiteFolderMotif from 'motifs-js/_motifs/website-folder/website-folder.motif.js'

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
      '_websites/_templates/blog/blog.pug',
      data
    ),
    ...data.articles.reduce(
      (acc, article, index) => ({
        ...acc,
        [index + 1]: websitePageMotif.shape(
          '_websites/_templates/article/article.pug',
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
    '_websites/_templates/about/about.pug',
    data
  ),
  'mentions-legales': websitePageMotif.shape(
    '_websites/_templates/legals/legals.pug',
    data
  ),
})