import Layout from "./components/Layout/Index";
import Advertisement from "./pages/home/advertise";
import Banner from "./pages/home/banner";
import Blog from "./pages/home/blog";
import DoctorFacility from "./pages/home/doctorFacility";
import Faq from "./pages/home/faq";
import OurServices from "./pages/home/ourServices";

export default function Home() {
  return (
    <>
      <Layout>
        <Banner />
        <Blog />
        <Advertisement />
        <OurServices />
        <DoctorFacility />
        <Faq />
      </Layout>
    </>
  );
}
