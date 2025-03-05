const Hero = () => {
    const gridSize = 25; // 25x25 = 625 elemen
    const elements = Array.from({ length: gridSize * gridSize });

    return (
        <section className="relative z-10 m-auto mb-[6rem] max-w-[1150px] overflow-hidden p-[6rem]">
            <div className="relative z-10 my-[3rem] w-fit">
                <div className="relative w-fit overflow-hidden">
                    {/* <div className="transform-none opacity-1"> */}
                    <h1 className="poppins-black text-[96px]/[1.1] text-white">
                        Hey, I'm Imam
                        <span className="text-[var(--brand)]">.</span>
                    </h1>
                    {/* </div> */}
                </div>
                <div className="relative w-fit overflow-hidden">
                    {/* <div className="transform-none opacity-1"> */}
                    <h2 className="poppins-extralight mt-[1rem] text-[36px]/[1.1] text-white">
                        I'm a&nbsp;
                        <span className="poppins-bold text-[var(--brand)]">
                            Full Stack Developer
                        </span>
                    </h2>
                    {/* </div> */}
                </div>
                <div className="relative w-fit overflow-hidden">
                    {/* <div className="transform-none opacity-1"> */}
                    <p className="poppins-extralight my-[1.5rem] max-w-[700px] text-[18px] text-white">
                        Imam Tashbir Arrahman is a full-stack web developer with
                        a passion for technology, particularly in AI and
                        copywriting. With experience in building web
                        applications from front to back, he is dedicated to
                        continuous learning and exploring the evolving digital
                        landscape.
                    </p>
                    {/* </div> */}
                </div>
                <div className="relative w-fit overflow-hidden">
                    {/* <div className="transform-none opacity-1"> */}
                    <button className="poppins-regular flex cursor-pointer items-center gap-[0.5rem] rounded-[0.25rem] bg-[var(--brand)] px-[1.5rem] py-[0.75rem] text-[18px] text-[var(--background-dark)]">
                        Contact me
                    </button>
                    {/* </div> */}
                </div>
            </div>
            <div className="absolute top-[12px] right-[2.25rem] bottom-[12px] z-0 grid max-w-[75%] [grid-template-columns:repeat(25,1fr)]">
                {elements.map((_, index) => (
                    <div
                        key={index}
                        className="cursor-crosshair rounded-[8px] p-[0.5rem] transition-colors duration-[250ms]"
                    >
                        <div className="h-[8px] w-[8px] rounded-full bg-[linear-gradient(180deg,var(--background),var(--text))] opacity-[0.35]"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Hero;
