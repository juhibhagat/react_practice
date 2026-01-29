import React from "react";
import Card from "./card";
export function User(){
    const cardData = [
        {
            id:1,
            title:"React Course",
            description:"learn React step by step",
            price:900
        },
        {
            id:1,
            title:"React Course",
            description:"learn React step by step",
            price:900
        }
    ]
    return(
        <div>
            {
                cardData.map((item)=>{
                    <card
                    title= {item.title}
                    
                    />
                })          
            }
        </div>
    )
}