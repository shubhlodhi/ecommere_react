import { useEffect, useState } from "react"
import Detail_child from "./detail_child"
function Detail(){
    const [value , setvalue] = useState([])
    useEffect(()=>{
        async function Fteh(){
            const res = await fetch("https://dummyjson.com/products")
            const data = await res.json()
            setvalue(data)

        }
        Fteh()
    } ,[])
    return(
        <>
        {/* <h1>huhuh</h1> */}
<Detail_child info={value}/>

        </>
    )
}
export default Detail