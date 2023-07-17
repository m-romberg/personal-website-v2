import ProjectCard from "./ProjectCard";

function ProjectCardList ({projects}){

  return (
    <section>
      {projects.map((p,i) => (<ProjectCard key={i} project={p}/>) )}
    </section>
  )

}

export default ProjectCardList;