import emilyPic from './../../../public/images/image-emily.jpg'
import thomasPic from './../../../public/images/image-thomas.jpg'
import jenniePic from './../../../public/images/image-jennie.jpg'
import Image from "next/image";

export default function Client(){
    return (
        <div className="grid place-items-center place-content-center md:py-28 py-12 md:px-32">
          <div>
            <p className="text-center font-Fraunces font-black tracking-widest text-Grayish-blue text-xl">CLIENT TESTIMONIALS</p>
            <div className="my-16 md:mt-16 md:mb-0 flex-col md:flex-row flex">
              <div className="grid place-items-center">
                <Image src={emilyPic} alt="Emily" className="rounded-full" height={80}/>
                <p className="font-Barlow text-Very-dark-desaturated-blue text-center w-[80%] md:my-14 my-8"> We put our trust in Sunnyside and they delivered, making sure our needs 
                  were met and deadlines were always hit.</p>
                <p className="font-Fraunces font-black text-Very-dark-desaturated-blue">Emily R.</p>
                <p className="font-Barlow text-Grayish-blue text-sm mt-2">Marketing Director</p>
              </div>
              <div className="grid place-items-center mt-14 md:mt-0">
                <Image src={thomasPic} alt="Thomas" className="rounded-full" height={80}/>
                <p className="font-Barlow text-Very-dark-desaturated-blue text-center w-[80%] md:my-14 my-8">Sunnyside’s enthusiasm coupled with their keen interest in our brand’s 
                  success made it a satisfying and enjoyable experience.
                </p>
                <p className="font-Fraunces font-black text-Very-dark-desaturated-blue">Thomas S.</p>
                <p className="font-Barlow text-Grayish-blue text-sm mt-2">Chief Operating Officer</p>
              </div>
              <div className="grid place-items-center mt-14 md:mt-0">
                <Image src={jenniePic} alt="Jennie" className="rounded-full" height={80}/>
                <p className="font-Barlow text-Very-dark-desaturated-blue text-center w-[80%] md:my-14 my-8">Incredible end result! Our sales increased over 400% when we worked 
                  with Sunnyside. Highly recommended!
                </p>
                <p className="font-Fraunces font-black text-Very-dark-desaturated-blue">Jennie F.</p>
                <p className="font-Barlow text-Grayish-blue text-sm mt-2">Business Owner</p>
              </div>
            </div>
          </div>
        </div>
    )
}