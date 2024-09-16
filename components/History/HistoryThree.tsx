import Link from "next/link";
import React from "react";

const HistoryThree = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900">
      <div className="mt-24 bg-gray-100 font-sans text-black">
        <div className="grid items-center gap-4 overflow-hidden md:grid-cols-2">
          <div className="p-6 md:p-12 lg:p-24">
            <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              Our Mission Institute
            </h1>
            <p className="mt-4 text-sm text-gray-700 md:text-base">
              This vision became clearly defined through the influence of the
              Holy Spirit.
            </p>
            <p className="mt-2 text-sm text-gray-700 md:text-base">
              After sharing the vision with his wife Abiola, both of them
              decided to seek the face of God through days of fasting and
              praying for the leading of the Holy Spirit.
            </p>
            <Link
              className="mt-6 inline-block rounded border-none bg-primary px-8 py-3 text-sm font-semibold text-white hover:bg-primary"
              href="https://springlife.purplebeetech.com/register"
            >
              Register for Mission Institute
            </Link>
          </div>
          <div className="relative flex items-center justify-center p-6 md:p-12 lg:p-84">
            <img
              src="/images/about/banner-1.jpg"
              alt="Mission Institute"
              className="rounded-md object-cover w-full h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryThree;
