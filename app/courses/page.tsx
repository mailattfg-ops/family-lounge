import Image from "next/image";
import WhyChoose from "./whyChoose";

export default function Home() {
  const courses = [
    {
      id: 1,
      title: "Fashion Designing",
      description: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
      duration: "3 Months",
      image: "/Courses/1.jpg",
    },
    {
      id: 2,
      title: "Beautician",
      description: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
      duration: "4 Months",
      image: "/Courses/3.jpg",
    },
    {
      id: 3,
      title: "Aari Designing",
      description: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
      duration: "2 Months",
      image: "/Courses/2.jpg",
    },
    {
      id: 4,
      title: "Fashion Designing",
      description: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
      duration: "1 Month",
      image: "/Courses/4.jpg",
    },
  ];
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-[#f6f6f6] pt-[170px]">
      <main className="flex min-h-screen w-full flex-col px-0 py-[20px] md:py-[60px] sm:items-start">
        <div className="w-full grid place-items-center text-center gap-6 md:gap-10">
          <p className="text-black text-[32px] flex items-center gap-3 font-500">
            <span className="w-[18px] h-[18px] rounded-full theme-bg inline-block"></span>
            Our Services
          </p>
          <div className="w-full grid items-center justify-center gap-6">
            <div className="w-full px-10 grid grid-cols-1 md:grid-cols-2 gap-4">

              {courses.map((item) => (
                <div
                  key={item.id}
                  className="relative grid md:flex h-[516px] overflow-hidden rounded-[57.44px] border border-black bg-white"
                >
                  {/* LEFT CONTENT */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center gap-2 md:gap-8 p-8">
                    <p className="w-[30%] md:w-full CalSans-re-font text-left theme-text text-[30px] md:text-[47.38px] leading-[77%]">
                      {item.title}
                    </p>

                    <p className="w-full text-[8px] md:text-[14px] text-left theme-text leading-[100%]">
                      {item.description}
                    </p>

                    <button className="w-full px-6 py-2 text-[10px] md:text-[16px] rounded-[12px] text-white theme-bg">
                      Register Now
                    </button>
                  </div>

                  {/* RIGHT IMAGE */}
                  <div className="w-full md:w-1/2">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* BADGE */}
                  <div className="absolute grid right-0 top-0 bg-black text-white px-6 py-4 rounded-bl-[40px]">
                    <p className="text-[8px] md:text-[12px] leading-tight">Duration of Course</p>
                    <p className="text-[10px] md:text-[18px] leading-tight">3 Months</p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
        <WhyChoose />
      </main>
    </div>
  );
}
