import { MEMBERS } from '../constants';
import { motion } from 'framer-motion';

const Members = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        Muhtar <span className="text-neutral-500">Adayları</span>
      </h2>
      <div className="flex flex-wrap justify-center">
        {MEMBERS.map((member, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="relative group w-full sm:w-1/2 lg:w-1/5 p-2"
          >
            <div className="relative flex justify-center">
              <img
                src={member.photo}
                alt={member.name}
                className="w-1/3 sm:w-1/3 lg:w-full object-cover transition duration-500 ease-in-out sm:group-hover:scale-90"
              />
              <div className="text-white text-center p-4 sm:absolute sm:inset-0 sm:bg-black sm:bg-opacity-50 sm:opacity-0 sm:group-hover:opacity-100 sm:flex sm:items-center sm:justify-center">
                <div className="mt-4 sm:mt-0 sm:p-4">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm italic">{member.role}</p>
                  <p className="text-sm mt-2">{member.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Members;
