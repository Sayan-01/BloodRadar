// src/components/sections/DonorMap.tsx

import Link from "next/link";
import Wrapper from "../layouts/Wrapper";

const DonorMap = () => {
  return (
    <section className="bg-white pt-16">
      <Wrapper>
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 flex flex-col gap-3">
              <h2 className="text-[48px] leading-[1.2] font-bold mb-4">
                Real time donor
                <br />
                availability map
              </h2>
              <p className="text-gray-600 mb-6">BloodBuddy's real-time donor map shows nearby donors of different blood groups, making it easier to contact them in urgent emergency cases for help.</p>
              <Link
                href="/learn-more"
                className="text-primary font-medium flex items-center"
              >
                Learn more →
              </Link>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <img
                    src="/src/assets/images/map-screen.png"
                    alt="Real-time donor map"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <img
                    src="/src/assets/images/map-mobile.png"
                    alt="Mobile donor map"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <div className="flex -space-x-2 overflow-hidden">
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      src="/src/assets/images/avatar1.jpg"
                      alt=""
                    />
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      src="/src/assets/images/avatar2.jpg"
                      alt=""
                    />
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      src="/src/assets/images/avatar3.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default DonorMap;
