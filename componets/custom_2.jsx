import Cust_3 from "./cust_3"
// import Header from "./header"
// import UI from "./UI"
function Cust_2(props){
return(
    <>
    {/* pass the data as a prop to the cust3 components */}
    <Cust_3 new_data={props.dataz.products}/>

    

    </>
)    
}
export default Cust_2
