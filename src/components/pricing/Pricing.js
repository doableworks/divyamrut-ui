import { BambooTree, Flower, Leaf, StackLayers } from "@/icon/icons";
import Image from "next/image";
import { features } from "process";

const pricingPlanData = [
  {
    id: 1,
    image: "leaf",
    type: "Basic Plan",
    type_desc: "Nascetur dui diam urna pharetra nec habitant vulputate",
    price: "$49",
    currency: "dollar",
    backgroundColor: "#F9F3EB",
    features: [
      "Fames consequat integer",
      "Euismod scelerisque",
      "Posuere proin",
      "Rhoncus phasellus",
      "Aliquet volutpat",
    ],
  },
  {
    id: 2,
    type: "Premium Plan",
    image: "stack",
    type_desc: "Nascetur dui diam urna pharetra nec habitant vulputate",
    price: "$79",
    currency: "dollar",
    backgroundColor: "#F9F3EB",
    features: [
      "Fames consequat integer",
      "Euismod scelerisque",
      "Posuere proin",
      "Rhoncus phasellus",
      "Aliquet volutpat",
    ],
  },
  {
    id: 3,
    type: "Expert Plan",
    image: "flower",
    type_desc: "Nascetur dui diam urna pharetra nec habitant vulputate",
    price: "$149",
    currency: "dollar",
    backgroundColor: "#6E9039",
    features: [
      "Fames consequat integer",
      "Euismod scelerisque",
      "Posuere proin",
      "Rhoncus phasellus",
      "Aliquet volutpat",
    ],
  },
  {
    id: 4,
    type: "Enterprise Plan",
    type_desc: "Nascetur dui diam urna pharetra nec habitant vulputate",
    price: "$199",
    currency: "dollar",
    image: "bamboo",
    backgroundColor: "#F9F3EB",
    features: [
      "Fames consequat integer",
      "Euismod scelerisque",
      "Posuere proin",
      "Rhoncus phasellus",
      "Aliquet volutpat",
    ],
  },
];

const PricingPlans = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 justify-center items-center gap-6 py-12">
      {/* Basic Plan */}
      {pricingPlanData.map((item, index) => (
        <div
          className="p-6 border relative flex items-center flex-col pt-[8%]"
          style={{
            backgroundColor: item.backgroundColor,
          }}
          key={item.id}
        >
          <div
            className="absolute top-[-7%] z-10 rounded-full mb-4 p-6 flex justify-center"
            style={{
              backgroundColor: item.backgroundColor,
            }}
          >
            {item.image == "leaf" ? (
              <Leaf h={30} w={30} fill={"#99C24A"} />
            ) : item.image == "stack" ? (
              <StackLayers h={30} w={30} fill={"#99C24A"} />
            ) : item.image == "flower" ? (
              <Flower h={30} w={30} fill={"#FFFFFF"} />
            ) : item.image == "bamboo" ? (
              <BambooTree h={30} w={30} fill={"#99C24A"} />
            ) : null}
          </div>
          <h2
            className={`relative z-20 font-suranna text-[28px] font-[400] leading-[1.4em] text-center mb-2 ${
              index == 2 ? "text-text" : "text-secondary"
            }`}
          >
            {item.type}
          </h2>
          <p
            className={`relative z-20 font-jost text-[14px] md:text-[18px] font-[400] leading-[1.4em] text-center mb-4 ${
              index == 2 ? "text-text" : "text-primary"
            }`}
          >
            {item.type_desc}
          </p>

          <div className="w-full border-t-[3px] border-secondary my-5" />

          <p
            className={`font-jost text-[40px] md:text-[50px] font-[600] leading-[1.3em] text-center  my-1 ${
              index == 2 ? "text-text" : "text-a2c0d56"
            }`}
          >
            {item.price}{" "}
          </p>

          <div className="w-full border-t-[1px] border-secondary my-5" />
          <h3
            className={`w-[100%] font-suranna text-[18px] md:text-[21px] font-[400] leading-[1.4em] text-left ${
              index == 2 ? "text-text" : "text-secondary"
            }`}
          >
            Features:
          </h3>
          <ul
            className={` mb-6 space-y-2 ${
              index == 2 ? "text-text" : "text-primary"
            } `}
          >
            {item.features.map((text, ind) => (
              <>
                <li key={ind + 22} className="flex items-start gap-4">
                  <Leaf h={20} w={20} fill={"#FFFFFF"} bg={"#99C24A"} />
                  <p
                    className={`font-jost text-[14px] md:text-[18px] font-[400] leading-[1.4em] text-center  ${
                      index == 2 ? "text-text" : "text-primary"
                    }`}
                  >
                    {text}
                  </p>
                </li>
                <div className="w-full border-t-[0.5px] border-q4d462f5 mt-10" />
              </>
            ))}
          </ul>
          <button
            type="submit"
            className={`w-full bg-q4ca25af p-4 flex items-center justify-center gap-2  ${
              index == 2 ? "text-secondary bg-text" : "text-text"
            }`}
          >
            Choose Package
          </button>
        </div>
      ))}
    </div>
  );
};

export default PricingPlans;
