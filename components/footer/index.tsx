import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterLinkGroup,
} from "flowbite-react";
import Image from "next/image";
import { FC } from "react";
import { FaFacebook, FaTelegram, FaYoutube } from "react-icons/fa";
import { HiChevronRight, HiMapPin } from "react-icons/hi2";
import { TbWorldWww } from "react-icons/tb";

export const HomeFooter: FC<Record<string, never>> = function () {
  return (
    <Footer container className="bg-[#070E57] text-white px-16 pt-16">
      <div className="w-full">
        <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-4 md:gap-12">
          <div className="flex flex-col gap-4">
            <Footer.Brand href="/" src="/img/logo1.webp" className="p-0 m-0">
              WLMF
            </Footer.Brand>
            <p>
              Eum libero delectus numquam atque, vel inventore a repellendus
              accusantium laudantium voluptatem quia at? Eos velit vitae, autem
              esse deleniti ratione earum?
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-semibold">Urgent causes</h1>
            <div className="flex flex-col gap-4">
              <div className="flex items-center space-x-2">
                <Image
                  src={"/img/logo1.webp"}
                  alt="WLMF logo"
                  width="32"
                  height="32"
                  className="rounded-md"
                />
                <h2>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
              </div>
              <FooterDivider className="lg:my-2 border-[#4f4b6b]" />
              <div className="flex items-center space-x-2">
                <Image
                  src={"/img/logo1.webp"}
                  alt="WLMF logo"
                  width="32"
                  height="32"
                />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-semibold">Quick links</h1>
            <FooterLinkGroup className="text-white">
              <Footer.Link href="#mission" className="mb-2">
                <HiChevronRight className="w-5 h-5 inline" />
                Mission
              </Footer.Link>
              <FooterDivider className="lg:mt-0 lg:mb-2 border-[#4f4b6b]" />
              <Footer.Link href="#project" className="mb-2">
                <HiChevronRight className="w-5 h-5 inline" />
                Projects
              </Footer.Link>
              <FooterDivider className="lg:mt-0 lg:mb-2 border-[#4f4b6b]" />
              <Footer.Link href="#partner" className="mb-2">
                <HiChevronRight className="w-5 h-5 inline" />
                Partners
              </Footer.Link>
              <FooterDivider className="lg:mt-0 lg:mb-2 border-[#4f4b6b]" />
              <Footer.Link href="#certificate" className="mb-2">
                <HiChevronRight className="w-5 h-5 inline" />
                Certificates
              </Footer.Link>
            </FooterLinkGroup>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-semibold">Contact</h1>
            <FooterLinkGroup className="text-white">
              <Footer.Link href="" className="mb-2">
                <TbWorldWww className="w-5 h-5 inline mr-2" />
                https://www.wlmf.org
              </Footer.Link>
              <Footer.Link href="/" className="mb-2">
                <HiMapPin className="w-5 h-5 inline mr-2" />
                Mandalay, Myanmar
              </Footer.Link>
              <FooterDivider className="lg:mt-0 lg:mb-2 border-[#4f4b6b]" />
              <div className="flex">
                <Footer.Link href="https://www.facebook.com/GenZRevolution2021">
                  <FaFacebook className="w-5 h-5 inline mr-2" />
                </Footer.Link>
                <Footer.Link href="https://www.youtube.com/@wesupportmm_wlmf_org">
                  <FaYoutube className="w-5 h-5 inline mr-2" />
                </Footer.Link>
                <Footer.Link href="https://www.facebook.com/dancingwithladies">
                  <FaFacebook className="w-5 h-5 inline mr-2" />
                </Footer.Link>
                <Footer.Link href="https://t.me/dancingwithladies">
                  <FaTelegram className="w-5 h-5 inline mr-2" />
                </Footer.Link>
                <Footer.Link href="https://www.facebook.com/WeSupportMM/">
                  <FaFacebook className="w-5 h-5 inline mr-2" />
                </Footer.Link>
              </div>
            </FooterLinkGroup>
          </div>
        </div>
        <FooterDivider className="lg:my-4 border-[#4f4b6b]" />
        <div className="m-auto text-center">
          <FooterCopyright by="We Love Myanmar Family" />
        </div>
      </div>
    </Footer>
  );
};
