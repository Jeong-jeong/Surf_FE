import { ThemeProvider } from '@emotion/react'
import { Header, Navbar } from 'components/common'
import theme from 'styles/theme'
import 'styles/globals.css'
import styled from '@emotion/styled'

const MyAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const ComponentWrapper = styled.div`
  height: ${({ theme: { commonSize } }) =>
    `calc(100% - ${commonSize.$Header + commonSize.$Navbar + 2}px)`};
`

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <MyAppWrapper>
      <Header />
      <ComponentWrapper>
        <Component {...pageProps} />
      </ComponentWrapper>
      <Navbar height={50} iconSize={30} />
    </MyAppWrapper>
  </ThemeProvider>
)

export default MyApp
