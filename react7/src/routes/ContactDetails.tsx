'use client'

import { useParams, useNavigate } from "react-router-dom" // -> É um hook que consegue extrair as informações da URL para pegar o ID

const ContactDetails = () => {
    const {id} = useParams<string>();

    // ! 6. UsenNavagete -> É para redirecionar a página na parte lógica

    const navigate = useNavigate()

    const handleContact = () => {
        alert(`Mensagem para o contato ${id} enviada!`);
        return navigate("/") // -> "/" é home
    }

  return (
    <>
        <div>
            <div>ContactDetails</div>
        </div>
        <h1>Exibindo contatos {id}</h1>
        <button onClick={handleContact}>Enviar mensagem</button>
    </>
  )
}

export default ContactDetails