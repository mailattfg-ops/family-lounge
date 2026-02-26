import Image from "next/image";

export default function AboutUs() {
  const aboutImages = [
    {
      src: "/about/4.jpg",
      title: "Beautician",
      description:
        "Professional salon services including haircuts, coloring, styling, straightening, and complete beauty care.",
    },
    {
      src: "/about/3.jpg",
      title: "Zumba",
      description:
        "Energetic Zumba sessions designed to improve fitness, burn calories, and boost your overall well-being.",
    },
    {
      src: "/about/2.jpg",
      title: "Aari Designing",
      description:
        "Expert Aari embroidery training with intricate handwork designs for traditional and modern outfits.",
    },
    {
      src: "/about/1.jpg",
      title: "Fashion Designing",
      description:
        "Comprehensive fashion designing courses covering garment construction, styling, and creative design techniques.",
    },
  ];
  return (
    <div className="w-full grid place-items-center text-center gap-6 md:gap-10 py-[30px] md:py-[60px]">
      <p className="text-black text-[32px] flex items-center gap-3 font-500 reveal opacity-0 translate-y-20 transition-all duration-1000 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)]">
        <span className="w-[18px] h-[18px] rounded-full theme-bg inline-block"></span>
        About Us
      </p>
      <div>
        <p className="w-[300px] md:w-[600px] lg:w-[1360px] text-[#6D6D6D] items-center text-[20px] lg:text-[40px] leading-[124%] tracking-[-1.6px] geist-font font-500 reveal opacity-0 translate-y-20 transition-all duration-1000 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <span className="theme-text">
            At Family Lounge, we're more than just a lounge.&nbsp;
          </span>
          We're a community hub offering salon services, fashion design classes, zumba, tailoring, and aari design work.&nbsp;
          <span className="theme-text">
            Discover your potential with us!
          </span>
        </p>
      </div>
      <div className="w-full md:pt-[50px] grid md:grid-cols-2 lg:flex items-center justify-center gap-6 md:px-10 lg:px-0">
        {aboutImages.map((item, index) => (
          <div
            key={index}
            className={`relative w-[309px] md:w-full lg:w-[350px] h-[440px] rounded-[20px] overflow-hidden reveal opacity-0 translate-y-20 transition-all duration-2000 delay-${100 * index} ease-[cubic-bezier(0.16,1,0.3,1)]`}
          >
            <Image
              src={item.src}
              alt="banner"
              width={694}
              height={572}
              priority
            />

            {item.title && (
              <div className="w-full flex items-end h-[220px] absolute bottom-0 z-10 gradient-blue-bg p-6">
                <div className="w-full">
                  <p className="text-white text-start text-[41.33px] font-bold pr-4 leading-[41.22px] tracking-[-0.54px] align-middle">
                    {item.title}
                  </p>
                  <p className="geist-font text-[#CFC2FF] text-start text-[18.13px] leading-[18.08px] tracking-[-0.24px]">
                    {item.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
