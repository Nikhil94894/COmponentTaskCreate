import logo from './logo.svg';
import './App.css';

import Child from './Component-1';
import DataDetails from './Component-1';
import {Data2, DummyData, Fruits} from './Component-2'; // for component-2 file  using directly  data
import SecondTime from './Comp-3';
import ThirdTime from './Comp-4' // Third Time  
  


function App() {
 /*
   return (
       <>
         {
         Data2.map((e) => {
           console.log(e)
           return <DataDetails name={e.name} age={e.age} phone={e.phone} city={e.city} />

         })}
       </>
     ) */
  //---------------------------------------------Second Time----------------------------------------------

 /* return(
    <>
    {

           DummyData.map((ee) =>
            {

                   return < DummyData name ={ee.name} compnay ={ee.company} email ={ee.email} position={ee.position} />


            })
     }
    
    
    
    </>
        )
  
  
      }
        */
       
    
      //-------------------------------------------Third Time----------------------------------------------

     /* return(
        <>
        {
         Fruits.map((eee) =>
         {
          return<Fruits name ={eee.name} color ={eee.color} taste ={eee.taste} />


         })
        }
        
        
        </>
      )
        */


   
    
    
  

export default App;
