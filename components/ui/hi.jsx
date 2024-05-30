import Image from "next/image";

export const Hai = () => {
  return (
    <div className="relative md:w-12 md:h-12 h-6 w-6 z-10">
      <Image
        src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
        alt="hi"
        fill
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};
