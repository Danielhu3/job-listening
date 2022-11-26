import  React from 'react';
import  Header  from './components/header/';
import  Main  from './components/main/';
import  Card  from './components/main/card/';
import  Details  from './components/main/details/';
import  DetailsItem  from './components/main/detailsItem/';
import  Icon  from './components/main/icon/';
import  IconImage  from './components/main/iconImage/';
import  Info  from './components/main/info/';
import  Labels  from './components/main/labels/';
import  LabelsItem  from './components/main/labelsItem/';
import  Position  from './components/main/position/';
import  Vacancy  from './components/main/vacancy/';
import  VacancyCompany  from './components/main/vacancyCompany/';
import  VacancyLabel  from './components/main/vacancyLabel/';
import  FilterBar  from './components/header/filterBar/';
import  FilterItem  from './components/header/filterItem/';
import  FilterItemText from './components/header/filterItemText/';
import  FilterItemButton  from './components/header/filterItemButton/';

import GlobalStyles from './styles/global';
import Data from './data.json';


function App() {
  const [data,setData] = React.useState(Data);
  const [filteredData, setFilteredData] = React.useState(Data);
  const [filters, setFilters] = React.useState(['React', 'CSS']);
 
  return (
    <div className="App">
      <GlobalStyles />   
      <Header>
        <FilterBar>
          {
            filters.length > 0 ? 
            filters.map((item, index)=> 
            <FilterItem key={index}>
              <FilterItemText filterItemText={item} />
              <FilterItemButton />
            </FilterItem> )
            
            
            : <></>

          }
        </FilterBar>
      </Header>
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

              <Position position={item.position} />

              <Details>
                {
                  item ?
                  <>
                    <DetailsItem detailsItemText={item.postedAt}/>
                    <DetailsItem detailsItemText={item.contract}/>
                    <DetailsItem detailsItemText={item.location}/>
                  </> 
                  : <></>
                }
                

              </Details>
            </Info>
                
            <Labels>
              {
                item? 
                <>
                  <LabelsItem labelsItemText={item.role} />
                  <LabelsItem labelsItemText={item.level} />
                  {
                    item.languages.map((language)=> <LabelsItem labelsItemText={language} key={language} />)
                  }
                  {
                    item.tools.map((tools)=> <LabelsItem labelsItemText={tools} key={tools}/>)
                  }
                </>: <></>
              }
              
            </Labels>
          </Card>)
          
          : undefined
        }
      </Main>
    </div>
  );
}

export default App;


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
