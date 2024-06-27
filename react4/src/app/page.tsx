import Image from "next/image";
import styles from "./page.module.css";
import ClickBtn from "@/components/ClickBtn";
import Form from "@/components/Form";
import Listar from "@/components/Props/Listar";
import Produtos from "@/components/RenderIf/Produtos";

export default function Home() {
  return (
    <>
        <ClickBtn/>
        <Form/>
        <Listar/>
        <Produtos/>
    </>
  );
}
