import postgresql_logo from "../assets/postgresql.svg";
import express_logo from "../assets/express.svg";
import react_logo from "../assets/react.svg";
import node_logo from "../assets/node.svg";

const TechStack = () => {
    return (
        <section
            id="tech-stack"
            className="relative z-10 m-auto max-w-[1150px] overflow-hidden p-[6rem] text-white"
        >
            <div className="mb-[1.5rem] flex items-center gap-[1.5rem]">
                <div className="h-[1px] w-full bg-[var(--text)] opacity-[0.3]"></div>
                <h3>
                    {/* <div className="transform-none opacity-1"> */}
                    <span className="poppins-black text-[56px] text-white">
                        Tech&nbsp;Stack
                        <span className="text-[var(--brand)]">.</span>
                    </span>
                    {/* </div> */}
                </h3>
            </div>
            <div>
                <div className="relative overflow-hidden">
                    <div className="my-[1.5rem] flex items-center justify-evenly">
                        <img
                            className="h-[80px] invert"
                            alt="logo"
                            src={postgresql_logo}
                        />
                        <img
                            className="h-[80px] invert"
                            alt="logo"
                            src={express_logo}
                        />
                        <img
                            className="h-[80px] invert"
                            alt="logo"
                            src={react_logo}
                        />
                        <img
                            className="h-[80px] invert"
                            alt="logo"
                            src={node_logo}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
