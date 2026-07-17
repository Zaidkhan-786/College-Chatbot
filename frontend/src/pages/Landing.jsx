import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Landing() {

    const navigate = useNavigate();

    return (

        <div className="min-h-screen bg-slate-950 text-white flex justify-center items-center">

            <motion.div

                initial={{opacity:0,y:30}}

                animate={{opacity:1,y:0}}

                transition={{duration:0.7}}

                className="max-w-3xl text-center px-6"

            >

                <h1 className="text-6xl font-bold mb-6">

                    IT Department

                    <span className="text-cyan-400">

                        {" "}AI Assistant

                    </span>

                </h1>

                <p className="text-xl text-gray-300 mb-10">

                    Ask anything about the Information Technology Department.

                    Faculty • Curriculum • Placements • Regulations • Labs • Research

                </p>

                <button

                    onClick={()=>navigate("/login")}

                    className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl text-xl transition"

                >

                    Get Started

                </button>

            </motion.div>

        </div>

    );

}

export default Landing;