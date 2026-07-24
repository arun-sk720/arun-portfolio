import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-700 text-white px-6"
    >

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="text-cyan-300 text-lg mb-3">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Arun Moorthy
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Senior PHP Developer
            <br />
            <span className="text-cyan-300">
              Python Data Analyst
            </span>
          </h2>


          <p className="text-gray-200 text-lg leading-relaxed mb-8">
            13+ years of experience building enterprise web applications,
            financial systems, APIs, and data analytics solutions.
            Specialized in PHP, Laravel, MySQL, Python, Pandas and Power BI.
          </p>

          <div className="grid grid-cols-3 gap-4 mt-6 mb-6">

            <div>
            <h3 className="text-3xl font-bold">13+</h3>
            <p>Years</p>
            </div>

            <div>
            <h3 className="text-3xl font-bold">50+</h3>
            <p>Modules</p>
            </div>

            <div>
            <h3 className="text-3xl font-bold">20+</h3>
            <p>APIs</p>
            </div>

            </div>


          <div className="flex flex-wrap gap-4">


            <a
              href="/resume/Arun_Moorthy_Resume.pdf"
              className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:scale-105 transition"
            >
              <Download size={20}/>
              Download Resume
            </a>


            <a
              href="https://github.com/arun-sk720"
              target="_blank"
              className="border border-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-white hover:text-blue-700 transition"
            >
              <FaGithub size={20}/>
              GitHub
            </a>


            <a
              href="https://www.linkedin.com/in/arun-moorthy-a7017116/"
              target="_blank"
              className="border border-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-white hover:text-blue-700 transition"
            >
              <FaLinkedin size={20}/>
              LinkedIn
            </a>


          </div>


        </motion.div>



        {/* Right Profile Card */}
        <motion.div

          initial={{opacity:0, scale:0.8}}
          animate={{opacity:1, scale:1}}
          transition={{duration:1}}

          className="flex justify-center"

        >

          <div className="w-96 h-96 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex flex-col items-center justify-center shadow-2xl">

            <div className="text-center">

                <img
                src={profile}
                alt="Arun Moorthy"
                className="w-72 h-72 rounded-full object-cover border-4 border-white shadow-2xl"
                />

                <p className="mt-2 text-xl font-semibold">
                Full Stack Developer
                </p>
                <p className="text-cyan-300">
                PHP | Laravel | Python
                </p>

            </div>

          </div>


        </motion.div>


      </div>

    </section>
  );
}

export default Hero;