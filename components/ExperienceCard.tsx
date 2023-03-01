import { motion } from 'framer-motion';
import React from 'react'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover
      object-center"
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
        <p>Started work... - Ended ...</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard