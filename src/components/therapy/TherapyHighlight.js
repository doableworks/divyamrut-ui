import Divider from "../common/Divider";

const therapyHighlights = [
  {
    id: 1,
    title: "Relieves Chronic Pain",
    description:
      "Meru Chikitsa targets the root cause of chronic pain and promotes long-lasting relief.",
  },
  {
    id: 2,
    title: "Improves Posture",
    description:
      "Therapy helps in aligning the spine and correcting postural imbalances.",
  },
  {
    id: 3,
    title: "Enhances Mobility",
    description:
      "Experience improved joint flexibility and overall mobility after the sessions.",
  },
  {
    id: 4,
    title: "Boosts Energy Levels",
    description:
      "Feel rejuvenated and energetic as the therapy revitalizes your body.",
  },
  {
    id: 5,
    title: "Holistic Healing",
    description:
      "Encourages physical, mental, and emotional well-being through natural methods.",
  },
];

export default function TherapyHighlight() {
  return (
    <section className="bg-white p-10 lg:py-28 lg:px-20">
      <h2 className="section-title">Power of Healing</h2>
      <p className="highlight-heading">Highlights of the therapy</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 lg:mt-14">
        {therapyHighlights.map((highlight) => (
          <div
            key={highlight.id}
            className="bg-[--base] rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <h3 className="text-xl font-semibold mb-4">
              {highlight.title}
            </h3>
            
            <p className="section-content !text-left">{highlight.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
