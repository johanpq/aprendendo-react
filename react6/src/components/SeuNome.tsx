import { ChangeEvent, useState } from "react";
import PropNome from "./PropNome";
import Saudacao from "./Saudacao";

export default function SeuNome() {
    const [name, setName] = useState<string>('')

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    console.log(name)

    return (
        <>
            <PropNome setName={setName}/>
            <PropNome setName={handleInput}/> 
            <Saudacao name={name}/>
        </>
    )
}


// Primeira forma de fazer -> <PropNome setName={setName}/>

// Segunda forma de fazer -> <PropNome setName={handleInput}/> 