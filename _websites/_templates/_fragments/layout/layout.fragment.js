export default (
  data,
  {
    title,
    description,
    content
  }) => `<!DOCTYPE html>
<html lang=${ data.lang }>
  <head>
    <meta charset="utf-8">
    <meta name="description" content="${ description }">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>${ title }</title>
    <link rel="icon" type="image/svg+xml" href="/assets/rimarok-logo.svg">
    <link href="/assets/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link href="/assets/style.css" rel="stylesheet" type="text/css">
  </head>
  <body>
    <nav class="navbar position-absolute">
      <a href="/"
          class="font-weight-bold navbar-brand m-3 text-light">
        RIMAROK</a>
    </nav>
    ${ content }
  </body>
</html>`