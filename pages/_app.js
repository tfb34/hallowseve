import '../styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#D9D9D9',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
    },
   
  });


export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
