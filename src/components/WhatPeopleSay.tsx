import { motion } from "framer-motion";
import { BsStarFill } from "react-icons/bs";

export const WhatPeopleSay = () => {
  return (
    <div className="px-10 py-15 overflow-none">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex mb-5 md:mb-0">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="px-10 md:px-0 h-45 w-100 bg-gray-50/70 rounded-xl p-4 z-3"
        >
          <p> (02) </p>
          <p className="sm:text-sm text-[0.8rem]">
            "Working with A&M was a great experience. They delivered our new
            corporate headquarters on time, on budget, and with a level of
            quality that exceeded our expectations. We couldn't be happier with
            the results." <br />
            <span className="font-semi-bold">
              -Federal Ministery of Works and Housing
            </span>
          </p>
        </motion.div>
      </div>

      <div className=" flex justify-center md:my-[-8vh] ">
        <h1 className="text-7xl italic text-center">
          What Our People <br /> Have To Say...
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="px-10 md:px-0 h-45 w-100 bg-gray-50/70 rounded-xl p-4"
        >
          <p> (01) </p>
          <p className="sm:text-sm text-[0.8rem]">
            A&M Construction Services was a true partner in our recent community
            road project. Their team was professional and collaborative, and the
            new roads have made a significant, positive impact on our city. We
            highly recommend them. <br />
            <span className="font-semi-bold">-Federal Ministry of Power</span>
          </p>
        </motion.div>

        <div className="flex gap-10">
          <div>
            <h1 className="font-semibold text-4xl">1200+</h1>
            <p className="text-xs font-semibold">Reviews</p>
          </div>
          <div>
            <h1 className="font-semibold text-4xl">10,000+</h1>
            <p className="text-xs font-semibold">Happy Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};
