import WEBSITE_PAGE from '../../../../motifs-js/_motifs/website-page/website-page.motif.js'
import FOLDER from '../../../../motifs-js/_motifs/folder/folder.motif.js'
import homeTemplate from "../../../_templates/home/home.template.js"
import legalsTemplate from '../../../_templates/legals/legals.template.js'

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
  )
])