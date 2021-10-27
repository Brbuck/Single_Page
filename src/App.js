import React from 'react';

import { ThemeProvider } from 'styled-components'
import {Dark, Light} from './Styles/Themes'
import GlobalStyles from './Styles/GlobalStyles'
import useTheme from './utils/useTheme'



function App() {

  const [theme, setTheme] = useTheme('theme', Dark)
  const togleTheme = () =>{
    setTheme(theme.title === 'dark' ? Light : Dark)
  }

  return (
    <ThemeProvider theme={theme}>
      <div >
        <h1>Hello World</h1>
        <input type="checkbox" onChange={togleTheme} />
      </div>
      <GlobalStyles/>
    </ThemeProvider>
  )

}

export default App;
