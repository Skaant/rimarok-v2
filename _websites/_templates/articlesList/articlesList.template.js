import layoutFragment from "../_fragments/layout/layout.fragment.js";
import articlesListItemFragment from "../_fragments/articlesListItem/articlesListItem.fragment.js";

export default data => layoutFragment(
  data,
  {
    title: 'ARTICLES | ' + data.title,
    content: `<div class="container-fluid">
      <div class="row position-relative bg-blue align-content-center justify-content-center">
        <h1 class="main col-12">
          ARTICLES</h1>
      </div>
      <div class="row d-block">
        <p class="col-12">La liste de mes articles sur le développement web,
          l'éco-conception et la philosophie du code.</p>
        <ul class="list-unstyled col-12">
        ${
          data.articles.slice()
            .reverse()
            .map((article, index) =>
            
              articlesListItemFragment({
                article,
                articles: data.articles,
                index
              }))
            .join('')
        }
      </ul>
      </div>
      <div class="row bg-blue">
        <p class="col-12">
          Retour
          <a href="/">Accueil</a>
        </p>
      </div>`
      })