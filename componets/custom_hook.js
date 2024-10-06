// import { createContext } from "react";
// create custom hook to pass the data from api 
// to other components for avoiding the calling  fetch api
// function in every components
import { useEffect, useState } from "react";

function custom(url){
    // create usestate hook for render the data  on USer interface
    
const [data  ,setdata] = useState()
const [err , seterr] = useState()
const [loading , setload] = useState(true)

useEffect(()=>{
    try{
        
    
    async function fehh() {
        const res = await fetch(url) 
        const data = await res.json()
        setdata(data)
    }}
    catch (err){
        seterr(err)

        
    }
    finally {
        if (load){
            setload(load)
        }
    }
   


        
    
} ,[url])
return {data , loading , err}
}

export default custom