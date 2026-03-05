"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: `" I successfully completed a six-month Beautician course at Kulanada Beautiful World Academy. The academy provided excellent guidance, continuous support, and a friendly learning environment.
    The trainers clearly and professionally taught saree draping and other beauty techniques, making the learning process easy and enjoyable. I am truly grateful for the skills and confidence I gained during this course."`,
    name: "Athulya",
    image: "/testimonials/1.jpeg",
  },
  {
    id: 2,
    text: `"I completed a one-year Beautician course at Beauty World, specializing in Nail Art. The course was well-structured and covered both basic and advanced techniques. Our trainer, Mrs. Suma, was very supportive and explained everything clearly."`,
    name: "Surya Suresh",
    image: "/testimonials/2.jpeg",
  },
  {
    id: 3,
    text: `"I studied the beautician course and graduated from the Beauty World Parlor in Kulanada, Pandalam. It changed my life. After completing this course, I got a job and am currently working in Bahrain."`,
    name: "Priya Menon",
    image: "/testimonials/3.jpeg",
  },
  {
    id: 4,
    text: `"I studied at Kulanada, Pandalam Beauty World 6 years ago. I currently run a beauty salon in Dubai. My business life is going very happily."`,
    name: "Anjali",
    image: "/testimonials/4.jpeg",
  },
  {
    id: 5,
    text: `"I take a 1 year course of beautian at kulanada 'Beauty world'. I absolutely love this course,it should highlight expert trainers, hands on pratical training and we learned latest techniques in makeup, skincare and haircare .I have much more confidence in my abilities and feel prepared to start my career."`,
    name: "Shilpa satheesan",
    image: "/testimonials/5.jpeg",
  },
  {
    id: 6,
    text: `"Joining Beauty World Academy was a life-changing experience. The course provided me with the modern techniques and confidence I needed to work independently. Today, I am proud to successfully run my own salon, Golden Flower Beauty Clinic. I highly recommend this course to anyone aspiring to build a career in the beauty industry."`,
    name: "Siji Mathew",
    image: "/testimonials/6.jpeg",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const ButtonGroup = ({ next, previous }: any) => {
  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      <button
        onClick={() => previous?.()}
        className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center border hover:bg-gray-50 transition-colors"
      >
        <ChevronLeft size={24} className="text-gray-800" />
      </button>
      <button
        onClick={() => next?.()}
        className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center border hover:bg-gray-50 transition-colors"
      >
        <ChevronRight size={24} className="text-gray-800" />
      </button>
    </div>
  );
};

export default function WhyChoose() {
  return (
    <div className="w-full grid place-items-center text-center md:py-10 gap-10">
      <p className="text-black text-[26px] md:text-[32px]">
        What our students have to say
      </p>

      <div className=" w-[330px] md:w-[700px] lg:w-full  lg:max-w-7xl mx-auto px-4 sm:px-12 pb-12">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="carousel-container"
          itemClass="px-3 md:px-4 flex justify-center"
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup />}
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="mx-auto w-full max-w-[330px] h-[480px] bg-[#F7F8FC] border border-[#A7A7A7] rounded-[17px] pt-[45px] sm:pt-[55px] pb-[30px] px-[20px] sm:px-[25px] flex flex-col"
            >
              <p className="text-[14px] md:text-[16px] leading-[18.08px] text-center text-black">
                {item.text}
              </p>

              <div className="mt-auto">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-full w-[80px] h-[80px] object-cover mt-6 mx-auto"
                />
                <p className="text-[20px] text-black text-center mt-2">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}