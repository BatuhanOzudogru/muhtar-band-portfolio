import CarouselAlbum from "./CarouselAlbum";  

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center">
        About <span className="text-neutral-500">Us</span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          
            <CarouselAlbum />
          
        </div>
      </div>
    </div>
  );
};

export default About;
