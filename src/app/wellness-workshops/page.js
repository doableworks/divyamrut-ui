"use client";
import Link from "next/link";
import { NoImageAvailabe } from "@/contants/contants";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const page = () => {
  const workshopsFromRedux = useSelector((state) => state.workshop.workshops);
  const [workshops, setWorkshops] = useState([]);
  const [loading, setLoading] = useState(true);

  // Check Redux data first, fallback to API if empty
  useEffect(() => {
    const fetchWorkshops = async () => {
      // If Redux has data, use it
      if (workshopsFromRedux?.length > 0) {
        setWorkshops(workshopsFromRedux);
        setLoading(false);
        return;
      }

      // Otherwise, fetch from API
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        if (!apiUrl) {
          setLoading(false);
          return;
        }

        const res = await fetch(`${apiUrl}/workshop/`, {
          next: { revalidate: 60 },
        });
        
        if (res.ok) {
          const data = await res.json();
          setWorkshops(data.results || []);
        }
      } catch (error) {
        console.error("Error fetching workshops:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkshops();
  }, [workshopsFromRedux]);

  return (
    <div className="common_page_width flex flex-col">
              <h1 className="highlight-heading !mb-0">Wellness Workshops</h1>
        <h2 className="section-title lg:mb-8">
          Wellness for 
          <br className="hidden md:inline-block" /> every walk of life
        </h2>

      {/* Workshops Grid */}
      <section className="mb-16 mt-12 md:mt-0">
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Loading workshops...</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {workshops.length > 0 ? (
              workshops.map((workshop) => (
                <Link
                  key={workshop.id} 
                  className="bg-transparent rounded-lg overflow-hidden"
                  href={`/wellness-workshops/${workshop.slug}`}
                >
                  {/* Workshop Image */}
                  <div className="aspect-[5/4] lg:max-h-[200px] w-full overflow-hidden">
                    <img
                      src={workshop.cover_image || NoImageAvailabe}
                      alt={workshop.title}
                      className="object-cover bg-gray-200 w-full h-full hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Workshop Content */}
                  <div className="py-4">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {workshop.title}
                      </h3>
                      <p className="text-gray-900/80 text-sm leading-relaxed truncate">
                        {workshop.subtitle}
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-start justify-end">
                      <div className="text-xl font-semibold text-neutral">
                        ₹{workshop.price}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        {new Date(workshop.date).toLocaleDateString('en-IN', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric'
                        })} at {workshop.start_time}
                      </div>
                      {workshop.mode && (
                        <div className="text-xs text-gray-500 mt-1 capitalize">
                          {workshop.mode} • {workshop.available_seats} seats available
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-600 text-lg">No workshops available at the moment.</p>
                <p className="text-sm text-gray-500 mt-2">Please check back later for upcoming workshops.</p>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Detailed Sections */}
      {/* <section className="mb-12">
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
      </section> */}

      {/* Student Wellness Programs Section */}
      {/* <section className="mb-12">
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
      </section> */}

      {/* Teaching Faculty Wellness Section */}
      {/* <section className="mb-12">
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
      </section> */}

      {/* Individual & Community Wellness Section */}
      {/* <section className="mb-12">
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
      </section> */}

      {/* Conclusion Section */}
      <section className="mb-12 text-center">
        <p className="section-content !text-center !mb-8 !text-lg">
          Each wellness package is rooted in the belief that health is harmony — a dynamic alignment of body,
          mind, and spirit. Through our holistic approach, you'll experience not just the absence of illness, but the
          joyful presence of awareness, vitality, and purpose.
        </p>
        <Link href="https://wa.link/5nize1" rel="noopener noreferrer" target="_blank" className="site-button-primary">
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default page;
