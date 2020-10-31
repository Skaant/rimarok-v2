import layoutFragment from "../_fragments/layout/layout.fragment.js";

export default data => layoutFragment(
  data,
  {
    title: 'Simple, efficace. Une nouvelle perspective sur le développement web. | ' + data.title,
    description: '',
    content: `<!-- img class='position-absolute image-core'
        src="/assets/core.svg"
        alt="RIMAROK logo is a power core inside an hexagonal box, irradiating power" /-->
    <div id="home-container"
        class="container-fluid">
      <div class="row position-relative bg-blue align-content-center justify-content-center">
        <h1 class="col-12 text-light home-title">
          Simple, efficace.
          Une nouvelle perspective sur le développement web.
        </h1>
        <img src="/assets/star-scenery.svg"
            class="position-absolute star-scenery">
      </div>
      <div class="row">
        <div class="container">
          <h2 class="mb-4">
            Romaric Ruga, éco-développeur full-stack indépendant</h2>
          <p class="h2 mb-5">
            <span class="badge badge-pill bg-blue mb-2 px-4 py-2">JavaScript</span>
            <span class="badge badge-pill bg-blue mb-2 px-4 py-2">PHP</span>
            <span class="badge badge-pill bg-blue mb-2 px-4 py-2">HTML</span>
            <span class="badge badge-pill bg-blue mb-2 px-4 py-2">CSS/SASS</span>
            <span class="badge badge-pill bg-blue mb-2 px-4 py-2">Node.js</span>
            <span class="badge badge-pill bg-blue mb-2 px-4 py-2">React.js</span>
            <span class="badge badge-pill bg-blue mb-2 px-4 py-2">Angular 2+</span>
            <span class="badge badge-pill bg-blue mb-2 px-4 py-2">Svelte</span>
            <span class="badge badge-pill bg-blue mb-2 px-4 py-2">Nest</span>
            <span class="badge badge-pill bg-blue mb-2 px-4 py-2">Mongo</span>
            <span class="badge badge-pill bg-blue mb-2 px-4 py-2">SQL</span>
            <span class="badge badge-pill bg-blue mb-2 px-4 py-2">DevOps ready</span>
            <span class="badge badge-pill bg-blue mb-2 px-4 py-2">Design UI/UX</span>
            <span class="badge badge-pill bg-blue mb-2 px-4 py-2">Green IT</span>
          </p>
          <h3 class="mb-4">
            Qu'est-ce qu'un éco-développeur ?</h3>
          <p>
            Un développeur qui prend en compte le coût réel de votre solution,
            <b>tant d'un point de vue économique qu'écologique</b>.</p>
        </div>
      </div>
      <div class="row bg-blue">
        <div class="container">
          <h2 class="mb-4">
            Contact et autres plateformes</h2>
          <p>Pour me contacter, vous pouvez utiliser mon
            <a href="romaric.ruga@gmail.com"
                class="text-white font-weight-bold">
              adresse mail</a>
            ou l'une des plateformes suivantes :
          </p>
          <p class="h2">
            <a href="https://www.malt.fr/profile/romaricruga"
                class="btn btn-light rounded-pill px-4 py-2 mb-2 font-weight-bold">
              Malt</a>
            <a href="https://www.linkedin.com/in/romaric-ruga-507244a1/"
                class="btn btn-light rounded-pill px-4 py-2 mb-2 font-weight-bold">
              LinkedIn</a>
            <a href="https://github.com/Skaant"
                class="btn btn-light rounded-pill px-4 py-2 mb-2 font-weight-bold">
              GitHub</a>
          </p>
        </div>
      </div>
      <div class="row position-relative">
        <div class="container">
          <h2 id="crew"
              class="mb-4">Mon crew</h2>
          <p>Vous avez un projet conséquent ? Transverse ?
            Voici mon équipe de freelances au top !</p>
          <div class="media">
            <img src="/assets/kingfisher.svg"
              class="mr-3 rounded-circle mb-4"
              alt="A vector king fisher.">
            <div class="media-body">
              <h3 class="mb-4">Lucile Joan,
                <span class="small">copywriting et SEO</span></h3>
              <p>
                <a href="https://www.malt.fr/profile/lucilejoan"
                    class="btn bg-blue rounded-pill px-4 py-2 mb-2 font-weight-bold">
                  Malt</a>
                <a href="https://www.linkedin.com/in/lucile-joan/"
                    class="btn bg-blue rounded-pill px-4 py-2 mb-2 font-weight-bold">
                  LinkedIn</a>
              </p>
              <blockquote class="blockquote">
                <p class="text-muted">
                  "Ce que je préfère, c'est collaborer avec des gens qui croient en leur activité et qui ont envie de la voir grandir. Je vous propose toute une palette de services, adaptables et modulables en fonction de vos besoins."
                </p>
              </blockquote>
            </div>
          </div>
          <div class="media">
            <img src="/assets/elephant.svg"
              class="mr-3 rounded-circle mb-4"
              alt="A vector elephant.">
            <div class="media-body">
              <h3 class="mb-4">Cédric Guérin,
                <span class="small">Développeur web full-stack</span></h3>
              <p>
                <a href="https://www.malt.fr/profile/cedricguerin1"
                    class="btn bg-blue rounded-pill px-4 py-2 mb-2 font-weight-bold">
                  Malt</a>
                <a href="https://www.linkedin.com/in/guericed/"
                    class="btn bg-blue rounded-pill px-4 py-2 mb-2 font-weight-bold">
                  LinkedIn</a>
                <a href="https://github.com/ElPonito"
                    class="btn bg-blue rounded-pill px-4 py-2 mb-2 font-weight-bold">
                  GitHub</a>
              </p>
              <blockquote class="blockquote">
                <p class="text-muted">
                  "La mission idéale pour moi serait la participation à un projet ambitieux from scratch en prenant part aux discussions/décision sur le produit."
                </p>
              </blockquote>
            </div>
          </div>
          <div class="media">
            <img src="/assets/prairie-dog.svg"
              class="mr-3 rounded-circle mb-4"
              alt="A vector prairie dog.">
            <div class="media-body">
              <h3 class="mb-4">Gwenaël Girod,
                <span class="small">Développeur web full-stack</span></h3>
              <p>
                <a href="https://www.malt.fr/profile/gwenaelgirod"
                    class="btn bg-blue rounded-pill px-4 py-2 mb-2 font-weight-bold">
                  Malt</a>
                <a href="https://www.linkedin.com/in/ggirod/"
                    class="btn bg-blue rounded-pill px-4 py-2 mb-2 font-weight-bold">
                  LinkedIn</a>
                <a href="https://github.com/Dogson"
                    class="btn bg-blue rounded-pill px-4 py-2 mb-2 font-weight-bold">
                  GitHub</a>
              </p>
              <blockquote class="blockquote">
                <p class="text-muted">
                  "Je m’intéresse aux projets de toute envergure, qu’il s’agisse de vitrines marketing avec CMS en Jamstack ou d’applications web plus complexes avec API dédiée."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <div class="row position-relative bg-blue">
        <img src="/assets/badger-and-fox.svg"
            class="position-absolute badger" />
        <div class="container">
          <h2 class="mb-4">
            Mon actualité créative</h2>
          <p>
            J'ai également
            <a href="https://imrok.fr"
                class="text-white">
              un site créatif</a>
            auquel vous devriez jeter un oeil !
          </p>
        </div>
      </div>
      <div class='text-center row pb-2'>
        <div class='container'>
          <img src='/assets/rimarok-logo.svg'/>
          <p class='small text-center'>
            2020 - Design, illustrations, code et déploiement par <b>Romaric Ruga</b>.</p>
        </div>
      </div>
    </div>`
  })