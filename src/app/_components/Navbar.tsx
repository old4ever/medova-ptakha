import Link from "next/link";
import { getUserSession } from "~/lib/session";

export default async function Navbar() {
  const user = await getUserSession();

  return (
    <nav className="border-b border-black bg-white dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-center px-4">
        <Link href="/">
          <span className="hidden sm:block">
            {"журнал сучасного українського мистецтва".toLocaleUpperCase()}
          </span>
        </Link>
        <div className="flex items-center justify-center py-2 sm:ml-auto">
          <a
            // href="https://www.google.com/"
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
            // href="https://www.google.com/"
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
  );
}
