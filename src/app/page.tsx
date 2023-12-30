import Link from "next/link";
import { env } from "~/env";

// import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";
import MaxWidthWrapper from "./_components/MaxWidthWrapper";
import { object } from "zod";

import { getUserSession } from "~/lib/session";
import ScrollRightButton from "./_components/scrollRight";
import ScrollLeftButton from "./_components/scrollLeft";
import Title from "./_components/Title";

type VolumeProps = {
  isLead: boolean;
  img: string;
  alt?: string;
  volumeNumber?: number;
  className?: string;
};

const Volume = ({
  img,
  alt,
  // isLead,
  volumeNumber = 1,
  className,
}: VolumeProps) => {
  // let dimensions = "basis-[100%]";
  // if (isLead) {
  //   dimensions = "basis-[120%]";
  // }
  return (
    <div className={className}>
      {/* <div className={`${dimensions} flex flex-col`}> */}
      <div className="flex flex-col">
        <div>
          <img
            src={img}
            alt={alt ? alt : "volume cover"}
            placeholder="blur"
            className="aspect-square h-full w-full object-cover object-top"
            // objectPosition="center"
          ></img>
        </div>
        <div>{`вип. ${volumeNumber}`}</div>
      </div>
    </div>
  );
};

export default async function Home() {
  const user = await getUserSession();

  // const volumesCount = 5;

  if (env.NODE_ENV === "development") {
    // console.log(user);
  }

  const contactEmail = "medovaptakha@gmail.com";
  // const hello = await api.post.hello.query({ text:"from tRPC"});

  // console.log(LogoSmall.src);
  return (
    <>
      <nav className="border-b border-black bg-white dark:bg-gray-900">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-center px-4">
          <span className="hidden sm:block">
            {"журнал сучасного українського мистецтва".toLocaleUpperCase()}
          </span>
          <div className="flex items-center justify-center py-2 sm:ml-auto">
            <a
              href="https://www.google.com/"
              target="_blank"
              className="flex flex-col items-center justify-center px-2"
            >
              <img
                className="h-8 w-8 rounded-full border border-black"
                alt="Profile Picture"
                src={user?.image ? user.image : "/placeholder-ava.jpg"}
              />
              <span className="self-center whitespace-nowrap">
                {"ПРОФIЛЬ".toLocaleUpperCase()}
              </span>
            </a>
            <a
              href="https://www.google.com/"
              target="_blank"
              className="flex flex-col items-center justify-center  px-2"
            >
              <img
                className="h-8 w-8 rounded-full border border-black"
                alt="Menu"
                src="/logo-s.svg"
              />
              <span className="self-center whitespace-nowrap">
                {"меню".toLocaleUpperCase()}
              </span>
            </a>
          </div>
        </div>
      </nav>

      <Title />
      <MaxWidthWrapper className="flex flex-col">
        <div className="pt-8">
          <div className="flex justify-between">
            <div className="text-4xl">Випуски</div>
            <button>
              <p className="underline">Отримати повні версії випусків</p>
            </button>
          </div>

          <div className="flex gap-2 pt-4">
            <Volume
              className="basis-[30%]"
              isLead={true}
              img="/volume-1.jpg"
              volumeNumber={1}
            />

            <div className=" flex-grow basis-[40%]">
              {/*   <div id="carousel" className="scroll-smooth"> */}
              {/* <div className="grid grid-flow-col grid-cols-[1fr_5fr_5fr_5fr_1fr] gap-4"> */}
              {/* <div className="grid grid-flow-col grid-cols-[1fr_1fr_1fr] gap-4"> */}
              {/* <div className="grid grid-flow-col grid-cols-[repeat(3,33%)] gap-4"> */}
              {/* <div className="grid grid-flow-col gap-4"> */}
              {/* <div className="grid columns-3 grid-flow-col gap-4"> */}
              {/* <div
                className={`grid grid-flow-col grid-cols-[1fr,_repeat(${volumesCount},30%),_1fr] gap-4 overflow-x-scroll`}
              > */}
              {/* <div className="grid auto-cols-[30%] grid-flow-col gap-4 overflow-x-scroll"> */}
              <div className="flex items-center justify-center gap-1">
                <ScrollLeftButton />
                <div className="wrapper grid auto-cols-[30%] grid-flow-col gap-4 overflow-x-scroll">
                  <Volume
                    isLead={false}
                    img="/volume-2.jpeg"
                    volumeNumber={2}
                  />
                  <Volume
                    isLead={false}
                    img="/volume-2.jpeg"
                    volumeNumber={3}
                  />
                  <Volume
                    isLead={false}
                    img="/volume-2.jpeg"
                    volumeNumber={4}
                  />
                  {/* <Volume isLead={false} img="/volume-2.jpeg" volumeNumber={5} /> */}
                  {/* <Volume isLead={false} img="/volume-2.jpeg" volumeNumber={6} /> */}
                </div>
                <ScrollRightButton />
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
          <div className="flex items-center justify-center gap-1 pt-4">
            <ScrollLeftButton />
            <div className="wrapper grid auto-cols-[33%] grid-flow-col gap-4 overflow-x-scroll sm:auto-cols-[15%]">
              {Array.from(Array(15)).map((_el, index) => {
                return (
                  <div
                    className="flex flex-col items-center justify-center"
                    key={index}
                  >
                    <img
                      className="aspect-square w-full rounded-full border border-black object-cover object-top"
                      // height={128}
                      // width={128}
                      alt="Profile Picture"
                      src="/placeholder-ava.jpg"
                    />
                    <div>{`Автор ${index}`}</div>
                  </div>
                );
              })}
            </div>
            <ScrollRightButton />
          </div>
          <div className=""></div>
        </div>

        <footer className="flex flex-col items-center justify-center pt-8">
          <a href={`mailto:${contactEmail}`} target="_blank">
            {contactEmail}
          </a>
          <p>© Онлайн журнал “Медова Птаха” 2023</p>
        </footer>
      </MaxWidthWrapper>
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
