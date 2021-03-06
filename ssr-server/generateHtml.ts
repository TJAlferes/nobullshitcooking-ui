import cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';
import { Helmet } from 'react-helmet';
import { printDrainHydrateMarks } from 'react-imported-component';

// path is relative from server bundle to client bundle, not the source
const templatePath = path.join(__dirname, "..", "client", "index.html");
const HTML_TEMPLATE = fs.readFileSync(templatePath).toString();

export function generateHtml(markup, state, getStream) {
  // get the serer-rendering values for the <head />
  const helmet = Helmet.renderStatic();

  const $template = cheerio.load(HTML_TEMPLATE);

  $template("head").append(
    helmet.title.toString() + helmet.meta.toString() + helmet.link.toString()
  );

  $template("head").append(`
    <script type="text/javascript">
      window.__PRELOADED_STATE__ =
        ${JSON.stringify(state).replace(/</g, "\\u003c")};
    </script>
  `);

  $template("head").append(printDrainHydrateMarks(getStream()));

  $template("#app").html(markup);

  return $template.html();
}