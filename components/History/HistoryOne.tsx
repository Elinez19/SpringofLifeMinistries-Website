import Image from "next/image";
import { PiCheckCircleDuotone } from "react-icons/pi";

const HistoryOne = () => {
  return (
    <section className="mx-auto mt-12 max-w-7xl px-4 sm:mt-6 sm:px-6 lg:-mt-12 lg:px-4">
      <div className="bg-gray-100 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-base text-gray-500">
            This vision became clearly defined through the influence of the Holy
            Spirit. After sharing the vision with his wife Abiola, both of them
            decided to seek the face of God through days of fasting and praying
            for the leading of the Holy Spirit.
          </p>
          <p className="mt-4 text-base text-gray-500">
            In June 2019, Oludare and his wife took steps by discussing these
            great mission opportunities with a few close friends: Pastor Olufemi
            Okorie; Dr. Olurotimi Adeleye, and Dr. Toying Oyedele who eventually
            constitute Board members for this Ministry, Spring of Life Ministry
            took the first step into reaching out to campuses in Nigeria in 2021
            by training over 150 student missionaries in about 50 universities
            and colleges across Western Nigeria.
          </p>
          <p className="mt-4 text-base text-gray-500">
            Also in 2021, We lunch the Youth Empowerment program in Canada to
            support the youth and young adults especially the new immigrant
            youths. To the glory of God, the ministry is fully registered in
            Nigeria; Canada and USA respectively.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-white">
                <PiCheckCircleDuotone size={36} />
              </div>
              <div className="mt-5">
                {/* <h3 className="text-lg font-medium text-gray-900">Mission</h3> */}
                <p className="mt-2 text-base text-gray-500">
                  In June 2019, Oludare and his wife took steps by discussing
                  these great mission opportunities with a few close friends
                </p>
              </div>
            </div>
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-white">
                <PiCheckCircleDuotone size={36} />
              </div>
              <div className="mt-5">
                {/* <h3 className="text-lg font-medium text-gray-900">Values</h3> */}
                <p className="mt-2 text-base text-gray-500">
                  Pastor Olufemi Okorie; Dr. Olurotimi Adeleye, and Dr. Toying
                  Oyedele who eventually constitute Board members
                </p>
              </div>
            </div>
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-white">
                <PiCheckCircleDuotone size={36} />
              </div>
              <div className="mt-5">
                {/* <h3 className="text-lg font-medium text-gray-900">Vision</h3> */}
                <p className="mt-2 text-base text-gray-500">
                  Pastor Olufemi Okorie; Dr. Olurotimi Adeleye, and Dr. Toying
                  Oyedele who eventually constitute Board members
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex-justify mx-auto my-10 flex max-w-7xl flex-col gap-3 px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:flex lg:flex-row lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          {/* <h1 className="text-4xl font-extrabold tracking-tight text-gray-800 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Data to enrich your</span>
            <span className="block text-indigo-600 xl:inline">
              online business
            </span>
          </h1> */}
          <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
            This vision became clearly defined through the influence of the Holy
            Spirit. After sharing the vision with his wife Abiola, both of them
            decided to seek the face of God through days of fasting and praying
            for the leading of the Holy Spirit.
          </p>
          {/* <!-- Button Section --> */}
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-gray-800 px-8 py-3 text-base font-medium text-white hover:bg-gray-600 md:px-10 md:py-4 md:text-lg"
              >
                Get started
              </a>
            </div>
          </div>
          {/* <!-- End of Button Section --> */}
        </div>

        {/* <!--   Image Section     --> */}
        <div className="my-4 lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            width={100}
            height={56}
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            src="/images/about/splifeministries-img-1.png"
            alt=""
          />
        </div>
        {/* <!--   End of Image Section     --> */}
      </div>
    </section>
  );
};

export default HistoryOne;
