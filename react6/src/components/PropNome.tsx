export default function PropNome({setName}: any) {
    return (
        <>
            <input type="text" name="texto" id="Itexto" placeholder="Informe seu nome" onChange={setName} /> 
        </>
    )
}

// Há duas formas de monitorar

// onChange={(event) => setName(event.target.value)} -> Colocando inline no input

// onChange={setName}