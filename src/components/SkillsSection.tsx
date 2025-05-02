import { ReactElement, useState } from "react";
import { cn } from "../lib/utls";

interface Skill {
    name: string, level:number, category: "frontend" | "backend" | "tools"
}

const skills: Skill[] = [
    // frontend
    { name: "HTML/CSS", level: 90, category: "frontend" }, // Fixed typo: fro -> frontend
    { name: "React", level: 70, category: "frontend" },
    { name: "Angular", level: 85, category: "frontend" },
    { name: "TypeScript", level: 85, category: "frontend" },
    { name: "Tailwind", level: 50, category: "frontend" },

   // backend
   { name: "Java", level: 90, category: "backend" },
   { name: "Python", level: 90, category: "backend" },
   { name: "Express", level: 45, category: "backend" },
   { name: "MySQL", level: 75, category: "backend" },
   { name: "Mongo", level: 40, category: "backend" },

   // tools
   { name: "Git/GitHub", level: 75, category: "tools" },
];

const categories: string[] = ["all","frontend","backend","tools"];

export const SkillsSection: React.FC = (): ReactElement => {
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills = skills.filter((skill) => 
        activeCategory === "all" || skill.category === activeCategory);

    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-12 text-center">
                My <span className="text-primary" > Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4mb-12" >
                {
                    categories.map((category, index) => (
                        <button key={index} onClick={ () => setActiveCategory(category) }
                             className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory===category ? "bg-primary text-primary-foreground":
                                "bg-secondary/70 text-foreground hover:bd-secondary"
                             )}>
                            {category}
                        </button>
                    ))
                }
            </div>

            <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> 
                {
                    filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold font-serif text-lg" >{ skill.name }</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div style={{ width: skill.level+"%" }} 
                                    className="bg-primary h-2 rounded-full origin-left animte-[grow_1.5s_ease_out]" />
                            </div>

                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">
                                    {skill.level}%
                                </span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
};