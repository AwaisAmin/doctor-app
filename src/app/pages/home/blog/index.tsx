import Button from "@/app/components/Button";
import Image from "next/image";

const Blog = () => {
  return (
    <div className="px-[250px] h-[358px] pt-[30px] gap-[150px] flex items-center">
      <div className="relative w-[738px] h-[258px] bg-[#DCF0EA] rounded-lg py-[21px] px-[36px]">
        <h2 className="font-lexend font-bold text-2xl mb-[29px]">
          What is Hakime?
        </h2>
        <p className="leading-[26px] font-semibold mb-[20px]">
          The first Ethiopian platform to find, book and manage appointments
          with medical professionals. Have the advantage of easily finding the
          best doctors, checking their availability, rescheduling appointments,
          including payment options such as Telebirr and around the clock
          service.
        </p>
        <Button className="absolute bottom-[20px] left-[40px] bg-[#6553CC] text-white rounded-md py-[5px] px-[10px] w-[175px] h-[30px] gap-[5px]">
          Learn More
        </Button>
      </div>
      <Image
        src="/images/youtube-thumnail.png"
        width={349}
        height={196}
        alt="youtube-video"
      />
    </div>
  );
};

export default Blog;
