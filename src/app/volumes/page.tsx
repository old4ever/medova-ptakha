import Image from "next/image";
import { env } from "~/env";
import { getUserSession } from "~/lib/session";
import PlaceholderAvatar from "public/placeholder-ava.jpg";
import LogoSmall from "public/logo-s.svg";
import Title from "../_components/Title";

export default async function Volumes() {
  const user = await getUserSession();

  if (env.NODE_ENV === "development") {
    // console.log("Development");
  }

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
                className="h-8 rounded-full border border-black"
                height={32}
                width={32}
                alt="Profile Picture"
                src={user?.image ? user.image : PlaceholderAvatar}
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
                className="h-8 rounded-full border border-black"
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
      {/* <Title /> */}
      <Title subheading={"Випуски"} />
    </>
  );
}
