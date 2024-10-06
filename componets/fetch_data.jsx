import { useState } from "react"
import Final_data from "./final_data"
import "./cards.css"
function Fetch_data(props) {
    // console.log("ddd", props.api_data.products)
    const [vlaue, set_value] = useState(props.api_data.products)
    console.log("ddgg", vlaue)
    return (
        <>
          <div className="finals">
            <Final_data final={props.api_data.products}/>
            </div>
        
                    

        </>
    )

}
export default Fetch_data