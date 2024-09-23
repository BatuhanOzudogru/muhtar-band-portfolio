import { CONCERTS } from "../constants"
import {motion} from 'framer-motion';

const Concerts = () => {
  return (
    <div className="border-b boder neutral-900 pb-4">
        <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className="my-20 text-center text-4xl">Neredeydik? </motion.h2>
        <div>
            {CONCERTS.map((concert, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div 
                        whileInView={{opacity:1,x:0}}
                        initial={{opacity:0,x:-100}}
                        transition={{duration:1}}
                        className="w-full lg:w-1/4">
                            <img src={concert.image}
                            width={150}
                            height={150}
                            alt={concert.title} 
                            />
                        </motion.div>
                        <motion.div 
                        whileInView={{opacity:1,x:0}}
                        initial={{opacity:0,x:100}}
                        transition={{duration:1}}
                        className="w-full max-w-xl lg:w-3/4">
                          <h6 className="mb-2 font-semibolt">{concert.title}</h6>
                          <p className="mb-2 text-neutral-400">{concert.description}</p>
                        
                        </motion.div>
                    </div>
                   
                ))}
        </div>
    </div>
  );
};

export default Concerts