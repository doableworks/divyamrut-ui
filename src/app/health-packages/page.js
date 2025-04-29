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
    <div className="common_page_width">
      <h1 className="section-highlight">
        Concern Specific Health and Wellbeing packages
      </h1>
      <p>
        A comprehensive approach to find an optimum health plan by curating a
        tailored made package by working one on one to discover what would work
        best for you.
      </p>
      <ul>
        <ul className="list-disc pl-5 space-y-2">
          {services.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </ul>
    </div>
  );
};

export default page;
