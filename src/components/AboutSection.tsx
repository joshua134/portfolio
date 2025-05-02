import { Briefcase, Code, User } from "lucide-react";
import { ReactElement } from "react";

export const AboutSection: React.FC = (): ReactElement =>{
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" >
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold font-serif">Passionate System Engineer</h3>
                    <p className="text-muted-foreground">
                        With over 2 years of experience in system development, I specialize in creating scalable, accessible, and performant systems using best practices.
                    </p>
                    <p className="text-muted-foreground">
                        I am passionate about creating elegant solutions to complex problems, and I'm constantly learning new technologies and problem-solving techniques to stay at the forefront of the ever-evolving tech world.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch
                        </a>
                        <a className="px-6 py-4 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="capitalize font-serif font-semibold text-lg">system development</h4>
                                <p className="text-muted-foreground">
                                    I excel at creating scalable backend systems and responsive, intuitive front-end applications.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-serif font-semibold text-lg">UI/UX Design</h4>
                                <p className="text-muted-foreground">
                                    I design intuitive user interfaces and seamless user experiences.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="capitalize font-serif font-semibold text-lg">project management</h4>
                                <p className="text-muted-foreground">
                                    I lead projects from conception to completion using agile methodologies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
};