import { motion } from "framer-motion";
import { styles } from "../styles";
import andres from "../assets/tech/buendia.svg";

const Hero = () => {
    return (
        <section className={`relative w-full h-screen mx-auto`}>
            <div
                className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
            >
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
                    <div className="w-1 sm:h-80 h-40 violet-gradient" />
                </div>

                <div style={{ zIndex: 1 }}>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Soy{" "}
                        <motion.span
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-[#915EFF]"
                        >
                            Andres Buendia
                        </motion.span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        Ingeniero de Software | Desarrollador Senior Front End
                    </p>
                    <div className="flex sm:flex-row mt-7">
                        <a
                            href="https://github.com/andresbuendia2020"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mb-4 sm:mb-0 sm:mr-4 green-pink-gradient p-[2px] rounded-[10px] shadow-card"
                        >
                            <button className="bg-[#151131] text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-95">
                                GitHub
                            </button>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/andres-buendia-41b127219/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mb-4 sm:mb-0 sm:mr-4 green-pink-gradient p-[2px] rounded-[10px] shadow-card"
                        >
                            <button className="bg-[#151131] text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-95">
                                LinkedIn
                            </button>
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1Y2svSTdQywOM-ZHPqVe80KNJfKH6L73o/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mb-4 sm:mb-0 sm:mr-4 green-pink-gradient p-[2px] rounded-[10px] shadow-card"
                        >
                            <button className="bg-[#151131] text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-95">
                                CV
                            </button>
                        </a>
                        <a
                            href="https://drive.google.com/drive/folders/1nH7DmFZTLuUAc06kErankX9p-pNvNUGr?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mb-4 sm:mb-0 sm:mr-4 green-pink-gradient p-[2px] rounded-[10px] shadow-card"
                        >
                            <button className="bg-[#151131] text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-95">
                                Cert Lab...
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            {/* <ComputersCanvas /> */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-[35%] h-auto">
                <img
                    src={andres}
                    alt="Andres Buendia"
                    className="w-full h-auto object-cover"
                />
            </div>
        </section>
    );
};

export default Hero;
