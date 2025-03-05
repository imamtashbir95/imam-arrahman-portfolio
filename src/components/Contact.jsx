import { motion } from "motion/react";

const Contact = () => {
    const transition = {
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
    };

    return (
        <section
            id="contact"
            className="relative z-10 m-auto max-w-[1150px] overflow-hidden p-[6rem] text-white max-md:px-[1.5rem] max-md:py-[4.5rem]"
        >
            <div className="m-auto max-w-[700px] rounded-[0.75rem]">
                <div className="relative w-full overflow-hidden">
                    {/* <div className="transform-none opacity-1"> */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={transition}
                    >
                        <h4 className="poppins-black text-center text-[96px]/[1] text-white max-md:text-[56px]/[1]">
                            Contact
                            <span className="text-[var(--brand)]">.</span>
                        </h4>
                    </motion.div>
                    {/* </div> */}
                </div>
                <div className="relative w-full overflow-hidden">
                    {/* <div className="transform-none opacity-1"> */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={transition}
                    >
                        <p className="poppins-extralight my-[1.5rem] text-center text-[18px] text-white">
                            Shoot me an email if you want to connect! You can
                            also find me on{" "}
                            <a
                                target="_blank"
                                rel="nofollow"
                                href="https://www.linkedin.com/in/imam-tashbir/"
                                className="text-[var(--brand)]"
                            >
                                Linkedin
                            </a>{" "}
                            if that's more your speed.
                        </p>
                    </motion.div>
                    {/* </div> */}
                </div>
                <div className="relative w-full overflow-hidden">
                    {/* <div className="transform-none opacity-1"> */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={transition}
                    >
                        <a href="mailto:imamtashbir95@gmail.com">
                            <div className="poppins-regular m-auto flex w-fit items-center justify-center gap-[0.5rem] text-[22px]">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 1024 1024"
                                    height="2.4rem"
                                    width="2.4rem"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 0 1 194 256h648.8a7.2 7.2 0 0 1 4.4 12.9z"></path>
                                </svg>
                                <span>imamtashbir95@gmail.com</span>
                            </div>
                        </a>
                    </motion.div>
                    {/* </div> */}
                </div>
            </div>
        </section>
    );
};

export default Contact;
