interface testeProps {
    name: string,
    age: number
}

export default function PropTs(props: testeProps) {
    return (
        <div>
            <div>{props.name}</div>
            <div>{props.age}</div>
        </div>
    )
}