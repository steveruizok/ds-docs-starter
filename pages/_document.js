import Document, { Head, Main, NextScript } from "next/document";
import getConfig from "next/config";
import { ServerStyleSheet } from "styled-components";

export default class _Document extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => {
      return sheet.collectStyles(<App {...props} />);
    });
    const styleTags = sheet.getStyleElement();
    const title = "Ds Docs";

    return { ...page, title, styleTags };
  }

  render() {
    const page = this.props["__NEXT_DATA__"].page;
    const { styleTags, title } = this.props;
    return (
      <html lang="en">
        <title>
          {title}:{" "}
          {page
            .slice(1, 2)
            .charAt(0)
            .toUpperCase() + page.slice(1).slice(1)}
        </title>
        <Head>{styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
