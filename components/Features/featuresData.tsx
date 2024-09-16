import { Feature } from "@/types/feature";
import { HiAcademicCap } from "react-icons/hi";
import { SiSololearn } from "react-icons/si";
import {
  FcGraduationCap,
  FcCustomerSupport,
  FcDonate,
  FcBusinessman,
} from "react-icons/fc";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <FcGraduationCap size={80} />,
    title: "Make Global Impact",
    paragraph:
      "We strive to equip young leaders with the skills and knowledge needed to address global challenges, fostering positive change in communities worldwide.",
  },
  {
    id: 1,
    icon: <SiSololearn size={50} />,
    title: " Gain Purpose-Driven Education",
    paragraph:
      "Our institute is a hub for purpose-driven education, where students not only gain academic excellence but also discover their unique calling and potential.",
  },
  {
    id: 1,
    icon: <FcDonate size={70} />,
    title: "Faith-Inspired Leadership",
    paragraph:
      "Our training programs cultivate young leaders who lead with integrity, compassion, and a commitment to serving others.",
  },
  {
    id: 1,
    icon: <FcBusinessman size={70} color="#05143C" />,
    title: "Experience Total Transformation",
    paragraph:
      "Our institute focuses on holistic development, nurturing the mind, spirit, and skills needed for impactful leadership.",
  },
  {
    id: 1,
    icon: <FcGraduationCap size={80} />,
    title: "Ignite Your Purpose",
    paragraph:
      " Experience a transformative journey that ignites purpose, passion, and a commitment to making a positive difference in the world.",
  },
  {
    id: 1,
    icon: <FcCustomerSupport size={80} color="#05143C" />,
    title: "Spring of Life Ministries",
    paragraph:
      "Spring of Life is a non-profit making Christian ministry that offers opportunities for collaborative effort to reach out to Youths and young adults.",
  },
];
export default featuresData;
