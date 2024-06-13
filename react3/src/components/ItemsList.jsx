import styleList from './List.module.css'

export default function ItemsList(props) {
    return(
        <>
            <ul className={styleList.red}>
                <li>{props.carro}</li>
                <li>{props.marca}</li>
            </ul>
        </>
    )
}