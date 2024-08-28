import OurFamilyData from '@/public/js/data/OurFamilyData'
import Image from 'next/image';

export default function OurFamily() {
  return (
    <div className="container flex flex-col items-center justify-center mt-10 mb-10 md:mt-20 md:mb-20">
      <h2 className="text-3xl text-center capitalize font-bold text-[#070E57]">
        our family
      </h2>

      <h3 className="text-center text-[#920100]">
        The Unity is Our Strength
      </h3>

      <div className="w-full mt-5 grid grid-cols-3 gap-10 p-3 md:grid-cols-4 md:p-0">
        {
          OurFamilyData.it.map((person, index) => (
            <div className="grid grid-cols-1 md:grid-cols-2" key={person.name + "_" + index}>
              <div className="flex flex-col justify-center items-center md:items-end">
                <div className="relative flex justify-center items-center">
                  <div className="absolute">
                    <div className="flex w-[60px] h-[60px] justify-center items-center relative">
                      <div className="w-[60px] h-[60px] shadow-lg shadow-[#920100] bg-transparent rounded-full absolute "></div>
                      <div className="w-[60px] h-[60px] shadow-lg shadow-[#920100] bg-transparent rounded-full absolute rotate-90"></div>
                      <div className="w-[60px] h-[60px] shadow-lg shadow-[#070E57] bg-transparent rounded-full absolute rotate-180"></div>
                    </div>
                  </div>

                  <div className="bg-white flex items-center justify-center min-w-[60px] min-h-[60px] rounded-full">
                    <Image src={person.avatar} alt="" width={60} height={60} className="rounded-full" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center ms-0 mt-5 md:items-start md:ms-5 md:mt-0">
                <span className="text-md font-semibold capitalize">{person.name}</span>
                <span className="text-sm capitalize">{person.postion}</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}