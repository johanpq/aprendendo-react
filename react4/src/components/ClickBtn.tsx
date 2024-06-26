'use client'

export default function ClickBtn() {

    function clickBtn() {
        console.log("Clickou!");
    }

    return(
       <button onClick={clickBtn}>Clique para disparar um evento!</button>
    )
}