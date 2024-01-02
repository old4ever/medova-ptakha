import Link from "next/link";
import { env } from "~/env";
import process from "process";

// import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { object } from "zod";

import ScrollRightButton from "../components/ui/scrollRightArrow";
import ScrollLeftButton from "../components/ui/scrollLeftArrow";
import Title from "../components/Title";
// import Navbar from "../components/Navbar";
import Navbar from "~/components/Navbar";
import VolumesCarousel from "~/components/VolumesCarousel";
import Volume from "~/components/Volume";
import AuthorsCarousel from "~/components/AuthorsCarousel";

const isDevEnv = env.NODE_ENV === "development" || env.NODE_ENV === "test";

export default async function Home() {
  const contactEmail = "medovaptakha@gmail.com";
  // const hello = await api.post.hello.query({ text:"from tRPC"});

  // console.log(LogoSmall.src);
  return (
    <>
      <Navbar />

      <Title />
      <MaxWidthWrapper className="flex flex-col">
        <div className="pt-8">
          <div className="flex justify-between">
            <div className="text-4xl">Випуски</div>
            <button>
              <Link href={"/volumes"}>
                <p className="underline">Отримати повні версії випусків</p>
              </Link>
            </button>
          </div>

          <div className="flex gap-2 pt-4">
            <Volume
              className="min-w-[100px] basis-[30%]"
              img="/volume-1.jpg"
              volumeNumber={1}
            />

            <div className="flex-grow basis-[40%]">
              <div className="flex w-full items-center justify-center px-12">
                <VolumesCarousel />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8">
          <div className="text-4xl">Що таке Медова Птаха</div>
          <div className="pt-4">
            <p>
              Медова Птаха — це онлайн-журнал сучасного українського мистецтва,
              метою якого є надання можливості авторам-початківцям публікації
              своїх творів для широкого загалу.
            </p>
          </div>
        </div>
        <div className="mx-auto pt-8">
          <button className=" rounded-full border border-black bg-primary px-24 py-4">
            Надiслати роботу
          </button>
        </div>
        <div className="pt-8">
          <div className="text-4xl">Нашi автори</div>
          <div className="flex w-full items-center justify-center px-12 pt-4">
            <AuthorsCarousel />
          </div>
          <div className=""></div>
        </div>

        <footer className="flex flex-col items-center justify-center pt-8">
          <a href={`mailto:${contactEmail}`} target="_blank">
            {contactEmail}
          </a>
          <p>{`© Онлайн журнал “Медова Птаха" ${new Date().getFullYear()}`}</p>
        </footer>
      </MaxWidthWrapper>
      {isDevEnv && (
        <div className="flex justify-center bg-red-400">
          <p>
            {/* <p className="fixed bottom-0 w-full bg-red-400"> */}
            {"Node Process started: "}
            {new Date(
              new Date().valueOf() - process.uptime() * 1000,
            ).toLocaleString()}
          </p>
        </div>
      )}
    </>
  );
}

// async function CrudShowcase() {
//   const latestPost = await api.post.getLatest.query();

//   return (
//     <div >
//       {latestPost ? (
//         <p >Your most recent post: {latestPost.name}</p>
//       ) : (
//         <p>You have no posts yet.</p>
//       )}

//       <CreatePost />
//     </div>
//   );
// }
