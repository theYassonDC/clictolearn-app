import MauseInteraction from '@/components/MauseInteraction';
import '@/styles/animates.css';

export default function IntroductionPage() {
  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-3xl mt-5 font-bold">Introducción</h1>
      <p className="text-2xl font-semibold text-focus-in">¿Que es el mouse?</p>
      <p className="text-center w-96 scale-in-center">
        Un mouse es un apuntador que nos ayuda a mover el cursor 
        que es el pequeño símbolo que aparece en la pantalla que es una flecha
      </p>
      <MauseInteraction />
    </div>
  )
}
