import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'
import { RouterContext } from 'next/dist/shared/lib/router-context'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
    locale: 'pt-br' // optional
  }
}
