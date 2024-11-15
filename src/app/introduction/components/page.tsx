import '@/styles/animates.css';
import componentImage from '../../../../public/components-preview.png'
import Image from 'next/image';
import Arrows from '@/components/Arrows';


export default function ComponentsPage() {
  return (
    <div className="flex flex-col items-center gap-2 justify-center">
      <h1 className="text-4xl mt-5 font-bold">Componentes</h1>
      <p className="text-3xl font-semibold text-focus-in">¿Que son los componentes de un computador?</p>
      <p className='text-2xl text-center w-1/2 scale-in-center'>
        Los componentes de un computador son las partes físicas que lo hacen funcionar.
        Cada una tiene una función específica para que el equipo pueda realizar tareas como mostrar imágenes, guardar información, y ejecutar programas.
      </p>
      <br />
      <p className='text-2xl text-center w-1/2 scale-in-center'>
        Estos componentes son lo que hacen funciónar el computador vamos a ver los principales para que te enteres como funcionan
      </p>
      <Image src={componentImage} alt='non' width={500} height={500} />
      <Arrows leftUrl='/introduction/keyboard' rightUrl='/introduction/components/cpu' />
    </div>
  )
}
