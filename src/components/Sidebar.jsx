import { useState, useEffect } from "react";

const Sidebar = () => {
    const [activeHash, setActiveHash] = useState(window.location.hash);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleHashChange = () => setActiveHash(window.location.hash);
        window.addEventListener("hashchange", handleHashChange);

        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.querySelector("#about");
            const techStackSection = document.querySelector("#tech-stack");
            const experienceSection = document.querySelector("#experience");
            const contactSection = document.querySelector("#contact");

            const aboutTop = aboutSection.offsetTop;
            const techStackTop = techStackSection.offsetTop;
            const experienceTop = experienceSection.offsetTop;
            const contactTop = contactSection.offsetTop;

            const scrollPosition = window.scrollY;

            if (scrollPosition >= aboutTop && scrollPosition < techStackTop) {
                setActiveHash("#about");
            } else if (
                scrollPosition >= techStackTop &&
                scrollPosition < experienceTop
            ) {
                setActiveHash("#tech-stack");
            } else if (
                scrollPosition >= experienceTop &&
                scrollPosition < contactTop
            ) {
                setActiveHash("#experience");
            } else if (scrollPosition >= contactTop) {
                setActiveHash("#contact");
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const getActiveClass = (hash) =>
        activeHash === hash
            ? "border-r-[1px] border-r-[var(--brand)] bg-[var(--background)] opacity-[1]"
            : "opacity-[0.5]";

    return (
        <nav className="sticky top-0 left-0 flex h-[100dvh] w-[3.75rem] flex-col items-center bg-black">
            <span className="poppins-black my-[1.25rem] flex h-[2.9rem] w-[2.9rem] items-center justify-center rounded-[0.25rem] bg-[var(--background)] text-[22px] text-white">
                I<span className="text-[var(--brand)]">.</span>
            </span>
            <a
                href="#about"
                className={`vertical-text poppins-extralight flex h-[7.5rem] w-full items-center justify-center text-[18px] font-[200] text-white hover:border-r-[1px] hover:border-r-[var(--brand)] hover:bg-[var(--background)] hover:opacity-[1] ${getActiveClass("#about")}`}
            >
                About
            </a>
            <a
                href="#tech-stack"
                className={`vertical-text poppins-extralight flex h-[7.5rem] w-full items-center justify-center text-[18px] font-[200] text-white hover:border-r-[1px] hover:border-r-[var(--brand)] hover:bg-[var(--background)] hover:opacity-[1] ${getActiveClass("#tech-stack")}`}
            >
                Tech Stack
            </a>
            <a
                href="#experience"
                className={`vertical-text poppins-extralight flex h-[7.5rem] w-full items-center justify-center text-[18px] font-[200] text-white hover:border-r-[1px] hover:border-r-[var(--brand)] hover:bg-[var(--background)] hover:opacity-[1] ${getActiveClass("#experience")}`}
            >
                Exp.
            </a>
            <a
                href="#contact"
                className={`vertical-text poppins-extralight flex h-[7.5rem] w-full items-center justify-center text-[18px] font-[200] text-white hover:border-r-[1px] hover:border-r-[var(--brand)] hover:bg-[var(--background)] hover:opacity-[1] ${getActiveClass("#contact")}`}
            >
                Contact
            </a>
        </nav>
    );
};

export default Sidebar;
