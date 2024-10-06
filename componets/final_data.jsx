import 'bootstrap/dist/css/bootstrap.min.css';
import "./cards.css"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { additem } from './slicememory';
import { useDispatch } from 'react-redux';
function Final_data(props) {
  const [cartitem , setcartitem] = useState([])
  const dispatch = useDispatch()
  function add_tocart(index){
    setcartitem(index)
    console.log(index)
    dispatch(additem(cartitem))
    console.log( "cart " ,cartitem)
    localStorage.setItem("item" , JSON.stringify(cartitem))



  }
    
    console.log("Received final prop:", props.final);
  
       if (!Array.isArray(props.final)) {
      return <p>No valid data available</p>; // Fallback message if props.final is not an array
    }
  
    return (
      <>
        {props.final.map((data) => (
            <div className='cardss' key={data.id}>
          <div className="card" style={{width: "40rem"}} >
          {/* <img src="..." class="card-img-top" alt="..."> */}
          <div className="card-body">
            <img src={data.images} style={{width:"300px ", height:"300px"}} alt="" />
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">{data.description}</p>
            {/* <button onClick={index}>Add to cart</button> */}
            <button onClick={() =>add_tocart(data.id)}>Add to cart</button>
            <Link to={`/detail/${data.id}`}><a href="#" className="btn btn-primary" style={{margin:"20px"}}>Go to detail page</a></Link>

        </div>
        </div>
        </div>
        ))}
      </>
    );
  }
  
  export default Final_data;