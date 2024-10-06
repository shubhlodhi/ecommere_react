import custom from "./custom_hook"
import { useEffect, useState } from "react"
import Cust_2 from "./custom_2"
function Usecust(){
    const [datas ,setdata] = useState([])
useEffect(()=>{
    async function feh() {

        const res = await fetch("https://dummyjson.com/products")
        const data = await res.json()
        setdata(data)


        
    }
    feh()
} ,[])
    
    // const [datas , setdata] = useState([])
    // const [data ,loading , err] = custom("https://dummyjson.com/products")
    // console.log(data)
    // if (data){
        // setdata(data)
    // }
    return(
        <>
        <Cust_2 dataz={datas}/>
        </>
    )
}
export default Usecust