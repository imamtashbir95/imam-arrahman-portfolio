import postgresql_logo from "../assets/postgresql.svg";
import express_logo from "../assets/express.svg";
import react_logo from "../assets/react.svg";
import node_logo from "../assets/node.svg";
import { motion } from "motion/react";

const TechStack = () => {
    const transition = {
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
    };

    return (
        <section
            id="tech-stack"
            className="relative z-10 m-auto max-w-[1150px] overflow-hidden p-[6rem] text-white max-md:px-[1.5rem] max-md:py-[4.5rem]"
        >
            <div className="mb-[1.5rem] flex items-center gap-[1.5rem]">
                <div className="h-[1px] w-full bg-[var(--text)] opacity-[0.3]"></div>
                <h3>
                    {/* <div className="transform-none opacity-1"> */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={transition}
                    >
                        <span className="poppins-black text-[56px] text-white max-md:text-[36px]">
                            Tech&nbsp;Stack
                            <span className="text-[var(--brand)]">.</span>
                        </span>
                    </motion.div>
                    {/* </div> */}
                </h3>
            </div>
            <div>
                <div className="relative overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={transition}
                    >
                        {" "}
                        <div className="my-[1.5rem] flex items-center justify-evenly max-md:grid max-md:grid-cols-2 max-md:grid-rows-2 max-md:gap-[1.5rem]">
                            <div className="max-md:flex max-md:items-center max-md:justify-center">
                                <img
                                    className="h-[80px] invert"
                                    alt="logo"
                                    src={postgresql_logo}
                                />
                            </div>
                            <div className="max-md:flex max-md:items-center max-md:justify-center">
                                <img
                                    className="h-[80px] invert"
                                    alt="logo"
                                    src={express_logo}
                                />
                            </div>
                            <div className="max-md:flex max-md:items-center max-md:justify-center">
                                <img
                                    className="h-[80px] invert"
                                    alt="logo"
                                    src={react_logo}
                                />
                            </div>
                            <div className="max-md:flex max-md:items-center max-md:justify-center">
                                <img
                                    className="h-[80px] invert"
                                    alt="logo"
                                    src={node_logo}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
