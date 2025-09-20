import { motion } from "framer-motion";
import ArtF from "../assets/images/hub-cypress.webp";
import Midnight from "../assets/images/rendering.jpg";

export const OvulanIcon = () => {
  return (
    <div className="min-h-[100vh] px-5 sm:px-10 py-10 md:py-18 flex flex-col relative overflow-none">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          src={ArtF}
          alt=""
          className=" size-[100%] md:size-[50%] rounded"
        />

        <motion.div
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="flex h-fit lg:ml-10"
        >
          <img
            src={Midnight}
            alt="Midnight"
            className=" w-40 h-40 rounded-md mr-5 "
          />

          <div className="w-70 content-center ">
            <h1 className="font-semibold text-xl">
              The Midtown Commercial Hub
            </h1>
            <p className="text-[0.8rem] sm:text-[1rem]">
              This complex project showcases our versatility in commercial
              construction. Featuring a mix of retail and office spaces, the
              Midtown Hub was completed with a focus on structural integrity and
              cutting-edge design, making it a cornerstone for business in the
              area.
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-[100%] md:w-140 bg-gray-200 rounded-md md:absolute bottom-12 right-35 px-5 py-7 "
      >
        <h1 className="font-semibold text-2xl sm:text-4xl mb-2">
          The Icon of Our Craftsmanship
        </h1>
        <p className="text-[0.8rem] sm:text-[1rem]">
          The Midtown Commercial Hub stands as our most sought-after project,
          admired by clients and professionals alike. With its deep blue glass
          facade, precise structural work, and bold yet refined presence, it has
          become a symbol of prestige for those who demand both style and
          performance from their buildings.
        </p>
      </motion.div>
    </div>
  );
};
