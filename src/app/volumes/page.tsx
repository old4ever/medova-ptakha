import Image from "next/image";
import { env } from "~/env";
import { getUserSession } from "~/lib/session";
import PlaceholderAvatar from "public/placeholder-ava.jpg";
import LogoSmall from "public/logo-s.svg";
import Title from "../../components/Title";
import Navbar from "../../components/Navbar";

export default async function Volumes() {
  const user = await getUserSession();

  if (env.NODE_ENV === "development") {
    // console.log("Development");
  }

  return (
    <>
      <Navbar />
      {/* <Title /> */}
      <Title subheading={"Випуски"} />
    </>
  );
}
