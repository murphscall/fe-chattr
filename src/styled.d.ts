import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      background: string
      surface: string
      text: string
      textLight: string
      border: string
      error: string
      success: string
    }
    shadows: {
      small: string
      medium: string
      large: string
    }
    breakpoints: {
      mobile: string
      tablet: string
      desktop: string
    }
  }
}
