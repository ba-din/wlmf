import Image from "next/image";
import BannerBgComponent from "../../components/banner";
import CurrentProjects from "@/components/current-projects";

import logo1 from "@/public/img/logo2.png";
import styles from "@/components/banner/banner.module.scss";

import bannerImg1 from "@/public/img/ma-ma.jpg";
import bannerImg2 from "@/public/img/banner2.jpg";
import wavinFlagImg from "@/public/img/rasing-flag.png";

import CounterArea from "@/components/counter-area/index";
import PartnersWith from "@/components/partners-with";
import Currencies from "@/components/currencies";
import OurFamily from "@/components/our-family";
import PreviousProjects from "@/components/previous-project";

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-col items-center justify-start">
        <BannerBgComponent
          bgImage={bannerImg1}
          className={`min-h-[800px] items-center justify-center ${styles.bannerOverlayWhite}`}
        >
          <div className="w-full max-w-screen-xl">
            <div className="grid grid-cols-1 place-content-center min-h-96 gap-4 md:grid-cols-2">
              <div className="w-full flex items-center justify-center md:justify-end">
                <div className="relative flex justify-center items-center">
                  <div className="absolute">
                    <div className="flex w-[300px] h-[300px] justify-center items-center relative">
                      <div className="w-[300px] h-[300px] shadow-lg shadow-[#920100] bg-transparent rounded-full absolute "></div>
                      <div className="w-[300px] h-[300px] shadow-lg shadow-[#920100] bg-transparent rounded-full absolute rotate-90"></div>
                      <div className="w-[300px] h-[300px] shadow-lg shadow-[#070E57] bg-transparent rounded-full absolute rotate-180"></div>
                    </div>
                  </div>

                  <div className="bg-white flex items-center justify-center min-w-[300px] min-h-[300px] rounded-full">
                    <Image src={logo1} alt="WLMF logo" width={300} />
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col items-center justify-center z-[1] md:items-start">
                <h2
                  className="text-2xl font-extrabold text-[#070E57] md:text-4xl"
                  style={{ lineHeight: "2em" }}
                >
                  We Love Myanmar Family
                </h2>
                <h2
                  className="text-2xl font-extrabold text-[#070E57] md:text-4xl"
                  style={{ lineHeight: "2em" }}
                >
                  Spring Revolution 2021
                </h2>

                <p className="font-extrabold rounded-full text-white p-[15px] bg-[#920100]">
                  ပြည်သူ့အရေးတော်ပုံ မုချအောင်ရမည် _၊၊၊_
                </p>
              </div>
            </div>
          </div>
        </BannerBgComponent>
      </div>

      <section
        id="mission"
        className="flex flex-col items-center justify-center bg-[#FFFFFF]"
      >
        <div className="container flex flex-col mt-10 mb-10 md:mt-20 md:mb-20">
          <h2 className="text-3xl text-center font-bold text-[#070E57]">
            Our Mission
          </h2>
          <h3 className="text-center text-[#920100]">
            The Unity is Our Strength
          </h3>

          <div className="flex flex-col items-center justify-center mt-10">
            <Image
              src={wavinFlagImg}
              alt="waving flag"
              width={350}
              priority={true}
            />
            <p className="mt-5 text-justify ps-5 pe-5 text-lg leading-10 md:text-center">
              Dedicated to making a positive impact in our community and beyond.
              Our mission is to support those in need, raise awareness for
              important causes, and inspire others to join us in creating a
              brighter future for all. Through our fundraising efforts, we aim
              to make a difference in the lives of individuals and families
              facing challenges, and to contribute to building a more
              compassionate and caring world. Together, we can achieve great
              things and bring hope to those who need it most. Join us in
              spreading kindness and making a difference today!
            </p>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center justify-start bg-[#F5F5F5]">
        <CounterArea />
      </div>

      <section
        id="project"
        className="flex flex-col items-center justify-start"
      >
        <BannerBgComponent
          bgImage={bannerImg2}
          className={`min-h-[800px] flex flex-col items-center justify-start ${styles.bannerOverlayWhite}`}
        >
          <div className="container flex flex-col mt-10 mb-10 md:mt-20 md:mb-20 z-[1]">
            <div className="w-full flex flex-col items-center justify-start ">
              <h2 className="text-3xl text-center font-bold text-[#070E57]">
                Current Projects
              </h2>
              <h3 className="text-center text-[#920100]">
                The Unity is Our Strength
              </h3>
            </div>

            <CurrentProjects />
          </div>
        </BannerBgComponent>
      </section>

      <section
        id="currencies"
        className="flex flex-col items-center justify-start bg-[#FFFFFF]"
      >
        <Currencies />
      </section>


      <section
        id="currencies"
        className="flex flex-col items-center justify-start bg-[#F5F5F5]"
      >
        <PreviousProjects />
      </section>


      <section
        id="currencies"
        className="flex flex-col items-center justify-start bg-[#FFFFFF]"
      >
        <OurFamily />
      </section>

      <section
        id="partner"
        className="flex flex-col items-center justify-center bg-[#FFFFFF]"
      >
        <PartnersWith />
      </section>
    </main>
  );
}
