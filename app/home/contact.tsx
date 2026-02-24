import Image from "next/image";

export default function Contact() {

    return (
        <div className="w-full h-fit p-[15px] md:p-[30px]">
            <div className="w-full grid md:flex place-items-center text-center gap-6 md:gap-10 border border-black rounded-md p-[15px] reveal opacity-0 translate-y-20 transition-all duration-1000 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)]">

                <div className="relative w-full md:w-6/10 grid md:flex items-center justify-center gap-6">
                    <div className="w-full h-fit md:h-[600px] overflow-hidden rounded-[20px]">
                        <Image
                            src="/service/saloon.jpg"
                            alt="banner"
                            width={1444}
                            height={700} // use original image ratio
                            priority
                            className="w-full h-full"
                        />
                    </div>
                    <div className="absolute bottom-2 left-2 pl-5 pb-5 md:pl-10 md:pb-10 grid gap-4">
                        <p className="w-fit md:w-[529.8389892578125px] CalSans-re-font font-normal text-[34px] md:text-[65.84px] text-left leading-[1.03] tracking-normal">
                            Discover your potential with us!
                        </p>
                        <p className="geist-font text-start text-[14px] md:text-[24.69px] leading-[18.08px] tracking-[-0.24px]">Learn skills that take you up in the world</p>
                    </div>
                </div>
                <div className="w-full h-full md:w-4/10  grid items-center justify-center gap-6">
                    <div className=" w-full grid gap-4">
                        <p className=" text-black font-extrabold text-[34px] md:text-[44px] text-left leading-[52.25px] tracking-[-0.04em] align-middle">Contact Us</p>
                        <p className="geist-font text-start text-[18px] md:text-[23px] leading-[18.08px] tracking-[-0.24px] text-[#8F8F8F]">
                            Enter the information below and we will help you as soon as possible
                        </p>
                    </div>
                    <div className="w-full h-full">
                        <form action="h-full w-full grid gap-4">
                            <div className="w-full flex">
                                <div className="w-1/2 grid justify-start">
                                    <label className="w-full text-left text-black font-600">Your Name</label>
                                    <input type="text"
                                        placeholder="Michael"
                                        className="w-full text-black placeholder:text-black border border-[#1717171A] p-4 rounded-[16.5px]"
                                    />
                                </div>
                                <div className="w-1/2 grid justify-start">
                                    <label className="w-full text-left text-black font-600">Phone Number</label>
                                    <input type="text"
                                        placeholder="726929669826"
                                        className="w-full text-black placeholder:text-black border border-[#1717171A] p-4 rounded-[16.5px]"
                                    />
                                </div>
                            </div>
                            <div className="w-1/2 grid justify-start pt-6 gap-4">
                                <label className="w-full text-left text-black font-600">Service you are looking for </label>
                                <div className="s-full flex justify-start gap-4 pl-6">
                                    <input
                                        type="checkbox"
                                        className="text-black border border-[#1717171A] w-5 h-5 rounded"
                                    />
                                    <p className="text-black font-400 CalSans-re-font">Tailoring</p>
                                </div>
                                <div className="s-full flex justify-start gap-4 pl-6">
                                    <input
                                        type="checkbox"
                                        className="text-black border border-[#1717171A] w-5 h-5 rounded"
                                    />
                                    <p className="text-black font-400 CalSans-re-font">Beautician</p>
                                </div>
                                <div className="s-full flex justify-start gap-4 pl-6">
                                    <input
                                        type="checkbox"
                                        className="text-black border border-[#1717171A] w-5 h-5 rounded"
                                    />
                                    <p className="text-black font-400 CalSans-re-font">Aari design</p>
                                </div>
                                <div className="s-full flex justify-start gap-4 pl-6">
                                    <input
                                        type="checkbox"
                                        className="text-black border border-[#1717171A] w-5 h-5 rounded"
                                    />
                                    <p className="text-black font-400 CalSans-re-font">Salon Services</p>
                                </div>

                            </div>
                            <button className="w-full bg-black text-white px-6 py-2 text-[15px] md:text-[20px] rounded-[12px] mt-10 ">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}
