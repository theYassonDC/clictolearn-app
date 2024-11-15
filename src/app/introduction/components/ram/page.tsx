import '@/styles/animates.css';
import Arrows from "@/components/Arrows";
import Image from "next/image";
import ramImage from '@f/public/ram-preview.png'

export default function RamPage() {
  return (
    <div className="flex flex-col items-center gap-2 justify-center">
      <h1 className="text-4xl mt-5 font-bold">La memoria ram</h1>
      <p className="text-3xl font-semibold text-focus-in">¿Que es la memoria ram?</p>
      <p className='text-2xl text-center w-1/2 scale-in-center'>
        La RAM (Memoria de Acceso Aleatorio) es una memoria temporal que usa el computador para almacenar los datos y programas que está utilizando en ese momento. Cuando apagas el computador, la RAM se borra.
      </p>
      <Image src={ramImage} alt='non' width={500} height={500} />
      <Arrows leftUrl='/introduction/components/storage' rightUrl='/introduction/components/grafic_card' />
    </div>
  )
}
