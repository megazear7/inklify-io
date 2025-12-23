import { html } from 'orison';

export default context => html`
  <section>${context.mdFile('./src/partials/getting-started.md')}</section>
  <section>
    <div>
      <h2>Watch to Learn More!</h2>
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
