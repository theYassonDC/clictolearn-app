import '@/styles/animates.css';
import Arrows from '@/components/Arrows'
import hddImage from '@f/public/hdd-preview.png';
import Image from 'next/image';

export default function StoragePage() {
  return (
    <div className="flex flex-col items-center gap-2 justify-center">
      <h1 className="text-4xl mt-5 font-bold">El disco duro</h1>
      <p className="text-3xl font-semibold text-focus-in">¿Que es el disco duro?</p>
      <p className='text-2xl text-center w-1/2 scale-in-center'>
        El disco duro es el lugar donde se guarda toda la información de manera permanente, como tus archivos, fotos, y programas. 
        Aunque apagues el computador, todo lo que guardaste en el disco duro permanece allí.
      </p>
      <Image src={hddImage} alt='non' width={500} height={500} />
      <Arrows leftUrl='/introduction/components/cpu' rightUrl='/introduction/components/ram' />
    </div>
  )
}
