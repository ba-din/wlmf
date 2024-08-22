import BannerBgComponent from "../../../components/banner";

import styles from "@/components/banner/banner.module.scss";

import bannerImg1 from "@/public/img/ma-ma.jpg";

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-col items-center justify-start">
        <BannerBgComponent
          bgImage={bannerImg1}
          className={`min-h-[800px] items-center justify-center ${styles.bannerOverlayWhite}`}
        >
          <div className="w-full max-w-screen-xl">
            <div className="w-full flex flex-col items-center justify-center z-[1]">
              <h1 className="text-6xl font-extrabold text-[#920100] md:text-4xl text-center">
                Coming soon...
              </h1>
            </div>
          </div>
        </BannerBgComponent>
      </div>
    </main>
  );
}
