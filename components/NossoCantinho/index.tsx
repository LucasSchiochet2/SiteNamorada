import Image from "next/image";
export default function N() {
  return (
    <div id="virtual-chapel" className="relative">
      <div className="container max-lg:flex-col-reverse mx-auto py-16 flex gap-10 justify-center items-center text-primary px-4">
        <Image
          src="/nossoCantinho.png"
          alt="Montagem Fotos Capela"
          width={350}
          height={350}
          className="h-full w-fit"
        />
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-8 max-lg:items-center max-lg:justify-center max-lg:text-center">
            <div className="flex flex-col gap-5 max-w-155">
              <span className="text-4xl text-accent font-bold md:text-6xl">Nosso Cantinho</span>
              <span className="text-base md:text-xl md:leading-7!">
                Esse é nosso cantinho na internet, que podemos publicar nossas coisnhas.
              </span>
            </div>
          </div>
          <div className="items-start gap-10 md:gap-4 grid grid-cols-2 2xl:grid-cols-4 justify-items-center">
            <a href="/quiz" className="w-full flex justify-center">
                <div className="flex flex-col items-center w-full">
                  <div className="flex flex-col justify-between items-center text-center border w-40 md:w-55 h-30 border-primary rounded-tr-[20px] rounded-bl-[20px] text-lg lg:text-xl font-bold text-primary px-4 py-5 md:py-7 transition-colors duration-300 group hover:bg-primary hover:text-white">
                    <span className="w-full wrap-break-words leading-tight flex-1 flex items-center justify-center transition-colors duration-300">Quiz</span>
                    <div className="w-10 h-1.25 bg-secondary mt-2 rounded group-hover:w-14 transition-all duration-300 mx-auto"></div>
                  </div>
                </div>
              </a>
              <a href="/nossa-casinha" className="w-full flex justify-center">
                <div className="flex flex-col items-center w-full">
                  <div className="flex flex-col justify-between items-center text-center border w-40 md:w-55 h-30  border-primary rounded-tr-[20px] rounded-bl-[20px] text-lg lg:text-xl font-bold text-primary px-4 py-5 md:py-7 transition-colors duration-300 group hover:bg-primary hover:text-white">
                    <span className="w-full wrap-break-words leading-tight flex-1 flex items-center justify-center transition-colors duration-300">Nossa Casinha</span>
                    <div className="w-10 h-1.25 bg-secondary mt-2 rounded group-hover:w-14 transition-all duration-300 mx-auto"></div>
                  </div>
                </div>
              </a>
              <a href="/categoria/jogos" className="w-full flex justify-center">
                <div className="flex flex-col items-center w-full">
                  <div className="flex flex-col justify-between items-center text-center border w-40 md:w-55 h-30  border-primary rounded-tr-[20px] rounded-bl-[20px] text-lg lg:text-xl font-bold text-primary px-4 py-5 md:py-7 transition-colors duration-300 group hover:bg-primary hover:text-white">
                    <span className="w-full wrap-break-words leading-tight flex-1 flex items-center justify-center transition-colors duration-300">Jogos</span>
                    <div className="w-10 h-1.25 bg-secondary mt-2 rounded group-hover:w-14 transition-all duration-300 mx-auto"></div>
                  </div>
                </div>
              </a>
              <a href="/categoria/gramado" className="w-full flex justify-center">
                <div className="flex flex-col items-center w-full">
                  <div className="flex flex-col justify-between items-center text-center border w-40 md:w-55 h-30 border-primary rounded-tr-[20px] rounded-bl-[20px] text-lg lg:text-xl font-bold text-primary px-4 py-5 md:py-7 transition-colors duration-300 group hover:bg-primary hover:text-white">
                    <span className="w-full wrap-break-words leading-tight flex-1 flex items-center justify-center transition-colors duration-300">Gramado</span>
                    <div className="w-10 h-1.25 bg-secondary mt-2 rounded group-hover:w-14 transition-all duration-300 mx-auto"></div>
                  </div>
                </div>
              </a>
          </div>
        </div>
      </div>
    </div>
  );
}
