import React from 'react';
import Header  from './components/header/';
import  Main  from './components/main/';
import GlobalStyles from './styles/global';

function App() {
  return (
    <div className="App">
      <GlobalStyles />   
      <Header></Header>

      <Main></Main>
    </div>
  );
}

export default App;

// featured items got line on left and be on top of the list
