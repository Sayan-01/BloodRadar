import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import { Poppins } from "next/font/google";
import React from "react";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className={`bg-[#fff0f0] py-[84px] ${poppins.className}`}>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default layout;
