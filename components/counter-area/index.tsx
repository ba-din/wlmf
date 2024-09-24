import { FaMoneyBillWave } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { VscOrganization } from "react-icons/vsc";
import CounterAnimation from "../counter-animation";

export default function CounterArea() {
  return (
    <div className="container flex flex-col mt-10 mb-10 md:mt-20 md:mb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-36">
        <div className="flex flex-col items-center justify-center mb-[80px] mt-[80px] md:mb-0 md:mt-0">
          <FaMoneyBillWave className="text-7xl text-[#070E57]" />
          <h3 className="text-5xl uppercase mt-3 text-[#920100] font-extrabold">
            <CounterAnimation amount="100" prefix="$" postfix="M" />
          </h3>
          <h5 className="text-3xl uppercase mt-2 text-[#920100] font-extrabold">have been raised</h5>
        </div>

        <div className="flex flex-col items-center justify-center mb-[80px] md:mb-0">
          <GiReceiveMoney className="text-7xl text-[#070E57]" />
          <h3 className="text-5xl uppercase mt-3 text-[#920100] font-extrabold">
            <CounterAnimation amount="300000" />
          </h3>

          <h5 className="text-3xl uppercase mt-2 text-[#920100] font-extrabold">supporters</h5>
        </div>

        <div className="flex flex-col items-center justify-center mb-[80px] md:mb-0">
          <VscOrganization className="text-7xl text-[#070E57]" />
          <h3 className="text-5xl uppercase mt-3 text-[#920100] font-extrabold">
            <CounterAnimation postfix="+" amount="50"  />
            <span className="text-2xl uppercase"> organizations</span>
          </h3>
          <h5 className="text-3xl uppercase mt-2 text-[#920100] font-extrabold">partners with</h5>
        </div>
      </div>
    </div>

  );
}