import { IconImage } from "../ui/iconIMG";
import { IconSVG } from "../ui/iconSVG";

export function Skills() {
  return (
    <div className="">
      <p className=" md:text-3xl text-2xl font-bold md:pb-10 pb-5 md:ps-48 ps-0 md:text-left text-center">
        Skill
      </p>

      <div className="flex flex-wrap gap-3 items-center justify-center">
        <IconImage
          title="HTML"
          img="icon/html.svg"
          border="border-orange-500"
          color="text-orange-500"
          hover="hover:w-28"
        />
        <IconImage
          title="CSS"
          img="icon/css.svg"
          border="border-blue-500"
          color="text-blue-500"
          hover="hover:w-28"
        />
        <IconImage
          title="Javascript"
          img="icon/js.svg"
          border="border-amber-500"
          color="text-amber-500"
          hover="hover:w-36"
        />
        <IconImage
          title="Golang"
          img="icon/golang.svg"
          border="border-cyan-500"
          color="text-cyan-500"
          hover="hover:w-28"
        />

        <IconSVG
          title="Bootstrap"
          img="icon/js.svg"
          border="border-violet-500"
          color="text-violet-500"
          hover="hover:w-36"
          path={bootstrapSVG}
        />
        <IconImage
          title="Tailwind"
          img="icon/tailwindcss.svg"
          border="border-cyan-500"
          color="text-cyan-500"
          hover="hover:w-36"
        />
        <IconImage
          title="MongoDB"
          img="icon/mongodb.svg"
          border="border-lime-500"
          color="text-lime-500"
          hover="hover:w-36"
        />
        <IconImage
          title="Postgres"
          img="icon/postgres.svg"
          border="border-cyan-500"
          color="text-cyan-500"
          hover="hover:w-36"
        />
        <IconSVG
          title="Redux"
          img="icon/js.svg"
          border="border-violet-500"
          color="text-violet-500"
          hover="hover:w-28"
          path={reduxSVG}
        />
        <IconImage
          title="NextJS"
          img="icon/nextjs.svg"
          hover="hover:w-32"
          color="text-black"
          bg="bg-white"
        />
        <IconImage
          title="NodeJS"
          img="icon/nodejs.svg"
          border="border-lime-500"
          color="text-lime-500"
          hover="hover:w-32"
        />
        <IconImage
          title="GIT"
          img="icon/git.svg"
          border="border-red-500"
          color="text-red-500"
          hover="hover:w-28"
        />
      </div>
    </div>
  );
}

const reduxSVG = (
  <path
    d="M16.633 16.504c.869-.075 1.543-.84 1.499-1.754-.046-.914-.795-1.648-1.708-1.648h-.061c-.943.031-1.678.824-1.648 1.769.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.004 4.795-1.603.838-3.296 1.154-4.944.929-1.378-.194-2.456-.81-3.116-1.798-.988-1.499-1.078-3.116-.255-4.734.601-1.169 1.499-2.023 2.099-2.443-.15-.389-.33-1.048-.42-1.542-4.436 3.177-3.985 7.521-2.637 9.574 1.004 1.498 3.057 2.456 5.304 2.456.599 0 1.229-.044 1.843-.194 3.896-.749 6.847-3.086 8.54-6.532l.014-.031zM21.981 12.758c-2.321-2.727-5.738-4.225-9.634-4.225h-.51c-.253-.554-.837-.899-1.497-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074c.675-.03 1.259-.45 1.498-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.004 2.622 2.322 3.236 3.896.538 1.288.509 2.547-.045 3.597-.854 1.647-2.293 2.517-4.195 2.517-1.199 0-2.367-.375-2.967-.644-.359.298-.959.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.093-1.647 5.918-3.236.898-1.798.824-4.824-1.469-7.416l-.014.03zM6.49 17.042c.029.899.793 1.648 1.708 1.648h.06c.959-.03 1.693-.823 1.648-1.768 0-.899-.779-1.647-1.693-1.647h-.061c-.06 0-.149 0-.225.029-1.243-2.098-1.768-4.346-1.572-6.771.119-1.828.719-3.417 1.797-4.735.899-1.124 2.592-1.679 3.746-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.449c-.345-4.914-3.4-7.492-6.322-7.492-2.742 0-5.273 1.993-6.293 4.915-1.393 3.896-.479 7.641 1.229 10.638-.149.195-.239.539-.209.868z"
    fill="currentColor"
  />
);

const bootstrapSVG = (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M4.98488 2C3.61546 2 2.60217 3.19858 2.64753 4.49844C2.69105 5.74725 2.63451 7.36461 2.22732 8.68359C1.81892 10.0064 1.1282 10.8444 0 10.952V12.1666C1.1282 12.2742 1.81892 13.1122 2.22732 14.4351C2.63451 15.754 2.69105 17.3714 2.64753 18.6202C2.60217 19.9199 3.61546 21.1186 4.98508 21.1186H19.0169C20.3864 21.1186 21.3995 19.9201 21.3541 18.6202C21.3106 17.3714 21.3671 15.754 21.7743 14.4351C22.1829 13.1122 22.8718 12.2742 24 12.1666V10.952C22.8718 10.8444 22.1829 10.0064 21.7743 8.68359C21.3671 7.36481 21.3106 5.74725 21.3541 4.49844C21.3995 3.19878 20.3864 2 19.0169 2H4.98468H4.98488ZM16.2712 13.7687C16.2712 15.5586 14.9361 16.6441 12.7206 16.6441H8.94915C8.84127 16.6441 8.7378 16.6012 8.66152 16.5249C8.58523 16.4486 8.54237 16.3452 8.54237 16.2373V6.88136C8.54237 6.77347 8.58523 6.67001 8.66152 6.59372C8.7378 6.51743 8.84127 6.47458 8.94915 6.47458H12.6991C14.5464 6.47458 15.7588 7.47525 15.7588 9.01166C15.7588 10.09 14.9433 11.0555 13.9041 11.2245V11.2809C15.3187 11.4361 16.2712 12.4156 16.2712 13.7687ZM12.3094 7.76407H10.1589V10.8015H11.9701C13.3702 10.8015 14.1423 10.2377 14.1423 9.2299C14.1423 8.28556 13.4784 7.76407 12.3094 7.76407ZM10.1589 12.0068V15.3542H12.3885C13.8462 15.3542 14.6184 14.7692 14.6184 13.6699C14.6184 12.5704 13.8246 12.0066 12.2947 12.0066H10.1589V12.0068Z"
    fill="currentColor"
  />
);
