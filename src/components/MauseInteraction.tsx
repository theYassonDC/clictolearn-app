'use client'
import '@/styles/animates.css'
import Arrows from "./Arrows"

export default function MauseInteraction() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full gap-2" id="element">
        <p>Interactua moviendo el mouse y dando clic derecho a la burbuja verde</p>
        <iframe
          className="scale-in-center"
          src="https://explote-bourbles-embed.netlify.app/"
          height={768}
          width={1024}
        ></iframe>
        <Arrows rightUrl="/introduction/keyboard" leftUrl="/" />
      </div>
    </>
  )
}
