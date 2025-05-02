import { ArrowDown } from "lucide-react";
import { ReactElement } from "react";

export const HeroSection: React.FC = (): ReactElement => {
    return <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold font-serif tracking-tight" >
                    <span className="opacity-0 animate-fade-in" > Hi, I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1" > Joshua</span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Mukonyi </span>
                </h1>

                <p className="font-serif text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                    I am a stellar software engineer with experiences in <b className="text-green-700">Java</b>, 
                    <b className="text-red-700">Python</b> and modern technologies.
                    Specializing in full-stack development, I build systems that are both beautiful, ease to use and functional. 
                </p>

                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className=" font-serif cosmic-button capitalize">
                        view my work 
                    </a>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-1">scroll</span>
            <ArrowDown className="h-5 w-5 text-primary" />
        </div>
    </section>
};