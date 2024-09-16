import Image from "next/image";
import { Herobanner } from "@/types/herobanner";
import Link from "next/link";
const SingleHeroBanner = ({ banner }: { banner: Herobanner }) => {
  const { id, mainTitle, img, title, paragraphy, buttonText } = banner;
  return (
    <div className="relative h-[500px] md:h-[600px] xl:h-[700px]">
      <div className="absolute inset-0">
        <Image
          src={img}
          alt="hero section"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-purple opacity-50"></div>
      </div>
      <div className="absolute inset-0 z-10 flex items-center justify-center text-center text-white">
        <div className="max-w-[1200px]">
          <h1 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl xl:text-6xl">
            {mainTitle}
          </h1>
          <p className="mb-8 whitespace-normal text-xs md:text-sm lg:text-base xl:text-lg">
            {paragraphy}
          </p>
          <Link
              className="mt-6 inline-block rounded border-none bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary"
              href="https://springlife.purplebeetech.com/register"
            >
              Register for Mission Institute
            </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleHeroBanner;
