import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import DonorMap from "@/components/home/DonorMap";
import BloodGroupMatcher from "@/components/home/BloodGroupMatcher";
import TrustStats from "@/components/home/TrustStats";
import Testimonials from "@/components/home/Testimonials";
import Marquee from "@/components/home/Marquee";

const Home = () => {
  return (
    <>
      <Hero />
      <Marquee/>
      <Features />
      <DonorMap />
      <BloodGroupMatcher />
      <TrustStats />
      <Testimonials />
    </>
  );
};

export default Home;
