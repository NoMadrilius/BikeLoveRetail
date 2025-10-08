import React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    // Next вставляет locale в __NEXT_DATA__ при включённом i18n в next.config.js
    const nextData = (this.props as any).__NEXT_DATA__ ?? {};
    const localeFromNext = nextData.locale as string | undefined;

    // fallback к defaultLocale из next.config.js (если экспортирован)
    const { locale } = this.props as any;

    return (
      <Html lang={locale === 'ua'?"uk-UA":"ru-UA"}>
        <Head />
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}
