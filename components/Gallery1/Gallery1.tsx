import Image from "next/image";
import React from "react";

const Gallery1 = () => {
  return (
    // <div className="h-full  bg-white py-6 dark:bg-gray-800 sm:py-8 lg:py-12">
    //   <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    //     <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
    //       <div className="flex items-center gap-12">
    //         <h2 className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl">
    //           Our Gallery
    //         </h2>

    //         <p className="hidden max-w-screen-sm text-black dark:text-gray-300 md:block">
    //           A cross-section of our gallery and impact we are making
    //         </p>
    //       </div>

    //       <a
    //         href="#"
    //         className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 dark:border-none dark:bg-gray-700 dark:text-gray-200 md:px-8 md:py-3 md:text-base"
    //       >
    //         Springoflifeministries
    //       </a>
    //     </div>

    //     <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
    //       {/* <!-- image - start --> */}
    //       <a
    //         href="#"
    //         className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
    //       >
    //         <Image
    //           width={100}
    //           height={100}
    //           src="/images/about/banner-1.png"
    //           loading="lazy"
    //           alt="Photo by Minh Pham"
    //           className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
    //         />

    //         <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

    //         <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">
    //           Springoflifeministries
    //         </span>
    //       </a>
    //       {/* <!-- image - end --> */}

    //       {/* <!-- image - start --> */}
    //       <a
    //         href="#"
    //         className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
    //       >
    //         <Image
    //           width={100}
    //           height={100}
    //           src="/images/about/banner-2.png"
    //           loading="lazy"
    //           alt="Photo by Magicle"
    //           className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
    //         />

    //         <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

    //         <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">
    //           Springoflifeministries
    //         </span>
    //       </a>
    //       {/* <!-- image - end --> */}

    //       {/* <!-- image - start --> */}
    //       <a
    //         href="#"
    //         className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
    //       >
    //         <Image
    //           width={100}
    //           height={100}
    //           src="/images/about/banner-3.png"
    //           loading="lazy"
    //           alt="Photo by Martin Sanchez"
    //           className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
    //         />

    //         <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

    //         <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">
    //           Springoflifeministries
    //         </span>
    //       </a>
    //       {/* <!-- image - end --> */}

    //       {/* <!-- image - start --> */}
    //       <a
    //         href="#"
    //         className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
    //       >
    //         <Image
    //           width={100}
    //           height={100}
    //           src="/images/about/banner-1.png"
    //           loading="lazy"
    //           alt="Photo by Lorenzo Herrera"
    //           className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
    //         />

    //         <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

    //         <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">
    //           Springoflifeministries
    //         </span>
    //       </a>
    //       {/* <!-- image - end --> */}
    //     </div>
    //   </div>
    // </div>
    <section className="font-poppins mt-10 flex items-center  bg-gray-100  py-16 dark:bg-gray-800">
      <div className="mx-auto max-w-6xl p-4">
        <h2 className="pb-4  text-center text-4xl font-bold text-gray-800 dark:text-gray-400">
          Our Gallery
        </h2>
        <div className="mx-auto mb-10 w-44 border-b border-indigo-900 dark:border-gray-400"></div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="group relative overflow-hidden rounded-md shadow-sm">
            <Image
              src="/images/about/banner-1.jpg"
              width={100}
              height={48}
              alt="Image 1"
              className="h-[300px] w-full transition duration-500 group-hover:origin-center group-hover:rotate-3 group-hover:scale-110"
            />
            <div className="absolute inset-0 z-0 h-[300px] opacity-50 transition duration-500 group-hover:bg-black"></div>
            <div>
              <div className=" absolute right-4 top-4 z-10 hidden group-hover:block">
                <a
                  href="#"
                  className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 btn-icon lightbox rounded-full text-white"
                ></a>
              </div>
              <div className="absolute bottom-4 left-4 z-10 hidden group-hover:block">
                <a
                  href=""
                  className="h6 text-lg font-medium text-white transition duration-500 hover:text-blue-300"
                >
                  Spring of Life Programmes
                </a>
                <p className="mb-0 text-xs text-gray-300">Campus Mission</p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-md shadow-sm">
            <Image
              src="/images/about/banner-3.png"
              width={100}
              height={100}
              alt="Image 1"
              className="h-[300px] w-full transition duration-500 group-hover:origin-center group-hover:rotate-3 group-hover:scale-110"
            />
            <div className="absolute inset-0 z-0 h-[300px] opacity-50 transition duration-500 group-hover:bg-black"></div>
            <div>
              <div className=" absolute right-4 top-4 z-10 hidden group-hover:block">
                <a
                  href="#"
                  className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 btn-icon lightbox rounded-full text-white"
                ></a>
              </div>
              <div className="absolute bottom-4 left-4 z-10 hidden group-hover:block">
                <a
                  href=""
                  className="h6 text-lg font-medium text-white transition duration-500 hover:text-blue-300"
                >
                  Empowerment
                </a>
                <p className="mb-0 text-xs text-gray-300">Impact</p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-md shadow-sm">
            <Image
              src="/images/about/banner-3.png"
              width={100}
              height={100}
              alt="Image 1"
              className="h-[300px] w-full transition duration-500 group-hover:origin-center group-hover:rotate-3 group-hover:scale-110"
            />
            <div className="absolute inset-0 z-0 h-[300px] opacity-50 transition duration-500 group-hover:bg-black"></div>
            <div>
              <div className=" absolute right-4 top-4 z-10 hidden group-hover:block">
                <a
                  href="#"
                  className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 btn-icon lightbox rounded-full text-white"
                ></a>
              </div>
              <div className="absolute bottom-4 left-4 z-10 hidden group-hover:block">
                <a
                  href=""
                  className="h6 text-lg font-medium text-white transition duration-500 hover:text-blue-300"
                >
                  Personal Development
                </a>
                <p className="mb-0 text-xs text-gray-300">
                  Total Transformation
                </p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-md shadow-sm">
            <Image
              src="/images/about/banner-3.png"
              width={100}
              height={100}
              alt="Image 1"
              className="h-[300px] w-full transition duration-500 group-hover:origin-center group-hover:rotate-3 group-hover:scale-110"
            />
            <div className="absolute inset-0 z-0 h-[300px] opacity-50 transition duration-500 group-hover:bg-black"></div>
            <div>
              <div className=" absolute right-4 top-4 z-10 hidden group-hover:block">
                <a
                  href="#"
                  className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 btn-icon lightbox rounded-full text-white"
                ></a>
              </div>
              <div className="absolute bottom-4 left-4 z-10 hidden group-hover:block">
                <a
                  href=""
                  className="h6 text-lg font-medium text-white transition duration-500 hover:text-blue-300"
                >
                  Leadership School
                </a>
                <p className="mb-0 text-xs text-gray-300">Develop Youth</p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-md shadow-sm">
            <Image
              src="/images/about/banner-3.png"
              width={100}
              height={100}
              alt="Image 1"
              className="h-[300px] w-full transition duration-500 group-hover:origin-center group-hover:rotate-3 group-hover:scale-110"
            />
            <div className="absolute inset-0 z-0 h-[300px] opacity-50 transition duration-500 group-hover:bg-black"></div>
            <div>
              <div className=" absolute right-4 top-4 z-10 hidden group-hover:block">
                <a
                  href="#"
                  className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 btn-icon lightbox rounded-full text-white"
                ></a>
              </div>
              <div className="absolute bottom-4 left-4 z-10 hidden group-hover:block">
                <a
                  href=""
                  className="h6 text-lg font-medium text-white transition duration-500 hover:text-blue-300"
                >
                  Mission institute
                </a>
                <p className="mb-0 text-xs text-gray-300">
                  Community Empowerment
                </p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-md shadow-sm">
            <Image
              src="/images/about/banner-1.png"
              width={100}
              height={100}
              alt="Image 1"
              className="h-[300px] w-full transition duration-500 group-hover:origin-center group-hover:rotate-3 group-hover:scale-110"
            />
            <div className="absolute inset-0 z-0 h-[300px] opacity-50 transition duration-500 group-hover:bg-black"></div>
            <div>
              <div className=" absolute right-4 top-4 z-10 hidden group-hover:block">
                <a
                  href="#"
                  className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 btn-icon lightbox rounded-full text-white"
                ></a>
              </div>
              <div className="absolute bottom-4 left-4 z-10 hidden group-hover:block">
                <a
                  href=""
                  className="h6 text-lg font-medium text-white transition duration-500 hover:text-blue-300"
                >
                  Global Impact Makers
                </a>
                <p className="mb-0 text-xs text-gray-300">
                  Advanced Social Change
                </p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-md shadow-sm">
            <Image
              src="/images/about/banner-2.png"
              width={100}
              height={100}
              alt="Image 1"
              className="h-[300px] w-full transition duration-500 group-hover:origin-center group-hover:rotate-3 group-hover:scale-110"
            />
            <div className="absolute inset-0 z-0 h-[300px] opacity-50 transition duration-500 group-hover:bg-black"></div>
            <div>
              <div className=" absolute right-4 top-4 z-10 hidden group-hover:block">
                <a
                  href="#"
                  className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 btn-icon lightbox rounded-full text-white"
                ></a>
              </div>
              <div className="absolute bottom-4 left-4 z-10 hidden group-hover:block">
                <a
                  href=""
                  className="h6 text-lg font-medium text-white transition duration-500 hover:text-blue-300"
                >
                  Empowerment Projects
                </a>
                <p className="mb-0 text-xs text-gray-300">
                  Vocational Training
                </p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-md shadow-sm">
            <Image
              src="/images/about/banner-3.png"
              width={100}
              height={100}
              alt="Image 1"
              className="h-[300px] w-full transition duration-500 group-hover:origin-center group-hover:rotate-3 group-hover:scale-110"
            />
            <div className="absolute inset-0 z-0 h-[300px] opacity-50 transition duration-500 group-hover:bg-black"></div>
            <div>
              <div className=" absolute right-4 top-4 z-10 hidden group-hover:block">
                <a
                  href="#"
                  className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 btn-icon lightbox rounded-full text-white"
                ></a>
              </div>
              <div className="absolute bottom-4 left-4 z-10 hidden group-hover:block">
                <a
                  href=""
                  className="h-6 text-lg font-medium text-white transition duration-500 hover:text-blue-300"
                >
                  Leadership Development
                </a>
                <p className="mb-0 text-xs text-gray-300">
                  Faith-Based Development{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery1;
