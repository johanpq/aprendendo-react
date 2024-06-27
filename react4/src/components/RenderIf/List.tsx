interface Lista {
    nome: string,
    preco: number,
    teste: number
}

export default function List(props: Lista) {
    return (
        <div>
            <p>Nome do produto: {props.nome}</p>

            {props.preco > 50?(
                // * Renderização condicional com operador ternário
                <div>Preço do produto é maior do que 50 e é: {props.preco}</div>
            ): (
                <div>Preço do produto é menor do que 50 e é: {props.preco}</div>
            )}

            {props.teste >= 100 && (
                // * caso resumido 
                <div>O teste é maior ou igual a 100</div>
            )}


        </div>
    )
}