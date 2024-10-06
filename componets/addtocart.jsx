import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { increase } from "./slicememory";

import "./additem.css"
import { useDispatch } from "react-redux";
import { removeitem } from "./slicememory";
import { additem } from "./slicememory";
// there are item which are added to the cart
function Addtem({value_ch}){
    // convert the props into array of prop is not array
    
    if (!Array.isArray(value_ch)){
        return <p>hello your data is ready</p>
    }
    // use selector to store the cart items id 
    const value = useSelector((state) => state.counter)
    console.log("value" , value)
    // use effect is used to make this below code behave in a 
    // ashynchrnous way for help to not stop the execution flow
    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(value));
      }, [value]);
    // const stores = JSON.parse(localStorage.getItem("items"))
    // for ( const i of value){
        // console.log("ji" ,  i)
    // }
    // variable final is used ot find the items from the props data
    // which are added to the cart , i use data id and filter it and 
    // create a nested loop for finding the cart item which are used to 
    // store in the initailstate in redux 
    
    const final = value_ch.filter((data)=>{
        for (const i of value){
            if (i == data.id){
                return true
            }

        }
})
const dispatch = useDispatch()
const values = useSelector((state)=>state.counter)
function remove(index){
console.log("ss" ,index)    
dispatch(removeitem(index))








}
// const [bi , setin] = useState(0)
    function incre(index){
        // const sto = 0
        dispatch(additem(index))

         
        // setin(bi+1)
        console.log("val"  ,index )
    }


    // console.log("loacl" , stores)
    console.log("ss" , final)
    console.log(value)
console.log("hkk" , value_ch)
const gu = 0
    return(
        <>
        {/* finally map the final array and fetch the details of cart items */}
        {final.map(data=>
            <>
            <div className="cards">
             <div className="card" style={{ width: "40rem" }} >
                        {/* <img src="..." class="card-img-top" alt="..."> */}
                        <div className="card-body">
                            <img src={data.images} style={{ width: "300px ", height: "300px" }} alt="" />
                            <h5 className="card-title">{data.title}</h5>
                            <h5 className="card-title">{data.brand}</h5>
                            <span><h1>Price</h1><h3>{data.price}$</h3></span>
                            <button className="btn btn-danger" 
                            onClick={()=>remove(data.id)}>Remove item</button>
                            <button className="btn btn-success "
                             onClick={()=>incre(data.id)}
                            style={{width:"100px", margin:"10px"}}><CiCirclePlus size={30} /> 


                            </button>
                            <button className="btn btn-success " 
                            
                            style={{width:"100px", margin:"10px"}}>
                                {/* <CiCirclePlus size={30} />  */}
                                <CiCircleMinus  size={30}/>



                            </button>

                            <h5 className="card-title">
                                Quantity :
                                 
                                   
                                {value.filter(dli=>dli===data.id).length}
                                
                                 </h5>
                            <br />
                            </div>
                            </div>
                            </div>
            </>
        )}
       
         </>
    )
}
export default Addtem