import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { cyanTheme } from "./"

export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={cyanTheme}>
        <CssBaseline />
        {children}
    </ThemeProvider>
  )
}
