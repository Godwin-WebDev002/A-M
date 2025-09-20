import { motion } from "framer-motion";
import ArtS from "../assets/images/sec.jpg";
import ArtP from "../assets/images/BOTH.jfif";

export const TimeArt = () => {
  return (
    <div className="bg-black text-white flex flex-wrap justify-evenly gap-x-2 gap-y-10 py-15 px-10 overflow-none ">
      <motion.img
        initial={{ opacity: 0, rotate: 0 }}
        whileInView={{ opacity: 1, rotate: -10 }}
        transition={{ duration: 1, delay: 0.3 }}
        src={ArtS}
        alt="ArtF"
        className=" size-50 md:size-70 rounded-md "
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="w-110 flex flex-col items-center px-10 md:px-0 "
      >
        <h1 className=" text-4xl sm:text-5xl mb-3 text-center">
          Building Your Vision <br /> With Excellence.
        </h1>
        <p className=" text-[0.8rem] md:text-[1rem] text-center">
          At A&M Construction Services, we believe a building is more than just
          a structure—it's a reflection of your vision, a commitment to quality,
          and a space where communities thrive. We craft every project with
          meticulous attention to detail, combining proven construction methods
          with modern innovations. From concept to completion, our work embodies
          the highest standards of the industry.
        </p>

        <button className=" mt-8 px-5 py-2 bg-white text-black font-semibold rounded cursor-pointer hover:bg-gray-100">
          Request a Quote
        </button>
      </motion.div>

      <motion.img
        initial={{ opacity: 0, rotate: 10 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        src={ArtP}
        alt="ArtS"
        className="size-50 md:size-70 rounded-md"
      />
    </div>
  );
};
