import React from 'react';
import Header  from './components/header/';
import  Main  from './components/main/';
import  Card  from './components/main/card/';
import  Icon  from './components/main/icon/';
import  IconImage  from './components/main/iconImage/';
import  Info  from './components/main/info/';
import  Vacancy  from './components/main/vacancy/';
import  VacancyCompany  from './components/main/vacancyCompany/';
import  VacancyLabel  from './components/main/vacancyLabel/';
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

          <Info>
            <Vacancy>
              <VacancyCompany></VacancyCompany>
              <VacancyLabel></VacancyLabel>
            </Vacancy>
          </Info>
          
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
    VacancyNew      }
    VacancyFeatured } VacancyLabel
  Position
  Details
    PostedAt }
    Contract } DetailsItem
    Location }


*/

/*
mobile version:
 - no Icon tentar remover o padding e jogar o icone pra fora do card com margin
*/
