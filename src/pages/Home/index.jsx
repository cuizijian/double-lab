import Project from "@components/Project";
import projects from "@/consts/homeProjects";

export default function Home() {
  return (
    <>
      {projects.map((item, index) => {
        return <Project {...item} key={"projectItem_" + index} />;
      })}
    </>
  );
}
