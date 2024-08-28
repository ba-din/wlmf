import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterLinkGroup,
} from "flowbite-react";
import { FC } from "react";
import { FaFacebook, FaTelegram, FaYoutube } from "react-icons/fa";
import { HiChevronRight, HiMapPin, HiAtSymbol } from "react-icons/hi2";
import { TbWorldWww } from "react-icons/tb";

export const HomeFooter: FC<Record<string, never>> = function () {
  return (
    <Footer container className="bg-[#070E57] text-white px-16 pt-16">
      <div className="w-full">
        <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-4 md:gap-12">
          <div className="flex flex-col gap-4 mb-10 md:col-span-2">
            <Footer.Brand href="/" src="/img/logo2.png" className="p-0 m-0">
              WLMF
            </Footer.Brand>
            <p>
              Eum libero delectus numquam atque, vel inventore a repellendus
              accusantium laudantium voluptatem quia at? Eos velit vitae, autem
              esse deleniti ratione earum?
            </p>
          </div>
          <div className="flex flex-col mb-10 gap-4">
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
          <div className="flex flex-col mb-10  gap-4">
            <h1 className="text-xl font-semibold">Contact</h1>
            <FooterLinkGroup className="text-white">
              <Footer.Link href="mailto:info@wlmf.info" className="mb-2">
                <HiAtSymbol className="w-5 h-5 inline mr-2" />
                info@wlmf.info
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
        <div className="flex justify-between ">
          <span className="">© We Love Myanmar Family
          </span>

          <div className="text-right">
            <ul className="flex flex-wrap mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                <a href="#" className="hover:underline pe-2 md:pe-4">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:underline pe-2 md:pe-4">Terms and Condition</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </Footer>
  );
};
