import { notFound } from "next/navigation";
import Link from "next/link";
import { NoImageAvailabe } from "@/contants/contants";
import * as icons from "lucide-react";
import FaqsOrder from "@/components/workshops/faqs";
import WorkshopRegistrationButton from "@/components/workshops/WorkshopRegistrationButton";
// import WorkshopSidebar from "@/components/workshops/WorkshopSidebar";
import Image from "next/image";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const getWorkshopBySlug = async (slug) => {
  try {
    const res = await fetch(`${apiUrl}/workshop/${slug}/`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch workshop");
    }
    const data = await res.json();
    console.log("Fetched Workshop Data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching workshop:", error);
    return null;
  }
};

export async function generateMetadata({ params }) {
  const workshop = await getWorkshopBySlug(params.slug);
  
  if (!workshop) {
    return {
      title: "Workshop Not Found | Nityanava",
      description: "The requested workshop could not be found.",
    };
  }

  return {
    title: `${workshop.title} | Nityanava Wellness Workshops`,
    description: workshop.subtitle || workshop.description || "Join our wellness workshop for a transformative experience.",
    openGraph: {
      title: `${workshop.title} | Nityanava Wellness Workshops`,
      description: workshop.subtitle || workshop.description,
      images: [
        {
          url: workshop.cover_image || "/asset/logo/logo.svg",
          width: 1200,
          height: 630,
          alt: workshop.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${workshop.title} | Nityanava`,
      description: workshop.subtitle || workshop.description,
      images: [workshop.cover_image || "/asset/logo/logo.svg"],
    },
  };
}

const WorkshopDetailPage = async ({ params }) => {
  const workshop = await getWorkshopBySlug(params.slug);

  if (!workshop) {
    notFound();
  }

  // Helper function to convert 24-hour time to 12-hour format with AM/PM
  const convertTo12Hour = (time24) => {
    if (!time24) return '';
    
    const [hours, minutes] = time24.split(':');
    const hour = parseInt(hours, 10);
    const minute = minutes || '00';
    
    if (hour === 0) {
      return `12:${minute} AM`;
    } else if (hour < 12) {
      return `${hour}:${minute} AM`;
    } else if (hour === 12) {
      return `12:${minute} PM`;
    } else {
      return `${hour - 12}:${minute} PM`;
    }
  };

  // Helper function to get icon component from icon name
  const getIconComponent = (iconName) => {
    if (!iconName) return null;
    
    // Convert icon name to PascalCase if it's not already
    const pascalCaseIconName = iconName
      .split(/[-_\s]/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('');
    
    const IconComponent = icons[pascalCaseIconName];
    return IconComponent ? <IconComponent size={32} /> : null;
  };

  return (
    <div className="common_page_width">
      <div className="grid grid-cols-1 gap-8">
        {/* Main Content */}
        <div className="w-full flex flex-col items-center">
          {/* Workshop Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full mb-12">
            {/* Left Side - Workshop Details */}
            <div className="flex flex-col justify-start space-y-4">
              <h1 className="product_title !text-5xl !text-left !mb-4">
                {workshop.title}
              </h1>
              {workshop.subtitle && (
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                  {workshop.subtitle}
                </h2>
              )}

              {/* Workshop Info Grid */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-6">
                {/* Left Column */}
                <div className="space-y-3">
                  {/* Price */}
                  <div className="flex items-center gap-3">
                    <icons.IndianRupee className="text-[--yellow]" size={20} />
                    <div>
                      <span className="text-sm font-medium text-black mr-2">Price: </span>
                      <span className="text-xl font-medium text-black">₹{workshop.price}</span>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-3">
                    <icons.Calendar className="text-[--yellow]" size={20} />
                    <div>
                      <span className="text-sm font-medium text-black mr-2">Date: </span>
                      <span className="text-base font-semibold text-black">
                        {new Date(workshop.date).toLocaleDateString('en-IN', {
                          day: '2-digit',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>

                  {/* Time */}
                  <div className="flex items-center gap-3">
                    <icons.Clock className="text-[--yellow]" size={20} />
                    <div>
                      <span className="text-sm font-medium text-black mr-2">Time: </span>
                      <span className="text-base font-semibold text-black">
                        {convertTo12Hour(workshop.start_time)} - {convertTo12Hour(workshop.end_time)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-3">
                  {/* Venue */}
                  <div className="flex items-center gap-3">
                    {workshop.venue ? (
                      <>
                        <icons.MapPin className="text-[--yellow]" size={20} />
                        <div>
                          <span className="text-sm font-medium text-black mr-2">Venue: </span>
                          <span className="text-base font-semibold text-black">{workshop.venue}</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <icons.Globe className="text-[--yellow]" size={20} />
                        <div>
                          <span className="text-sm font-medium text-black mr-2">Location: </span>
                          <span className="text-base font-semibold text-black">Online</span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Faculty/Facilitator */}
                  {workshop.who_is_taking && (
                    <div className="flex items-center gap-3">
                      <icons.User className="text-[--yellow]" size={20} />
                      <div>
                        <span className="text-sm font-medium text-black">Facilitator: </span>
                        <span className="text-base font-medium text-black">{workshop.who_is_taking}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Register Now Button */}
              <div className="mb-6">
                <WorkshopRegistrationButton workshop={workshop} />
              </div>
            </div>

            {/* Right Side - Cover Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-h-96 overflow-hidden ">
                <img
                  src={workshop.cover_image || "/asset/common/noimage.jpg"}
                  alt={workshop.title}
                  className="w-full h-auto rounded-none shadow-lg object-cover"
                />
              </div>
            </div>
          </div>



          {/* Workshop Description */}
          {workshop.description && (
            <div className="mb-12 w-full">
              <h2 className="highlight-heading !text-3xl !text-left md:!text-center !mb-6">About This Workshop</h2>
              <div 
                className="section-content text-gray-700 leading-relaxed !text-left md:!text-center"
                dangerouslySetInnerHTML={{ __html: workshop.description }}
              />
            </div>
          )}

          {/* Workshop Details with Icons */}
          <div className="mb-12 w-full">
            {/* Workshop Details Grid - 1 row, 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Duration */}
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <icons.Timer className="text-[--yellow]" size={24} />
                <div>
                  <p className="font-medium text-gray-600 text-sm">Duration</p>
                  <p className="text-gray-800">{workshop.hours} hours</p>
                </div>
              </div>

              {/* Mode */}
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <icons.Monitor className="text-[--yellow]" size={24} />
                <div>
                  <p className="font-medium text-gray-600 text-sm">Mode</p>
                  <p className="text-gray-800 capitalize">{workshop.mode}</p>
                </div>
              </div>

              {/* Available Seats */}
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <icons.Users className="text-[--yellow]" size={24} />
                <div>
                  <p className="font-medium text-gray-600 text-sm">Available Seats</p>
                  <p className="text-gray-800">{workshop.available_seats}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Who is this for */}
          {workshop.who_is_for && (
            <div className="mb-12 w-full">
              <h2 className="highlight-heading !text-3xl !text-left md:!text-center !mb-6">Who Is This Workshop For?</h2>
              <div 
                className="section-content text-gray-700 leading-relaxed !text-left md:!text-center"
                dangerouslySetInnerHTML={{ __html: workshop.who_is_for }}
              />
            </div>
          )}

          {/* Workshop Benefits */}
          {workshop.benefits && workshop.benefits.length > 0 && (
            <div className="mb-12 w-full">
              <h2 className="highlight-heading !text-3xl !text-left md:!text-center !mb-6">Workshop Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {workshop.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg">
                    {benefit.icon && (
                      <div className="text-3xl text-[--yellow] flex-shrink-0">
                       <Image src ={benefit.icon} alt={benefit.title} width={20} height={20} className="object-contain" />
                      </div>
                    )}
                    <div>
                      <h3 className="font-semibold text-gray-800 ">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQs */}
          {workshop.faqs && workshop.faqs.length > 0 && (
            <div className="w-full">
              <FaqsOrder details={workshop.faqs} />
            </div>
          )}

          {/* Registration CTA */}
          <div className="text-center py-12 bg-gray-50 rounded-lg w-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Transform Your Life?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join us for this transformative workshop and embark on a journey towards holistic wellness and inner harmony.
            </p>
            <WorkshopRegistrationButton workshop={workshop} showPrice={true} />
          </div>
        </div>
      </div>

      {/* Commented out sidebar */}
      {/* <div className="md:col-span-4 w-full hidden md:block">
        <WorkshopSidebar workshop={workshop} />
      </div> */}
    </div>
  );
};

export default WorkshopDetailPage;