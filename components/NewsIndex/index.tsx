import { getPostList } from "../../src/api";
import { CardNews } from "../Cards";
import { Icon } from "../icons";
import NewsCarousel from "./NewsCarousel";
import Link from "next/link";

function ButtonAllNews() {
  return (
    <Link
      href="/postagens"
      className="text-primary w-fit text-xs flex items-center border border-primary rounded-full gap-2 py-3 px-5 hover:bg-primary hover:text-white"
    >
      <span>Ver todas as Postagens</span>
    </Link>
  );
}
export default async function NewsIndex() {
  const newsRes = await getPostList({page: "1", perPage: "5"});
  const posts = newsRes.data || [];

  return (
    <div className="container mx-auto flex flex-col gap-5 px-4 mb-16">
      <div className="flex gap-9 items-center max-lg:justify-between">
        <div className="flex gap-2 items-center">
          <div>
            <Icon id="svg-sm-logo" className="w-14 h-14 lg:w-16 lg:h-16 text-primary" />
          </div>
          <div className="flex flex-col text-dark-secondary leading-none!">
            <span className="text-[28px] lg:text-[40px] font-bold">Nossas</span>
            <span className="text-[24px] lg:text-[32px]">Últimas Postagens</span>
          </div>
        </div>
        <div className="max-sm:hidden">{ButtonAllNews()}</div>
      </div>
      <div className="flex max-lg:flex-col gap-3 max-sm:hidden">
        <div className="lg:w-1/2">
          {posts[0] && (
            <CardNews category={[posts[0].category]} title={posts[0].title} link={`/postagens/${posts[0].slug}`} image={posts[0].image.crop} />
          )}
        </div>
        <div className="lg:w-1/2 grid grid-cols-2 gap-3">
          <div className="col-span-1">
            {posts[1] && (
              <CardNews category={[posts[1].category]} title={posts[1].title} link={`/postagens/${posts[1].slug}`} image={posts[1].image.crop} smaller/>
            )}
          </div>
          <div className="col-span-1">
            {posts[2] && (
              <CardNews category={[posts[2].category]} title={posts[2].title} link={`/postagens/${posts[2].slug}`} image={posts[2].image.crop} smaller/>
            )}
          </div>
          <div className="col-span-1">
            {posts[3] && (
              <CardNews category={[posts[3].category]} title={posts[3].title} link={`/postagens/${posts[3].slug}`} image={posts[3].image.crop} smaller/>
            )}
          </div>
          <div className="col-span-1">
            {posts[4] && (
              <CardNews category={[posts[4].category]} title={posts[4].title} link={`/postagens/${posts[4].slug}`} image={posts[4].image.crop} smaller/>
            )}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-7 sm:hidden items-center">
        <NewsCarousel data={posts} />
        {ButtonAllNews()}
      </div>
    </div>
  );
}