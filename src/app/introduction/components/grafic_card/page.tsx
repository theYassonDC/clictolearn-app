import '@/styles/animates.css';
import Arrows from "@/components/Arrows";
import Image from "next/image";
import cardImage from '@f/public/card_grafic-preview.png';

export default function CardGrafic() {
  return (
    <div className="flex flex-col items-center gap-2 justify-center">
      <h1 className="text-4xl mt-5 font-bold">La tarjeta grafica</h1>
      <p className="text-3xl font-semibold text-focus-in">¿Que es la tarjeta grafica?</p>
      <p className='text-2xl text-center w-1/2 scale-in-center'>
        Se encarga de generar las imágenes y videos que ves en la pantalla.
      </p>
      <Image src={cardImage} alt='non' width={500} height={500} />
      <Arrows leftUrl='/introduction/components/ram' rightUrl='/introduction/components/motherboard' />
    </div>
  )
}
