import { isHmrRefresh } from "next/dist/server/app-render/work-unit-async-storage.external";

export interface Banner {
  id: number;
  title: string;
  type?: string;
  target?: string;
  link: string;
  banner: string;
  mobile_banner?: string;
}

export async function getBanners(): Promise<{ data: Banner[] }> {
  return {
    data: [
      {
        id: 1,
        title: "Exemplo Banner 1",
        type: "page_link",
        target: "_self",
        link: "home",
        banner: "banner1.jpeg",
        mobile_banner: "banner1.jpeg",
      },
      {
        id: 2,
        title: "Exemplo Banner 2",
        type: "external_link",
        target: "_blank",
        link: "https://google.com",
        banner: "banner2.jpeg",
        mobile_banner: "banner2.jpeg",
      },
    ],
    
  };
}

export const MENUHEADER = [
  {
    title: "Eu / Você",
    submenu: [
      {
        title: "História",
        href: "/historia",
      },
    ],
  },
  {
    title: "Galerias",
    submenu: [
      {
        title: "Blanca",
        href: "/categoria/blanca",
      },
      {
        title: "Comidinhas",
        href: "/categoria/comidinhas",
      },
      {
        title: "Praia",
          href: "/categoria/praia",
        },
    ],
  },
  {
    title: "Postagens",
    href: "/postagens",
  },
  {
    title: "Quiz",
    href: "/quiz",
  },
  {
    title: "Gerenciador",
    href: "/gerenciador",
  },
];
