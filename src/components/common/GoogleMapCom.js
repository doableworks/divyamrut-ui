"use client";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 28.401586275231946, // Latitude
  lng: 77.08493682698533, // Longitude
};

export default function GoogleMapCom() {
  return (
    <div className="google-map-code w-screen overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.5811157082376!2d77.0847762!3d28.4017172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d223e7c4b4957%3A0xe817dc93396d1199!2sAipl%20Business%20Club%20Tower-A%2C%20Aipl%20Business%20Club%2C%20Sector%2062%2C%20Gurugram%2C%20Haryana%20122102!5e0!3m2!1sen!2sin!4v1732879813984!5m2!1sen!2sin"
        width="100%"
        height="450"
        frameborder="0"
        style={{ border: 0 }}
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  );
}
