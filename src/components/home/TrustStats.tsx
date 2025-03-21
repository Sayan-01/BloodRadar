// src/components/sections/TrustStats.tsx

import Wrapper from "../layouts/Wrapper";

const TrustStats = () => {
  return (
    <section className="bg-[#ffd02f] py-20">
      <Wrapper>
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[48px] leading-[1.2] font-bold mb-3">
              Why companies large
              <br />
              and small trust
            </h2>
            <button className="font-medium underline">Contact Sales to request a demo</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <h3 className="text-4xl font-bold mb-2">ISO</h3>
              <p className="text-sm">ISO-27001 enterprise-grade security compliant</p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-4xl font-bold mb-2">#1</h3>
              <p className="text-sm">Visual Collaboration Platform on G2</p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-4xl font-bold mb-2">99%</h3>
              <p className="text-sm">of the Fortune 100 are customers</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-16">
            <div className="flex flex-col items-center">
              <h3 className="text-4xl font-bold mb-2">1,000+</h3>
              <p className="text-sm">community- and expert-built templates</p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-4xl font-bold mb-2">45M+</h3>
              <p className="text-sm">users around the world</p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-4xl font-bold mb-2">100+</h3>
              <p className="text-sm">integrations with technology partners</p>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default TrustStats;
