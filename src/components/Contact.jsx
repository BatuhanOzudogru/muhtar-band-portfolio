import { CONTACT } from "../constants"
import {motion} from 'framer-motion';

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className="my-10 text-center text-4xl">Bize Ulaşın</motion.h2>
        <div className="text-center tacking-tighter">
            <p className="my-4">{CONTACT.address}</p>
            <p className="my-4">{CONTACT.email}</p>
            <a href="#" className="my-4">{CONTACT.phoneNo}</a>
        </div>
    </div>
  )
}

export default Contact