import { ArrowRight, Github } from "lucide-react";
import { ReactElement } from "react";

interface Project {
    id: number, title: string, description: string, image: string, tags: string[], gitHubUrl: string
}

const projects: Project[] = [
    {
        id: 1, title: "Gravity POS", description: "Point of Sale system for Gravity.", 
        image: "/projects/no_projects.jpg",
        tags: ["Java","MySQL","Swing"],
        gitHubUrl: "https://github.com/joshua134/Gravity.git"
    },
    {
        id: 2, title: "Socio", 
        description: "This is a replica of social media platform where users can post content. Still undergoing development throught agile methology.", 
        image: "/projects/no_projects.jpg",
        tags: ["Java","MySQL","SpringBoot","React","Tailwindcss"],
        gitHubUrl: "https://github.com/joshua134/socio"
    },
    {
        id: 3, title: "Speedo", 
        description: "This is an Android project that tracks the total distance a user covers, their altitude, and their speed. It achieves these features using Google's LocationListener and LocationManager. However, the speed data may not be entirely accurate because it relies on Google satellites. As expected, the initial stages of testing worked fine without internet connection.", 
        image: "/projects/no_projects.jpg",
        tags: ["Java","Android","XML"],
        gitHubUrl: "https://github.com/joshua134/Speedo"
    }
];

export const ProjectsSection: React.FC = (): ReactElement =>{
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl" >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" >Featured <span className="text-primary" > Projects</span></h2>
        
            <p className="text-center text-muted-foreground mb-12 max-x-2xl mx-auto">
                Here are some of my recent projects. Each project was carefully crafted with attention to detail,
                performance, and user experience.
            </p>

            <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-8" >
                {
                    projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover" >
                            <div className="h-48 overflow-hidden" >
                                <img src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="p-6" >
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {
                                        project.tags.map((tag, i)=> (
                                            <span key={i} className="px-2 py-1 text-xs border font-medium font-sans rounded-full bg-secondary text-secondary-foreground" >{tag}</span>
                                        )) 
                                    }
                                </div>
                            

                                <h3 className="text-xl font-semibold mb-1" >{ project.title }</h3>

                                <p className="text-muted-foreground text-sm mb-4" >
                                    { project.description }
                                </p>

                                <div className="flex justify-center items-center mt-1 " >
                                    <div className="flex  space-x-3" >
                                        <a href={project.gitHubUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <Github size={20}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="text-center mt-12" >
                <a href="https://github.com/joshua134" target="_blank"
                    className="cosmic-button w-fit flex items-center mx-auto gap-2 font-serif">
                    Check my GitHub <ArrowRight size={16} />
                </a>
            </div>
        </div>
    </section>
}