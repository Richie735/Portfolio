import { projectData } from '@/lib/data';
import Project from './project';

const Projects = () => {
  return (
    <section
      id="projects"
      className=" mx-4containersExtraGap h-screen scroll-mt-[200px]"
    >
      <div className="ml-gap mr-1gap flex items-center">
        <h2 className="flex items-center font-spaceMono text-5xl font-bold tracking-tighter">
          <span className=" font-spaceMono text-4xl font-normal tracking-tight text-primary">
            03.
          </span>
          Projects
        </h2>
        <div className=" ml-1gap h-px w-full bg-white" />
      </div>

      <div className="mx-1container mt-2gap max-w-5xl gap-1container">
        {projectData.map((project, index) => (
          <Project
            key={index}
            index={index}
            title={project.title}
            tags={[...project.tags]}
            icons={Array.from(project.icons)}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
