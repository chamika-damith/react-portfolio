import profilePic from '../assets/profilePicnew.jpg';
import { HERO_CONTENT } from '../assets/constants';

function Hero() {
    return (
        <div className="pb-4 lg:mb-36">
            <div className="flex flex-wrap lg:flex-row-reverse">
            <div className="w-full lg:w-1/2">
                    <div className='flex justify-center lg:justify-end lg:p-8 mr-5'>
                        <img src={profilePic} alt="chamika damith" className="border border-stone-900 rounded-3xl  transition-all duration-300 
                        cursor-pointer filter grayscale hover:grayscale-0
                        " width={400} height={550} />
                    </div>
                </div>

                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start mt-10 lg:mt-0'>
                        <h2 className='pb-3 text-4xl tracking-tighter lg:text-8xl'>
                            Chamika Damith
                        </h2>
                        <span className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight'>
                            Full Stack Developer
                        </span>
                        <p className='my-2 max-w-2xl py-6 text-xl leading-relaxed tracking-tight'>
                            {HERO_CONTENT}
                        </p>
                        <a href='/resume.pdf' target='_blank' rel='noopener noreferrer' download className='bg-white 
                        rounded-full p-4 text-sm text-stone-800 mb-10 font-bold'>
                            Download Resume
                        </a>
                    </div>
                </div>
               
            </div>
        </div>
    );
}

export default Hero;
