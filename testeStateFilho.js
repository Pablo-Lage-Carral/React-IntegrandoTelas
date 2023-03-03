import React from "react";  

export default function TesteStateFilho(props){

    
    return(
        <>
            <p>Valor de State filho: { props.valor} </p>
            <button onClick={()=>props.aumentar()}>Aumentar</button>
        </>
    )
}