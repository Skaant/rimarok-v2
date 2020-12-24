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
    <link rel="icon" type="image/svg+xml" href="/assets/logo.svg">
    <link rel="image_src" href="/assets/thumbnail.jpg">
    <link href="/assets/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link href="/assets/style.css" rel="stylesheet" type="text/css">
  </head>
  <body>
    <nav class="navbar navbar-expand-md position-absolute w-100">
      <a href="/"
          class="font-weight-bold navbar-brand mt-3 ml-3 pb-0 text-light">
        RIMAROK</a>
      <span></span>
    
      <div style="flex-grow: 1">
        <ul class="navbar-nav mr-auto w-100 justify-content-end text-right">
          <li class="nav-item active">
            <a href="/mentions-legales"
                class="nav-link text-white">
              Mentions légales</a>
          </li>
        </ul>
      </div>
    </nav>
    ${ content }
    <script src='/assets/nalytimk.js'></script>
  </body>
</html>`