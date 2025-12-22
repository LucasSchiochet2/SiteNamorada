import Link from "next/link";
import { ICardNews} from "./interface";
export function CardNews({
  category,
  title,
  published_at,
  link,
  image,
  smaller = false,
}: ICardNews) {
  return (
    // Adicionado 'block' aqui. Links são inline por padrão e podem quebrar o layout de largura/altura
    <Link className="group w-full block" href={link}>
      <div className="relative w-full">
        <img
          // Removido 'h-full'. O aspect-[1.4] cuidará da altura automaticamente.
          className="w-full object-cover aspect-[1.4]"
          src={image}
          alt={title}
        />
        <div className="absolute bottom-0 left-0 w-full h-fit">
          {/* Ajustado o gradiente e posicionamento para garantir que cubra a imagem corretamente */}
          <div className="bg-linear-to-t from-mono/90 group-hover:from-primary/90 group-hover:to-primary/0 to-mono/0 w-full h-full z-10 text-white flex flex-col gap-2 px-8 py-5 justify-end">
            <span
              className={`font-bold ${
                smaller ? "text-xs" : "text-xs md:text-base"
              }`}
            >
              {published_at?.date}
            </span>
            {category && (
              <div className="flex gap-0.5">
                {category.map((cat, index) => (
                  <span
                    key={index}
                    className={`bg-secondary py-1 px-3 uppercase rounded-full mr-2 ${
                      smaller ? "text-[10px]" : "text-[10px] md:text-xs"
                    }`}
                  >
                    {cat}
                  </span>
                ))}
              </div>
            )}
            <span
              className={`font-bold leading-none ${
                smaller ? "text-base" : "text-base md:text-2xl"
              }`}
            >
              {title}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}