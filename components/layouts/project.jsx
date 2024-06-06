import { portoList } from "@/data/porto";
import { Galery } from "../ui/galery";

export const Project = () => {
  return (
    <div>
      <p className=" text-3xl font-bold md:ps-48 ps-0 md:text-left text-center">
        Mini Project
      </p>
      <div>
        {portoList.map((porto) => {
          return <Galery key={porto.id} porto={porto} />;
        })}
      </div>
    </div>
  );
};
