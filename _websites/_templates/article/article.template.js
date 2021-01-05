import layoutFragment from "../_fragments/layout/layout.fragment.js";
import showdown from 'showdown'

export default data => layoutFragment(
  data,
  {
    title: data.article.title
      + ' | Article ' + data.article.index
      + ' | ' + data.title,
    description: data.article.description
      || data.article.content
        .split('\n\n')[0]
        .replace(/"/g, '\"')
        .slice(0, 150),
    content: `<div class="container-fluid">
      <div class="row position-relative bg-blue align-content-center justify-content-center">
        <h1 class="main col-12">
          ${ data.article.title }</h1>
        <p class="mt-2 mb-5 col-12">
          publié par
          <a href="mailto:romaric.ruga@gmail.com"
              class="text-golden font-weight-bold">
            rimarok</a>
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
        </p>
      </div>
      <div class="container py-5">
        ${
          (new showdown.Converter({
            simpleLineBreaks: true
          }))
            .makeHtml(data.article.content)
        }
      </div>
      <div class="row bg-blue">
        <p class="col-12">
          Retour
          <a href="/articles">Articles</a>
          /
          <a href="/">Accueil</a>
        </p>
      </div>
      <div class='text-center row pb-2'>
        <div class='container'>
          <img src='/assets/logo.svg'/>
          <p class='small text-center'>
            2020 - Design, illustrations, code et déploiement par <b>Romaric Ruga</b>.</p>
        </div>
      </div>
    </div>`
  })