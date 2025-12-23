import { html } from 'orison';

export default context => html`
  <section>
    <div class="getting-started">
      <h2>Getting Started</h2>
      <img src="/logo/logo-64x64.png" />
    </div>
    ${context.mdFile('./src/partials/getting-started.md')}
  </section>
  <section>
    <div>
      <div class="video-container">

        <video 
          class="video"
          width="100%"
          src="https://d1ltnbqz43dgq7.cloudfront.net/inklify/inklify-intro.mp4"
          crossorigin="anonymous"
          controls
        ></video>

        <a class="go-to-docs">Go to the docs!</a>
      </div>
    </div>
  </section>
`;
