// src/components/sections/Features.tsx

import Link from "next/link";
import Wrapper from "../layouts/Wrapper";

const Features = () => {
  return (
    <section className="bg-[#fff0f0] py-16">
      <Wrapper>
        <div className="container mx-auto">
          <div className="text-center mb-16 relative">
            <div className="inline-block relative">
              <h2 className="text-[48px] leading-[1.2] font-bold">Collaborate without constraints</h2>
              <div className="absolute -top-3 -right-16 bg-yellow-400 px-3 py-1 text-xs font-semibold uppercase rounded transform rotate-12 -translate-y-6">Your Idea starts here</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col">
              <h3 className="text-xl font-bold mb-4">100% trust</h3>
              <p className="text-gray-600 mb-4">
                Our free plan gives you unlimited tasks, storage, members, and access to 200+ modern templates. Signing up with your email gives us confidence that you are a real human being. See our
                <Link
                  href="/terms"
                  className="text-primary"
                >
                  {" "}
                  terms of service
                </Link>
                .
              </p>
              <Link
                href="/learn-more"
                className="text-primary font-medium flex items-center mt-auto"
              >
                Learn more →
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col">
              <h3 className="text-xl font-bold mb-4">Easy to connect</h3>
              <p className="text-gray-600 mb-4">
                Work with 100+ powerful integrations without leaving your board: Slack, Google Drive, Slack, Gmail, and any link or file. Learn more about the 1000+ features that live in our
                Marketplace.
              </p>
              <Link
                href="/learn-more"
                className="text-primary font-medium flex items-center mt-auto"
              >
                Learn more →
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col">
              <h3 className="text-xl font-bold mb-4">Security first</h3>
              <p className="text-gray-600 mb-4">
                We keep your data safe and secure. All customer data is encrypted using security standards including reading security standards advanced encryption, and enterprise-level security
                controls. Learn more about our approach to security.
              </p>
              <Link
                href="/learn-more"
                className="text-primary font-medium flex items-center mt-auto"
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

export default Features;
