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
                        whileInView={{opacity: 1, x: 0}} 
                        initial={{opacity: 0, x: 100}} 
                        transition={{duration: 1}} 
                        className="w-full max-w-xl lg:w-3/4 ml-4">
                        <h6 className="mb-2 font-semibold">{song.name} - <span className="text-sm text-purple-100">{song.type}</span></h6>
                        {song.links.map((link, index) => {
                  
                            if (index === 0 && link.includes("spotify")) {
                            return (
                                <a 
                                key={index} 
                                href={link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-green-500"
                                >
                                Spotify
                                </a>
                            );
                            }
                       
                            if (index === 1 && link.includes("youtube")) {
                            return (
                                <a 
                                key={index} 
                                href={link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-red-500"
                                >
                                YouTube
                                </a>
                            );
                            }
                    
                            if (index === 2 && link.includes("youtube")) {
                            return (
                                <a 
                                key={index} 
                                href={link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-red-500"
                                >
                                YouTube Akustik
                                </a>
                            );
                            }

                            return null;
                        })}
                        <p className="mt-4 text-neutral-400">{song.lyrics}</p>
                        
                        </motion.div>
                    </div> 
                ))}
            </div>
        </div>
  );
};

export default Songs