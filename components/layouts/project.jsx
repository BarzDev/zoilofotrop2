import { portoWeb } from "@/data/portoWeb";
import { Galery } from "../ui/galery";
import { portoAndroid } from "@/data/portoAndroid";

export const Project = () => {
  return (
    <div>
      <p className=" text-3xl font-bold md:ps-48 ps-0 md:text-left text-center">
        Mini Project
      </p>

      <div>
        {portoAndroid.map((porto) => {
          return <Galery key={porto.id} porto={porto} />;
        })}
      </div>

      <div>
        {portoWeb.map((porto) => {
          return <Galery key={porto.id} porto={porto} />;
        })}
      </div>
    </div>
  );
};
