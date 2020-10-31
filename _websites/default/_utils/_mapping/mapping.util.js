import PAGE from '../../../../kami.js/_shrine/website/_shrine/page/page.kami.js'
import homeTemplate from "../../../_templates/home/home.template.js"

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
  )
])