import React from 'react';
import FunctionContextComponent from './FunctionContextComponent';
import { ThemeProvider } from './ThemContext';


function App() {


  return (
      <>
        <ThemeProvider>
          <FunctionContextComponent/>
        </ThemeProvider>
      </>
  );
}

export default App;
