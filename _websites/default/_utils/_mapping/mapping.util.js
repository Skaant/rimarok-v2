import PAGE from '../../../../kami.js/_shrine/website/_shrine/page/page.kami.js'
import FOLDER from '../../../../kami.js/_shrine/folder/folder.kami.js'
import homeTemplate from "../../../_templates/home/home.template.js"
import legalsTemplate from '../../../_templates/legals/legals.template.js'

export default (
  scope,
  data,
  options
) => ([
  /** / */
  PAGE.create(
    homeTemplate,
    data,
    scope,
    options
  ),
  FOLDER.create(
    scope,
    'mentions-legales',
    folderScope => [
      PAGE.create(
        legalsTemplate,
        data,
        folderScope,
        options
      )
    ]
  )
])