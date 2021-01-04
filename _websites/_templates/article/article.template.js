import layoutFragment from "../_fragments/layout/layout.fragment.js";
import showdown from 'showdown'

export default data => layoutFragment(
  data,
  {
    title: data.article.title
      + ' | ARTICLE ' + data.article.index
      + ' | ' + data.title,
    description: data.article.description
      || data.article.content
        .split('\n\n')[0]
        .replace(/"/g, '\"')
        .slice(0, 150),
    content: `<div class="container">
      <h1 class="main">
        ${ data.article.title }</h1>
      <p class="mt-2 mb-5">
        publié par
        <a href="mailto:romaric.ruga@gmail.com"
            class="text-golden font-weight-bold">
          imrok*</a>
        le
        <span class="badge badge-pill badge-light">
          ${ data.article.date }</span>
        ${
          data.article.tags.map(tag => `
          <span class="badge badge-pill badge-info">
            ${ tag }</span>`
          )
            .join('')
        }
      </h2>
      ${
        (new showdown.Converter({
          simpleLineBreaks: true
        }))
          .makeHtml(data.article.content)
      }
      <h3>
        Retour
        <a href="/articles">ARTICLES</a>
        /
        <a href="/">Accueil)</a>
      </h3>
    </div>`
  })