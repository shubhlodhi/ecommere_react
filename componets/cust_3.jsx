// import use context for consume the context
import { useContext } from "react"
// import the conteext create by user/coder
import contextbyme from "./contxt"

function Cust_3( { new_data } ){
    // use the context  
    const valui = useContext(contextbyme)

    // console.log("shubh" , new_data)
    // console.log(data)
    // console.log(valui.toLowerCase()
    // console.log(valui.login)

    // store the context value in the new variable
    const new_valo = valui.login

    // console.log("ss" , new_valo)

    
    if (!Array.isArray(new_data)){
        return <p>your data is ready to pair</p>
    }
    // apply the search implementaion store the products item
    // pass the new_data as a prop and compare it to the value which the user write on the 
    // input using context
    const filterss = new_data.filter(d=> d.title.toLowerCase().includes(new_valo.toLowerCase()))

    // console.log("shyv",filterss)
    
    return(
        <>
        {/* <h1>{filter.data}</h1> */}
        {filterss.map(data=>
            <>
            <div className='cardss' key={data.id}>
          <div className="card" style={{width: "40rem"}} >
          {/* <img src="..." class="card-img-top" alt="..."> */}
          <div className="card-body">
            <img src={data.images} style={{width:"300px ", height:"300px"}} alt="" />
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">{data.description}</p>
            <h5 className="card-title">{data.price} $</h5>
            </div>
            </div>
            </div>

            </>
        )}



        </>
    )

}
export default Cust_3