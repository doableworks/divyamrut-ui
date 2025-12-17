import {
  MedicineBoxOutlined,
  FileSearchOutlined,
  HarmonyOSOutlined,
  IssuesCloseOutlined,
  SunOutlined,
  RadarChartOutlined,
} from "@ant-design/icons";

const whyUsArray = [
  {
    id: 0,
    icon: <FileSearchOutlined style={{ fontSize: "48px", color: "#E0A43B" }} />,
    label: "Addressing the Root Cause",
  },
  {
    id: 1,
    icon: (
      <HarmonyOSOutlined style={{ fontSize: "48px", color: "#E0A43B" }} />
    ),
    label: "Help with a BODY MIND connection",
  },
  {
    id: 2,
    icon: (
      <MedicineBoxOutlined style={{ fontSize: "48px", color: "#E0A43B" }} />
    ),
    label: "Non Invasive | No Medication",
  },
  {
    id: 3,
    icon: (
      <IssuesCloseOutlined style={{ fontSize: "48px", color: "#E0A43B" }} />
    ),
    label: "No side effects",
  },
  {
    id: 4,
    icon: <SunOutlined style={{ fontSize: "48px", color: "#E0A43B" }} />,
    label: "Works on the natural ability of the body to Heal",
  },
  {
    id: 5,
    icon: (
      <RadarChartOutlined style={{ fontSize: "48px", color: "#E0A43B" }} />
    ),
    label: "The role of Emotions in your healing Journey",
  },
];

export default function WhyUsSection() {
  return (
    <div className="relative bg-white py-[3rem] px-5 md:px-10 md:py-[2rem] w-full">
      <div className=" !mb-20">
        <p className="section-title !text-center">WHY US?</p>
        <p className="highlight-heading">What Makes Us Stand Out</p>
      </div>

      <ul className="list-none grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-2 my-6 md:max-w-6xl md:mx-auto">
        {whyUsArray.map((each, index) => (
          <li
            className="flex flex-col justify-center items-center gap-10"
            key={index}
          >
            <span>{each.icon}</span>
            <span className="section-title !text-[22px] text-center max-w-[70%]">
              {each.label}
            </span>

            <hr className="md:hidden w-full" />
          </li>
        ))}
      </ul>
    </div>
  );
}
