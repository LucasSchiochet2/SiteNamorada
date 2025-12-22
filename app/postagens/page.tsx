import { getPostList } from "../../src/api";
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

const PER_PAGE = 15;

type PageProps = { searchParams?: Record<string, string | string[]> };

export default async function PostInternal(props: PageProps) {
  let searchParams = props.searchParams;
  if (typeof searchParams?.then === 'function') {
    searchParams = await searchParams;
  }
  let page = 1;
  if (searchParams && typeof searchParams.page !== 'undefined') {
    const param = searchParams.page;
    if (Array.isArray(param)) {
      page = parseInt(param[0] || '1', 10);
    } else {
      page = parseInt(param, 10);
    }
    if (isNaN(page) || page < 1) page = 1;
  }
  const newsRes = await getPostList({ page: String(page), perPage: String(PER_PAGE) });
  const lastPage = newsRes?.last_page || 1;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 lg:mt-46 xl:mt-48 w-full">
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <Link href="/postagens" className="hover:text-primary">Postagens</Link>
      </div>
      <h2 className="text-3xl text-secondary font-bold mb-6 text-center">Postagens</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {newsRes?.data?.map((post: PostData) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <CardNews
              category={post.category ? [post.category] : []}
              title={post.title}
              link={`/postagens/${post.slug ?? post.id}`}
              image={post.image?.crop ?? ""}
              smaller
            />
          </div>
        ))}
      </div>
      {/* Paginação */}
      <div className="flex justify-center items-center gap-2 mt-8">
        <Link
          href={`/postagens?page=${page - 1}`}
          className={`px-3 py-1 rounded ${page <= 1 ? 'pointer-events-none opacity-50 bg-gray-200' : 'bg-primary text-white hover:bg-primary/80'}`}
          aria-disabled={page <= 1}
        >
          Anterior
        </Link>
        <span className="px-3">Página {page} de {lastPage}</span>
        <Link
          href={`/postagens?page=${page + 1}`}
          className={`px-3 py-1 rounded ${page >= lastPage ? 'pointer-events-none opacity-50 bg-gray-200' : 'bg-primary text-white hover:bg-primary/80'}`}
          aria-disabled={page >= lastPage}
        >
          Próxima
        </Link>
      </div>
    </div>
  );
}