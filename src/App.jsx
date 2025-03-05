import Hero from "./components/Hero";
import Heading from "./components/Heading";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Contact from "./components/Contact.jsx";

const App = () => {
    return (
        <>
            <div className="grid grid-cols-[60px_1fr] bg-[var(--background)]">
                <Sidebar />
                <main>
                    <Heading />
                    <Hero />
                    <About />
                    <TechStack />
                    <Experience />
                    <Contact />
                    <div className="footer"></div>
                </main>
            </div>
        </>
    );
};

export default App;
