import { html } from 'orison';

export default context => html`
  <section>${context.mdFile('./src/partials/getting-started.md')}</section>
  <section>
    <div>
      <h2>Watch to Learn More!</h2>
      <div class="video-container">

        <iframe 
          class="video"
          width="100%"
          src="https://www.youtube.com/embed/ID_7UMF22Gk" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
        </iframe>

        <a class="go-to-docs">Go to the docs!</a>
      </div>
    </div>
  </section>
`;
