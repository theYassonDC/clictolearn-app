import Arrows from "./Arrows";
import '@/styles/animates.css'

export default function ComponentsSearch() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-2">
      <iframe
        height={768}
        width={1024}
        src="https://components-search-embed.netlify.app"
        className="scale-in-center"
      ></iframe>
      <Arrows leftUrl="/introduction/components/motherboard" rightUrl="#" />
    </div>
  )
}
