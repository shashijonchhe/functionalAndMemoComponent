import React, { memo } from 'react'



const Message = ({message})=>{
    console.log("this is message",{ message })
    return(
        <div>
        <h1>{message}</h1>

        </div>
    )
}



export default memo(Message);