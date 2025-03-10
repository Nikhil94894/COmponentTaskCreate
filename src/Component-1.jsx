import React from "react"; 
//import Data2 from './Component-2'

//1.------------------------------------------------------------------------------------------
/*function Child()
{
    return(
    <>
    {
      Data.map((value) =>
       {
         return
         <>
            <p>Name{value.name}</p>
            <p>Age:{value.age}</p>
            <p>Phone:{value.phone}</p>
            <p>City:{value.city}</p>
            <hr/>

         </>

       })
    }
        
        
 </>
    )   
} */

//..........................................................................................  

/*
    function DataDetails()
    {

      return(
        <>
        {
          Data2.map((value,index) =>
        {
            const{name,age,phone,city} =value;
            return(
                <div key= 'index'>
                    <p>Name:{name}</p>
                    <p>Age:{age}</p>
                    <p>Phone:{phone}</p>
                    <p>City:{city}</p>
                    <hr/>

                </div>
            )
        })

        }
         
        </>
  )

    } */

    function DataDetails({name,age,phone,city})
    {
        return(
            <>
            <div >
                <h2>{name ?`Name:${name}`:``}</h2>
                <h2>{age? `Age:${age}` :``}</h2>
                <h2>{phone ? `Phone:${phone}` :` `}</h2>
                <h2>{city ? `City:${city}`:` `}</h2>
                <hr/>
                <hr/>

            </div>
            
            </>
        )

    }
    export default DataDetails;
        
    


   //------------------------------------------------------------------------------------------