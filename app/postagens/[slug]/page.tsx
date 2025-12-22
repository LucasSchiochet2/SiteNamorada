import { getPost } from "@/src/api";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function PostInternal({ params }: Props) {
  // 1. Aguarde os parâmetros serem resolvidos
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const post = await getPost(slug);

  if (!post) {
    return (
      <main className="flex flex-col min-h-screen mt-9 lg:mt-26 xl:mt-30">
        <div className="container mx-auto px-4 py-32 text-center flex-1 flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold text-primary">Postagem não encontrada</h1>
          <p className="text-gray-500 mt-2">Não conseguimos localizar o ID: {slug}</p>
          <Link href="/postagens" className="text-secondary underline mt-4 block">
            Voltar para lista
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-col min-h-screen mt-9 lg:mt-26 xl:mt-30">
      <article className="flex-1 container mx-auto px-4 py-10 mt-20 flex flex-col gap-8 max-w-4xl">
        {/* Breadcrumb / Voltar */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link href="/postagens" className="hover:text-primary">Postagens</Link>
          <span>/</span>
          <span className="text-primary font-medium truncate">{post.title}</span>
        </div>

        {/* Cabeçalho do Post */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-3 items-center">
            <span className="bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
              {post.category}
            </span>
            <span className="text-gray-500 text-sm flex items-center gap-1">
               📅 {post.published_at_formatted}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-primary leading-tight">
            {post.title}
          </h1>
        </div>

        {/* Imagem de Destaque */}
        <div className="w-full aspect-video relative rounded-2xl overflow-hidden shadow-lg bg-gray-100">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Conteúdo do Post */}
        <div className="prose prose-lg max-w-none text-dark-secondary">
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>

        {/* Botão Voltar */}
        <div className="border-t border-gray-200 pt-8 mt-8 mb-10">
          <Link 
            href="/postagens" 
            className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
          >
            ← Voltar para todas as postagens
          </Link>
        </div>
      </article>
    </main>
  );
}