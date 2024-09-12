'use client'
import bottleDesktopPic from './../../../public/images/desktop/image-gallery-milkbottles.jpg'
import orangeDesktopPic from './../../../public/images/desktop/image-gallery-orange.jpg'
import coneDesktopPic from './../../../public/images/desktop/image-gallery-cone.jpg'
import sugarDesktopPic from './../../../public/images/desktop/image-gallery-sugarcubes.jpg'
import bottleMobilePic from "./../../../public/images/mobile/image-gallery-milkbottles.jpg"
import orangeMobilePic from "./../../../public/images/mobile/image-gallery-orange.jpg"
import coneMobilePic from "./../../../public/images/mobile/image-gallery-cone.jpg"
import sugarMobilePic from "./../../../public/images/mobile/image-gallery-sugar-cubes.jpg"
import Image from "next/image";
import { useEffect, useState } from 'react'

export default function Gallery(){
    const [win , setWin] = useState(0)
    useEffect(()=>{
      setWin(window.innerWidth)
      function handleResize(){
        setWin(window.innerWidth)
      }
      window.addEventListener('resize' , handleResize)
      return ()=> {
        window.removeEventListener('resize' , handleResize)
      }
    },[])
    return (
        <div className="md:flex-row flex flex-col">
          <div className="flex">
            <div>
              <Image src={(win >=768) ? bottleDesktopPic : bottleMobilePic} alt="Bottle" className="object-contain"/>
            </div>
            <div>
              <Image src={(win >=768) ? orangeDesktopPic : orangeMobilePic} alt="Orange" className="object-contain"/>
            </div>
          </div>
          {/* <div>
          </div> */}
          <div className="flex">
            <div>
              <Image src={(win >=768) ? coneDesktopPic : coneMobilePic} alt="Cone" className="object-contain"/>
            </div>
            <div>
              <Image src={(win >=768) ? sugarDesktopPic : sugarMobilePic} alt="Sugar" className="object-contain"/>
            </div>
          </div>
          {/* <div>
          </div> */}
        </div>
    )
}