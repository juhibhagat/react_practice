import { useState } from "react"

export function Home1(){
    const [ count, settitle] = useState(2)

 
    return(
        <>
            <div>count: {count}</div>
            <button onClick={()=>{settitle(count +3)}}>Increase</button>
           

        
        </>
    )
}
