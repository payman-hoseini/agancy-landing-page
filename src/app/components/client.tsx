import emilyPic from './../../../public/images/image-emily.jpg'
import thomasPic from './../../../public/images/image-thomas.jpg'
import jenniePic from './../../../public/images/image-jennie.jpg'
import Image from "next/image";

export default function Client(){
    return (
        <div className="grid place-items-center place-content-center py-28 px-32">
          <div>
            <p className="text-center font-Fraunces font-black tracking-widest text-Grayish-blue text-xl">CLIENT TESTIMONIALS</p>
            <div className="mt-16 flex">
              <div className="grid place-items-center">
                <Image src={emilyPic} alt="Emily" className="rounded-full" height={80}/>
                <p className="font-Barlow text-Very-dark-desaturated-blue text-center w-[80%] my-14"> We put our trust in Sunnyside and they delivered, making sure our needs 
                  were met and deadlines were always hit.</p>
                <p className="font-Fraunces font-black text-Very-dark-desaturated-blue">Emily R.</p>
                <p className="font-Barlow text-Grayish-blue text-sm mt-2">Marketing Director</p>
              </div>
              <div className="grid place-items-center">
                <Image src={thomasPic} alt="Thomas" className="rounded-full" height={80}/>
                <p className="font-Barlow text-Very-dark-desaturated-blue text-center w-[80%] my-14">Sunnyside’s enthusiasm coupled with their keen interest in our brand’s 
                  success made it a satisfying and enjoyable experience.
                </p>
                <p className="font-Fraunces font-black text-Very-dark-desaturated-blue">Thomas S.</p>
                <p className="font-Barlow text-Grayish-blue text-sm mt-2">Chief Operating Officer</p>
              </div>
              <div className="grid place-items-center">
                <Image src={jenniePic} alt="Jennie" className="rounded-full" height={80}/>
                <p className="font-Barlow text-Very-dark-desaturated-blue text-center w-[80%] my-14">Incredible end result! Our sales increased over 400% when we worked 
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