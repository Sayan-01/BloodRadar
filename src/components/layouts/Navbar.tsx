// src/components/layout/Navbar.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Wrapper from "./Wrapper";
import { auth } from "../../../auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="w-full py-5 fixed top-0 backdrop-blur-md bg-[#fff0f0] z-[999]">
      <Wrapper>
        <div className="container flex items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center gap-2"
            >
              <span className="font-bold text-3xl text-red-400">BloodRadar.</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/about-us"
              className="text-gray-700 hover:text-primary font-medium"
            >
              ABOUT US
            </Link>
            <Link
              href="/our-services"
              className="text-gray-700 hover:text-primary font-medium"
            >
              OUR SERVICES
            </Link>
            <Link
              href="/work-with-us"
              className="text-gray-700 hover:text-primary font-medium"
            >
              WORK WITH US
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-primary font-medium"
            >
              BLOG
            </Link>
          </nav>
          <div className="w-[160px] flex justify-end">
            {session?.user ? (
              <Link href="/complete-profile">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">Complete profile</Button>
              </Link>
            ) : (
              <div className="flex items-center gap-4">
                <Link
                  href="/login"
                  className="text-gray-700 hover:text-primary font-medium"
                >
                  Login
                </Link>
                <Link href="/register">
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">Sign Up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Navbar;
