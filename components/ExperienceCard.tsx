import { motion } from "framer-motion";
import React from "react";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-100 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://cdn.techinasia.com/data/images/jJf2w5xYGrbAC89aZd1SLhLFUOfSmDzHqYDK80ef.png"
        alt="Agile Technica"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Software Developer Intern</h4>
        <p className="font-bold text-2xl mt-1">Agile Technica</p>
        <div className="flex space-x-2 my-2">
          {/* Tech used */}
          <img
            className="w-10 h-10 rounded-full"
            src="https://www.soladrive.com/wp-content/uploads/2021/02/erpnext-logo.png"
            alt="Erpnext"
          />
          {/* Tech used */}
          {/* Tech used */}
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work... - Ended ...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            summary pointssummary pointssummary pointssummary pointssummary pointssummary pointssummary pointssummary points
          </li>
          <li>
            summary pointssummary pointssummary pointssummary pointssummary pointssummary pointssummary pointssummary points
          </li>
          <li>
            summary pointssummary pointssummary pointssummary pointssummary pointssummary pointssummary pointssummary points
          </li>
          <li>
            summary pointssummary pointssummary pointssummary pointssummary pointssummary pointssummary pointssummary points
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
