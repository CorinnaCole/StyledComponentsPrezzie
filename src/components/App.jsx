import React, { useState } from 'react';
import GlobalStyle from "./Global.jsx";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes.js";
import { MediaQueryEx, RoundImage, StyleDiv, Button } from './styled.jsx';
import { FaFortAwesome, FaBowlingBall, FaBoxOpen } from 'react-icons/fa';

const data = [];

const App = () => {
  const [isOn, setIsOn] = useState(false);
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    console.log('clicked')
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyle />

        <div>
          <Button  onClick={themeToggler}>button</Button>

          <MediaQueryEx >
            Example of Psuedo Classes & Media Query
          </MediaQueryEx>

          <RoundImage img={'corgi.png'} />

          <StyleDiv >
            Format SVGs
            <FaFortAwesome />
            <FaBowlingBall />
            <FaBoxOpen />
          </StyleDiv>
        </div>
      </>
    </ThemeProvider>
  )
}
export default App;

