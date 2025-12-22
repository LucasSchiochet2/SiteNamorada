import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t mt-16">
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row flex-wrap justify-between items-center gap-10 text-center">
        <div className="flex items-center gap-3">
          <Image
            alt="Logo"
            width={288}
            height={100}
            src="/logo.png"
            className="transition-all duration-500"
          />
        </div>
        <div>
        <div className="flex leading-none text-dark-secondary font-bold">
          <span className="text-4xl">Lucas e Ana</span>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          Um pouco da nossa vidinha juntos!
        </p></div>
        <nav className="flex flex-col gap-4 items-center">
          <h4 className="font-bold text-dark-secondary">Navegação</h4>
          <ul className="flex flex-row gap-4 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Início
              </Link>
            </li>
            <li>
              <Link href="/postagens" className="hover:text-primary transition-colors">
                Postagens
              </Link>
            </li>
            <li>
              <Link href="/historia" className="hover:text-primary transition-colors">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="https://adminsitenamorada-production.up.railway.app" className="hover:text-primary transition-colors">
                Gerenciador
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-gray-100">
        <div className="container mx-auto px-4 py-6 text-sm flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500">
          <span>© {year} Todos os direitos reservados.</span>
          <span className="text-xs">Desenvolvido por Lucas Schiochet</span>
        </div>
      </div>
    </footer>
  );
}
