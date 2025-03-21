// src/components/sections/Hero.tsx
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Wrapper from "../layouts/Wrapper";
import Link from "next/link";
import { auth } from "../../../auth";

const poppins = Poppins({ subsets: ["latin"], weight: "800" });

const Hero = async() => {
  
  return (
    <section className=" pt-10 pb-10 relative overflow-hidden ">
      <Wrapper>
        <div className="container flex flex-col lg:flex-row items-center gap-20">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0 order-2 lg:order-1 ">
            <Image
              src="/hero-image.png"
              alt="Blood donation illustration"
              width={5000}
              height={5000}
              className="w-full h-[457px]"
            />
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <h1 className={`text-[86px] leading-none font-bold mb-4 mt-8 ${poppins.className}`}>
              Blood
              <br />
              Donation
            </h1>
            <p className="text-gray-700 text-lg leading-[1.4] mb-6">
              BloodRadar is a web application designed to solve the problem of blood unavailability during emergencies by connecting donors and recipients.
            </p>
            <Link href="/dashboard">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-6">GET IN TOUCH</Button>
            </Link>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
