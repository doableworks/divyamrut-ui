"use client";
import Image from "next/image";

const HomeIllustration = () => {
  return (
    <section className="bg-white flex items-center justify-center">
      <div className="relative h-[500px] w-[500px]">
        <Image
          src="https://register.nityanava.com/media/uploads/public/images/f30c4c93-39ac-4963-a483-68208ce7fdd8_7qBz2Bh.png"
          alt="illustration"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default HomeIllustration;
