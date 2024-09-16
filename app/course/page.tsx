// import { Metadata } from "next";

import Breadcrumb from "@/components/Common/Breadcrumb";
import Courses from "@/components/Course";
import CourseHero from "@/components/Course/CourseHero";

// export const metadata: Metadata = {
//   title: "Spring of Life Ministries",
//   description: `offers opportunities for collaborative effort to reach out t0
//                   Youths and young adults.`,
//   // other metadata
// };

const Course = () => {
  return (
    <>
      <Breadcrumb
        pageName="Mission Institute Page"
        description="The vision to embark on campus mission in secular higher institution
          and to support the youth and young adults through youth empowerment
          was first impressed in the mind of Pastor Oludare Olatunji in 2015."
      />

      <CourseHero />
      <Courses />
    </>
  );
};

export default Course;
