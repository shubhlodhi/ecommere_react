// import Add_child2 from "./add_child_2"
// pass the data as a prop to the addtem component
import Addtem from "./addtocart"
function Add_child(props){
    return(
        <>
        <Addtem value_ch={props.dat.products}/>


        </>
    )
}
export default Add_child