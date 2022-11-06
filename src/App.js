import React, { useState } from 'react';
import { Cover, Themes, Switch } from './components';
import { ThemeProvider } from 'styled-components';

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeProvider theme={Themes[theme]}>
        <Switch theme={theme} setTheme={setTheme} />
        <Cover theme={theme} />
      </ThemeProvider>
    </>
  );
}

export default App;
