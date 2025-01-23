import AllTherapyList from "@/components/therapy/AllTherapyList";

export default function TherapyPage() {
  return (
    <div className="pb-[6rem] pt-[2rem] lg:pb-[6rem] lg:pt-16">
      <h1 className="section-title !mb-0">Our Therapies</h1>
      <h2 className="highlight-heading">
        Empowering Wellness, Healing,
        <br className="hidden md:inline-block" /> and Growth
      </h2>
      <AllTherapyList />
    </div>
  );
}
