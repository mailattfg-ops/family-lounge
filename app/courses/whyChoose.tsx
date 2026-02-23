import Image from "next/image";

export default function WhyChoose() {
  const services = [
    { title: "Hair Colouring", image: "/about/1.jpg" },
    { title: "Facial", image: "/about/1.jpg" },
    { title: "Hair Cutting", image: "/about/1.jpg" },
    { title: "Styling Services", image: "/about/1.jpg" },
  ];
  const testimonials = [
    {
      id: 1,
      text: `"Working with this team has truly pushed our company to improve. Their tailored solutions have made a significant difference in our operations!"`,
      name: "Jake Harrison",
      image: "/Courses/user.jpg",
    },
    {
      id: 2,
      text: `"Working with this team has truly pushed our company to improve. Their tailored solutions have made a significant difference in our operations!"`,
      name: "Jake Harrison",
      image: "/Courses/user.jpg",
    },
    {
      id: 3,
      text: `"Working with this team has truly pushed our company to improve. Their tailored solutions have made a significant difference in our operations!"`,
      name: "Jake Harrison",
      image: "/Courses/user.jpg",
    },
  ];
  return (
    <>
      <div className="w-full grid place-items-center text-center gap-10 pt-15 md:pt-10">
        <p className="theme-text CalSans-re-font text-[45px] md:text-[69.21px] lg:text-[88.64px] leading-[100%] flex items-center gap-3 font-500
              reveal 
              opacity-0 translate-y-20 
              transition-all duration-900 
              ease-[cubic-bezier(0.16,1,0.3,1)]">
          Why Should you choose us?
        </p>
        <div className="w-full grid md:flex items-center justify-center gap-9 md:gap-15 px-4 md:px-0
              reveal 
              opacity-0 translate-y-20 
              transition-all duration-900 
              ease-[cubic-bezier(0.16,1,0.3,1)]">
          <div className="w-full md:w-[194.90823364257812px] grid justify-center">
            <div className="w-full flex justify-center">
              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="theme-text w-[45.70712661743164px] h-[50.90461349487305px] ">
                <path d="M9 11.4999L11 13.4999L15.5 8.99987M20 11.9999C20 16.9083 14.646 20.4783 12.698 21.6147C12.4766 21.7439 12.3659 21.8085 12.2097 21.842C12.0884 21.868 11.9116 21.868 11.7903 21.842C11.6341 21.8085 11.5234 21.7439 11.302 21.6147C9.35396 20.4783 4 16.9083 4 11.9999V7.21747C4 6.41796 4 6.0182 4.13076 5.67457C4.24627 5.37101 4.43398 5.10015 4.67766 4.8854C4.9535 4.64231 5.3278 4.50195 6.0764 4.22122L11.4382 2.21054C11.6461 2.13258 11.75 2.0936 11.857 2.07815C11.9518 2.06444 12.0482 2.06444 12.143 2.07815C12.25 2.0936 12.3539 2.13258 12.5618 2.21054L17.9236 4.22122C18.6722 4.50195 19.0465 4.64231 19.3223 4.8854C19.566 5.10015 19.7537 5.37101 19.8692 5.67457C20 6.0182 20 6.41796 20 7.21747V11.9999Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="theme-text font-calsans font-400 text-[35px] md:text-[47.01px] leading-[100%] tracking-[0%] text-center">Safety First</p>
          </div>
          <div className="h-[2px] md:h-auto md:self-stretch w-full md:w-[2px] theme-bg"></div>
          <div className="w-full md:w-[194.90823364257812px] grid justify-center">
            <div className="w-full flex justify-center">
              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="theme-text w-[45.70712661743164px] h-[50.90461349487305px] ">
                <path d="M2.49954 9H21.4995M9.99954 3L7.99954 9L11.9995 20.5L15.9995 9L13.9995 3M12.6141 20.2625L21.5727 9.51215C21.7246 9.32995 21.8005 9.23885 21.8295 9.13717C21.8551 9.04751 21.8551 8.95249 21.8295 8.86283C21.8005 8.76114 21.7246 8.67005 21.5727 8.48785L17.2394 3.28785C17.1512 3.18204 17.1072 3.12914 17.0531 3.09111C17.0052 3.05741 16.9518 3.03238 16.8953 3.01717C16.8314 3 16.7626 3 16.6248 3H7.37424C7.2365 3 7.16764 3 7.10382 3.01717C7.04728 3.03238 6.99385 3.05741 6.94596 3.09111C6.89192 3.12914 6.84783 3.18204 6.75966 3.28785L2.42633 8.48785C2.2745 8.67004 2.19858 8.76114 2.16957 8.86283C2.144 8.95249 2.144 9.04751 2.16957 9.13716C2.19858 9.23885 2.2745 9.32995 2.42633 9.51215L11.385 20.2625C11.596 20.5158 11.7015 20.6424 11.8279 20.6886C11.9387 20.7291 12.0603 20.7291 12.1712 20.6886C12.2975 20.6424 12.4031 20.5158 12.6141 20.2625Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="theme-text font-calsans font-400 text-[35px] md:text-[47.01px] leading-[100%] tracking-[0%] text-center">Premium Selection</p>
          </div>
          <div className="h-[2px] md:h-auto md:self-stretch w-full md:w-[2px] theme-bg"></div>
          <div className="w-full md:w-[194.90823364257812px] grid justify-center">
            <div className="w-full flex justify-center">
              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="theme-text w-[45.70712661743164px] h-[50.90461349487305px] ">
                <path d="M21 18V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12V18M5.5 21C4.11929 21 3 19.8807 3 18.5V16.5C3 15.1193 4.11929 14 5.5 14C6.88071 14 8 15.1193 8 16.5V18.5C8 19.8807 6.88071 21 5.5 21ZM18.5 21C17.1193 21 16 19.8807 16 18.5V16.5C16 15.1193 17.1193 14 18.5 14C19.8807 14 21 15.1193 21 16.5V18.5C21 19.8807 19.8807 21 18.5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="theme-text font-calsans font-400 text-[35px] md:text-[47.01px] leading-[100%] tracking-[0%] text-center">24/7 Support</p>
          </div>
          <div className="h-[2px] md:h-auto md:self-stretch w-full md:w-[2px] theme-bg"></div>
          <div className="w-full md:w-[300px] grid justify-center">
            <div className="w-full flex justify-center">
              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="theme-text w-[45.70712661743164px] h-[50.90461349487305px] ">
                <path d="M11.2827 3.45332C11.5131 2.98638 11.6284 2.75291 11.7848 2.67831C11.9209 2.61341 12.0791 2.61341 12.2152 2.67831C12.3717 2.75291 12.4869 2.98638 12.7174 3.45332L14.9041 7.88328C14.9721 8.02113 15.0061 8.09006 15.0558 8.14358C15.0999 8.19096 15.1527 8.22935 15.2113 8.25662C15.2776 8.28742 15.3536 8.29854 15.5057 8.32077L20.397 9.03571C20.9121 9.11099 21.1696 9.14863 21.2888 9.27444C21.3925 9.38389 21.4412 9.5343 21.4215 9.68377C21.3988 9.85558 21.2124 10.0372 20.8395 10.4004L17.3014 13.8464C17.1912 13.9538 17.136 14.0076 17.1004 14.0715C17.0689 14.128 17.0487 14.1902 17.0409 14.2545C17.0321 14.3271 17.0451 14.403 17.0711 14.5547L17.906 19.4221C17.994 19.9355 18.038 20.1922 17.9553 20.3445C17.8833 20.477 17.7554 20.57 17.6071 20.5975C17.4366 20.6291 17.2061 20.5078 16.7451 20.2654L12.3724 17.9658C12.2361 17.8942 12.168 17.8584 12.0962 17.8443C12.0327 17.8318 11.9673 17.8318 11.9038 17.8443C11.832 17.8584 11.7639 17.8942 11.6277 17.9658L7.25492 20.2654C6.79392 20.5078 6.56341 20.6291 6.39297 20.5975C6.24468 20.57 6.11672 20.477 6.04474 20.3445C5.962 20.1922 6.00603 19.9355 6.09407 19.4221L6.92889 14.5547C6.95491 14.403 6.96793 14.3271 6.95912 14.2545C6.95132 14.1902 6.93111 14.128 6.89961 14.0715C6.86402 14.0076 6.80888 13.9538 6.69859 13.8464L3.16056 10.4004C2.78766 10.0372 2.60121 9.85558 2.57853 9.68377C2.55879 9.5343 2.60755 9.38389 2.71125 9.27444C2.83044 9.14863 3.08797 9.11099 3.60304 9.03571L8.49431 8.32077C8.64642 8.29854 8.72248 8.28742 8.78872 8.25662C8.84736 8.22935 8.90016 8.19096 8.94419 8.14358C8.99391 8.09006 9.02793 8.02113 9.09597 7.88328L11.2827 3.45332Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="theme-text font-calsans font-400 text-[35px] md:text-[47.01px] leading-[100%] tracking-[0%] text-center">Unforgettable Experiences</p>
          </div>
          {/* <div className="h-[2px] md:h-auto md:self-stretch w-full md:w-[2px] theme-bg"></div> */}
        </div>

      </div>
      <div className="w-full grid place-items-center text-center pt-20 md:pt-10 gap-6 md:gap-10">
        <p className="w-[320px] text-black text-[28px] md:text-[32px] leading-[80%] flex items-center md:gap-3 font-500
            reveal 
            opacity-0 translate-y-20 
            transition-all duration-900 
            ease-[cubic-bezier(0.16,1,0.3,1)]">
          <span className="w-[18px] md:w-[22px] h-[14px] md:h-[16px] rounded-full theme-bg inline-block"></span>
          What our students have to say
        </p>
        <div className="w-full grid md:flex items-center justify-center gap-10">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="w-[330px] md:w-[400px] h-[483px] bg-[#F7F8FC] border border-[#A7A7A7] rounded-[17px] pt-[55px] px-[30px] grid
              reveal 
              opacity-0 translate-y-20 
              transition-all duration-900 
              ease-[cubic-bezier(0.16,1,0.3,1)]"
            >
              <p className="Grotesk-font font-normal text-[20px] md:text-[28px] leading-[32px] text-center text-[#070708]">
                {item.text}
              </p>

              <div>
                <Image
                  src={item.image}
                  alt="testimonial"
                  priority
                  width={80}
                  height={80}
                  className="rounded-full w-[80px] h-[80px] object-cover mt-6 mx-auto"
                />
                <p className="font-shadgrotesk font-normal text-[20px] leading-[34px] text-center text-black">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
