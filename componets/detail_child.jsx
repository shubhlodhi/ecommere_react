import Detail_child_2 from "./details_child2"
// pass  the data from api as a prop in the child componet
function Detail_child(props){
return(
    <>
    <Detail_child_2 value_1={props.info.products}/>
    

    </>
)
}
export  default Detail_child