import 'styled-components'

export const theme = {
  colors: {
    primary: '#0d2b5e',
    secondary: '#5a7db5',
    background: '#f5f7fa',
    cardBackground: '#ffffff',
    textMuted: '#6b7c93',
  },
  spacing: {
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  borderRadius: {
    card: '8px',
  },
} as const

export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
