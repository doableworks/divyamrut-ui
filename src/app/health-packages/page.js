const page = () => {
  const services = [
    "Life coaching",
    "Emotional well-being coaching",
    "Joint and Bone health",
    "Respiratory and Immune Health",
    "Pregnancy support and care (Pre & Post)",
    "Infancy care for child and mother",
    "Gut health and Gut care",
    "Sleep & mental well-being",
    "Preventive Care",
    "Orofacial treatments",
    "Spine and Posture care",
    "Endocrine Health",
  ];

  return (
    <div className="common_page_width flex flex-col">
      <h1 className="highlight-heading !text-left">
        Concern Specific Health and Wellbeing packages
      </h1>
      <p className="section-content !text-left !mb-4">
        A comprehensive approach to find an optimum health plan by curating a
        tailored made package by working one on one to discover what would work
        best for you.
      </p>
      <ul className="!list-disc !mr-7 !space-y-2 !text-left section-content">
        {services.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button className="site-button-secondary-outlined !self-center" disabled={true}>
        Coming Soon
      </button>
    </div>
  );
};

export default page;
