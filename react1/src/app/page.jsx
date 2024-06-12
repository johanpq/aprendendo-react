import Image from "next/image";
import styles from "./page.module.css"
import HelloWorld from '../components/HelloWorld'
import Frase from '../components/Frase'

export default function Home() {

  const name = "Johan";
  const url = "https://www.youtube.com/watch?v=9iKNxnFJY_Q&list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO&index=4";

  function soma(a, b) {
    return a + b;
  }

  return (
    <>
      <div>HelloWorld {name}!</div>

      <div>Testando funções</div>

      <div>{soma(2,2)}</div>

      <a href={url} target="_blank">Clique para ir para o video</a>

      <HelloWorld/>

    /*Pode sempre ser reutilizavel e chamar quantas vezes quiser */
      <Frase/>
      <Frase/>
    </>
  );
}
