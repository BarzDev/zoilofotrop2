import Link from "next/link";
import { ArrowLeft, FileDown } from "lucide-react";
import { portoAndroid } from "@/data/portoAndroid";
import Image from "next/image";

export default function AndroidPortoPage({ params }) {
  const id = params.id;

  const data = portoAndroid.find((item) => item.id == id);

  return (
    <main className="bg-slate-950 text-white min-h-screen ">
      <nav className="sticky top-0 bg-slate-500 font-bold text-white lg:text-lg sm:text-base text-xs z-50 p-5 flex justify-between">
        <Link href="/" className="flex items-center gap-2">
          <ArrowLeft size={20} />
          <p className="hidden lg:block">Back</p>
        </Link>
        <h1 className="text-xl">{data.title}</h1>
        <div>{/* <FileDown /> */}</div>
      </nav>

      <section className="p-5">
        <div className="flex justify-center gap-4 flex-wrap pt-5">
          <Card data={data} />
        </div>
      </section>
    </main>
  );
}

const Card = ({ data }) => {
  return (
    <>
      {data.imgDesc.map((data, index) => (
        <div key={index} className="w-52 flex-shrink-0 border-2 p-2 rounded-md">
          <p className="text-center text-sm font-bold mb-2">{data.desc}</p>
          <div className="relative h-96">
            <Image
              src={data.img}
              alt={data.desc}
              fill
              className="object-contain"
            />
          </div>
        </div>
      ))}
    </>
  );
};
