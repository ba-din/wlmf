'use client';
import { useState } from "react";
import Image, { StaticImageData } from 'next/image'

import useLightbox from "@/components/lightbox/useLightbox"
import certificates from './certificates';
import slides from '../lightbox/slides';
import styles from "./album.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'

const breakpoints = [3840, 1920, 1080, 640, 384, 256, 128];

function getSlides(imgList: string[]) {

  return imgList.map((certImg) => ({
    src: certImg,
    width: 500,
    height: 350,
    srcSet: breakpoints.map((breakpoint) => ({
      src: certImg,
      width: breakpoint,
      height: Math.round((350 / 500) * breakpoint),
    })),
  }))
}


export default function Album(
  { imgList = [] }:
    Readonly<{ imgList: string[] }>
) {
  const { openLightbox, renderLightbox } = useLightbox();
  const [imgSlides, setImgSlides] = useState(slides);


  function reorderImg(index: number = 0) {
    let reorderSlides = [];
    for (let i = 0; i < certificates.length; i++) {
      if (certificates.length <= (i + index)) {
        reorderSlides.push(certificates[(i + index) - certificates.length])
      } else {
        reorderSlides.push(certificates[i + index])
      }
    }
    setImgSlides(getSlides(reorderSlides));
    openLightbox();
  }

  return (
    <>
      {
        imgList.map((img, index) => (
          <div key={index + index} className={`flex flex-col items-center justify-start ${styles.certificateImg}`} onClick={() => reorderImg(index)}>
            <Image src={img} alt=""
              width={500}
              height={350}
              className="p-5 md:p-0"
            />

            <div className={styles.certificateOverlay}>
              <div className={styles.certificateOverlayIcon} title="User Profile">
                <FontAwesomeIcon icon={faEye} />
              </div>
            </div>
          </div>

        ))
      }

      {renderLightbox({ slides: imgSlides })}
    </>
  );
}