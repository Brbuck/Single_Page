import React from 'react';

import { ThemeProvider } from 'styled-components'
import { Dark, Light } from './Styles/Themes'
import GlobalStyles from './Styles/GlobalStyles'
import useTheme from './utils/useTheme'
import Header from './Components/Header'
import SectionOne from './Components/SectionOne'
import SectionTwo from './Components/SectionTwo'
import Footer from './Components/Footer';


function App() {

  const [theme, setTheme] = useTheme('theme', Dark)
  const togleTheme = () => {
    setTheme(theme.title === 'dark' ? Light : Dark)
  }

  return (
    <ThemeProvider theme={theme}>
      <Header togleTheme={togleTheme} />
      <SectionOne />
      <SectionTwo />
      <Footer />
      <GlobalStyles />
    </ThemeProvider>
  )

}

export default App;
