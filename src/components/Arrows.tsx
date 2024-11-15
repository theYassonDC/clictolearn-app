import LeftIcon from "./icons/Left";
import RightIcon from "./icons/Right";
interface IArrows {
  leftUrl: string
  rightUrl: string
}

export default function Arrows({ rightUrl, leftUrl }: IArrows) {
  return (
    <>
      <a
        title="Ir a la siguiente lección!"
        href={rightUrl}
        className="absolute flex gap-2 items-center bottom-auto right-1 font-bold bg-green-700 p-3 rounded-3xl hover:bg-green-500"
      >
        Siguiente
        <RightIcon />
      </a>
      <a
        title="Ir a la anterior lección!"
        href={leftUrl}
        className="absolute flex gap-2 items-center bottom-auto left-1 font-bold bg-green-700 p-3 rounded-3xl hover:bg-green-500"
      >
        <LeftIcon />
        Anterior
      </a>
    </>
  )
}
