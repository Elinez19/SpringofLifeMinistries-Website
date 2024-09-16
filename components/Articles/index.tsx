"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface PostData {
  cta: string;
  title: string;
  description: string;
  imgSrc: string;
  tag: string;
}

const MultipleItems = () => {
  const [filteredData, setFilteredData] = useState<PostData[] | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const postData: PostData[] = [
    {
      cta: "Join the ",
      title: "LEADERS DEVELOPMENT INSTITUTE (ELDI)",
      description:
        "Emerging Leaders Development Institute (ELDI) offers participants the opportunity to form a network of future leaders in Christian education while learning about relational servant leadership and effective management and governance.",
      imgSrc: "/images/articles/article.png",
      tag: "Leadership Development",
    },
    {
      cta: "Join the ",
      title: "Leadership Development Program",
      description:
        "This is one of the most current leadership development program for youth ministry in the Seventh-day Adventist Church. The Master Guide is the foundation for youth ministry leadership, that will help keep youth leaders sharp.",
      imgSrc: "/images/articles/article.png",
      tag: "Leadership Development",
    },
    {
      cta: "Join the ",
      title: "INVERSE BIBLE STUDY COURSE",
      description:
        "inVerse is a Bible study course for those aged 18–35+  university students, young adults, working professionals, younger parents, and those young at heart.Contemporary biblical topics and  issues concerning youths.",
      imgSrc: "/images/articles/article2.png",
      tag: "Bible Study",
    },
    // Add more data objects as needed
  ];

  const uniqueTags = Array.from(new Set(postData.map((item) => item.tag)));

  const filterByTag = (tag: string) => {
    const filtered = postData.filter((item) => item.tag === tag);
    setFilteredData(filtered);
    setActiveFilter(tag);
  };

  const resetFilter = () => {
    setFilteredData(null);
    setActiveFilter("All");
  };

  const displayData = filteredData ? filteredData : postData.slice(0, 3);

  return (
    <div className="bg-lightgrey py-20" id="blog-section">
      <div className="mx-auto max-w-7xl sm:py-4 lg:px-8 ">
        <div className="mb-8 text-center">
          <h3 className="text-blue text-lg font-normal tracking-widest">
            Mission Training Programs
          </h3>
          <h3 className="text-4xl font-bold sm:text-6xl">
            Choose from our extensive array of learning opportunities
          </h3>
        </div>

        <div className="mb-4 flex justify-center gap-4">
          <button
            className={`rounded-full px-6 py-3 text-lg font-medium ${
              activeFilter === "All"
                ? "bg-navyblue hover:bg-lightblue hover:border-lightblue border-4 border-blue-500 text-white hover:shadow-md"
                : "bg-navyblue hover:bg-lightblue hover:border-lightblue border-4 border-blue-500 text-white hover:shadow-md"
            } focus:outline-none`}
            onClick={resetFilter}
          >
            All
          </button>
          {uniqueTags.map((tag) => (
            <button
              key={tag}
              className={`rounded-full px-6 py-3 text-lg font-medium ${
                activeFilter === tag
                  ? "bg-navyblue hover:bg-lightblue border border-white text-white hover:border-white hover:shadow-md"
                  : "bg-navyblue border-navyblue hover:bg-lightblue hover:border-lightblue border text-white hover:shadow-md"
              } focus:outline-none`}
              onClick={() => filterByTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {displayData.map((item, index) => (
            <div
              key={index}
              className="shadow-courses overflow-hidden rounded-3xl border-8 border-white bg-white shadow-lg"
            >
              <div className="transform transition duration-300 ease-in-out hover:scale-105">
                <div className="p-4">
                  <Image
                    src={item.imgSrc}
                    alt="Article Image"
                    width={389}
                    height={262}
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div className="p-6">
                <h4 className="pb-2 text-2xl font-bold text-black">
                  {item.title}
                </h4>
                <div className="pb-6">
                  <h3 className="pb-2 text-base font-normal opacity-75">
                    {item.description}
                  </h3>
                </div>
                <Link href="/">
                  <h3 className="article-img mb-4 ml-12 inline-block w-60 rounded-full bg-[#051335] px-6 py-3 text-center text-white hover:bg-black hover:shadow-xl">
                    {item.cta} Course
                  </h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultipleItems;
