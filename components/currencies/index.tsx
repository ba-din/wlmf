import mmFlag from "@/public/img/flags/mm.svg";
import usFlag from "@/public/img/flags/us.svg";
import jpFlag from "@/public/img/flags/jp.svg";
import sgFlag from "@/public/img/flags/sg.svg";
import thFlag from "@/public/img/flags/th.svg";
import krFlag from "@/public/img/flags/kr.svg";
import auFlag from "@/public/img/flags/au.svg";
import euFlag from "@/public/img/flags/eu.svg";
import ukFlag from "@/public/img/flags/uk.svg";
import myFlag from "@/public/img/flags/my.svg";
import Image from "next/image";


const availableCurrencties = [
  {
    "label": "mmk",
    "flag": mmFlag,
  },
  {
    "label": "usd",
    "flag": usFlag,
  },
  {
    "label": "eur",
    "flag": euFlag,
  },
  {
    "label": "gbp",
    "flag": ukFlag,
  },
  {
    "label": "aud",
    "flag": auFlag,
  },
  {
    "label": "sgd",
    "flag": sgFlag,
  },
  {
    "label": "thb",
    "flag": thFlag,
  },
  {
    "label": "jpy",
    "flag": jpFlag,
  },
  {
    "label": "krw",
    "flag": krFlag,
  },
  {
    "label": "myr",
    "flag": myFlag,
  },
]


export default function Currencies() {
  return (
    <div className="container flex flex-col items-center justify-center mt-10 mb-10 md:mt-20 md:mb-20">
      <h2 className="text-3xl text-center font-bold text-[#070E57]">
        Available Currencies
      </h2>

      <h3 className="text-center text-[#920100]">
        The Unity is Our Strength
      </h3>

      <div className="w-full mt-5 grid grid-cols-4 gap-4 p-3 mt-5 md:grid-cols-5 md:p-0">
        {
          availableCurrencties.map((currency) => (
            <div className="w-full flex items-center justify-center mt-5 md:mt-0 leading-[50px] bg-[#F0F0F0] rounded-lg" key={currency.label}>
              <Image src={currency.flag} alt={currency.label} height={20} className="me-3" />
              <h3 className="uppercase font-semibold">{currency.label}</h3>
            </div>
          ))
        }
      </div>
    </div>
  );
}