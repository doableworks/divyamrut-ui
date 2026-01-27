"use client";
import Link from "next/link";

export default function WorkshopSidebar({ workshop }) {
  return (
    <div className="w-80">
      <div
        className={`
          z-100 w-full max-w-96 bg-white shadow-lg p-6 border border-gray-200 transition-all duration-300 fixed top-54 right-0 z-100
        `}
      >
        <div className="mb-6">
          <div className="text-3xl font-bold text-[--yellow] mb-4">
            ₹{workshop.price}
          </div>
          
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Date:</span>
              <span className="text-gray-800">
                {new Date(workshop.date).toLocaleDateString('en-IN', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric'
                })}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Time:</span>
              <span className="text-gray-800">
                {workshop.start_time} - {workshop.end_time}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Duration:</span>
              <span className="text-gray-800">{workshop.hours} hours</span>
            </div>
            
            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Mode:</span>
              <span className="text-gray-800 capitalize">{workshop.mode}</span>
            </div>
            
            {workshop.venue && (
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Venue:</span>
                <span className="text-gray-800">{workshop.venue}</span>
              </div>
            )}
            
            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Available Seats:</span>
              <span className="text-gray-800">{workshop.available_seats}</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          {!workshop.is_full ? (
            <Link 
              href="https://wa.link/5nize1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="site-button-primary !w-full !text-center block"
            >
              Register Now
            </Link>
          ) : (
            <button disabled className="site-button-secondary-outlined !w-full cursor-not-allowed">
              Workshop Full
            </button>
          )}
        </div>
      </div>
      
    </div>
  );
}