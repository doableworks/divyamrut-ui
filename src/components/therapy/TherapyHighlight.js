export default function TherapyHighlight({ highlights }) {
  return (
    <section className="bg-white p-10 lg:py-28 lg:px-20">
      <h2 className="section-title">Power of Healing</h2>
      <p className="highlight-heading">Highlights of the therapy</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 lg:mt-14">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className="bg-[--base] rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <h3 className="text-xl font-semibold mb-4">{highlight.title}</h3>

            <p className="section-content !text-left">
              {highlight.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
