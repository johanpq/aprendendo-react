'use client'

import ButtonProp from "./ButtonProp";

export default function Button() {

    const meuEvento = () => {
        console.log("Primeiro evento ativado!");
    }

    return (
        <>
            <ButtonProp event = {meuEvento}/>
        </>
    )
}