import Link from "next/link";

const page = () => {
  return (
    <div className="common_page_width flex flex-col">
      {/* Main Heading */}
      <h1 className="highlight-heading !text-center">
        Nityanava Wellness Retreats
      </h1>
      
      {/* Subtitle */}
      <h2 className="sub_heading !text-center !mb-8">
        Reconnect. Rejuvenate. Transform.
      </h2>
      
      {/* Introduction */}
      <p className="section-content !text-center !mb-12 !text-lg">
        At Nityanava Wellness, our retreats are designed to take you away from the hustle of daily life and
        immerse you in a holistic journey of healing, self-discovery, and renewal. Each retreat integrates
        mindfulness, meditation, movement, and lifestyle practices to restore balance and vitality in mind, body,
        and spirit.
      </p>

      {/* Holistic Wellness Retreats Section */}
      <section className="mb-12">
        <h2 className="product_title !text-left !mb-6">
          Holistic Wellness Retreats
        </h2>
        <h3 className="text-heading !text-left !mb-4">
          A complete mind-body-spirit rejuvenation
        </h3>
        <p className="section-content !text-left !mb-6">
          Experience a retreat that nurtures your entire being. Through guided meditation, yoga, breathwork,
          mindful nutrition, and reflective practices, you'll leave feeling refreshed, balanced, and inspired.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li className="section-content !text-left">Meditation & mindfulness sessions</li>
          <li className="section-content !text-left">Yoga & movement practices</li>
          <li className="section-content !text-left">Nutritional guidance & detox plans</li>
        </ul>
        <p className="section-content !text-left !mb-4">
          <strong>Ideal for:</strong> Individuals seeking personal transformation, stress relief, and inner clarity.
        </p>
      </section>

      {/* Nature & Healing Retreats Section */}
      <section className="mb-12">
        <h2 className="product_title !text-left !mb-6">
          Nature & Healing Retreats
        </h2>
        <h3 className="text-heading !text-left !mb-4">
          Reconnect with yourself through nature
        </h3>
        <p className="section-content !text-left !mb-6">
          Our nature-centric retreats take you to serene environments — mountains, riversides, and forests —
          where immersion in nature's rhythms fosters deep relaxation, creativity, and renewal.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li className="section-content !text-left">Forest bathing & nature walks</li>
          <li className="section-content !text-left">Guided reflection & journaling</li>
          <li className="section-content !text-left">Mindful movement in natural settings</li>
        </ul>
        <p className="section-content !text-left !mb-4">
          <strong>Ideal for:</strong> Nature lovers, creatives, and those seeking deep rejuvenation.
        </p>
      </section>

      {/* Meditation & Mindfulness Retreats Section */}
      <section className="mb-12">
        <h2 className="product_title !text-left !mb-6">
          Meditation & Mindfulness Retreats
        </h2>
        <h3 className="text-heading !text-left !mb-4">
          Discover the power of presence
        </h3>
        <p className="section-content !text-left !mb-6">
          These retreats focus on cultivating inner stillness, awareness, and emotional resilience. Guided
          meditation, breathwork, and contemplative practices help participants reduce stress, gain clarity, and
          cultivate lasting peace.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li className="section-content !text-left">Silent meditation sessions</li>
          <li className="section-content !text-left">Breathwork & mindful movement</li>
          <li className="section-content !text-left">Emotional balance and stress relief</li>
        </ul>
        <p className="section-content !text-left !mb-4">
          <strong>Ideal for:</strong> Busy professionals, students, educators, and anyone seeking mental clarity and calm.
        </p>
      </section>

      {/* Customized Group Retreats Section */}
      <section className="mb-12">
        <h2 className="product_title !text-left !mb-6">
          Customized Group Retreats
        </h2>
        <h3 className="text-heading !text-left !mb-4">
          Tailored experiences for teams and communities
        </h3>
        <p className="section-content !text-left !mb-6">
          We also design retreat experiences for corporates, schools, and community groups. These retreats
          integrate wellness workshops, mindfulness practices, and team-building activities to enhance
          connection, collaboration, and collective well-being.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li className="section-content !text-left">Team mindfulness & resilience workshops</li>
          <li className="section-content !text-left">Holistic wellness activities</li>
          <li className="section-content !text-left">Community building & bonding experiences</li>
        </ul>
        <p className="section-content !text-left !mb-4">
          <strong>Ideal for:</strong> Corporates, schools, and wellness communities.
        </p>
      </section>

      {/* Conclusion Section */}
      <section className="mb-12 text-center">
        <p className="section-content !text-center !mb-8 !text-lg">
          Every retreat is crafted with the philosophy that well-being is a journey, not a destination. Step into a
          space where mind, body, and spirit realign, and leave with renewed energy, clarity, and a deeper sense
          of purpose.
        </p>
        <Link href="/contact-us" className="site-button-primary">
          Connect & Explore Retreats
        </Link>
      </section>
    </div>
  );
};

export default page;
