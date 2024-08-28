import CurrenciesData from '@/public/js/data/CurrenciesData'
import Image from 'next/image';

export default function Currencies() {
  return (
    <div className="container flex flex-col items-center justify-center mt-10 mb-10 md:mt-20 md:mb-20">
      <h2 className="text-3xl text-center font-bold text-[#070E57]">
        Participant Counties & Currencies
      </h2>

      <h3 className="text-center text-[#920100]">
        The Unity is Our Strength
      </h3>

      <div className="w-full mt-5 grid grid-cols-4 gap-4 p-3 mt-5 md:grid-cols-5 md:p-0">
        {
          CurrenciesData.map((currency) => (
            <div className="w-full flex items-center justify-center mt-5 md:mt-0 leading-[50px] bg-[#F0F0F0] rounded-lg" key={currency.currencyCode}>
              <Image src={currency.flag} alt={currency.currencyCode} width={25} height={20} className="me-3" />
              <h3 className="uppercase font-semibold">{currency.currencyCode}</h3>
            </div>
          ))
        }
      </div>
    </div>
  );
}