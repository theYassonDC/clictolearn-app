import '@/styles/animates.css';
import Arrows from "@/components/Arrows";
import Image from "next/image";
import motherBaordImage from '@f/public/motherboard-preview.png';

export default function MotherbardPage() {
  return (
    <div className="flex flex-col items-center gap-2 justify-center">
      <h1 className="text-4xl mt-5 font-bold">La place madre</h1>
      <p className="text-3xl font-semibold text-focus-in">¿Que es la placa madre?</p>
      <p className='text-2xl text-center w-1/2 scale-in-center'>
        Es la placa principal donde se conectan todos los componentes, permitiendo que trabajen juntos.
      </p>
      <Image src={motherBaordImage} alt='non' width={500} height={500} />
      <Arrows leftUrl='/introduction/components/grafic_card' rightUrl='/introduction/components/activity' />
    </div>
  )
}
