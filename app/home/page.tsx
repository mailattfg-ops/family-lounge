import Image from "next/image"; 
import AboutUs from "./aboutUs";

export default function Home() {
  
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-[#f6f6f6]">
      <main className="flex min-h-screen w-full flex-col px-0 sm:items-start gap-6">
        <div className="relative w-full grid place-items-center text-center gap-10 pt-35 md:pt-4">
          

          <div className="relative z-10 w-full grid gap-0 pt-10 md:pt-65">
            <p className="theme-text text-[14.85px] md:text-[19px] lg:text-[24px]">Redefining how</p>
            <p className="theme-text text-[42.81px] md:text-[56px] lg:text-[69px] font-350 font-Serif leading-[0.89] pb-2">
              We are Elevating Family Experiences
            </p>
            <p className="theme-text text-[14.85px] md:text-[19px] lg:text-[24px] ">All your needs in one single amazing place</p>
          </div>
          <div className="absolute z-9 top-0 left-0 w-ffit flex items-center justify-center overflow-hidden">
            <Image
              src="/banner/bann-r.jpg"
              alt="banner"
              width={327}
              height={400}
              priority
              className="scale-x-[-1] w-[110px] md:w-[250px] lg:w-[327px] h-[200px] md:h-[310px] lg:h-[400px]"
            />
          </div>
          <div className="absolute z-9 top-0 right-0 w-ffit flex items-center justify-center overflow-hidden">
            <Image
              src="/banner/bann-r.jpg"
              alt="banner"
              width={327}
              height={400}
              priority
              className="w-[110px] md:w-[250px] lg:w-[327px] h-[200px] md:h-[310px] lg:h-[400px]"
            />
          </div>
        </div>

        <div className="w-full flex items-center justify-center overflow-hidden gap-6 md:pt-10">
          <Image
            src="/banner/bann1.svg"
            alt="banner"
            width={694}
            height={572}
            priority
            className="w-[300px] md:w-[500px] lg:w-[694px] h-[258px] md:h-[358px] lg:h-[572px]"
          />
          <Image
            src="/banner/bann2.svg"
            alt="banner"
            width={694}
            height={572}
            priority
            className="w-[300px] md:w-[500px] lg:w-[694px] h-[258px] md:h-[358px] lg:h-[572px]"
          />
          <Image
            src="/banner/bann3.svg"
            alt="banner"
            width={694}
            height={572}
            priority
            className="w-[300px] md:w-[500px] lg:w-[694px] h-[258px] md:h-[358px] lg:h-[572px]"
          />
        </div>
        <AboutUs />
      </main>
    </div>
  );
}
