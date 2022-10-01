import Layout from '@/components/layout/layout'
import type { AppProps } from 'next/app'
import styled, { ThemeProvider } from 'styled-components'
import '../styles/globals.css'

import { tint } from '@/helpers/index'
import { c_blue } from '@/styles/colors'
import Head from 'next/head'

export const LayoutContainer = styled(Layout)`
  font-family: ${({ theme }) => theme.fontFamily};
`

function MyApp({ Component, pageProps }: AppProps) {
  const theme = {
    colors: {
      primary: c_blue,
      light: tint(c_blue, 20),
      lighter: tint(c_blue, 60),
      dark: tint(c_blue, -20),
      darker: tint(c_blue, -60),
    },
    margins: {},
    sizes: {},
    fontFamily: 'Open Sans, sans-serif',
  }

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <LayoutContainer>
        <Component {...pageProps} />
      </LayoutContainer>
    </ThemeProvider>
  )
}

export default MyApp
