import Image, { StaticImageData } from "next/image";
import styles from "./banner.module.scss";

export default function BannerBgComponent(
  { children, bgImage, className }:
    {
      children: React.ReactNode,
      bgImage: StaticImageData,
      className?: string
    }
) {

  return (
    <div className={`bannerArea flex ${className} ${styles.bannerArea}`}
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      {children}
    </div>
  )
}