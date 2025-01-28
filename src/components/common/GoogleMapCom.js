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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.500901843023!2d72.95357367609236!3d19.173312382051517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8fa9ee90437%3A0x3e8268fcb89f7974!2sSai%20Arcade%2C%20NS%20Rd%2C%20Vidya%20Vihar%2C%20Mulund%20West%2C%20Mumbai%2C%20Maharashtra%20400080!5e0!3m2!1sen!2sin!4v1738066094404!5m2!1sen!2sin"
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
