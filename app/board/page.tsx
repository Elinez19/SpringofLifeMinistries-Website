import Boards from "@/components/Boards/Boards";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spring of Life Ministries",
  description: `offers opportunities for collaborative effort to reach out t0
                  Youths and young adults.`,
  // other metadata
};

const Board = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Board of Directors "
        description="Spring of Life is a non-profit making Christian ministry that offers opportunities for collaborative effort to reach out to Youths and young adults."
      />
      <Boards />
    </>
  );
};

export default Board;
