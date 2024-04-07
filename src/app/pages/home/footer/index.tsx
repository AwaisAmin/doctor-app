import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="w-full h-[450px] px-[150px]">
        <div className="h-[351px] gap-[40px]">
          <Image
            src="./images/footer-icons/Line-2.png"
            alt="footer-line"
            width={1400}
            height={1}
          />
          <div className="flex mt-[20px]">
            <div className="w-[446px] h-[180px]">
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col font-bold text-base leading-[35.94px] text-left">
                  <Link href="#">About Us</Link>
                  <Link href="#">FAQ</Link>
                </div>
                <Link href="#">
                  <Image
                    src="./images/footer-icons/insta-icon.png"
                    alt="insta-icon"
                    width={20}
                    height={18}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="./images/footer-icons/lnkd-icon.png"
                    alt="lndk-icon"
                    width={20}
                    height={18}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="./images/footer-icons/mail-icon.png"
                    alt="mail-icon"
                    width={20}
                    height={18}
                  />
                </Link>
              </div>
            </div>
            <div className="w-[446px] h-[280px]">
              <h2 className="font-bold text-base leading-[39.94px]">
                {" "}
                Find your specialist:
              </h2>
              <div className="flex flex-col leading-[29.94px]">
                <ul className="list-disc ml-[20px]">
                  <li>
                    <Link href="#">
                      Skin and Venereal diseases / dermatology
                    </Link>
                  </li>
                  <li>
                    <Link href="#">Orthopedics and Trauma Surgery</Link>
                  </li>
                  <li>
                    <Link href="#">Ophthalmology / Ophthalmology</Link>
                  </li>
                  <li>
                    <Link href="#">Gynecology and Obstetrics</Link>
                  </li>
                  <li>
                    <Link href="#">Dentistry</Link>
                  </li>
                  <li>
                    <Link href="#">Urology</Link>
                  </li>
                  <li>
                    <Link href="#">Radiology</Link>
                  </li>
                  <li>
                    <Link href="#">General medicine (family doctor)</Link>
                  </li>
                  <li>
                    <Link href="#">Neurology</Link>
                  </li>
                  <li>
                    <Link href="#">Alternative Practitioner</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-[446px] h-[280px]">
              <div className="flex flex-col leading-[29.94px] float-right">
                <ul className="list-disc ml-[20px] mt-[50px]">
                  <li>
                    <Link href="#">Cardiology</Link>
                  </li>
                  <li>
                    <Link href="#">Physical therapy</Link>
                  </li>
                  <li>
                    <Link href="#">Ear, nose and throat medicine (ENT)</Link>
                  </li>
                  <li>
                    <Link href="#">Gastroenterology</Link>
                  </li>
                  <li>
                    <Link href="#">Psychiatry and Psychotherapy</Link>
                  </li>
                  <li>
                    <Link href="#">Paediatrics</Link>
                  </li>
                  <li>
                    <Link href="#">Proctology</Link>
                  </li>
                  <li>
                    <Link href="#">Osteopathy</Link>
                  </li>
                  <li>
                    <Link href="#">Internal medicine and Rheumatology</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
