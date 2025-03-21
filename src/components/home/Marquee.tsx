import { Wave } from "@/svg-components/Wave";
import Image from "next/image";
import React from "react";

const Marquee = () => {
  const partners = [
    { name: "Manipal Hospitals", logo: "/src/assets/images/manipal.png" },
    { name: "MRI", logo: "/mri.png" },
    { name: "PIMHC", logo: "/pimhc.png" },
    { name: "SLS", logo: "/sls.png" },
    { name: "Rainbow", logo: "/rainbow.png" },
  ];

  return (
    <div>
      <div className="w-full">
        <Image
          src="/wave.svg"
          alt="wave"
          width={2000}
          height={500}
          className="w-full"
        />
      </div>
      <div className="h-full w-full bg-white">
        <div className="bg-secondary relative">
          <div className="container mx-auto">
            <div className="bg-white rounded-lg py-8 px-4">
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className="flex items-center"
                  >
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="h-8 md:h-10"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" rotate-180 w-full">
        <Image
          src="/wave.svg"
          alt="wave"
          width={2000}
          height={500}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Marquee;
