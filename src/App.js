import React from 'react';

import { ThemeProvider } from 'styled-components'
import GlobalStyles from './Styles/GlobalStyles'

import { Dark, Light } from './Styles/Themes'
import useTheme from './utils/useTheme'

import Header from './Components/Header'
import Painel from './Components/Painel';
import SectionOne from './Components/SectionOne'
import SectionTwo from './Components/SectionTwo'
import SectionThree from './Components/SectionThree';

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
      <Painel />
      <SectionThree/>
      <GlobalStyles />
    </ThemeProvider>
  )

}

export default App;
