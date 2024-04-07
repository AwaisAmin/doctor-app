import Image from "next/image";
import React from "react";

const OurServices = () => {
  return (
    <div className="px-[400px] h-[400px] text-center">
      <h1 className="font-lexend mx-auto font-bold text-2xl my-[50px]">
        Our Services
      </h1>
      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/images/ellipse1.png"
            alt="ellipse"
            width={200}
            height={200}
            className="object-cover"
          />
          <h2 className="my-4 font-bold text-base text-center">
            Book Appointments Online
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/images/ellipse-3.png"
            alt="ellipse"
            width={200}
            height={200}
            className="object-cover"
          />
          <h2 className="my-4 font-bold text-base text-center">
            Search for nearby Doctors in specialized areas
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/images/ellipse-2.png"
            alt="ellipse"
            width={200}
            height={200}
            className="object-cover"
          />
          <h2 className="my-4 font-bold text-base text-center">
            Securely share your medical documents with your Doctor
          </h2>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
