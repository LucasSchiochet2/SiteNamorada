// categoria/[slug]/page.tsx
import { getPostByCategory } from "../../../src/api"; // Usamos getPostByCategory, pois é uma lista
import { CardNews } from "@/components/Cards";
import Link from "next/link";

interface PostData {
  id: number;
  title: string;
  body: string;
  created_at: string;
  updated_at: string;
  category?: string;
  slug?: string;
  image?: {
    crop: string;
  };
}

export default async function CategoryPage({
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const currentPage =
    typeof searchParams.page === "string" ? searchParams.page : "1";
  const newsRes = await getPostByCategory({
    page: currentPage,
    perPage: "15",
    categoria: "gramado",
  });

  // Capitaliza a primeira letra para o título (estético)
  const categoryTitle = "gramado".charAt(0).toUpperCase() + "gramado".slice(1);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 lg:mt-46 xl:mt-48 w-full">
      {/* Breadcrumbs Dinâmico */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
        <span>/</span>
        <Link href="/postagens" className="hover:text-primary">
          Postagens
        </Link>
        <span>/</span>
        <span className="text-primary font-medium">{categoryTitle}</span>
      </div>

      {/* Título da Página */}
      <h2 className="text-3xl text-secondary font-bold mb-6 text-center">
        Categoria: <span className="text-primary">{categoryTitle}</span>
      </h2>

      {/* Listagem */}
      {newsRes?.data?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {newsRes.data.map((post: PostData) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <CardNews
                // Passamos a categoria atual ou a do post
                category={[categoryTitle]}
                title={post.title}
                // Link vai para a página do post único
                link={`/postagens/${post.slug ?? post.id}`}
                image={post.image?.crop ?? ""}
                smaller
              />
            </div>
          ))}
        </div>
      ) : (
        // Estado Vazio (Sem posts nessa categoria)
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">
            Nenhuma postagem encontrada na categoria.
          </p>
          <Link
            href="/postagens"
            className="text-primary hover:underline mt-4 inline-block"
          >
            Ver todas as postagens
          </Link>
        </div>
      )}
    </div>
  );
}
