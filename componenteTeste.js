import React, { useStates } from "react";

export default function ComponenteTeste(){
    let frase = "teste"

    const [aluno, setAluno] = useStates("Jõao");

    return(
        <>
            <p>Aluno: { aluno }</p>
            <button onClick={()=>setAluno("Maria")}>Mudar frase</button>
            
        </>
    )
}