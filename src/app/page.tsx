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
    <div className="w-screen overflow-x-hidden">
      <div className="flex h-screen flex-col justify-between">
        <div className="border-foreground flex flex-row items-center justify-center border-b border-solid py-2">
          <div className="text-foreground font-heading mr-auto pl-12 text-[2rem] leading-[2.625rem]">
            {"журнал сучасного українського мистецтва".toLocaleUpperCase()}
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
        <div className="mb-auto">
          <div className="bg-primary flex flex-row content-center justify-center gap-7 pb-[2.62rem] pt-[3.25rem]">
            <Image
              className="h-[9.25rem] w-[13.5rem]"
              alt="Logo"
              src={LogoMedium as string}
            ></Image>

            <p className="font-fancy mt-12 text-[6rem]">Медова Птаха</p>
          </div>
          <div className="px-12 pb-32 pt-16">
            <div className="flex flex-row items-center gap-12">
              <div className="text-[4rem]">Випуски</div>
              <button className="flex items-center rounded-[1.1875rem] bg-black px-8">
                <p className="py-2 text-white">Отримати повнi версiї творiв</p>
              </button>
            </div>

            <div className="flex items-center justify-between gap-8 pt-4">
              <div>
                <div className="h-[14.25rem] w-[14.25rem] bg-black "></div>
                <div className="text-2xl">вип. 1</div>
              </div>
              <div>
                <div className="h-[14.25rem] w-[14.25rem] bg-black "></div>
                <div className="text-2xl">вип. 2</div>
              </div>
              <div>
                <div className="h-[14.25rem] w-[14.25rem] bg-black "></div>
                <div className="text-2xl">вип. 3</div>
              </div>
              <div>
                <div className="h-[14.25rem] w-[14.25rem] bg-black "></div>
                <div className="text-2xl">вип. 4</div>
              </div>
            </div>
          </div>
          <div className="pb-32 pl-12">
            <div className="text-[4rem]">Що таке Медова Птаха</div>
            <div className="pt-4 text-2xl">
              <p>
                Медова Птаха — це онлайн-журнал сучасного українського
                мистецтва, метою якого є надання можливості авторам-початківцям
                публікації своїх творів для широкого загалу.
              </p>
              <p>
                Наразі наші випуски містять художні, поетичні та прозові твори,
                але в майбутньому в наших випусках Ви зможете знайти твори усіх
                видів візуального мистецтва.
              </p>
            </div>
          </div>
          <div className="pb-32 pl-12">
            <div className="text-[4rem]">Нашi автори</div>
            <div className="flex items-center justify-between gap-8 pt-4">
              <div className="flex flex-col items-center justify-center">
                <div className="h-[14.25rem] w-[14.25rem] rounded-full bg-black"></div>
                <div className="pt-4 text-2xl">Иван Иванов</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="h-[14.25rem] w-[14.25rem] rounded-full bg-black"></div>
                <div className="pt-4 text-2xl">Иван Иванов</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="h-[14.25rem] w-[14.25rem] rounded-full bg-black"></div>
                <div className="pt-4 text-2xl">Иван Иванов</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="h-[14.25rem] w-[14.25rem] rounded-full bg-black"></div>
                <div className="pt-4 text-2xl">Иван Иванов</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="h-[14.25rem] w-[14.25rem] rounded-full bg-black"></div>
                <div className="pt-4 text-2xl">Иван Иванов</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="h-[14.25rem] w-[14.25rem] rounded-full bg-black"></div>
                <div className="pt-4 text-2xl">Иван Иванов</div>
              </div>
            </div>
          </div>
        </div>
        <footer className="border-foreground sticky flex flex-col items-center justify-center gap-[0.5rem] border-t border-solid py-4">
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
