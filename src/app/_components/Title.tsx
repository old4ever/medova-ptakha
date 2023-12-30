import LogoMedium from "public/logo-m.svg";
import { env } from "~/env";

type LogoMedium = {
  src: string;
  height: number;
  width: number;
  blurWidth: number;
  blurHeight: number;
};

const LogoMediumTyped = LogoMedium as LogoMedium;

const Title = ({ subheading }: { subheading?: string }) => {
  // const logoDirtyfix = subheading ? "mt-4 md:shrink-0" : "mt-2 md:shrink-0";

  if (env.NODE_ENV === "development") {
    // console.log(LogoMediumTyped);
  }

  return (
    <>
      <div className="flex items-center justify-center bg-primary pb-9 pt-9 font-fancy">
        <span className="pr-5 pt-4 text-6xl sm:pr-6 sm:text-7xl md:pr-7 md:text-8xl lg:pr-8 lg:text-9xl">
          Медова
        </span>
        <div className="min-w-[6rem] sm:min-w-[7rem] md:min-w-[8rem] lg:min-w-[9rem]">
          <img className="w-full" alt="Logo" src={LogoMediumTyped.src}></img>
        </div>
        <span className="pl-1 pt-4 text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
          Птаха
        </span>
      </div>
      {subheading && (
        <div className="flex items-center justify-center bg-primary font-fancy">
          {/* <span className="mt-[-3rem] pl-16 text-4xl sm:ml-6 sm:mt-[-2rem] sm:pb-4 sm:pl-0 sm:text-5xl md:ml-7 md:text-6xl lg:ml-8 lg:text-7xl"> */}
          <span className="mt-[-1rem] pb-4 pl-4 text-4xl sm:text-5xl md:ml-7 md:text-6xl lg:ml-8 lg:text-7xl">
            {subheading}
          </span>
        </div>
      )}
    </>
  );
};

export default Title;
