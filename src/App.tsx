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
import  Filters  from './components/header/filters/';
import  ClearFilters  from './components/header/clearFilters/';

import GlobalStyles from './styles/global';
import Data from './data.json';

function App() {
  const [filteredData, setFilteredData] = React.useState(Data);
  const [filters, setFilters] =  React.useState<string[]>([]);

  
  React.useEffect(()=>{
    filters.length > 0 ? 
      setFilteredData(Data.filter(function(item){


        function findCommomElements(arr1:Array<string>, arr2:Array<string>){
         let localCount = 0; 
          for(let i = 0; i<arr1.length; i++){
            for(let j = 0; j<arr2.length; j++){
              if(arr1[i] === arr2[j]){
                localCount++
              }
            }
          }
      return localCount
    }

        let count = 0
  
        if(filters.includes(item.role)){
          count++;
        }

        if(filters.includes(item.level)){
          count++
        }

        count += findCommomElements(filters,item.languages)
        count +=findCommomElements(filters,item.tools)
       
        if(count === filters.length){
          return item
        }
        
      }))

    
    : setFilteredData(Data);
  },[filters])


 
  
  return (
    <div className="App">
      <GlobalStyles />   
      <Header>
        <FilterBar filters={filters}>
          <Filters>
          {
            filters.length > 0 ? 
            filters.map((item, index)=> 
            <FilterItem key={index}>
              <FilterItemText filterItemText={item} />
              <FilterItemButton setFilters={setFilters} filterItemText={item}/>
            </FilterItem> )
            
            
            : <></>

          }
          </Filters>
          <ClearFilters setFilters={setFilters}/>
        </FilterBar>
      </Header>
      <Main>
        {
          filteredData ? filteredData.map((item)=>
          <Card key={item.id} isFeatured={item.featured}>
           
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
                  <LabelsItem labelsItemText={item.role} setFilters={setFilters} />
                  <LabelsItem labelsItemText={item.level} setFilters={setFilters}/>
                  {
                    item.languages.map((language)=> <LabelsItem labelsItemText={language} key={language} setFilters={setFilters}/>)
                  }
                  {
                    item.tools.map((tools)=> <LabelsItem labelsItemText={tools} key={tools} setFilters={setFilters}/>)
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

// media query in 900px
// in mobile card grid columns will be turn into rows


/*
mobile version:
 - no Icon tentar remover o padding e jogar o icone pra fora do card com margin
*/
