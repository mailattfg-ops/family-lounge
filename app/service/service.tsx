import Image from "next/image";

export default function Service() {
  const saloonServices = [
    { title: "Hair Colouring", image: "/about/4.jpg" },
    { title: "Facial", image: "/about/4.jpg" },
    { title: "Hair Cutting", image: "/about/4.jpg" },
    { title: "Styling Services", image: "/about/4.jpg" },
  ];

  const tailoringServices = [
    { title: "Custom Tailoring", image: "/tailoring/sewing.jpg" },
    { title: "Aari Embroidery", image: "/service/tailor.jpg" },
    { title: "Dress Alterations", image: "/service/tailor.jpg" },
    { title: "Bridal Wear Design", image: "/service/tailor.jpg" },
  ];
  const beauticianServices = [
    { title: "Bridal Makeup", image: "/about/beauty.jpg" },
    { title: "Skincare Treatments", image: "/about/beauty.jpg" },
    { title: "Party Makeup", image: "/about/beauty.jpg" },
    { title: "Threading & Waxing", image: "/about/beauty.jpg" },
    { title: "Pedicure & Manicure", image: "/about/beauty.jpg" },
    { title: "Hair Spa", image: "/about/beauty.jpg" },
  ];

  const zumbaServices = [
    { title: "Aerobics", image: "/yoga/fitness.jpg" },
    { title: "Zumba", image: "/about/zoomba.jpg" },
    { title: "Yoga", image: "/about/yoga.jpg" },
  ];

  return (
    <>
      {/* Beautician Section */}
      <div className="w-full grid place-items-center text-center gap-10 pt-10">
        <p className="theme-text font-Serif text-[40px] md:text-[69.21px] flex items-center gap-3 font-500 reveal opacity-0 translate-y-20 transition-all duration-1000 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)]">
          Beautician
        </p>
        <div>
          <p className="w-[300px] lg:w-[1300px] text-[#6D6D6D] items-center text-[20px] lg:text-[40px] leading-[124%] tracking-[-1.6px] geist-font font-500 reveal opacity-0 translate-y-20 transition-all duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <span className="theme-text">
              Enhancing your natural elegance.&nbsp;
            </span>
            Our skilled beauticians provide premium makeup, advanced skincare treatments, and exquisite bridal styling tailored for your special occasions.&nbsp;
            <span className="theme-text">
              Radiate confidence and beauty!
            </span>
          </p>
        </div>
        <div className="w-full md:pt-[25px] grid md:flex items-center justify-center gap-6 px-2 reveal opacity-0 translate-y-20 transition-all duration-1000 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <div className="w-full lg:w-[1300px] h-fit md:h-[700px] overflow-hidden rounded-[20px]">
            <Image
              src="/about/4.jpg"
              alt="beautician banner"
              width={1444}
              height={800}
              priority
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
      <div className="w-full grid place-items-center text-center gap-10 py-[50px]">
        <p className="text-black text-[32px] flex items-center gap-3 font-500 reveal opacity-0 translate-y-20 transition-all duration-1000 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <span className="w-[18px] h-[18px] rounded-full theme-bg inline-block"></span>
          Our Services
        </p>
        <div className="w-full max-w-[1250px] mx-auto grid gap-6 px-4">
          {beauticianServices.map((service, index) => (
            <div key={index} className={`reveal opacity-0 translate-y-20 transition-all duration-2000 delay-${100 * index} ease-[cubic-bezier(0.16,1,0.3,1)]`}>
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

      {/* Saloon Section */}
      <div className="w-full grid place-items-center text-center gap-10 pt-10">
        <p className="theme-text font-Serif text-[69.21px] flex items-center gap-3 font-500 reveal opacity-0 translate-y-20 transition-all duration-1000 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)]">
          {/* <span className="w-[18px] h-[18px] rounded-full theme-bg inline-block"></span> */}
          Saloon
        </p>
        <div>
          <p className="w-[300px] lg:w-[1300px] text-[#6D6D6D] items-center text-[20px] lg:text-[40px] leading-[124%] tracking-[-1.6px] geist-font font-500 reveal opacity-0 translate-y-20 transition-all duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <span className="theme-text">
              Elevate your personal style.&nbsp;
            </span>
            Our salon provides a luxurious experience with expert haircuts, styling, vibrant coloring, and revitalizing facial treatments.&nbsp;
            <span className="theme-text">
              Look and feel your absolute best!
            </span>
          </p>
        </div>
        <div className="w-full md:pt-[25px] grid md:flex items-center justify-center gap-6 px-2 reveal opacity-0 translate-y-20 transition-all duration-1000 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <div className="w-full lg:w-[1300px] h-fit md:h-[700px] overflow-hidden rounded-[20px]">
            <Image
              src="/service/saloon.jpg"
              alt="banner"
              width={1444}
              height={800} // use original image ratio
              priority
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
      <div className="w-full grid place-items-center text-center gap-10 py-[50px]">
        <p className="text-black text-[32px] flex items-center gap-3 font-500 reveal opacity-0 translate-y-20 transition-all duration-1000 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <span className="w-[18px] h-[18px] rounded-full theme-bg inline-block"></span>
          Our Services
        </p>

        <div className="w-full max-w-[1250px] mx-auto grid gap-6 px-4">
          {saloonServices.map((service, index) => (
            <div key={index} className={`reveal opacity-0 translate-y-20 transition-all duration-2000 delay-${100 * index} ease-[cubic-bezier(0.16,1,0.3,1)]`}>
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
        <p className="theme-text font-Serif text-[40px] md:text-[69.21px] flex items-center gap-3 font-500 reveal opacity-0 translate-y-20 transition-all duration-1000 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)]">
          {/* <span className="w-[18px] h-[18px] rounded-full theme-bg inline-block"></span> */}
          Tailoring Services
        </p>
        <div>
          <p className="w-[300px] lg:w-[1300px] text-[#6D6D6D] items-center text-[20px] lg:text-[40px] leading-[124%] tracking-[-1.6px] geist-font font-500 reveal opacity-0 translate-y-20 transition-all duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <span className="theme-text">
              Craftsmanship meets tradition.&nbsp;
            </span>
            We specialize in custom tailoring, intricate Aari embroidery, and bespoke bridal wear designed to fit your vision perfectly.&nbsp;
            <span className="theme-text">
              Wear your unique story!
            </span>
          </p>
        </div>
        <div className="w-full md:pt-[25px] grid md:flex items-center justify-center gap-6 px-2 reveal opacity-0 translate-y-20 transition-all duration-1000 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <div className="w-full lg:w-[1300px] h-fit md:h-[700px] overflow-hidden rounded-[20px]">
            <Image
              src="/service/tailor.jpg"
              alt="banner"
              width={1444}
              height={800} // use original image ratio
              priority
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
      <div className="w-full grid place-items-center text-center gap-10 py-[50px]">
        <p className="text-black text-[32px] flex items-center gap-3 font-500 reveal opacity-0 translate-y-20 transition-all duration-1000 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <span className="w-[18px] h-[18px] rounded-full theme-bg inline-block"></span>
          Our Services
        </p>

        <div className="w-full max-w-[1250px] mx-auto grid gap-6 px-4">
          {tailoringServices.map((service, index) => (
            <div key={index} className={`reveal opacity-0 translate-y-20 transition-all duration-2000 delay-${100 * index} ease-[cubic-bezier(0.16,1,0.3,1)]`}>
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

      {/* Zumba Section */}
      <div className="w-full grid place-items-center text-center gap-10 md:pt-10">
        <p className="theme-text font-Serif text-[40px] md:text-[69.21px] flex items-center gap-3 font-500 reveal opacity-0 translate-y-20 transition-all duration-1000 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)]">
          Zumba & Fitness
        </p>
        <div>
          <p className="w-[300px] lg:w-[1300px] text-[#6D6D6D] items-center text-[20px] lg:text-[40px] leading-[124%] tracking-[-1.6px] geist-font font-500 reveal opacity-0 translate-y-20 transition-all duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <span className="theme-text">
              Full body exercise.&nbsp;
            </span>
            Experience a dynamic mix of exercises including aerobics, Zumba, and yoga designed to keep you fit, healthy, and energized.&nbsp;
            <span className="theme-text">
              Move to the rhythm!
            </span>
          </p>
        </div>
        <div className="w-full md:pt-[25px] grid md:flex items-center justify-center gap-6 px-2 reveal opacity-0 translate-y-20 transition-all duration-1000 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <div className="w-full lg:w-[1300px] h-fit md:h-[700px] overflow-hidden rounded-[20px]">
            <Image
              src="/yoga/group.jpg"
              alt="zumba banner"
              width={1444}
              height={800}
              priority
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
      <div className="w-full grid place-items-center text-center gap-10 py-[50px]">
        <p className="text-black text-[32px] flex items-center gap-3 font-500 reveal opacity-0 translate-y-20 transition-all duration-1000 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <span className="w-[18px] h-[18px] rounded-full theme-bg inline-block"></span>
          Our Services
        </p>

        <div className="w-full max-w-[1250px] mx-auto grid gap-6 px-4">
          {zumbaServices.map((service, index) => (
            <div key={index} className={`reveal opacity-0 translate-y-20 transition-all duration-2000 delay-${100 * index} ease-[cubic-bezier(0.16,1,0.3,1)]`}>
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
