import { motion } from "framer-motion";
// import Aureum from "../assets/images/Estate.jpg";
// import MidTown from "../assets/images/Hub.jpg";
// import Express from "../assets/images/Express.jfif";

export const TopCollection = () => {
  return (
    <div className="flex flex-col items-center py-10 px-5 w-screen overflow-x-auto ">
      <h1 className="text-xl font-bold border-b-2 pb-1">Top Projects</h1>

      <div className="mt-15 flex flex-wrap justify-evenly gap-x-5 gap-y-8  ">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-90 px-10 sm:px-0 flex flex-col items-center bg-gray-300 rounded-lg"
        >
          <h1 className="font-bold mt-5 ">Project management</h1>
          <p className=" text-[0.8rem] md:text-[1rem] text-center">
            -Technical audit <br /> -Project management services
          </p>
        </motion.div>

        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-90 px-10 sm:px-0 flex flex-col items-center  bg-gray-300 rounded-lg"
        >
          <h1 className="font-bold mt-5 ">Project management</h1>
          <p className=" text-[0.8rem] md:text-[1rem] text-center">
            -Flexible and rigid pavement <br /> -Hydraulic structures (i.e
            drainage, culvert, and bridges) <br /> -Estate and rural road
            construction
          </p>
        </motion.div>

        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-90 px-10 sm:px-0 flex flex-col items-center bg-gray-300 rounded-lg"
        >
          <h1 className="font-bold mt-5 ">
            Building and Construction Services
          </h1>
          <p className=" text-[0.8rem] md:text-[1rem] text-center">
            -Design and deployment of civil construction projects <br />{" "}
            -Building services <br /> -Educational infrastructure deployment{" "}
            <br /> -Sport facilities deployment (I.e stadia)
          </p>
        </motion.div>

        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-90 px-10 sm:px-0 flex flex-col items-center bg-gray-300 rounded-lg"
        >
          <h1 className="font-bold mt-5 ">Rural/urban electrification</h1>
          <p className=" text-[0.8rem] md:text-[1rem] text-center">
            -Transformer installation and electrification services <br />{" "}
            -Building electrification services
          </p>
        </motion.div>

        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-90 px-10 sm:px-0 py-5 flex flex-col items-center bg-gray-300 rounded-lg"
        >
          <h1 className="font-bold">Alternative power supply</h1>
          <p className=" text-[0.8rem] md:text-[1rem] text-center">
            -Solar power installation <br /> -Solar powered min-grid
            installation, off grid/on- grid solar system design
          </p>
        </motion.div>
      </div>
    </div>
  );
};
