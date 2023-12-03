import Link from "next/link";

import LogoSmall from "public/logo-s.svg";
import LogoMedium from "public/logo-m.svg";
import PlaceholderAvatar from "public/placeholder-ava.jpg";

import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";
import MaxWidthWrapper from "./_components/MaxWidthWrapper";
import Image from "next/image";
import { object } from "zod";

export default async function Home() {
  const contactEmail = "medovaptakha@gmail.com";
  // const hello = await api.post.hello.query({ text: "from tRPC" });

  // return (
  //   <MaxWidthWrapper className="mb-12 mt-28 flex flex-col items-center justify-center text-center sm:mt-40">
  //     <div className="max-w-fill mx-auto mb-4 flex items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
  //       <p className="text-sm font-semibold text-gray-700">Медова Птаха</p>
  //     </div>
  //     <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
  //       Chat with your <span className="text-blue-600">documents</span> in
  //       seconds
  //     </h1>
  //   </MaxWidthWrapper>
  // );

  // console.log(LogoSmall.src);
  return (
    <div>
      <div>
        <div className="border-foreground flex h-[5rem] flex-row items-center justify-center border border-solid">
          <div className="text-foreground font-heading mr-auto text-[2rem]">
            ЖУРНАЛ СУЧАСНОГО УКРАЇНСЬКОГО МИСТЕЦТВА
          </div>
          <div className="flex flex-row gap-8 pr-8">
            <div className="flex h-[4.25rem] w-[3.19rem] flex-col items-center justify-center gap-1">
              <Image
                className="border-foreground h-12 w-12 rounded-full border border-solid"
                alt="Profile Picture"
                src={PlaceholderAvatar}
              ></Image>
              <div className="text-foreground font-heading text-[0.75rem]">
                ПРОФIЛЬ
              </div>
            </div>
            <div className="flex h-[4.25rem] w-[3.19rem] flex-col items-center justify-center gap-1">
              <Image
                className="border-foreground h-12 w-12 rounded-full border border-solid"
                alt="Logo"
                src={LogoSmall as string}
              ></Image>
              <div className="text-foreground font-heading text-[0.75rem]">
                МЕНЮ
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-primary flex h-[15.125rem] flex-row content-center justify-center">
            <Image
              className="h-[9.25rem] w-[13.5rem]"
              alt="Logo"
              src={LogoMedium as string}
            ></Image>

            <div className="font-fancy mt-12 text-[6rem]">Медова Птаха</div>
          </div>
          <div>
            <div>
              <div>
                <div />
                <div>вип. 1</div>
              </div>
              <div>
                <div />
                <div>вип. 2</div>
              </div>
              <div>
                <div />
                <div>вип. 3</div>
              </div>
              <div>
                <div />
                <div>вип. 4</div>
              </div>
            </div>
            <div>
              <div>Отримати повнi версiї творiв</div>
            </div>
            <div>Випуски</div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, duo lorem quodsi discere ne. Labitur
              minimum laboramus duo ea, cum vidisse persius ad. An vis diam
              utroque luptatum, cu vim eirmod debitis vituperata.
            </p>
            <div>Що таке Медова Птаха</div>
          </div>
          <div>
            <div>
              <div>
                <div />
                <div>Iван Iванов</div>
              </div>
              <div>
                <div />
                <div>Iван Iванов</div>
              </div>
              <div>
                <div />
                <div>Iван Iванов</div>
              </div>
              <div>
                <div />
                <div>Iван Iванов</div>
              </div>
              <div>
                <div />
                <div>Iван Iванов</div>
              </div>
              <div>
                <div />
                <div>Iван Iванов</div>
              </div>
            </div>
            <div>Нашi автори</div>
          </div>
        </div>
        <footer className="sticky flex flex-col items-center justify-center gap-[0.5rem]">
          <a href={`mailto:${contactEmail}`} target="_blank">
            {contactEmail}
          </a>
          <p>© Онлайн журнал “Медова Птаха” 2023</p>
        </footer>
      </div>
    </div>
  );
}

// async function CrudShowcase() {
//   const latestPost = await api.post.getLatest.query();

//   return (
//     <div className="w-full max-w-xs">
//       {latestPost ? (
//         <p className="truncate">Your most recent post: {latestPost.name}</p>
//       ) : (
//         <p>You have no posts yet.</p>
//       )}

//       <CreatePost />
//     </div>
//   );
// }
