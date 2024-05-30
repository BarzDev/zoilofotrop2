import { portoList } from "@/data/porto";
import { Galery } from "../ui/galery";

export const Project = () => {
  return (
    <div>
      <p className="playpen text-3xl font-bold md:ps-48 ps-0 md:text-left text-center">
        Mini Project
      </p>
      <div>
        <Galery porto={portoList[0]} />
        <Galery porto={portoList[1]} />
        <Galery porto={portoList[2]} />
        <Galery porto={portoList[3]} />
        <Galery porto={portoList[4]} />
      </div>
    </div>
  );
};
