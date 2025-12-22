import Link from "next/link";
import Image from "next/image";

export default function NossaCasinha() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 py-12 mt-18 lg:mt-46 xl:mt-48">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <span className="text-primary">Nossa Casinha</span>
      </div>
      <h2 className="text-4xl text-secondary font-extrabold mb-12 text-left">Nosso Lar, Nossa Casinha</h2>

      {/* Seção de destaque com imagem grande e texto sobreposto */}
      <section className="relative rounded-2xl overflow-hidden shadow-xl mb-16">
        <Image src="/casinha/20251005_091552.jpg" alt="Fachada da casa" width={1200} height={500} className="w-full h-72 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-end">
          <div className="p-8 text-white max-w-xl">
            <h3 className="text-2xl font-bold mb-2">Aqui começa nossa história juntos</h3>
            <p className="text-lg">Cada essa casa foi sonhadae e planejada com muito amor. É aqui que a gente ri, sonha, faz planos e vive nossos melhores momentos.</p>
          </div>
        </div>
      </section>

      {/* Cards de ambientes */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <Image src="/casinha/20251019_170030.jpg" alt="Sala" width={350} height={220} className="rounded-lg mb-4 object-cover h-60 w-full" />
          <h4 className="font-bold text-lg mb-2 text-primary">Sala</h4>
          <p className="text-gray-600 text-center">Onde assistimos filmes, e jogamos, comemos e conversamos até tarde.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <Image src="/casinha/20251019_170046.jpg" alt="Escritorio" width={350} height={220} className="rounded-lg mb-4 object-cover h-60 w-full" style={{ objectPosition: '50% 100%' }}/>
          <h4 className="font-bold text-lg mb-2 text-primary">Escritorio</h4>
          <p className="text-gray-600 text-center">Onde estudamos, até tarde, e que agora está lindo e tem até impressora.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <Image src="/casinha/20251019_170040.jpg" alt="Quarto" width={350} height={220} className="rounded-lg mb-4 object-cover h-60 w-full " />
          <h4 className="font-bold text-lg mb-2 text-primary">Quarto</h4>
          <p className="text-gray-600 text-center">Nosso cantinho de descanso, sonhos e planos para o futuro.</p>
        </div>
      </section>

      {/* Linha do tempo */}
      <section className="bg-light rounded-xl p-8">
        <h3 className="text-2xl font-bold text-primary mb-6">Momentos marcantes</h3>
        <ul className="space-y-4">
          <li className="flex items-center gap-4">
            <span className="w-3 h-3 bg-primary rounded-full"></span>
            <span>Primeira noite na casa nova, com pizza no sofá e filminho.</span>
          </li>
          <li className="flex items-center gap-4">
            <span className="w-3 h-3 bg-primary rounded-full"></span>
            <span>Pintura das paredes juntos, e mudança de móveis para deixar tudo do nosso jeitinho.</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
