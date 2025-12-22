import Link from "next/link";
export default function Historia() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 mt-18 lg:mt-46 xl:mt-48">
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
        <span>/</span>
        <Link href="/quiz" className="text-primary">
          Quiz
        </Link>
      </div>
      <h2 className="text-3xl text-secondary font-bold mb-6 text-center">
        Nossa História
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <img
            src="historia/20241021_001332.jpg"
            alt="Foto 1"
            className="rounded-xl shadow-lg object-cover w-[60%]"
          />
        </div>{" "}
        <div>
          <p className="text-lg leading-relaxed text-primary">
            Desde aquelas primeiras mensagens e aquele nosso primeiro encontro
            meio esquisito lá na UCS, que já escondia muita coisa linda que
            estava por vir, tudo começou a mudar. Lá no Baitakão, onde a gente
            se conheceu melhor, aconteceu o nosso primeiro beijo, e ali eu já
            estava completamente apaixonado por você. Eu sentia, com certeza,
            que era com você que eu queria dividir todo o meu amor.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
        <div className="col-span-2">
          <p className="text-lg leading-relaxed text-primary">
            A cada dia que passa, conforme vou te conhecendo mais, me apaixono
            ainda mais por quem você é. Já vivemos tantos momentos especiais:
            nossa primeira viagem juntos para Gramado, o nosso pedido de namoro,
            a primeira vez que fomos à praia lado a lado, todos os passeios no
            shopping, os lugares incríveis que você me apresentou, e tantos
            momentos únicos que vivemos juntos.
          </p>
        </div>
        <div className="flex flex-row gap-4 col-span-2">
            <img
              src="historia/20241116_162513.jpg"
              alt="Foto 4"
              className="rounded-xl shadow-lg object-cover w-[50%]"
            />
            <img
              src="historia/20241206_175054.jpg"
              alt="Foto 3"
              className="rounded-xl shadow-lg object-cover w-[50%]"
            />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
        <div className="order-2 md:order-1">
          <img
            src="historia/20251005_091552.jpg"
            alt="Foto 2"
            className="rounded-xl shadow-lg object-cover w-[60%]"
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="text-lg leading-relaxed text-primary">
            E agora esse ano, finalmente fomos morar juntos! Cada dia ao seu
            lado é maravilhoso, e eu não poderia estar mais feliz por
            compartilhar minha vida com você. Você é a pessoa que me completa.
            Te amo muito.
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}
