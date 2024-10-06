import { useEffect, useState } from "react"
import Fetch_data from "./fetch_data"
function UI(){
    const [dataz , setadta] = useState([])
    useEffect(()=>{
        async function feth() {
            const res = await fetch("https://dummyjson.com/products")
            const data = await res.json()
            setadta(data)

        }
        feth()
    } , [])
    
    console.log("hjhj" , dataz)
    return(

        <>
       
        

        <Fetch_data api_data={dataz} />

        </>

    )

}
export default UI 
