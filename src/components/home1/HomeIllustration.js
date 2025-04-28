"use client";
import Image from "next/image";

const HomeIllustration = () => {
  return (
    <section className="bg-white flex items-center justify-center">
      <div className="relative h-96 w-96">
        <Image
          src="https://register.nityanava.com/media/uploads/public/images/f30c4c93-39ac-4963-a483-68208ce7fdd8_cbqkrRl.png"
          alt="illustration"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default HomeIllustration;
