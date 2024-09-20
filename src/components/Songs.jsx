import { SONGS } from "../constants"

const Songs = () => {
  return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">Parçalar</h2>
        
            <div className="">
                {SONGS.map((song, index) => (
                    <div key={index} 
                    className="mb-9 flex flex-wrap lg:justify-center"
                    >
                        <div className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-neutral-400">{song.year}</p>
                            
                            <img className="" src={song.photo} alt="" />
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4 ml-4">
                            <h6 className="mb-2 font-semibold">{song.name} - <span className="text-sm text-purple-100">{song.type}</span></h6>
                            <p>{song.lyrics}</p>
                        </div>
                    </div> 
                ))}
            </div>
        </div>
  );
};

export default Songs