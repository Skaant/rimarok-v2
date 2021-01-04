export default ({ article, articles, index }) =>

`<li>
  <a href="/articles/${ articles.length - index }">
    <b>${ article.title }</b></a>
  <span class="badge badge-pill badge-light">
    ${ article.date }</span>
  ${
    article.tags.map(tag => `
    <span class="badge badge-pill badge-info">
      ${ tag }</span>`
    )
      .join('')
  }
</li>`