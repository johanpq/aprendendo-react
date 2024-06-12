import Pessoa from "@/components/Pessoa";
import SayMyName from "@/components/SayMyName";

export default function Home() {

  const name = "Hanna";

  return (
    <div>
        <div>Sei la</div> 
        /*Deixando o props dinâmico
        <SayMyName nome = "Johan"/>
        <SayMyName nome = {name}/>

        <Pessoa nome = "Johan" idade = "21" genero = "Masculino" img = "./favicon.ico"/>
    </div>
  );
}
