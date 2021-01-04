import ARTICLE from 'motifs-js/_motifs/article/article.motif.js'

export default () =>

  new Promise(resolve =>
    
    Promise.all([ ARTICLE.get() ])
      .then(([ articles ]) =>
      
        resolve({ articles })))