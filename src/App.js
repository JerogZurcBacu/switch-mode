import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Cover, Themes } from './components';

function App() {
  return (
    <>
      <ThemeProvider theme={Themes["light"]}>

        <Cover />
      </ThemeProvider>
    </>
  );
}

export default App;
