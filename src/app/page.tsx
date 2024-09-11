import Image from "next/image";
import Header from "./components/header";
import eggDesktop from './../../public/images/desktop/image-transform.jpg'
import glassDesktop from './../../public/images/desktop/image-stand-out.jpg'
import blalok from './../../public/images/desktop/image-graphic-design.jpg'
import orange from './../../public/images/desktop/image-photography.jpg'
import emilyPic from './../../public/images/image-emily.jpg'
import thomasPic from './../../public/images/image-thomas.jpg'
import jenniePic from './../../public/images/image-jennie.jpg'

export default function Home() {
  return (
    <>
      <div className="max-w-[1440px] w-screen mx-auto h-screen">
        <Header />
        <div className="flex">
          <div className="py-32 px-36 basis-1/2">
            <h2 className="font-Fraunces font-extrabold text-5xl text-Very-dark-desaturated-blue">Transform your brand</h2>
            <p className="my-9 font-Barlow text-Dark-grayish-blue text-lg"> We are a full-service creative agency specializing in helping brands grow fast. 
            Engage your clients through compelling visuals that do most of the marketing for you.</p>
            <button className="font-Fraunces font-extrabold text-Very-dark-desaturated-blue">LEARN MORE</button>
          </div>
          <div>
            <Image src={eggDesktop} alt="Eggs"/>
          </div>
        </div>
        <div className="flex">
          <div>
            <Image src={glassDesktop} alt="glass"/>
          </div>
          <div className="py-32 px-20 basis-1/2">
            <h2 className="font-Fraunces font-extrabold text-5xl text-Very-dark-desaturated-blue">Stand out to the right audience</h2>
            <p className="my-9 font-Barlow text-Dark-grayish-blue text-lg"> Using a collaborative formula of designers, 
              researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
            <button className="font-Fraunces font-extrabold text-Very-dark-desaturated-blue">LEARN MORE</button>
          </div>
        </div>
        <div className="flex w-full">
          <div className="gBack basis-1/2">
            <div className="grid place-items-center place-content-center h-full px-40 mt-36">
              <h2 className="font-Fraunces text-Dark-desaturated-cyan font-extrabold text-2xl">Graphic Design</h2>
              <p className="font-Barlow text-Dark-desaturated-cyan mt-5 text-center"> Great design makes you memorable. We deliver artwork that underscores your brand message and 
                captures potential clients’ attention.</p>
            </div>
          </div>
          <div className="oBack basis-1/2">
            <div className="grid place-items-center place-content-center h-full px-40 mt-36">
              <h2 className="font-Fraunces text-Dark-blue font-extrabold text-2xl">Photography</h2>
              <p className="font-Barlow text-Dark-desaturated-cyan mt-5 text-center">Increase your credibility by getting the most stunning, high-quality photos that 
                improve your business image.</p>
            </div>
          </div>
        </div>
        <div className="grid place-items-center place-content-center h-full">
          <div>
            <p className="text-center">CLIENT TESTIMONIALS</p>
            <div>
              <div>
                <Image src={emilyPic} alt="Emily"/>
                <p> We put our trust in Sunnyside and they delivered, making sure our needs 
                  were met and deadlines were always hit.</p>
                <p>Emily R.</p>
                <p>Marketing Director</p>
              </div>
              <div>
                <Image src={thomasPic} alt="Thomas"/>
                <p>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s 
                  success made it a satisfying and enjoyable experience.
                </p>
                <p>Thomas S.</p>
                <p>Chief Operating Officer</p>
              </div>
              <div>
                <Image src={jenniePic} alt="Jennie"/>
                <p>Incredible end result! Our sales increased over 400% when we worked 
                  with Sunnyside. Highly recommended!
                </p>
                <p>Jennie F.</p>
                <p>Business Owner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
