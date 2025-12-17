import Link from "next/link";

const page = () => {
  return (
    <div className="common_page_width flex flex-col">
      {/* Main Heading */}
      <h1 className="highlight-heading !text-center">
        Nityanava Wellness Workshops
      </h1>
      
      {/* Subtitle */}
      <h2 className="sub_heading !text-center !mb-8">
        Wellness for Every Walk of Life
      </h2>
      
      {/* Introduction */}
      <p className="section-content !text-center !mb-12 !text-lg">
        At Nityanava Wellness, we believe that true well-being transcends age, profession, and lifestyle.
        Our programs are thoughtfully crafted to help individuals and groups experience balance, vitality, and
        harmony — uniting mind, body, and spirit through timeless wisdom and modern wellness practices.
      </p>

      {/* Corporate Wellness Programs Section */}
      <section className="mb-12">
        <h2 className="product_title !text-left !mb-6">
          Corporate Wellness Programs
        </h2>
        <h3 className="text-heading !text-left !mb-4">
          Creating Healthy, Mindful, and Resilient Workspaces
        </h3>
        <p className="section-content !text-left !mb-6">
          In today's demanding professional world, stress and burnout are all too common. Our corporate
          wellness packages bring mindfulness, emotional balance, and physical rejuvenation into the workplace
          — enhancing focus, creativity, and collaboration.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li className="section-content !text-left">Stress management & emotional regulation</li>
          <li className="section-content !text-left">Mindful leadership & communication</li>
          <li className="section-content !text-left">Work-life harmony & rejuvenation sessions</li>
        </ul>
        <p className="section-content !text-left !mb-4">
          <strong>Ideal for:</strong> Corporates, leadership teams, and HR wellness initiatives.
        </p>
      </section>

      {/* Student Wellness Programs Section */}
      <section className="mb-12">
        <h2 className="product_title !text-left !mb-6">
          Student Wellness Programs
        </h2>
        <h3 className="text-heading !text-left !mb-4">
          Nurturing Young Minds with Balance and Awareness
        </h3>
        <p className="section-content !text-left !mb-6">
          Students today face immense academic and emotional pressure. Our student wellness modules help
          them build emotional intelligence, focus, and self-confidence through mindfulness and holistic practices.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li className="section-content !text-left">Mindfulness & focus enhancement</li>
          <li className="section-content !text-left">Emotional resilience & self-awareness</li>
          <li className="section-content !text-left">Positive mindset development</li>
        </ul>
        <p className="section-content !text-left !mb-4">
          <strong>Ideal for:</strong> Schools, colleges, and youth programs.
        </p>
      </section>

      {/* Teaching Faculty Wellness Section */}
      <section className="mb-12">
        <h2 className="product_title !text-left !mb-6">
          Teaching Faculty Wellness Workshops
        </h2>
        <h3 className="text-heading !text-left !mb-4">
          Supporting Educators in Nurturing Minds with Mindfulness and Compassion
        </h3>
        <p className="section-content !text-left !mb-6">
          Educators shape the future — yet often neglect their own well-being. Our specialized faculty workshops
          offer tools for emotional regulation, stress relief, and mindful communication, enabling teachers to lead
          with balance, empathy, and joy.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li className="section-content !text-left">Emotional well-being & stress relief</li>
          <li className="section-content !text-left">Mindful communication & empathy building</li>
          <li className="section-content !text-left">Work-life balance & inner calm</li>
        </ul>
        <p className="section-content !text-left !mb-4">
          <strong>Ideal for:</strong> School and college teachers, academic leaders, and educators' training programs.
        </p>
      </section>

      {/* Individual & Community Wellness Section */}
      <section className="mb-12">
        <h2 className="product_title !text-left !mb-6">
          Individual & Community Wellness
        </h2>
        <h3 className="text-heading !text-left !mb-4">
          A Journey Toward Inner Harmony and Holistic Health
        </h3>
        <p className="section-content !text-left !mb-6">
          For those seeking personal transformation, our one-on-one and group sessions combine meditation,
          breathwork, body awareness, and emotional healing — nurturing gratitude, balance, and vitality.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li className="section-content !text-left">Personal wellness consultations</li>
          <li className="section-content !text-left">Meditation & breathwork sessions</li>
          <li className="section-content !text-left">Community wellness circles</li>
        </ul>
        <p className="section-content !text-left !mb-4">
          <strong>Ideal for:</strong> Individuals, families, and wellness communities.
        </p>
      </section>

      {/* Conclusion Section */}
      <section className="mb-12 text-center">
        <p className="section-content !text-center !mb-8 !text-lg">
          Each wellness package is rooted in the belief that health is harmony — a dynamic alignment of body,
          mind, and spirit. Through our holistic approach, you'll experience not just the absence of illness, but the
          joyful presence of awareness, vitality, and purpose.
        </p>
        <Link href="/contact-us" className="site-button-primary">
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default page;
