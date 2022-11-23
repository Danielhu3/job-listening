import React from 'react';
import Header  from './components/header/';
import  Main  from './components/main/';
import  Card  from './components/main/card/';
import  Icon  from './components/main/icon/';
import  IconImage  from './components/main/iconImage/';
import GlobalStyles from './styles/global';

function App() {
  return (
    <div className="App">
      <GlobalStyles />   
      <Header></Header>
      <Main>
        <Card>
          <Icon>
            <IconImage />
          </Icon>
        </Card>
        
      </Main>
    </div>
  );
}

export default App;

// featured items got line on left and be on top of the list

// in mobile card grid columns will be turn into rows

/* columns:

icon
info
labels


*/

/* 
info Rows:
  Vacancy
    VacancyCompany
    VacancyLabels
  VacancyTitle
  Details
    Date
    Time(?)
    Local(?)


*/

/*
mobile version:
 - no Icon tentar remover o padding e jogar o icone pra fora do card com margin
*/
