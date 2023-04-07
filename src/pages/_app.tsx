import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider,CssBaseline } from '@mui/material';
import { darkTheme , lightTheme} from '@/themes';
import UiProvider from '@/context/ui/UIProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UiProvider>
      <ThemeProvider
        theme={lightTheme}
      >
        <CssBaseline/>
        <Component {...pageProps} />
      </ThemeProvider>
    </UiProvider>
      
  )
}
