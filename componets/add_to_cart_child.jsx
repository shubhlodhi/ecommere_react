import { useEffect, useState } from "react"
import Add_child from "./addtocartchild2"
import { Link } from "react-router-dom"
// components use for fetching the data for cart items , which is shown inn the cart page ,
//  when i add the cart item using redux 
function Components(){
    const [value_1 , set_value] = useState([])

     useEffect(()=>{
        async function feh(){
            const res = await fetch("https://dummyjson.com/products")
            const data = await res.json()
            set_value(data)
    
            
        }
        feh()
     } ,[])
    return(
        <>
        {/* pass the prop to the child component */}
        <Add_child dat={value_1}/>
        <Link to={"/checkout"}><div
      style={{
        display: "flex",
        justifyContent: "center",    // Horizontally center
        alignItems: "center",        // Vertically center
        // height: "100vh",             // Full viewport height
      }}
    >
        <button className="btn btn-success" style={{width:"300px", 
        height:"100px", display:"flex" , alignItems:"center" , border:"10px solid black"

        }}> Checkout </button>


        </div>
        </Link>
        </>
    )
}
export default Components