import 'styled-components'

export const theme = {
  colors: {
    primary: '#0d2b5e',
    secondary: '#5a7db5',
  },
} as const

export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
