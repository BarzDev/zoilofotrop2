const Navbar = ({ home, aboutMeRef, skillsRef, projectsRef }) => {
  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="sticky top-0 bg-slate-500 flex items-center justify-center font-bold text-white lg:text-lg sm:text-base text-xs z-50 md:mt-20 mt-0">
      <div
        className="px-10 py-4 hover:bg-violet-500 w-48 h-14 "
        style={styles.container}
        onClick={() => handleScroll(home)}
      >
        <div>Home</div>
      </div>
      <div
        className="px-10 py-4 hover:bg-emerald-500 w-48 h-14  "
        style={{ ...styles.container, marginLeft: "-3rem" }}
        onClick={() => handleScroll(aboutMeRef)}
      >
        <div>About Me</div>
      </div>
      <div
        className="px-10 py-4 hover:bg-rose-500 w-48 h-14  "
        style={{ ...styles.container, marginLeft: "-3rem" }}
        onClick={() => handleScroll(skillsRef)}
      >
        <h1>Skill</h1>
      </div>
      <div
        className="px-10 py-4 hover:bg-amber-500 w-48 h-14 "
        style={{ ...styles.container, marginLeft: "-3rem" }}
        onClick={() => handleScroll(projectsRef)}
      >
        <h1>Mini Project</h1>
      </div>
    </div>
  );
};

const styles = {
  container: {
    transition: "background-color 0.5s ease",
    textAlign: "center",
    cursor: "pointer",
    clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
  },
};

export default Navbar;
