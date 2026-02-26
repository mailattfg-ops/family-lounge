"use client";
import Image from "next/image";
import { SubmitEvent } from "react";
import toast from "react-hot-toast";

export default function Contact() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const name = (formData.get("name") as string)?.trim();
        const phone = (formData.get("phone") as string)?.trim();
        const services = formData.getAll("service") as string[];

        // ✅ Validation
        if (!name) {
            toast.error("Name is required");
            return;
        }

        if (!phone) {
            toast.error("Phone number is required");
            return;
        }

        // Optional phone validation (India 10-digit)
        if (!/^[0-9]{10}$/.test(phone)) {
            toast.error("Enter valid 10 digit phone number");
            return;
        }

        const message = `New Enquiry
            Name: ${name}
            Phone: ${phone}
            Services: ${services.length ? services.join(", ") : "Not selected"}`;

        // ⚠️ IMPORTANT: Must include country code for wa.me
        const whatsappNumber = "919495388624";

        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            message
        )}`;

        window.location.href = url;

        e.currentTarget.reset(); // optional: reset form
    };
    return (
        <div className="w-full h-fit p-[15px] md:p-[30px]">
            <div className="w-full grid md:flex place-items-center text-center gap-6 md:gap-10 border border-black rounded-md p-[15px] reveal opacity-0 translate-y-20 transition-all duration-1000 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)]">

                <div className="relative w-full md:w-6/10 grid md:flex items-center justify-center gap-6">
                    <div className="w-full h-fit md:w-[917px] md:h-fit overflow-hidden rounded-[20px]">
                        <Image
                            src="/banner/bann2.svg"
                            alt="banner"
                            width={917}
                            height={766} // use original image ratio
                            priority
                            className="w-full h-full"
                        />
                    </div>
                    <div className="absolute bottom-2 left-2 pl-5 pb-5 md:pl-6 md:pb-6 lg:pl-10 lg:pb-10 grid gap-4">
                        <p className="w-fit lg:w-[529.8389892578125px] CalSans-re-font font-normal text-[34px] md:text-[35px] lg:text-[65.84px] text-left leading-[1.03] tracking-normal">
                            Discover your potential with us!
                        </p>
                        <p className="geist-font text-start text-[14px] md:text-[24.69px] leading-[18.08px] tracking-[-0.24px]">Learn skills that take you up in the world</p>
                    </div>
                </div>
                <div className="w-full h-full md:w-4/10  grid items-center justify-center gap-6">
                    <div className=" w-full grid gap-4">
                        <p className=" text-black font-extrabold text-[34px] md:text-[44px] text-left leading-[52.25px] tracking-[-0.04em] align-middle">Contact Us</p>
                        <p className="geist-font text-start text-[18px] md:text-[20px] lg:text-[23px] leading-[18.08px] tracking-[-0.24px] text-[#8F8F8F]">
                            Enter the information below and we will help you as soon as possible
                        </p>
                    </div>
                    <div className="w-full h-full">
                        <form onSubmit={handleSubmit} className="h-full w-full grid gap-4">
                            <div className="w-full grid lg:flex">
                                <div className="w-full lg:w-1/2 grid justify-start">
                                    <label className="w-full text-left text-black font-600">Your Name</label>
                                    <input type="text"
                                        name="name"
                                        placeholder="Michael"
                                        className="w-full text-black placeholder:text-grey border border-[#1717171A] p-4 rounded-[16.5px]"
                                    />
                                </div>
                                <div className="w-full lg:w-1/2 grid justify-start">
                                    <label className="w-full text-left text-black font-600">Phone Number</label>
                                    <input type="text"
                                        name="phone"
                                        placeholder="726929669826"
                                        className="w-full text-black placeholder:text-grey border border-[#1717171A] p-4 rounded-[16.5px]"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 grid justify-start pt-6 md:gap-2 gap-4">
                                <label className="w-full text-left text-black font-600">Service you are looking for </label>
                                <div className="sm:w-full flex justify-start gap-4 pl-6">
                                    <input
                                        type="checkbox" name="service" value="Tailoring"
                                        className="text-black border border-[#1717171A] w-5 h-5 rounded"
                                    />
                                    <p className="text-black font-400 CalSans-re-font">Tailoring</p>
                                </div>
                                <div className="sm:w-full flex justify-start gap-4 pl-6">
                                    <input
                                        type="checkbox" name="service" value="Beautician"
                                        className="text-black border border-[#1717171A] w-5 h-5 rounded"
                                    />
                                    <p className="text-black font-400 CalSans-re-font">Beautician</p>
                                </div>
                                <div className="sm:w-full flex justify-start gap-4 pl-6">
                                    <input
                                        type="checkbox" name="service" value="Aari Design"
                                        className="text-black border border-[#1717171A] w-5 h-5 rounded"
                                    />
                                    <p className="text-black font-400 CalSans-re-font">Aari design</p>
                                </div>
                                <div className="sm:w-full flex justify-start gap-4 pl-6">
                                    <input
                                        type="checkbox" name="service" value="Salon Services"
                                        className="text-black border border-[#1717171A] w-5 h-5 rounded"
                                    />
                                    <p className="text-black font-400 CalSans-re-font">Salon Services</p>
                                </div>

                            </div>
                            <button type="submit" className="w-full bg-black text-white px-6 py-2 text-[15px] md:text-[20px] rounded-[12px] mt-10 ">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}
