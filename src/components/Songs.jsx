import { SONGS } from "../constants"
import {motion} from 'framer-motion';


const Songs = () => {
  return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:0.5}}
            className="my-20 text-center text-4xl">Parçalar</motion.h2>
        
            <div className="">
                {SONGS.map((song, index) => (
                    <div key={index} 
                    className="mb-9 flex flex-wrap lg:justify-center"
                    >
                        <motion.div 
                        whileInView={{opacity:1,x:0}}
                        initial={{opacity:0,x:-100}}
                        transition={{duration:1}}
                        className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-neutral-400">{song.year}</p>
                            
                            <img className="" src={song.photo} alt="" />
                        </motion.div>
                        <motion.div 
                        whileInView={{opacity:1,x:0}}
                        initial={{opacity:0,x:100}}
                        transition={{duration:1}}
                        className="w-full max-w-xl lg:w-3/4 ml-4">
                            <h6 className="mb-2 font-semibold">{song.name} - <span className="text-sm text-purple-100">{song.type}</span></h6>
                            <p>{song.lyrics}</p>
                        </motion.div>
                    </div> 
                ))}
            </div>
        </div>
  );
};

export default Songs