import Button from "@/app/components/Button";
import Image from "next/image";

const DoctorFacility = () => {
  return (
    <div className="px-[250px] h-[421px] flex justify-center items-start">
      <div className="w-[735px] px-[55px] py-[33px] rounded-lg bg-[#52B497]">
        <h2 className="font-lexend font-bold text-xl leading-7 ">
          Are you a doctor or own a health facility?
        </h2>
        <div className="my-[30px]">
          <div className="flex items-center gap-[20px]">
            <Image
              src="/images/icons/timer.png"
              height={28}
              width={28}
              alt="timer-logo"
            />
            <p className="text-white font-medium text-base leading-[35px]">
              Simple appointment management for successful practice.
            </p>
          </div>
          <div className="flex items-center gap-[20px]">
            <Image
              src="/images/icons/eye.png"
              height={28}
              width={28}
              alt="eye-logo"
            />
            <p className="text-white font-medium text-base leading-[25px]">
              Relieve the workload on your practice team and offer your patients
              a modern, digital service.
            </p>
          </div>
          <div className="flex items-start gap-[20px]">
            <Image
              src="/images/icons/calendar-dates.png"
              height={28}
              width={28}
              alt="timer-logo"
            />
            <p className="text-white font-medium text-base leading-[25px]">
              Increase the visibility of your facility on the internet and
              increase the sales of your practice. Setup in just 2 hours Create
              efficient practice processes and reduce appointment cancellations
              thanks to the digital practice calendar.
            </p>
          </div>
        </div>
        <Button className="bg-[#6553CC] text-white font-bold text-base px-10 py-2 gap-5 rounded-lg">
          More Information
        </Button>
      </div>
      <Image
        src="./images/doctors-img.png"
        width={460}
        height={175}
        alt="doc-image"
      />
    </div>
  );
};

export default DoctorFacility;
