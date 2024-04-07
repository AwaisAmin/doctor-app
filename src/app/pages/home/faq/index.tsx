import Button from "@/app/components/Button";

const Faq = () => {
  return (
    <div className="px-[150px] h-[240px]">
      <div className="px-[61px] py-[41px] flex items-center">
        <div className="w-[410px]">
          <h2 className="font-bold text-base leading-[40px]">
            Do you have a question or need help?
          </h2>
          <span className="font-normal text-base">
            Get answers to frequently asked questions in our help section
          </span>
        </div>
        <Button className="rounded-lg py-[5px] px-[10px] w-[65px] bg-[#6553CC] text-white ml-[50px]">
          FAQ
        </Button>
      </div>
    </div>
  );
};

export default Faq;
