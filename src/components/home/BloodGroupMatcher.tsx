// src/components/sections/BloodGroupMatcher.tsx

import Image from "next/image";
import Link from "next/link";
import Wrapper from "../layouts/Wrapper";

const BloodGroupMatcher = () => {
  return (
    <section className="bg-white py-16">
      <Wrapper>
        <div className="container mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <Image
                height={1000}
                width={1000}
                src="/blood-group-matcher.png"
                alt="Blood group matcher dashboard"
                className="w-full h-auto rounded-lg "
              />
            </div>
            <div className="w-full lg:w-1/2 gap-3 flex flex-col">
              <h2 className="text-[48px] leading-[1.2] font-bold mb-4 leading-[1.2]">
                Smart blood group
                <br />
                matcher feature
              </h2>
              <p className="text-gray-600 mb-6">Smart Blood Group Matcher matches patients with compatible blood group donors for safe and more efficient blood donations during emergencies.</p>
              <Link
                href="/learn-more"
                className="text-primary font-medium flex items-center"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default BloodGroupMatcher;
