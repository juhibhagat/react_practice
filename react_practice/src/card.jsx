import React from "react";
function Card(props){
    return(
        <div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>{props.price}</p>
        </div>
    );
}
export default Card;