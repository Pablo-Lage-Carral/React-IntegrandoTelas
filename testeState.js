import React, { useState } from "react";
import TesteStateFilho from "./testeStateFilho";

export default function TesteState(){

    const [valorState, setValorState] = useState(5);
    let valorVariavel = 5

    function aumentar(){
        setValorState(valorState + 5)
        valorVariavel = valorVariavel + 5
    }

    return(
        <>
            <p>ValorState:  { valorState }</p>
            <p>valorVariavel: { valorVariavel }</p>
            <button onClick={()=>aumentar()}>Aumentar</button>
            <TesteStateFilho valor={ valorState } aumentar={aumentar}/>
        </>
    )
}