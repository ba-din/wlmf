import Image from "next/image";
import styles from "./partners-with.module.scss";

const imgList = [
  {
    src: '/img/logo2.png',
    alt: 'wlmf',
    url: 'https://www.facebook.com/GenZRevolution2021'
  },
  {
    src: '/img/logo2.png',
    alt: 'wlmf',
    url: 'https://www.facebook.com/GenZRevolution2021'
  },
  {
    src: '/img/logo2.png',
    alt: 'wlmf',
    url: 'https://www.facebook.com/GenZRevolution2021'
  },
  {
    src: '/img/logo2.png',
    alt: 'wlmf',
    url: 'https://www.facebook.com/GenZRevolution2021'
  },
  {
    src: '/img/logo2.png',
    alt: 'wlmf',
    url: 'https://www.facebook.com/GenZRevolution2021'
  },
  {
    src: '/img/logo2.png',
    alt: 'wlmf',
    url: 'https://www.facebook.com/GenZRevolution2021'
  },
  {
    src: '/img/logo2.png',
    alt: 'wlmf',
    url: 'https://www.facebook.com/GenZRevolution2021'
  },
  {
    src: '/img/logo2.png',
    alt: 'wlmf',
    url: 'https://www.facebook.com/GenZRevolution2021'
  },
  {
    src: '/img/logo2.png',
    alt: 'wlmf',
    url: 'https://www.facebook.com/GenZRevolution2021'
  },
  {
    src: '/img/logo2.png',
    alt: 'wlmf',
    url: 'https://www.facebook.com/GenZRevolution2021'
  }
]

export default function PartnersWith() {
  return (
    <div className="container px-2 flex flex-col items-center justify-center mt-10 mb-10 md:mb-20">
      <div className='bg-[#ffffff] px-3 z-[1]'>
        <h2 className="text-3xl capitalize text-center font-bold text-[#070E57]">
          partners with
        </h2>
        <h3 className="text-center text-[#920100]">
          The Unity is Our Strength
        </h3>
      </div>

      <div className='w-full pt-15 pb-10 px-5 border-2 rounded-lg mt-[-25px] mx-1 md:mx-auto'>
        <div className="grid mt-20 grid-cols-2 gap-2 lg:grid-cols-5 md:grid-cols-3 md:gap-4">
          {imgList.map((img, index) => (
            <div className="flex flex-col items-center justify-center mb-[20px] mt-[20px] md:mb-0 md:mt-0" key={'partner-with-' + index}>
              <div className="rounded-full ">
                <a href={img?.url || 'javascript:void(0)'} target="_blank" rel="noopener noreferrer" >
                  <Image src={img.src} width={150} height={150} alt={img.alt} className={styles.partnerWithImg} />
                </a>
              </div>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}