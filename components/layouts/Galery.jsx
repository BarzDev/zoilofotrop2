import Galery1 from "../galery1";
import Galery2 from "../galery2";

const GaleryLayout = () => {
  const porto1 = [
    "/1.1.png",
    "/1.2.png",
    "/1.3.png",
    "/1.4.png",
    "/1.5.png",
    "/1.6.png",
  ];

  const porto2 = [
    "/2.1.png",
    "/2.2.png",
    "/2.3.png",
    "/2.4.png",
    "/2.5.png",
    "/2.6.png",
  ];
  return (
    <>
      <div className="" data-aos="fade-right" data-aos-duration="2000">
        <h1 className="playpen p-5 text-center drop-shadow text-white sm:text-5xl text-2xl">
          MY PORTOFOLIO
        </h1>
      </div>
      <div className="flex sm:flex-row flex-col z-50">
        <Galery1 galery={porto1} />
        <Galery2 galery={porto2} />
      </div>
    </>
  );
};
export default GaleryLayout;
