import { Typing } from "../ui/react-typing";

export const Intro = () => {
  const introLines = [
    {
      title: "I`m Fakhrul Akbar",
      time: 2500,
      color: "white",
    },
    { title: "", time: 1000, color: "rgb(13 148 136)" },
    {
      title: "I`m a Fullstack developer..",
      time: 2000,
      color: "rgb(13 148 136)",
    },
    { title: "", time: 1000, color: "rgb(5 150 105)" },
    { title: "I`m a Web developer..", time: 2000, color: "rgb(5 150 105)" },
    { title: "", time: 500, color: "white" },
  ];

  return (
    <div className="sm:h-96 h-28 kanit-medium  flex items-center  justify-center">
      <div className="flex flex-col text-3xl sm:text-7xl">
        <p className="w-auto lg:w-[910px]">Hello..</p>
        {/* <Typing words={introLines} /> */}
      </div>
    </div>
  );
};
