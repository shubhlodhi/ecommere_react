import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import custom from './custom_hook';
import { useState } from 'react';
// import { Link } from 'react-router-dom';
import contextbyme from './contxt';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
function Header(props) {

const {setCount} = useContext(contextbyme)
const value = useSelector((state)=>state.counter)
    // function search(){
function change(e){
    setCount(e.target.value)
}


// }
return (
    <>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            {/* <div className='container-fluid'> */}
            <div className="container-fluid d-flex justify-content-center">
            <button className='btn btn-danger' style={{width:"200px", margin:"20px"}}>
                <Link to={"/cart"} >Cart item</Link>
            </button>
            <button className='btn btn-danger' style={
                {width:"200px", margin:"20px" , color: "white", textDecoration: "none"}}>
                Quantity in cart :{value.length}
            </button>
            <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className='navbar-toggler-icon'></span>
            </button>
            <form className="d-flex" style={{display:"flex" ,alignItems:"center"}}>
                {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
                <input type="search" 
                className='form-control me-2'
                 onChange={change} />
                <Link 
                to={"/filterbooks"}><button
                 className="btn btn-outline-success"
                    type="submit">Search</button></Link>
            </form>
            {/* <div className='collapse navbar-collapse'> */}
            <div className="collapse navbar-collapse justify-content-center">  {/* Center nav links */}

                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                    <li className='nav-item'>
                        <a href="" className='nav-link active' 
                        area-current="page"  style={{fontSize:"larger"}}>Home

                        </a>
                    </li>
                    <li className='nav-item' style={{fontSize:"larger"}}>
                       <Link to={"/checkout"}><a href="" className='nav-link active' area-current="page">Checkout

                        </a>
                        </Link> 
                    </li>
                    
                    
                    <li className='nav-item'  style={{fontSize:"larger"}}>
                        <a href="" className='nav-link ' 
                        area-current="page">Go to homepage

                        </a>
                    </li>

                </ul>
                {/* <li className="nav-item"> */}
                {/* <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
                {/* </li> */}
                {/* </ul> */}

            </div>
            </div>
        </nav>


    </>
)
}
export default Header

