import { PROJECTS } from "../assets/constants"

function Projects() {
    return (
        <div className="pb-4">
            <h2 className="my-20 text-center text-4xl">
                Projects
            </h2>
            <div className="ml-8">
                {PROJECTS.map((Projects, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4">
                            <img src={Projects.image}
                                width={250}
                                height={250}
                                alt={Projects.title}
                                className="mb-6 rounded" />
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h3 className="mb2 font-semibold text-2xl">{Projects.title}</h3>
                            <p className="mb-4 text-stone-400">{Projects.description}</p>
                            {Projects.technologies.map((tech,index) =>(
                                <span className="mr-2 rounded bg-stone-900 p-2" key={index}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects