import PropType from 'prop-types'

export default function PropTypes({carro, marca, ano}) {
    return(
        <>
            <ul>
                <li>{carro}</li>
                <li>{marca}</li>
                <li>{ano}</li>
            </ul>
        </>
    )
}

//OBS.: para acessar o propType, tem que ser com letra minuscula. É diferente da variável declarada em cima.
PropType.propTypes = {
    carro: PropType.string.isRequired, //isRequired é para dizer que é obrigatório.
    marca: PropType.string,
    ano: PropType.number
}

//Caso não seja preenchido, esses valores irão paras as props
PropType.defaultProps = {
    marca: "Marca não foi colocada pelo usuário",
    ano: "Não informado pelo usuário"
}