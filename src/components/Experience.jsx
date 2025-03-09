import { motion } from "motion/react";

const Experience = () => {
    const transition = {
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
    };

    return (
        <section
            id="experience"
            className="relative z-10 m-auto max-w-[1150px] overflow-hidden p-[6rem] text-white max-md:px-[1.5rem] max-md:py-[4.5rem]"
        >
            <div className="mb-[1.5rem] flex items-center gap-[1.5rem]">
                <h3>
                    {/* <div className="transform-none opacity-1"> */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={transition}
                    >
                        <span className="poppins-black text-[56px] text-white max-md:text-[36px]">
                            Experience
                            <span className="text-[var(--brand)]">.</span>
                        </span>
                    </motion.div>
                    {/* </div> */}
                </h3>
                <div className="h-[1px] w-full bg-[var(--text)] opacity-[0.3]"></div>
            </div>
            <div className="mb-[1.5rem] border-b-[1px] border-b-[var(--background-light)] px-[0.75rem] pb-[1.5rem]">
                <div className="mb-[0.75rem] flex items-center justify-between">
                    <div className="relative w-fit overflow-hidden">
                        {/* <div className="transform-none opacity-1"> */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={transition}
                        >
                            <span className="poppins-bold text-[22px] text-white">
                                PT. Al-Amin Indonesia Utama
                            </span>
                        </motion.div>
                        {/* </div> */}
                    </div>
                    <div className="relative w-fit overflow-hidden">
                        {/* <div className="transform-none opacity-1"> */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={transition}
                        >
                            <span className="poppins-regular text-[18px] text-white">
                                Jan 2024–Jan 2025
                            </span>
                        </motion.div>
                        {/* </div> */}
                    </div>
                </div>
                <div className="mb-[0.75rem] flex items-center justify-between">
                    <div className="relative w-fit overflow-hidden">
                        {/* <div className="transform-none opacity-1"> */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={transition}
                        >
                            <span className="poppins-bold text-[22px] text-[var(--brand)]">
                                Full Stack Web Developer
                            </span>
                        </motion.div>
                        {/* </div> */}
                    </div>
                    <div className="relative w-fit overflow-hidden">
                        {/* <div className="transform-none opacity-1"> */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={transition}
                        >
                            <span className="poppins-regular text-[18px] text-white">
                                Tangerang Regency, Banten
                            </span>
                        </motion.div>
                        {/* </div> */}
                    </div>
                </div>
                <div className="relative w-fit overflow-hidden">
                    {/* <div className="transform-none opacity-1"> */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={transition}
                    >
                        <p className="poppins-extralight my-[1.5rem] text-[18px] text-white">
                            I developed a comprehensive laundry POS web app
                            using React.js for the frontend and Node.js for the
                            backend, implementing reusable components, state
                            management, and API integrations for a seamless user
                            experience. I utilized HTML, CSS, JavaScript, and
                            prominent frameworks to create innovative web
                            solutions.
                        </p>
                    </motion.div>
                    {/* </div> */}
                </div>
                <div className="relative w-fit overflow-hidden">
                    {/* <div className="transform-none opacity-1"> */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={transition}
                    >
                        <div className="flex flex-wrap gap-[0.75rem]">
                            <span className="poppins-extralight rounded-full bg-[var(--background-light)] px-[0.5rem] py-[0.125rem] text-[16px] text-white">
                                PostgreSQL
                            </span>
                            <span className="poppins-extralight rounded-full bg-[var(--background-light)] px-[0.5rem] py-[0.125rem] text-[16px] text-white">
                                HTML5
                            </span>
                            <span className="poppins-extralight rounded-full bg-[var(--background-light)] px-[0.5rem] py-[0.125rem] text-[16px] text-white">
                                CSS3
                            </span>
                            <span className="poppins-extralight rounded-full bg-[var(--background-light)] px-[0.5rem] py-[0.125rem] text-[16px] text-white">
                                JavaScript ES6
                            </span>
                            <span className="poppins-extralight rounded-full bg-[var(--background-light)] px-[0.5rem] py-[0.125rem] text-[16px] text-white">
                                Node.js
                            </span>
                            <span className="poppins-extralight rounded-full bg-[var(--background-light)] px-[0.5rem] py-[0.125rem] text-[16px] text-white">
                                React.js
                            </span>
                            <span className="poppins-extralight rounded-full bg-[var(--background-light)] px-[0.5rem] py-[0.125rem] text-[16px] text-white">
                                Redux
                            </span>
                            <span className="poppins-extralight rounded-full bg-[var(--background-light)] px-[0.5rem] py-[0.125rem] text-[16px] text-white">
                                Express.js
                            </span>
                            <span className="poppins-extralight rounded-full bg-[var(--background-light)] px-[0.5rem] py-[0.125rem] text-[16px] text-white">
                                RESTful API
                            </span>
                            <span className="poppins-extralight rounded-full bg-[var(--background-light)] px-[0.5rem] py-[0.125rem] text-[16px] text-white">
                                OpenAPI (Swagger)
                            </span>
                            <span className="poppins-extralight rounded-full bg-[var(--background-light)] px-[0.5rem] py-[0.125rem] text-[16px] text-white">
                                Tailwind CSS
                            </span>
                            <span className="poppins-extralight rounded-full bg-[var(--background-light)] px-[0.5rem] py-[0.125rem] text-[16px] text-white">
                                JWT
                            </span>
                            <span className="poppins-extralight rounded-full bg-[var(--background-light)] px-[0.5rem] py-[0.125rem] text-[16px] text-white">
                                Vitest
                            </span>
                            <span className="poppins-extralight rounded-full bg-[var(--background-light)] px-[0.5rem] py-[0.125rem] text-[16px] text-white">
                                Jest
                            </span>
                        </div>
                    </motion.div>
                    {/* </div> */}
                </div>
            </div>
            <div className="mb-[1.5rem] border-b-[1px] border-b-[var(--background-light)] px-[0.75rem] pb-[1.5rem]">
                <div className="mb-[0.75rem] flex items-center justify-between">
                    <div className="relative w-fit overflow-hidden">
                        {/* <div className="transform-none opacity-1"> */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={transition}
                        >
                            <span className="poppins-bold text-[22px] text-white">
                                PT. Zona Edukasi Nusantara
                            </span>
                        </motion.div>
                        {/* </div> */}
                    </div>
                    <div className="relative w-fit overflow-hidden">
                        {/* <div className="transform-none opacity-1"> */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={transition}
                        >
                            <span className="poppins-regular text-[18px] text-white">
                                Jan 2023–Jan 2024
                            </span>
                        </motion.div>
                        {/* </div> */}
                    </div>
                </div>
                <div className="mb-[0.75rem] flex items-center justify-between">
                    <div className="relative w-fit overflow-hidden">
                        {/* <div className="transform-none opacity-1"> */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={transition}
                        >
                            <span className="poppins-bold text-[22px] text-[var(--brand)]">
                                Back-end Developer
                            </span>
                        </motion.div>
                        {/* </div> */}
                    </div>
                    <div className="relative w-fit overflow-hidden">
                        {/* <div className="transform-none opacity-1"> */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={transition}
                        >
                            <span className="poppins-regular text-[18px] text-white">
                                South Jakarta, Jakarta
                            </span>
                        </motion.div>
                        {/* </div> */}
                    </div>
                </div>
                <div className="relative w-fit overflow-hidden">
                    {/* <div className="transform-none opacity-1"> */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={transition}
                    >
                        <p className="poppins-extralight my-[1.5rem] text-[18px] text-white">
                            I provided backend development services for various
                            projects (including a learning management system
                            mobile app), leveraging expertise in API
                            development, database management, and system
                            integration. I ensured efficient, maintainable, and
                            high-quality code.
                        </p>
                    </motion.div>
                    {/* </div> */}
                </div>
                <div className="relative w-fit overflow-hidden">
                    {/* <div className="transform-none opacity-1"> */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={transition}
                    >
                        {" "}
                        <div className="flex flex-wrap gap-[0.75rem]">
                            <span className="poppins-extralight rounded-full bg-[var(--background-light)] px-[0.5rem] py-[0.125rem] text-[16px] text-white">
                                PostgreSQL
                            </span>
                            <span className="poppins-extralight rounded-full bg-[var(--background-light)] px-[0.5rem] py-[0.125rem] text-[16px] text-white">
                                Node.js
                            </span>
                            <span className="poppins-extralight rounded-full bg-[var(--background-light)] px-[0.5rem] py-[0.125rem] text-[16px] text-white">
                                React.js
                            </span>
                            <span className="poppins-extralight rounded-full bg-[var(--background-light)] px-[0.5rem] py-[0.125rem] text-[16px] text-white">
                                Express.js
                            </span>
                            <span className="poppins-extralight rounded-full bg-[var(--background-light)] px-[0.5rem] py-[0.125rem] text-[16px] text-white">
                                RESTful API
                            </span>
                            <span className="poppins-extralight rounded-full bg-[var(--background-light)] px-[0.5rem] py-[0.125rem] text-[16px] text-white">
                                OpenAPI (Swagger)
                            </span>
                            <span className="poppins-extralight rounded-full bg-[var(--background-light)] px-[0.5rem] py-[0.125rem] text-[16px] text-white">
                                JWT
                            </span>
                            <span className="poppins-extralight rounded-full bg-[var(--background-light)] px-[0.5rem] py-[0.125rem] text-[16px] text-white">
                                Jest
                            </span>
                            <span className="poppins-extralight rounded-full bg-[var(--background-light)] px-[0.5rem] py-[0.125rem] text-[16px] text-white">
                                Docker
                            </span>
                        </div>
                    </motion.div>
                    {/* </div> */}
                </div>
            </div>
            <div className="mb-[1.5rem] border-b-[1px] border-b-[var(--background-light)] px-[0.75rem] pb-[1.5rem]">
                <div className="mb-[0.75rem] flex items-center justify-between">
                    <div className="relative w-fit overflow-hidden">
                        {/* <div className="transform-none opacity-1"> */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={transition}
                        >
                            <span className="poppins-bold text-[22px] text-white">
                                PT. Imkahfa Sukses Mandiri
                            </span>
                        </motion.div>
                        {/* </div> */}
                    </div>
                    <div className="relative w-fit overflow-hidden">
                        {/* <div className="transform-none opacity-1"> */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={transition}
                        >
                            <span className="poppins-regular text-[18px] text-white">
                                Apr 2020–Jan 2023
                            </span>
                        </motion.div>
                        {/* </div> */}
                    </div>
                </div>
                <div className="mb-[0.75rem] flex items-center justify-between">
                    <div className="relative w-fit overflow-hidden">
                        {/* <div className="transform-none opacity-1"> */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={transition}
                        >
                            <span className="poppins-bold text-[22px] text-[var(--brand)]">
                                Back-end Developer
                            </span>
                        </motion.div>
                        {/* </div> */}
                    </div>
                    <div className="relative w-fit overflow-hidden">
                        {/* <div className="transform-none opacity-1"> */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={transition}
                        >
                            <span className="poppins-regular text-[18px] text-white">
                                Tangerang Regency, Banten
                            </span>
                        </motion.div>
                        {/* </div> */}
                    </div>
                </div>
                <div className="relative w-fit overflow-hidden">
                    {/* <div className="transform-none opacity-1"> */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={transition}
                    >
                        <p className="poppins-extralight my-[1.5rem] text-[18px] text-white">
                            I have been working with Node.js from 2020 to 2023
                            as a back-end programmer for TAMPAH (Tabungan
                            Sampah) mobile app, a waster bank app, where I was
                            responsible for creating dashboards, landing pages,
                            and server-side coding. My expertise lies in writing
                            clean code, debugging, fixing, and deploying Node.js
                            code.
                        </p>
                    </motion.div>
                    {/* </div> */}
                </div>
                <div className="relative w-fit overflow-hidden">
                    {/* <div className="transform-none opacity-1"> */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={transition}
                    >
                        <div className="flex flex-wrap gap-[0.75rem]">
                            <span className="poppins-extralight rounded-full bg-[var(--background-light)] px-[0.5rem] py-[0.125rem] text-[16px] text-white">
                                PostgreSQL
                            </span>
                            <span className="poppins-extralight rounded-full bg-[var(--background-light)] px-[0.5rem] py-[0.125rem] text-[16px] text-white">
                                Node.js
                            </span>
                            <span className="poppins-extralight rounded-full bg-[var(--background-light)] px-[0.5rem] py-[0.125rem] text-[16px] text-white">
                                React.js
                            </span>
                            <span className="poppins-extralight rounded-full bg-[var(--background-light)] px-[0.5rem] py-[0.125rem] text-[16px] text-white">
                                Express.js
                            </span>
                            <span className="poppins-extralight rounded-full bg-[var(--background-light)] px-[0.5rem] py-[0.125rem] text-[16px] text-white">
                                RESTful API
                            </span>
                            <span className="poppins-extralight rounded-full bg-[var(--background-light)] px-[0.5rem] py-[0.125rem] text-[16px] text-white">
                                OpenAPI (Swagger)
                            </span>
                            <span className="poppins-extralight rounded-full bg-[var(--background-light)] px-[0.5rem] py-[0.125rem] text-[16px] text-white">
                                JWT
                            </span>
                            <span className="poppins-extralight rounded-full bg-[var(--background-light)] px-[0.5rem] py-[0.125rem] text-[16px] text-white">
                                Jest
                            </span>
                            <span className="poppins-extralight rounded-full bg-[var(--background-light)] px-[0.5rem] py-[0.125rem] text-[16px] text-white">
                                Docker
                            </span>
                        </div>
                    </motion.div>
                    {/* </div> */}
                </div>
            </div>
        </section>
    );
};

export default Experience;
