import { portoList } from "@/data/porto";
import { Galery } from "../galery";
import { Title } from "../react-type/hello";

const GaleryLayout = () => {
  return (
    <>
      <div className="" data-aos="fade-right" data-aos-duration="2000">
        <h1 className="playpen p-5 text-center drop-shadow text-white sm:text-5xl text-2xl">
          <Title />
        </h1>
      </div>
      <div className="flex sm:flex-row flex-col flex-wrap z-30">
        {portoList.map((porto) => {
          return <Galery key={porto.id} porto={porto} />;
        })}
      </div>
    </>
  );
};
export default GaleryLayout;
