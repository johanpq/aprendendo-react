export default function Pessoa({nome, idade, genero, img}) {
    return(
        <div>
            <img src={img} alt={nome} />

            <h1>Dados da pessoa:</h1>
            <p>{nome}</p>
            <p>{idade}</p>
            <p>{genero}</p>
        </div>
    )
}