import { projectData } from '@/lib/data';
import Project from './project';

const Projects = () => {
  return (
    <section
      id="projects"
      className="mx-0 h-screen lg:mx-4containersExtraGap lg:mt-0 lg:scroll-mt-[134px]"
    >
      <div className="mx-4 flex items-center lg:mx-1gap">
        <h2 className="flex items-center font-spaceMono text-4xl font-bold tracking-tighter lg:text-5xl">
          <span className="font-spaceMono text-3xl font-normal tracking-tight text-primary lg:text-4xl">
            03.
          </span>
          Projects
        </h2>
        <div className=" ml-1gap h-px w-full bg-white" />
      </div>

      <div className="mx-1gap mt-2gap max-w-5xl gap-1container pb-1gap lg:mx-1container">
        {projectData.map((project, index) => (
          <Project
            key={index}
            index={index}
            title={project.title}
            date={project.date}
            tags={[...project.tags]}
            icons={Array.isArray(project.icons) ? project.icons : []}
            description={project.description}
            img={project.img}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
