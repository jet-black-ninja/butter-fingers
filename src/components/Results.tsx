import {motion} from "framer-motion"
import {state} from "../hooks/useEngine";
import {formatPercentage} from "../utils/helpers";
import React from "react";

interface ResultProps{
    state:State;
    errors:string;
    accuracyPercentage:number;
    total:number;
    className?:string;
}

function Results({state,errors,accuracyPercentage,total,className}:ResultProps) {
    if(state !== "finish"){
        return null;
    }

    const initial ={opacity:0}
    const animate = {opacity:1};

    return (
        <motion.ul
        initial={initial}
        animate={animate}
        className={`flex flex-col items-center text-primary-400 space-y-3 ${className}`}
        >
            <motion.li
            initial={initial}
            animate={animate}
            className="text-xl font-semibold"
            >
                Results
            </motion.li>
            <motion.li
            initial={initial}
            animate={animate}
            transition={{duration:0.3 ,delay:0.5}}
            >
                Accuracy:{formatPercentage(accuracyPercentage)}
            </motion.li>
            <motion.li
            initial={initial}
            animate={animate}
            transition={{duration:0.3 , delay:1}}
            >
                Errors: {errors}
            </motion.li>
             <motion.li
            initial={initial}
            animate={animate}
            transition={{duration:0.3, delay:1.4}}
            >
                Typed:{total}
            </motion.li>
        </motion.ul>
    );
};

export default Results;