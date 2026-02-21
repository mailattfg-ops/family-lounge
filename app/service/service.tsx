import Image from "next/image";

export default function Service() {
  const services = [
    { title: "Hair Colouring", image: "/about/1.jpg" },
    { title: "Facial", image: "/about/1.jpg" },
    { title: "Hair Cutting", image: "/about/1.jpg" },
    { title: "Styling Services", image: "/about/1.jpg" },
  ];
  return (
    <>
      <div className="w-full grid place-items-center text-center gap-10 pt-10">
        <p className="theme-text font-Serif text-[69.21px] flex items-center gap-3 font-500">
          {/* <span className="w-[18px] h-[18px] rounded-full theme-bg inline-block"></span> */}
          Saloon
        </p>
        <div>
          <p className="w-[300px] lg:w-[1300px] text-[#6D6D6D] items-center text-[20px] lg:text-[40px] leading-[124%] tracking-[-1.6px] geist-font font-500">
            <span className="theme-text">
              At Family Lounge, we're more than just a lounge.&nbsp;
            </span>
            We're a community hub offering salon services, fashion design classes, zumba, tailoring, and aari design work.&nbsp;
            <span className="theme-text">
              Discover your potential with us!
            </span>
          </p>
        </div>
        <div className="w-full md:pt-[25px] grid md:flex items-center justify-center gap-6 px-2">
          <div className="w-full lg:w-[1300px] h-fit md:h-[700px] overflow-hidden rounded-[20px]">
            <Image
              src="/service/saloon.jpg"
              alt="banner"
              width={1444}
              height={800} // use original image ratio
              priority
            />
          </div>
        </div>
      </div>
      <div className="w-full grid place-items-center text-center gap-10 py-[50px]">
        <p className="text-black text-[32px] flex items-center gap-3 font-500">
          <span className="w-[18px] h-[18px] rounded-full theme-bg inline-block"></span>
          Our Services
        </p>

        <div className="w-full max-w-[1250px] mx-auto grid gap-6 px-4">
          {services.map((service, index) => (
            <div key={index}>
              <div className="w-full flex items-center justify-between gap-4">

                {/* Number */}
                <p className="text-[25px] md:text-[50px] lg:text-[64px] font-normal theme-text CalSans-re-font">
                  {(index + 1).toString().padStart(2, "0")}
                </p>

                {/* Title */}
                <p className="flex-1 text-[25px] md:text-[50px] lg:text-[64px] font-normal theme-text CalSans-re-font">
                  {service.title}
                </p>

                {/* Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  width={694}
                  height={572}
                  priority
                  className="w-[60px] h-[90px] md:w-[100px] md:h-[130px] lg:w-[122px] lg:h-[157px] object-cover rounded-md"
                />
              </div>

              <hr className="w-full theme-bg h-[2.5px] mt-6" />
            </div>
          ))}
        </div>

      </div>
      <div className="w-full grid place-items-center text-center gap-10 md:pt-10">
        <p className="theme-text font-Serif text-[40px] md:text-[69.21px] flex items-center gap-3 font-500">
          {/* <span className="w-[18px] h-[18px] rounded-full theme-bg inline-block"></span> */}
          Tailoring Services
        </p>
        <div>
          <p className="w-[300px] lg:w-[1300px] text-[#6D6D6D] items-center text-[20px] lg:text-[40px] leading-[124%] tracking-[-1.6px] geist-font font-500">
            <span className="theme-text">
              At Family Lounge, we're more than just a lounge.&nbsp;
            </span>
            We're a community hub offering salon services, fashion design classes, zumba, tailoring, and aari design work.&nbsp;
            <span className="theme-text">
              Discover your potential with us!
            </span>
          </p>
        </div>
        <div className="w-full md:pt-[25px] grid md:flex items-center justify-center gap-6 px-2">
          <div className="w-full lg:w-[1300px] h-fit md:h-[700px] overflow-hidden rounded-[20px]">
            <Image
              src="/service/tailor.jpg"
              alt="banner"
              width={1444}
              height={800} // use original image ratio
              priority
            />
          </div>
        </div>
      </div>
      <div className="w-full grid place-items-center text-center gap-10 py-[50px]">
        <p className="text-black text-[32px] flex items-center gap-3 font-500">
          <span className="w-[18px] h-[18px] rounded-full theme-bg inline-block"></span>
          Our Services
        </p>

        <div className="w-full max-w-[1250px] mx-auto grid gap-6 px-4">
          {services.map((service, index) => (
            <div key={index}>
              <div className="w-full flex items-center justify-between gap-4">

                {/* Number */}
                <p className="text-[25px] md:text-[50px] lg:text-[64px] font-normal theme-text CalSans-re-font">
                  {(index + 1).toString().padStart(2, "0")}
                </p>

                {/* Title */}
                <p className="flex-1 text-[25px] md:text-[50px] lg:text-[64px] font-normal theme-text CalSans-re-font">
                  {service.title}
                </p>

                {/* Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  width={694}
                  height={572}
                  priority
                  className="w-[60px] h-[90px] md:w-[100px] md:h-[130px] lg:w-[122px] lg:h-[157px] object-cover rounded-md"
                />
              </div>

              <hr className="w-full theme-bg h-[2.5px] mt-6" />
            </div>
          ))}
        </div>

      </div>
    </>
  );
}
