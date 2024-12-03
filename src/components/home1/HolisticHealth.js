import { Chat, Diamond, PaymentCard, Help } from "@/icon/icons";
import PlayIcon from "./PlayIcon";

const HolisticHealth = () => {

  return (
    <section
      className="relative bg-cover bg-center h-screen overflow-hidden"
      style={{
        backgroundImage: "url('/asset/home/natural-health-support.jpg')",
      }}
    >
      <div className="bg-[rgba(0,0,0,.4)] h-full w-full flex items-center justify-center text-white">
        <div className="text-center">
          <div className="flex justify-center items-center mb-12">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
              <PlayIcon />
            </div>
          </div>
          <h2 className="max-w-xl font-suranna text-[32px] md:text-[89px] font-[400] leading-[1em] text-center text-[#FFFFFF] mb-4">
            Holistic Health, 
            Ancient Wisdom
          </h2>
          <p className="max-w-xl mx-auto font-jost text-[16px] md:text-[18px] font-[400] leading-[1.4em] text-center text-[#FFFFFF]">
            Ultrices quam mattis posuere porttitor tellus rhoncus tristique.
            Primis aliquam dignissim interdum vel suscipit sodales.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 py-8">
        <div className="flex justify-around items-center text-center text-white">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Diamond fill="#99C24A" h={35} w={35} />
            <p className="font-suranna text-[25px] font-[400] leading-[1.3em] text-text">
              Trusted Company
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Chat fill="#99C24A" h={35} w={35} />
            <p className="font-suranna text-[25px] font-[400] leading-[1.3em] text-text">
              Premium Support
            </p>
          </div>
          <div className="flex items-center gap-4">
            <PaymentCard fill="#99C24A" h={35} w={35} />
            <p className="font-suranna text-[25px] font-[400] leading-[1.3em] text-text">
              Safety Payment
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Help fill="#99C24A" h={35} w={35} />
            <p className="font-suranna text-[25px] font-[400] leading-[1.3em] text-text">
              Help Center
            </p>
          </div>
        </div>
      </div>
    </section>
  );  
};

export default HolisticHealth;
