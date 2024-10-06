import {configureStore} from "@reduxjs/toolkit"
// configure the redux store for usinng it on other components
import cartitemReducer from "./slicememory" 
// pass the cartitemreducer to the main reducer function


    const Confi = configureStore(
        {
            reducer:{
                counter:cartitemReducer ,
            }
        }
    )
// localStorage.setItem("itemsss" , JSON.stringify(counter))
export default Confi