import Image from "next/image";

const Section1 = () => {
  const svg = [
    "reactjs.svg",
    "tailwindcss.svg",
    "bootstrap.svg",
    "mongodb.svg",
  ];
  return (
    <section className="">
      <h1
        className="pacifico sm:text-9xl text-5xl w-screen text-center text-white pb-10 drop-shadow"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        Hayy...
      </h1>

      <p
        className="playpen sm:text-3xl text-base text-white px-10 sm:py-10 py-0 sm:text-justify text-left"
        data-aos="fade-up-right"
        data-aos-duration="3000"
      >
        Let me tell about my-self. My name Fakhrul Ghozali Akbar a Front-End
        Developer. Usually using React, Tailwind, Bootstrap, MongoDB as my
        tools.
      </p>
      <div className="flex item-center justify-center sm:gap-3 gap-1 sm:p-0 p-7 ">
        {svg.map((svg, index) => {
          return (
            <div
              key={svg}
              className="sm:w-10 sm:h-10 w-7 h-7 relative border rounded-full border-2"
              data-aos="fade-up-left"
              data-aos-duration="3000"
            >
              <Image
                className="p-1"
                src={svg}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          );
        })}
      </div>
      <p
        className="playpen sm:text-3xl text-base text-white px-10 sm:py-10 py-0 sm:text-justify text-left"
        data-aos="fade-up-right"
        data-aos-duration="3000"
      >
        Let show my portofolio below. <span>⬇⬇⬇</span>
      </p>
    </section>
  );
};
export default Section1;
