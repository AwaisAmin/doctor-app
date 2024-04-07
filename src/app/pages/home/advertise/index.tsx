import Image from "next/image";

const Advertisement = () => {
  return (
    <div className="flex px-[350px] justify-between my-[30px]">
      <Image
        src="/images/advertisment-1.png"
        alt="advertise-logo"
        width={300}
        height={160}
      />
      <Image
        src="/images/advertisement-2.png"
        alt="advertise-logo"
        width={300}
        height={160}
      />
      <Image
        src="/images/advertisement-2.png"
        alt="advertise-logo"
        width={300}
        height={160}
      />
    </div>
  );
};

export default Advertisement;
