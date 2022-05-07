import React from 'react'

interface argError {
    mensaje: string
}
const Error = ({mensaje}:argError) =>{
    return(
        <p>{mensaje}</p>
    )
}

export default Error