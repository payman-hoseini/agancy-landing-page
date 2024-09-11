import bottlePic from './../../../public/images/desktop/image-gallery-milkbottles.jpg'
import orangePic from './../../../public/images/desktop/image-gallery-orange.jpg'
import conePic from './../../../public/images/desktop/image-gallery-cone.jpg'
import sugarPic from './../../../public/images/desktop/image-gallery-sugarcubes.jpg'
import Image from "next/image";

export default function Gallery(){
    return (
        <div className="flex">
          <div>
            <Image src={bottlePic} alt="Bottle"/>
          </div>
          <div>
            <Image src={orangePic} alt="Orange"/>
          </div>
          <div>
            <Image src={conePic} alt="Cone"/>
          </div>
          <div>
            <Image src={sugarPic} alt="Sugar"/>
          </div>
        </div>
    )
}