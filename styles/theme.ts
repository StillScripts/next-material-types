import { createTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { amber } from '@material-ui/core/colors'

let theme = createTheme({
  palette: {
    secondary: amber,
  },
})

theme = responsiveFontSizes(theme)

export default theme