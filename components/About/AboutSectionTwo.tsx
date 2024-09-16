/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="w-full bg-gray-700 bg-[url('/images/about/banner-2.png')] bg-fixed bg-center bg-no-repeat bg-blend-multiply">
      <div className="mx-auto max-w-screen-xl px-4 py-24 text-center lg:py-56">
        <h1 className="mt-24 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
          Our Mission
        </h1>
        <p className="mt-20 text-lg font-normal text-gray-300 sm:px-16 lg:px-48 lg:text-xl">
          Our Mission is to empower the teeming population of youths and young
          adults so as to rekindle hope in them, and to reach out to them with
          the everlasting gospel of Christend time message as recorded in Rev
          14:6-12 in the context of the Great Commission Matthew 28:18-20
          “Therefore go and make disciples of all nations, baptizing them in the
          name of the Father and of the Son and of the Holy Spirit…”
        </p>
        <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Get started
            <svg
              className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg border border-white px-5 py-3 text-center text-base font-medium text-white hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-400 sm:ms-4"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
