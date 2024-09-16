/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const HistoryTwo = () => {
  return (
    <section className="w-full bg-gray-800 bg-[url('/images/about/banner-5.png')] bg-fixed bg-center bg-no-repeat bg-blend-multiply">
      <div className="mx-auto max-w-screen-xl px-4 py-24 text-center lg:py-56">
        <h1 className="mt-24 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
          Our History
        </h1>
        <p className="mt-20 text-lg font-normal text-gray-300 sm:px-16 lg:px-48 lg:text-xl">
          The vision to embark on campus mission in secular higher institution
          and to support the youth and young adults through youth empowerment
          was first impressed in the mind of Pastor Oludare Olatunji in 2015.
        </p>
        <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-16 py-4 text-center text-base font-medium text-white hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Join Make Imapct
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

export default HistoryTwo;
