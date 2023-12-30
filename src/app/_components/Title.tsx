// import LogoMedium from "public/logo-m.svg";
import { env } from "~/env";

// type LogoMedium = {
//   src: string;
//   height: number;
//   width: number;
//   blurWidth: number;
//   blurHeight: number;
// };

// const LogoMediumTyped = LogoMedium as LogoMedium;

const Title = ({ subheading }: { subheading?: string }) => {
  // const logoDirtyfix = subheading ? "mt-4 md:shrink-0" : "mt-2 md:shrink-0";

  if (env.NODE_ENV === "development") {
    // console.log(LogoMediumTyped);
  }

  return (
    <>
      <div className="flex items-center justify-center bg-primary pb-9 pt-9 font-fancy">
        <span className="xsm:text-6xl pr-5 pt-4 text-4xl sm:pr-6 sm:text-7xl md:pr-7  lg:pr-8">
          Медова
        </span>
        <div className="xsm:min-w-[8rem] min-w-[6rem] sm:min-w-[9rem] md:min-w-[10rem] lg:min-w-[11rem]">
          <img className="w-full" alt="Logo" src="/logo-m.svg"></img>
        </div>
        <span className="xsm:text-6xl pl-2 pt-4 text-4xl sm:text-7xl ">
          Птаха
        </span>
      </div>
      {subheading && (
        <div className="flex items-center justify-center bg-primary font-fancy">
          {/* <span className="mt-[-3rem] pl-16 text-4xl sm:ml-6 sm:mt-[-2rem] sm:pb-4 sm:pl-0 sm:text-7xl md:ml-7  lg:ml-8"> */}
          <span className="mt-[-1rem] pb-4 pl-4 text-4xl sm:text-5xl md:ml-7 lg:ml-8">
            {subheading}
          </span>
        </div>
      )}
    </>
  );
};

export default Title;
