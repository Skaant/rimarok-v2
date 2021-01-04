import layoutFragment from "../_fragments/layout/layout.fragment.js";
import articlesListItemFragment from "../_fragments/articlesListItem/articlesListItem.fragment.js";

export default data => layoutFragment(
  data,
  {
    title: 'ARTICLES | ' + data.title,
    content: `<div class="container">
      <h1 class="main">
        ARTICLES</h1>
      <p class="mb-5">
        <ul class="list-unstyled">
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
      <h3>
        Retour 
        <a href="/">
          Accueil</a>
      </h3>`
      })