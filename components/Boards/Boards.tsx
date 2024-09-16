interface Board {
  id: number;
  name: string;
  href: string;
  image: string;
  title: string;
  desc: string;
}

const boards: Board[] = [
  {
    id: 1,
    name: "Pastor Oludare Olatunji",
    href: "#",
    image: "/images/mentor/boy1.svg",
    title: "Executive Director",

    desc: "The vision to embark on campus mission in secular higher institution and to support the youth and young adults through youth empowerment was first impressed in the mind of Pastor Oludare Olatunji in 2015.",
  },
  {
    id: 2,
    name: "Dr Olurotimi Adeleye",
    href: "#",
    image: "/images/mentor/boy2.svg",
    title: "Executive Secretary",

    desc: "The vision to embark on campus mission in secular higher institution and to support the youth and young adults through youth empowerment was first impressed in the mind of Pastor Oludare Olatunji in 2015.",
  },
  {
    id: 3,
    name: "Pastor Femi Okorie ",
    href: "#",
    image: "/images/mentor/boy3.svg",
    title: "Spiritual Growth and Evangelism Director",

    desc: "The vision to embark on campus mission in secular higher institution and to support the youth and young adults through youth empowerment was first impressed in the mind of Pastor Oludare Olatunji in 2015.",
  },
  {
    id: 5,
    name: "Pastor Oludare Olatunji",
    href: "#",
    image: "/images/mentor/boy5.svg",
    title: "Executive Director",

    desc: "The vision to embark on campus mission in secular higher institution and to support the youth and young adults through youth empowerment was first impressed in the mind of Pastor Oludare Olatunji in 2015.",
  },
  {
    id: 6,
    name: "Pastor Oludare Olatunji",
    href: "#",
    image: "/images/mentor/girl1.svg",
    title: "Executive Director",
    desc: "The vision to embark on campus mission in secular higher institution and to support the youth and young adults through youth empowerment was first impressed in the mind of Pastor Oludare Olatunji in 2015.",
  },
];

const Boards = () => {
  return (
    <div
      id="mentors-section"
      className="m-auto max-w-2xl px-4 pb-16 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-28"
    >
      <h2 className="mx-auto text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Board of Directors
      </h2>

      <div className="mx-auto mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-1 xl:gap-x-8">
        {boards.map((board) => (
          <div key={board.id} className="p-4">
            {" "}
            {/* Add key prop */}
            <figure className="max-w-5xl rounded-xl bg-slate-100 p-8 dark:bg-slate-800 md:flex md:p-0">
              <img
                className="mx-auto h-24 w-24 rounded-full object-cover md:h-auto md:w-48 md:rounded-none"
                src={board.image}
                alt={board.name}
                width="384"
                height="512"
              />
              <div className="space-y-4 pt-6 text-center md:p-8 md:text-left">
                <blockquote>
                  <p className="text-lg font-medium">{board.desc}</p>
                </blockquote>
                <figcaption className="font-medium">
                  <div className="text-sky-500 dark:text-sky-400">
                    {board.name}
                  </div>
                  <div className="text-slate-700 dark:text-slate-500">
                    {board.title}
                  </div>
                </figcaption>
              </div>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Boards;
