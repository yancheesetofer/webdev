import { motion } from 'framer-motion';
import React from 'react'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article>
      <motion.img
      className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover
      object-center'
        src="https://skystarventures.com/wp-content/uploads/2018/06/Agile-Technica.png"
        alt="Agile Technica"
      />
    </article>
  );
}

export default ExperienceCard