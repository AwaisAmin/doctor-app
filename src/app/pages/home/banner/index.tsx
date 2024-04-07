import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <div className="bg-[#52B497] pt-[150px] lg:px-[150px] md:px-[30px] sm:px-[10px]">
        <h1 className="text-white font-inter sm:mt-[20px] font-bold text-2xl leading-relaxed mb-9">
          Find doctors, book appointments ... easily
        </h1>
        {/* Search Box */}
        <div className="flex flex-col sm:flex-row w-full max-w-[800px] bg-[#F2FAF6] px-4 xs:px-2 py-2 rounded-lg mt-11 sm:divide-x sm:divide-gray-300">
          <div className="flex items-center w-full sm:w-[278px] gap-2 mb-2 sm:mb-0">
            <Image
              src="./images/icons/search-icon.png"
              alt="logo"
              width={20}
              height={20}
            />
            <Input
              type="text"
              placeholder="Name/speciality"
              className="md:font-medium text-base bg-transparent border-none focus:outline-none placeholder-black"
            />
          </div>
          <div className="mx-2 my-auto hidden sm:hidden">
            <Image
              src="./images/icons/Line-icon.png"
              alt="logo"
              width={1}
              height={0}
            />
          </div>
          <div className="flex items-center w-full sm:w-[278px] gap-2 mb-2 sm:mb-0">
            <Image
              src="./images/icons/location-icon.png"
              alt="logo"
              width={20}
              height={20}
            />
            <Input
              type="text"
              placeholder="Location"
              className="font-medium text-base bg-transparent border-none focus:outline-none placeholder-black"
            />
          </div>
          <div className="flex items-center w-full sm:w-[106px] pr-6 mb-2 sm:mb-0">
            <Image
              src="./images/icons/location-finder-icon.png"
              alt="logo"
              width={20}
              height={20}
            />
          </div>
          <div className="flex items-center">
            <Button className="bg-[#3165E8] flex justify-around items-center w-full sm:w-[98px] h-[43px] gap-[10px] rounded-r-[10px]">
              <span className="w-[47px] h-[17px] text-white font-bold leading-tight text-left">
                search
              </span>
              <div className="transition-all ease-out duration-300">
                <Image
                  src="./images/icons/banner-search-arrow-icon.png"
                  alt="logo"
                  width={10}
                  height={11}
                />
              </div>
            </Button>
          </div>
        </div>

        {/* Vector */}
      </div>
      <div className="text-center mt-6">
        <Image src="/images/Vector.png" alt="vector" width={120} height={122} />
      </div>
    </>
  );
};

export default Banner;
