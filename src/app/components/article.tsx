import eggDesktop from './../../../public/images/desktop/image-transform.jpg'
import glassDesktop from './../../../public/images/desktop/image-stand-out.jpg'
import Image from "next/image";

export default function Article(){
    return (
        <>
            <div className="flex-col-reverse md:flex-row flex">
                <div className="py-32 md:px-36 md:basis-1/2 text-center">
                    <h2 className="font-Fraunces font-extrabold md:text-5xl text-4xl text-Very-dark-desaturated-blue">Transform your brand</h2>
                    <p className="my-9 font-Barlow text-Dark-grayish-blue text-lg px-5 md:px-0"> We are a full-service creative agency specializing in helping brands grow fast. 
                    Engage your clients through compelling visuals that do most of the marketing for you.</p>
                    <button className="font-Fraunces font-extrabold text-Very-dark-desaturated-blue relative  pl-2">
                        <p className='z-20'>LEARN MORE</p>
                        <p className='bg-Yellow bg-opacity-30 h-2 w-[105%] rounded-full absolute bottom-0 left-0  hover:bg-opacity-100 hover:-z-10'></p>
                    </button>
                </div>
                <div>
                    <Image src={eggDesktop} alt="Eggs"/>
                </div>
            </div>
            <div className="flex-col md:flex-row flex">
                <div>
                    <Image src={glassDesktop} alt="glass"/>
                </div>
                <div className="py-32 md:px-20 md:basis-1/2 text-center">
                    <h2 className="font-Fraunces font-extrabold md:text-5xl text-4xl text-Very-dark-desaturated-blue">Stand out to the right audience</h2>
                    <p className="my-9 font-Barlow text-Dark-grayish-blue text-lg px-6 md:px-0"> Using a collaborative formula of designers, 
                    researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
                    <button className="font-Fraunces font-extrabold text-Very-dark-desaturated-blue relative  pl-2">
                        <p className='z-20'>LEARN MORE</p>
                        <p className='bg-Soft-red bg-opacity-30 h-2 w-[105%] rounded-full absolute bottom-0 left-0  hover:bg-opacity-100 hover:-z-10'></p>
                    </button>                </div>
            </div>
            <div className="flex-col  md:flex-row flex w-full ">
                <div className="gBack md:basis-1/2">
                    <div className="grid place-items-center place-content-center h-full md:px-40 mt-36">
                    <h2 className="font-Fraunces text-Dark-desaturated-cyan font-extrabold text-2xl">Graphic Design</h2>
                    <p className="font-Barlow text-Dark-desaturated-cyan mt-5 text-center"> Great design makes you memorable. We deliver artwork that underscores your brand message and 
                        captures potential clients’ attention.</p>
                    </div>
                </div>
                <div className="oBack md:basis-1/2">
                    <div className="grid place-items-center place-content-center h-full md:px-40 mt-36">
                    <h2 className="font-Fraunces text-Dark-blue font-extrabold text-2xl">Photography</h2>
                    <p className="font-Barlow text-Dark-desaturated-cyan mt-5 text-center">Increase your credibility by getting the most stunning, high-quality photos that 
                        improve your business image.</p>
                    </div>
                </div>
            </div>
        </>
    )
}