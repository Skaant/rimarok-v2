import KAMI from './kami.js/index.js'

KAMI.ave(
  import.meta.url,
  {
    log: true
  }
)

KAMI.cli(
  process.argv.slice(3),
  {
    log: true
  })