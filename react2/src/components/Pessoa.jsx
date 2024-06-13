import PersonStyle from "@/components/Pessoa.module.css"

export default function Pessoa({nome, idade, genero, img}) {
    return(
        <div>
            <img src={img} alt={nome} />

            <h1>Dados da pessoa:</h1>
            <p className={PersonStyle.paragraphs}>{nome}</p>
            <p className={PersonStyle.paragraphs}>{idade}</p>
            <p className={PersonStyle.paragraphs}>{genero}</p>
        </div>
    )
}