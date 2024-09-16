import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spring of Life Ministries",
  description: `offers opportunities for collaborative effort to reach out t0
                  Youths and young adults.`,
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="Our History"
        description="Spring of Life is a non-profit making Christian ministry that offers opportunities for collaborative effort to reach out to Youths and young adults."
      /> */}
      <AboutSectionTwo />
      <AboutSectionOne />
      {/* <AboutSectionFour />
      <AboutHero />
      <AboutSectionSix />
      <AboutTeam />
      <AboutCta /> */}
    </>
  );
};

export default AboutPage;
