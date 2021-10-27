import React, {useState} from 'react';

import { ThemeProvider } from 'styled-components'
import {Dark, Light} from './Styles/Themes'
import GlobalStyles from './Styles/GlobalStyles'




function App() {

  const [theme, setTheme] = useState(Dark)
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
