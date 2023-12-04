import Link from "next/link";

import LogoSmall from "public/logo-s.svg";
import LogoMedium from "public/logo-m.svg";
import PlaceholderAvatar from "public/placeholder-ava.jpg";

import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";
import MaxWidthWrapper from "./_components/MaxWidthWrapper";
import Image from "next/image";
import { object } from "zod";

const Volume = () => {
  return (
    <div>
      <div></div>
      <div>вип. 1</div>
    </div>
  );
};

export default async function Home() {
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
              <Image
                className="h-8"
                height={32}
                width={32}
                alt="Profile Picture"
                src={PlaceholderAvatar}
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
              <Image
                className="h-8"
                height={32}
                width={32}
                alt="Menu"
                src={LogoSmall as string}
              />
              <span className="self-center whitespace-nowrap">
                {"меню".toLocaleUpperCase()}
              </span>
            </a>
          </div>
        </div>
      </nav>
      <MaxWidthWrapper>
        <div>
          <div>
            <p>Медова</p>
            <Image alt="Logo" src={LogoMedium as string}></Image>
            <p>Птаха</p>
          </div>
          <div>
            <div>
              <div className="">Випуски</div>
              <button>
                <p>Отримати повнi версiї творiв</p>
              </button>
            </div>

            <div>
              <Volume />
              <Volume />
              <Volume />
              <Volume />
            </div>
          </div>
          <div>
            <div className="">Що таке Медова Птаха</div>
            <div>
              <p className="max-w-prose">
                Медова Птаха — це онлайн-журнал сучасного українського
                мистецтва, метою якого є надання можливості авторам-початківцям
                публікації своїх творів для широкого загалу.
              </p>
            </div>
          </div>
          <div>
            <div className="">Нашi автори</div>
            <div>
              <div>
                <div></div>
                <div>Иван Иванов</div>
              </div>
              <div>
                <div></div>
                <div>Иван Иванов</div>
              </div>
              <div>
                <div></div>
                <div>Иван Иванов</div>
              </div>
              <div>
                <div></div>
                <div>Иван Иванов</div>
              </div>
              <div>
                <div></div>
                <div>Иван Иванов</div>
              </div>
              <div>
                <div></div>
                <div>Иван Иванов</div>
              </div>
            </div>
          </div>
        </div>
        <footer>
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
