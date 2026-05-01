import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const SkillCard = ({ icon, title,color,className }) => {
    return(
       <div className={`group relative flex md:h-[250px] h-[180px] min-w-0 w-full flex-col items-center justify-center rounded-xl border border-gray-800 bg-black p-4 text-white transition-all duration-300 hover:scale-105 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white ${className}`}>
       <FontAwesomeIcon
         icon={icon}
         color={color}
         className="mb-2 rounded-lg border border-gray-800 bg-gray-900 p-4 md:text-3xl sm:text-xl transition-all duration-300 hover:scale-105 dark:border-zinc-700 dark:bg-zinc-950"
       />
        <h2 className="md:text-xl md:font-bold sm:text-base sm:font-semibold">{title}</h2>
       </div>
    )
}
export default SkillCard;