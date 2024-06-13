import { useEffect, useState } from 'react';

import ImageOne from "@/assets/image-1.jpg";
import ImageTwo from "@/assets/image-2.jpg";
import ImageThree from "@/assets/image-2.jpg";

const Showcase = () => {
    const [image, setImage] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setImage(image >= 3 ? 1 : image + 1)
        }, 5000);

        return () => clearInterval(interval);
    }, [image]);

    function scrollToSection(id: any) {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <>
            <div className='h-[80vh] relative'>
                <div className="absolute top-0 right-0 w-full h-full transition-opacity z-0">
                    <div className={`background-image ${image === 1 ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}>
                        <img
                            alt="Hero"
                            src={ImageOne}
                        />
                        <div className="overlay"></div>
                    </div>

                    <div className={`background-image ${image === 2 ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}>
                        <img
                            alt="Hero"
                            src={ImageTwo}
                        />
                        <div className="overlay"></div>
                    </div>

                    <div className={`background-image ${image === 3 ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}>
                        <img
                            alt="Hero"
                            src={ImageThree}
                        />
                        <div className="overlay"></div>
                    </div>
                </div>

                {/* <div className='pl-5 pr-5 lg:pr-0 lg:pl-0 lg:absolute lg:top-10 lg:left-20 w-[90%]'>
                    <Header />
                </div> */}

            <div className="w-[90%] lg:w-[70%] mx-auto h-full">
                <div className="z-10 relative h-full flex flex-col items-center justify-center text-white pt-36 lg:mt-0 lg:h-full lg:gap-5 px-3 lg:ml-20">
                    <h1 className="text-primary text-base lg:text-5xl leading-normal text-center">
                        Welcome to Crown hospital
                    </h1>

                    <p className='text-center'>Discover a new standard of healthcare at Crown Hospital. Your journey to better health starts here.</p>

                    <div className='flex items-center space-x-5 mt-20'>
                        <button onClick={() => scrollToSection("about")} className='bg-light rounded-md text-sm lg:text-base text-white px-5 lg:px-20 py-5 bg-[#00aeef]'>What we do</button>
                        <button onClick={() => scrollToSection("why-us")}  className='bg-dark-light rounded-md text-sm whitespace-nowrap lg:text-base px-5 lg:px-20 py-5 border border-[#00aeef] text-[#00aeef] hover:bg-light'>Why Us</button>
                    </div>
                </div>
            </div>
                
            </div>

            <style>{`
                .background-image {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                }

                .overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.7);
                    
                    z-index: 1;
                }

                .background-image img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: 0;
                }
            `}</style>
        </>
    );
}

export default Showcase;
