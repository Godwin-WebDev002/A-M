import { motion } from "framer-motion";

export const Ethos = () => {
  return (
    <div className=" bg-black text-white flex flex-col items-center py-20 px-5 overflow-none">
      <h1 className="text-xl font-bold border-b-2 pb-1">Our Corporate Ethos</h1>

      <div className="mt-10 flex flex-wrap justify-evenly gap-10">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-80 px-10 sm:px-0 flex flex-col items-center"
        >
          <h1 className="font-bold mt-5 ">Philosophy</h1>
          <p className=" text-[0.8rem] md:text-[1rem] text-center">
            At A&M, we build with integrity and purpose. We focus on creating
            relationships and trust, with every project reflecting our
            commitment to quality, safety, and client satisfaction.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-80 px-10 sm:px-0 flex flex-col items-center"
        >
          <h1 className="font-bold mt-5 ">Vision</h1>
          <p className=" text-[0.8rem] md:text-[1rem] text-center">
            To be the most trusted construction company in the industry, known
            for our commitment to quality, innovation, and sustainable
            practices. We aim to shape communities and leave a lasting, positive
            impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-80 px-10 sm:px-0 flex flex-col items-center"
        >
          <h1 className="font-bold mt-5 ">Mission</h1>
          <p className=" text-[0.8rem] md:text-[1rem] text-center">
            Mission Our mission is to provide superior construction services,
            delivering projects on time and within budget while maintaining the
            highest safety standards. By working together, we aim to exceed
            expectations and build a better future.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
