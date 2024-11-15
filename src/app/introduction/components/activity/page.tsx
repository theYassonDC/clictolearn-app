import '@/styles/animates.css';
import ComponentsSearch from '@/components/SearchComponents';

export default function ActivityComponents() {
  return (
    <div className="flex flex-col items-center gap-2 justify-center">
      <h1 className="text-4xl mt-5 font-bold">Busca los componentes</h1>
      <p className='text-2xl text-center w-1/2 scale-in-center'>
        Con el mouse ve buscando los componentes para arrastrarlos hacia el computador
      </p>
      <ComponentsSearch />
    </div>
  )
}
