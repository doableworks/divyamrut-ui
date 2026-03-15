"use client";
import Link from "next/link";
import { NoImageAvailabe } from "@/contants/contants";
import { useSelector } from "react-redux";
import { useEffect, useState, useMemo } from "react";

const page = () => {
  const workshopsFromRedux = useSelector((state) => state.workshop.workshops);
  const [workshops, setWorkshops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sectionsHtml, setSectionsHtml] = useState(null);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  // Default HTML fallback (keeps same styling/classes as before)
  const DEFAULT_SECTIONS_HTML = [
    `
    <h2 class="product_title !text-left !mb-6">Corporate Wellness Programs</h2>
    <h3 class="text-heading !text-left !mb-4">Creating Healthy, Mindful, and Resilient Workspaces</h3>
    <p class="section-content !text-left !mb-6">In today's demanding professional world, stress and burnout are all too common. Our corporate
    wellness packages bring mindfulness, emotional balance, and physical rejuvenation into the workplace
    — enhancing focus, creativity, and collaboration.</p>
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li class="section-content !text-left">Stress management &amp; emotional regulation</li>
      <li class="section-content !text-left">Mindful leadership &amp; communication</li>
      <li class="section-content !text-left">Work-life harmony &amp; rejuvenation sessions</li>
    </ul>
    <p class="section-content !text-left !mb-4"><strong>Ideal for:</strong> Corporates, leadership teams, and HR wellness initiatives.</p>
    `,
    `
    <h2 class="product_title !text-left !mb-6">Student Wellness Programs</h2>
    <h3 class="text-heading !text-left !mb-4">Nurturing Young Minds with Balance and Awareness</h3>
    <p class="section-content !text-left !mb-6">Students today face immense academic and emotional pressure. Our student wellness modules help
    them build emotional intelligence, focus, and self-confidence through mindfulness and holistic practices.</p>
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li class="section-content !text-left">Mindfulness &amp; focus enhancement</li>
      <li class="section-content !text-left">Emotional resilience &amp; self-awareness</li>
      <li class="section-content !text-left">Positive mindset development</li>
    </ul>
    <p class="section-content !text-left !mb-4"><strong>Ideal for:</strong> Schools, colleges, and youth programs.</p>
    `,
    `
    <h2 class="product_title !text-left !mb-6">Teaching Faculty Wellness Workshops</h2>
    <h3 class="text-heading !text-left !mb-4">Supporting Educators in Nurturing Minds with Mindfulness and Compassion</h3>
    <p class="section-content !text-left !mb-6">Educators shape the future — yet often neglect their own well-being. Our specialized faculty workshops
    offer tools for emotional regulation, stress relief, and mindful communication, enabling teachers to lead
    with balance, empathy, and joy.</p>
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li class="section-content !text-left">Emotional well-being &amp; stress relief</li>
      <li class="section-content !text-left">Mindful communication &amp; empathy building</li>
      <li class="section-content !text-left">Work-life balance &amp; inner calm</li>
    </ul>
    <p class="section-content !text-left !mb-4"><strong>Ideal for:</strong> School and college teachers, academic leaders, and educators' training programs.</p>
    `,
    `
    <h2 class="product_title !text-left !mb-6">Individual & Community Wellness</h2>
    <h3 class="text-heading !text-left !mb-4">A Journey Toward Inner Harmony and Holistic Health</h3>
    <p class="section-content !text-left !mb-6">For those seeking personal transformation, our one-on-one and group sessions combine meditation,
    breathwork, body awareness, and emotional healing — nurturing gratitude, balance, and vitality.</p>
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li class="section-content !text-left">Personal wellness consultations</li>
      <li class="section-content !text-left">Meditation &amp; breathwork sessions</li>
      <li class="section-content !text-left">Community wellness circles</li>
    </ul>
    <p class="section-content !text-left !mb-4"><strong>Ideal for:</strong> Individuals, families, and wellness communities.</p>
    `,
  ];

  // Component to render raw HTML from backend. Intentionally uses
  // dangerouslySetInnerHTML because CMS will provide safe HTML. Sanitize
  // on the backend or use DOMPurify on the client if needed.
  const HtmlSection = ({ html }) => {
    if (!html) return null;
    // add `html-content` so CSS can target plain h2/p/ul tags and apply project styles
    return <section className="mb-12 html-content" dangerouslySetInnerHTML={{ __html: html }} />;
  };

  // Check Redux data first, fallback to API if empty
  useEffect(() => {
    const fetchWorkshops = async () => {
      // If Redux has data, use it
      if (workshopsFromRedux?.length > 0) {
        setWorkshops(workshopsFromRedux);
        setLoading(false);
        // If redux payload includes workshop_listing_description, use it
        if (workshopsFromRedux?.workshop_listing_description) {
          setSectionsHtml([workshopsFromRedux.workshop_listing_description]);
        }
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
          setWorkshops(data.workshops.results || []);
          // Pull the html listing description from the same response
          if (data.workshop_listing_description) {
            setSectionsHtml([data.workshop_listing_description]);
          } else {
            setSectionsHtml(DEFAULT_SECTIONS_HTML);
          }
        }
      } catch (error) {
        console.error("Error fetching workshops:", error);
        setSectionsHtml(DEFAULT_SECTIONS_HTML);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkshops();
  }, [workshopsFromRedux]);

  // Segregate workshops into ongoing and completed based on date
  const { ongoingWorkshops, completedWorkshops } = useMemo(() => {
    const now = new Date();
    const ongoing = [];
    const completed = [];

    (workshops || []).forEach((w) => {
      const wDate = w?.date ? new Date(w.date) : null;
      if (!wDate || isNaN(wDate.getTime())) {
        // If no valid date, consider ongoing
        ongoing.push(w);
      } else if (now > wDate) {
        completed.push(w);
      } else {
        ongoing.push(w);
      }
    });

    // Sort completed descending (most recent first), ongoing ascending (nearest first)
    completed.sort((a, b) => new Date(b.date) - new Date(a.date));
    ongoing.sort((a, b) => new Date(a.date) - new Date(b.date));

    return { ongoingWorkshops: ongoing, completedWorkshops: completed };
  }, [workshops]);

  return (
    <div className="common_page_width flex flex-col">
              <h1 className="highlight-heading !mb-0">Wellness Workshops</h1>
        <h2 className="section-title lg:mb-8">
          Wellness for 
          <br className="hidden md:inline-block" /> every walk of life
        </h2>

             {/* Detailed Sections (fetched from backend as HTML or fallback to defaults) */}
      {sectionsHtml &&
        sectionsHtml.map((html, idx) => (
          <HtmlSection key={idx} html={html} />
        ))}

      {/* Workshops: Ongoing then Completed */}
      <section className="mb-16 mt-12 md:mt-0">
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Loading workshops...</p>
          </div>
        ) : (
          <>
            {/* Ongoing */}
            <div className="mb-8">
              <h3 className="section-title text-left mb-4">Ongoing Workshops</h3>
              {ongoingWorkshops.length > 0 ? (
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                  {ongoingWorkshops.map((workshop) => (
                    <Link
                      key={workshop.id}
                      className="bg-transparent rounded-lg overflow-hidden"
                      href={`/wellness-workshops/${workshop.slug}`}
                    >
                      <div className="aspect-[5/4] lg:max-h-[200px] w-full overflow-hidden">
                        <img
                          src={workshop.cover_image || NoImageAvailabe}
                          alt={workshop.title}
                          className="object-cover bg-gray-200 w-full h-full hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="py-4">
                        <div className="mb-4">
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{workshop.title}</h3>
                          <p className="text-gray-900/80 text-sm leading-relaxed truncate">{workshop.subtitle}</p>
                        </div>
                        <div className="flex flex-col items-start justify-end">
                          <div className="text-xl font-semibold text-neutral">₹{workshop.price}</div>
                          <div className="text-sm text-gray-600 mt-1">{new Date(workshop.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })} at {workshop.start_time}</div>
                          {workshop.mode && <div className="text-xs text-gray-500 mt-1 capitalize">{workshop.mode} • {workshop.available_seats} seats available</div>}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">No ongoing workshops at the moment.</div>
              )}
            </div>

            {/* Completed */}
            <div className="mt-12">
              <h3 className="section-title text-left mb-4">Completed Workshops</h3>
              {completedWorkshops.length > 0 ? (
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                  {completedWorkshops.map((workshop) => (
                    <Link
                      key={workshop.id}
                      className="bg-transparent rounded-lg overflow-hidden"
                      href={`/wellness-workshops/${workshop.slug}`}
                    >
                      <div className="aspect-[5/4] lg:max-h-[200px] w-full overflow-hidden">
                        <img
                          src={workshop.cover_image || NoImageAvailabe}
                          alt={workshop.title}
                          className="object-cover bg-gray-200 w-full h-full hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="py-4">
                        <div className="mb-4">
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{workshop.title}</h3>
                          <p className="text-gray-900/80 text-sm leading-relaxed truncate">{workshop.subtitle}</p>
                        </div>
                        <div className="flex flex-col items-start justify-end">
                          <div className="text-xl font-semibold text-neutral">₹{workshop.price}</div>
                          <div className="text-sm text-gray-600 mt-1">{new Date(workshop.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })} at {workshop.start_time}</div>
                          {workshop.mode && <div className="text-xs text-gray-500 mt-1 capitalize">{workshop.mode} • {workshop.available_seats} seats available</div>}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">No completed workshops yet.</div>
              )}
            </div>
          </>
        )}
      </section>


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
