export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full gap-2">
      <h1 className="text-3xl">¡Aprende a usar tu computadora!</h1>
      <a
        href="/introduction"
        className="bg-green-500 p-5 rounded-lg font-semibold hover:bg-green-700
      ">
        Click aqui
      </a>
    </div>
  );
}
