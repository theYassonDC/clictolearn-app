import KeyBoardInteraction from "@/components/KeyBoardInteraction";
import '@/styles/animates.css';

export default function KeyBoardPage() {
  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-3xl mt-5 font-bold">Introducción</h1>
      <p className="text-2xl font-semibold text-focus-in">¿Que es el teclado?</p>
      <p className="text-center w-96 scale-in-center">
        Un teclado es un dispositiuvo que usamos para escribir en una computadora o en otros dispositivos,
        con telefonos o tabletas. Es similar a una maquina de escribir, pero con mas funciones.
      </p>
      <KeyBoardInteraction />
    </div>
  )
}
