"use client";
import Link from "next/link";

import LogoSmall from "public/logo-s.svg";
import LogoMedium from "public/logo-m.svg";
import PlaceholderAvatar from "public/placeholder-ava.jpg";
import Volume1 from "public/volume-1.jpg";
import Volume2 from "public/volume-2.jpeg";
import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";
import MaxWidthWrapper from "./_components/MaxWidthWrapper";
import Image from "next/image";
import { object } from "zod";
import type { StaticImageData } from "next/image";

import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { useState } from "react";

interface VolumeProps {
  isLead: boolean;
  img: string | StaticImageData;
  alt?: string;
  volumeNumber?: number;
  className?: string;
}

const Volume: React.FC<VolumeProps> = ({
  img,
  alt,
  // isLead,
  volumeNumber = 1,
  className,
}) => {
  // let dimensions = "basis-[100%]";
  // if (isLead) {
  //   dimensions = "basis-[120%]";
  // }
  return (
    <div className={className}>
      {/* <div className={`${dimensions} flex flex-col`}> */}
      <div className="flex flex-col">
        <div>
          <Image
            src={img}
            alt={alt ? alt : "volume cover"}
            placeholder="blur"
            className="aspect-square h-full w-full object-cover object-top"
            // objectPosition="center"
          ></Image>
        </div>
        <div>{`вип. ${volumeNumber}`}</div>
      </div>
    </div>
  );
};

export default function Home() {
  // const volumesCount = 5;

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
                className="h-8 rounded-full border border-black"
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

      <div className="flex items-center justify-center bg-primary font-fancy">
        <span className="mr-[2vw] mt-8 text-[8vw]">Медова</span>
        <div className="md:shrink-0">
          <Image
            className="h-12 w-full object-cover sm:h-full sm:w-32"
            height={128}
            width={128}
            alt="Logo"
            src={LogoMedium as string}
          ></Image>
        </div>
        <span className=" mt-8 text-[8vw]">Птаха</span>
      </div>
      <MaxWidthWrapper className="flex flex-col">
        <div className="pt-8">
          <div className="flex justify-between">
            <div className="text-4xl">Випуски</div>
            <button>
              <p className="underline">Отримати повні версії випусків</p>
            </button>
          </div>

          <div className="flex pt-4">
            <Volume
              className="basis-[30%]"
              isLead={true}
              img={Volume1}
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
                <button
                  onClick={(ev) => {
                    ev.stopPropagation();
                    if (ev.target instanceof Element) {
                      ev.target
                        .closest("div")
                        ?.querySelector(".wrapper")
                        ?.scrollBy({
                          top: 0,
                          left: -250,
                          behavior: "smooth",
                        });
                    }
                  }}
                >
                  <span className="text-4xl"></span>
                </button>
                <div className="wrapper grid auto-cols-[30%] grid-flow-col gap-4 overflow-x-scroll">
                  <Volume isLead={false} img={Volume2} volumeNumber={2} />
                  <Volume isLead={false} img={Volume2} volumeNumber={3} />
                  <Volume isLead={false} img={Volume2} volumeNumber={4} />
                  {/* <Volume isLead={false} img={Volume2} volumeNumber={5} /> */}
                  {/* <Volume isLead={false} img={Volume2} volumeNumber={6} /> */}
                </div>
                <button
                  onClick={(ev) => {
                    ev.stopPropagation();
                    if (ev.target instanceof Element) {
                      ev.target
                        .closest("div")
                        ?.querySelector(".wrapper")
                        ?.scrollBy({
                          top: 0,
                          left: 250,
                          behavior: "smooth",
                        });
                    }
                  }}
                >
                  <span className="text-4xl"></span>
                </button>
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
            <button
              onClick={(ev) => {
                ev.stopPropagation();
                if (ev.target instanceof Element) {
                  const elementParent = ev.target
                    .closest("div")
                    ?.querySelector(".wrapper");

                  elementParent?.scrollBy({
                    top: 0,
                    left: +`-${elementParent.clientWidth}`,
                    behavior: "smooth",
                  });
                }
              }}
            >
              <span className="text-4xl"></span>
            </button>
            <div className="wrapper grid auto-cols-[15%] grid-flow-col gap-4 overflow-x-scroll">
              {Array.from(Array(15)).map(() => {
                return (
                  <div
                    className="flex flex-col items-center justify-center"
                    key={crypto.randomUUID()}
                  >
                    <Image
                      className="aspect-square h-full w-full rounded-full border border-black object-cover object-top"
                      height={128}
                      width={128}
                      alt="Profile Picture"
                      src={PlaceholderAvatar}
                    />
                    <div>{`Автор ${Math.floor(Math.random() * 10)}`}</div>
                  </div>
                );
              })}
            </div>
            <button
              onClick={(ev) => {
                ev.stopPropagation();
                if (ev.target instanceof Element) {
                  const elementParent = ev.target
                    .closest("div")
                    ?.querySelector(".wrapper");

                  elementParent?.scrollBy({
                    top: 0,
                    left: +`${elementParent.clientWidth}`,
                    behavior: "smooth",
                  });
                }
              }}
            >
              <span className="text-4xl"></span>
            </button>
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
