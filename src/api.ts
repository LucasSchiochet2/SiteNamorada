const baseUrl = "http://adminsitenamorada-production.up.railway.app/api/"
const base = "adminsitenamorada-production.up.railway.app"
export async function getPostList({
  page,
  perPage,
}: {
  page: string;
  perPage: string;
}) {
  const url = baseUrl + "posts";
  const params = new URLSearchParams({
    page: page,
    per_page: perPage,
  });

  try {
    const res = await fetch(`${url}?${params.toString()}`, {
      cache: "no-store", // Garante dados frescos, altere conforme necessidade de cache
    });

    if (!res.ok) {
      throw new Error(`Erro na API: ${res.status}`);
    }

    const data = await res.json();

    // Mapeia os dados da API para o formato esperado pelo componente NewsIndex
    const mappedData = data.data.map(
      (post: { id: number; photo: string | null; post_category?: { name?: string }; [key: string]: unknown }) => ({
        ...post,
        // Usa o nome da categoria se existir, senão "Notícias"
        category: post.post_category?.name || "Notícias",
        slug: post.id.toString(),
        image: {
          crop: post.photo
            ? `http://${base}/private-image/${post.photo}`
            : "https://placehold.co/600x400?text=Sem+Imagem",
        },
      })
    );

    return {
      ...data,
      data: mappedData,
    };
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    return {
      data: [],
      current_page: 1,
      last_page: 1,
      total: 0,
    };
  }
}
export async function getPostByCategory({
  page,
  perPage,
  categoria,
}: {
  page: string;
  perPage: string;
  categoria: string;
}) {

  const url = baseUrl + "posts";
  const params = new URLSearchParams({
    page: page,
    per_page: perPage,
  });

  // Só adiciona se for string válida e não "undefined" ou vazio
  if (typeof categoria === "string" && categoria.trim() && categoria !== "undefined") {
    params.append("categoria", categoria);
  }

  try {
    console.log("Fetching posts for category:", params.toString());
    const res = await fetch(`${url}?${params.toString()}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Erro na API: ${res.status}`);
    }

    const data = await res.json();

    const mappedData = data.data.map(
      (post: {
        id: number;
        photo: string | null;
        category?: string;
        slug?: string;
        [key: string]: unknown;
      }) => ({
        ...post,
        category: post.category || "Notícias",
        slug: post.slug ?? post.id.toString(),
        image: {
          crop: post.photo
            ? `http://${base}/private-image/${post.photo}`
            : "https://placehold.co/600x400?text=Sem+Imagem",
        },
      })
    );

    return {
      ...data,
      data: mappedData,
    };
  } catch (error) {
    console.error("Erro ao buscar posts por categoria:", error);
    return {
      data: [],
      current_page: 1,
      last_page: 1,
      total: 0,
    };
  }
}

export async function getPost(slug: string) {
  const url = baseUrl + "posts";

  try {
    // O slug aqui está sendo usado como ID, conforme sua lógica anterior
    const res = await fetch(`${url}/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return null;
    }

    const post = await res.json();

    // Mapeia o objeto único para o formato usado no front
    return {
      ...post,
      category: "Notícias",
      image: post.photo
        ? `http://${base}/private-image/${post.photo}`
        : "https://placehold.co/1200x600?text=Sem+Imagem",
      published_at_formatted: new Date(post.created_at).toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }
      ),
    };
  } catch (error) {
    console.error("Erro ao buscar post:", error);
    return null;
  }
}
interface QuizApiItem {
  id: number;
  body: string;
  title: string;
  answers: string[];
}

export async function getQuizList() {
  const url = baseUrl + "quiz";
  try {
    const res = await fetch(url, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Erro na API: ${res.status}`);
    }

    const data = await res.json();

    // Mapeia os dados da API para o formato esperado pelo componente Quiz
    const mappedData = data.data.map((item: QuizApiItem) => ({
      id: item.id,
      questionText: item.body,
      title: item.title,
      answerOptions: item.answers.map((answer: string, idx: number) => ({
        answerText: answer,
        isCorrect: idx === 0, // Supondo que a primeira resposta é a correta
      })),
    }));

    // Embaralha as questões e pega apenas 5 aleatórias
    function shuffleArray<T>(array: T[]): T[] {
      const arr = [...array];
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }

    const shuffledQuestions = shuffleArray(mappedData).slice(0, 5);

    return {
      ...data,
      data: shuffledQuestions,
    };
  } catch (error) {
    console.error("Erro ao buscar quiz:", error);
    return {
      data: [],
      current_page: 1,
      last_page: 1,
      total: 0,
    };
  }
}
