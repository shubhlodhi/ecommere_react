import { useState } from "react"
import { useParams } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { CiStar } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
import { useSelector } from "react-redux";
import { removeitem } from "./slicememory";
import { Link } from "react-router-dom";



function Detail_child_2({ value_1 }) {
    
    const [bu ,setbu] = useState(0)
    // const [value , setvalue] = useState()
    // const sele = useSelector((state)=>state.counter)
    // console.log("sss" ,sele)
    // function remove(index){

    // }
    function index(){
        // if (bu===data.stock){
            // return `only ${data.stock} left`
        // }
        // else{
        setbu(bu+1)
    }

    function index_minus(){
        if (bu <=0){
            return 0
        }
        setbu(bu-1)
    }
    if (!Array.isArray(value_1)) {
        return <p>wait a minute your page is ready</p>
    }

    const url = useParams()
    // console.log(url.id)
    // console.log(props.value_1)
    // console.log("sss" , bu)
    console.log("dd", value_1)


    // const g = []
    // const f = (props.value_1.filter(data=>data.id === url.id)) 
    const f = value_1.filter(data => data.id == url.id)
    // g.push(f)
    console.log(f)
    return (
        <>
            {f.map(data =>
                <div key={data.id}>
                    <div className="card" style={{ width: "40rem" }} >
                        {/* <img src="..." class="card-img-top" alt="..."> */}
                        <div className="card-body">
                            <img src={data.images} style={{ width: "300px ", height: "300px" }} alt="" />
                            <h5 className="card-title">{data.title}</h5>
                            <h5 className="card-title">{data.brand}</h5>
                            <span><h1>Price</h1><h3>{data.price}$</h3></span>
                            <br />
                            <span><h1>Rating</h1><h3>{data.rating}<CiStar />
                            <br />
                            </h3></span>
                            <br />
                            <h3>{data.returnPolicy}</h3>
                            <br />
                            <h3>{data.shippingInformation}</h3>
                            <br />
                            <h3> only {data.stock} left in Stock</h3>
                            <br />

                            <p className="card-text">{data.description}</p>
                            <a 
                            href="#" onClick={index} className="btn btn-primary">
                                Add to cart 
                            </a>
                            {/* <button className="btn btn-dnager" style={{fontSize:"50px"}}><CiSquarePlus /></button> */}
                            <a href="#" 
                             className="btn btn-primary" style={{margin:"10px"}}>Remove from cart 
                            </a>
                            {bu}

                            <Link to={`/`}><a href="#" className="btn btn-primary" style={{margin:"20px"}}>Go to home page</a></Link>


                        </div>
                        </div>
                        </div>

        )}

                    </>
                    )

}
                    export default Detail_child_2