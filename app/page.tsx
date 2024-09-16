import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import { Metadata } from "next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Herobanner from "@/components/HeroBanner";
import Gallery from "@/components/Gallery/Gallery";
import Gallery1 from "@/components/Gallery1/Gallery1";
import Newsletter from "@/components/Newsletter/Newsletter";
import HistoryThree from "@/components/History/HistoryThree";
import Courses from "@/components/Course";

export const metadata: Metadata = {
  title: "Spring of Life Ministries",
  description: `offers opportunities for collaborative effort to reach out to Youths and young adults.`,
  // other metadata
};
export default function Home() {
  return (
    <>
      <ScrollUp />
      <Herobanner />
      <Features />
      <HistoryThree />
      <Courses />
      {/* <AboutSectionOne />
      <AboutSectionTwo /> */}
      <Gallery1 />
      <Gallery />
    
      <Blog />
      {/* <Newsletter /> */}
      {/* <Contact /> */}
    </>
  );
}
