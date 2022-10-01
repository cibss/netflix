import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import createEmotionCache from '../utils/createEmotionCache';
import theme from "../utils/theme";
import "../styles/globals.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Netflix</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
