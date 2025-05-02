import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { NavBar } from "../components/NavBar";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";


const Home: React.FC  = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme toggle */}
            <ThemeToggle/>
            
            {/* Background Effects */}
            <StarBackground />

            {/* Navbar( Navigation bar) */}
            <NavBar />

            {/* Main Section */}
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>

            {/* Footer Section */}
            <Footer />
        </div>
    );
};

export default Home;