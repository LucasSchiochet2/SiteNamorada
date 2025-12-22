"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { CardNews } from "../../Cards";

interface Post {
  id: number;
  title: string;
  slug: string;
  category: string;
  image: {
    crop: string;
  };
}

export default function NewsCarousel({ data }: { data: Post[] }) {
  // Usamos state em vez de ref para o elemento DOM da paginação
  const [paginationEl, setPaginationEl] = useState<HTMLElement | null>(null);

  if (!data || data.length === 0) return null;

  return (
    <div className="w-full h-fit">
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
          el: paginationEl, // Passamos o estado aqui
        }}
        slidesPerView={1}
        speed={500}
        loop={data.length > 1}
        className="h-full"
      >
        {data.map((item: Post, index: number) => (
          <SwiperSlide key={item.id || index}>
            <CardNews
              category={[item.category]}
              title={item.title}
              link={`/noticias/${item.slug}`}
              image={item.image?.crop}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* The pagination div is mounted before Swiper now */}
      <div ref={setPaginationEl} className="custom-swiper-pagination mt-4 flex justify-center" />
    </div>
  );
}
