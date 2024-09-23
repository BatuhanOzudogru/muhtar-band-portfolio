import { CONCERTS } from "../constants"

const Concerts = () => {
  return (
    <div className="border-b boder neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">Concerts</h2>
        <div>
            {CONCERTS.map((concert, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4">
                            <img src={concert.image}
                            width={150}
                            height={150}
                            alt={concert.title} 
                            />
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibolt">{concert.title}</h6>
                        <p className="mb-2 text-neutral-400">{concert.description}</p>
                        
                        </div>
                    </div>
                   
                ))}
        </div>
    </div>
  );
};

export default Concerts