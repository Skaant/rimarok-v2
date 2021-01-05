import motifsJs from 'motifs-js'

motifsJs(
  import.meta.url,
  { log: true })
  .cli(
    process.argv.slice(3),
    { log: true })