import Arrows from "./Arrows";
import '@/styles/animates.css'

export default function KeyBoardInteraction() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-2">
      <p>Interactua con el teclado</p>
      <iframe
        height={768}
        width={1024}
        src="https://thekeyboard-embed.netlify.app"
        className="scale-in-center"
      ></iframe>
      <Arrows leftUrl="/introduction" rightUrl="/introduction/components" />
    </div>
  )
}
