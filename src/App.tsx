import React from 'react';
import Header  from './components/header/';
import  Main  from './components/main/';
import  Card  from './components/main/card/';
import  Details  from './components/main/details/';
import DetailsItem  from './components/main/detailsItem/';
import  Icon  from './components/main/icon/';
import  IconImage  from './components/main/iconImage/';
import  Info  from './components/main/info/';
import  Labels  from './components/main/labels/';
import  LabelsItem  from './components/main/labelsItem/';
import  Position  from './components/main/position/';
import  Vacancy  from './components/main/vacancy/';
import  VacancyCompany  from './components/main/vacancyCompany/';
import  VacancyLabel  from './components/main/vacancyLabel/';
import GlobalStyles from './styles/global';

import Data from './data.json';

function App() {
  const [data,setData] = React.useState(Data);
  const [filteredData, setFilteredData] = React.useState(Data);
  const [filters, setFilters] = React.useState([]);
  console.log(data)
  return (
    <div className="App">
      <GlobalStyles />   
      <Header></Header>
      <Main>
        {
          filteredData ? filteredData.map((item)=>
          <Card key={item.id}>
            <Icon>
              <IconImage logo={item.logo}/>
            </Icon>

            <Info>
              <Vacancy>
                <VacancyCompany company ={item.company} />
                {
                  item.new ? <VacancyLabel labelType='new!'></VacancyLabel> : <></> 
                }

                {
                  item.featured ? <VacancyLabel labelType='featured'></VacancyLabel> : <></> 
                }
              </Vacancy>

              <Position></Position>

              <Details>
                <DetailsItem></DetailsItem>
                <DetailsItem></DetailsItem>
              </Details>
            </Info>

            <Labels>
              <LabelsItem></LabelsItem>
              <LabelsItem></LabelsItem>
            </Labels>
          </Card>)
          
          : undefined
        }
      </Main>
    </div>
  );
}

export default App;

/* 
  static components:

  <Card>

          <Icon>
            <IconImage />
          </Icon>

          <Info>
            <Vacancy>
              <VacancyCompany></VacancyCompany>
              <VacancyLabel></VacancyLabel>
            </Vacancy>

            <Position></Position>

            <Details>
              <DetailsItem></DetailsItem>
              <DetailsItem></DetailsItem>
            </Details>
          </Info>

          <Labels>
            <LabelsItem></LabelsItem>
            <LabelsItem></LabelsItem>
          </Labels>
          
        </Card>

*/

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
