import '@/styles/animates.css';
import Arrows from "@/components/Arrows";
import cpuImage from '../../../../../public/cpu-preview.png'
import Image from "next/image";

export default function CPUPage() {
  return (
    <div className="flex flex-col items-center gap-2 justify-center">
      <h1 className="text-4xl mt-5 font-bold">El procesador</h1>
      <p className="text-3xl font-semibold text-focus-in">¿Que es el procesador?</p>
      <p className='text-2xl text-center w-1/2 scale-in-center'>
        El procesador de un computador es como el {"\"🧠\""} que se encarga de hacer todos los cálculos y tomar decisiones para que el computador funcione. Sin él, el computador no podría hacer nada.
      </p>
      <Image src={cpuImage} alt='non' width={500} height={500} />
      <Arrows leftUrl='/introduction/components' rightUrl='/introduction/components/storage' />
    </div>
  )
}
