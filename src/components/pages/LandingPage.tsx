import { HeaderMenu } from "@/components/ui/HeaderMenu";
import CTASection from "@/components/ui/CTASection";
import { Footer } from "@/components/ui/Footer";
// import { Button } from "@/components/ui/button"

export default function LandingPage() {

  // const handleButtonClick = () => {
  //   console.log("Get Started button clicked!");
  //   alert("Get Started button clicked!");
  // };


  return (

    <div className="min-h-screen flex flex-col bg-primary-foreground">

      <HeaderMenu />

      <main className="mx-2  md:mx-20">
        <section className="text-center w-full h-screen flex-1 flex items-center justify-center flex-col section-watermark">
          <p className="text-xl text-primary/80 mb-2">Welcome to</p>
          <h1 className="text-3xl font-montserrat font-extrabold text-gray-900 mb-6 md:text-5xl">
            <span className="text-yel">Sunrise</span>
            <span className="text-ora">Pipes</span>
            <span className="text-blu">.in</span>
          </h1>
        </section>


        <section className="text-center w-full h-screen my-16 flex-1 flex items-center justify-center flex-col section-watermark">

          <h1 className="text-3xl font-montserrat font-extrabold text-gray-900 mb-6 md:text-5xl">
            <span className="text-yel">Our</span>
            <span className="text-ora"> Mission</span>
          </h1>
          <p className="text-xl text-primary/80 mb-2">At<span className="text-blu font-bold"> Sunrise Pipes Private Limited</span> , we are committed to provide innovative, durable, and sustainable piping solutions that enhance agricultural efficiency and infrastructure development while exceeding customer expectations with superior quality and service.</p>
        </section>


        <section className="text-center w-full h-screen my-16 flex-1 flex items-center justify-center flex-col section-watermark">

          <h1 className="text-3xl font-montserrat font-extrabold text-gray-900 mb-6 md:text-5xl">
            <span className="text-yel">Our</span>
            <span className="text-ora"> History</span>
          </h1>
          <p className="text-xl text-primary/80 mb-2"><span className="text-blu font-bold"> Sunrise Pipes Private Limited</span> was established in <span className="text-blu font-bold"> February 2024</span>, building on the strong foundation laid by our parent company, <span className="text-blu font-bold"> SHIV SHAKTI PIPE UDYOG</span>, which has been a leader in plastic manufacturing since <span className="text-blu font-bold"> 1992</span>. With over three decades of expertise, our journey reflects a commitment to innovation, quality, and customer satisfaction.</p>
        </section>


        <section className="text-center w-full h-screen my-16 flex-1 flex items-center justify-center flex-col section-watermark">

          <h1 className="text-3xl font-montserrat font-extrabold text-gray-900 mb-6 md:text-5xl">
            <span className="text-yel">Why</span>
            <span className="text-ora"> Choose Us?</span>
          </h1>
          <p className="text-xl text-primary/80 mb-2">We bring <span className="text-blu font-bold">3 decades</span> of experience inherited from our parent company, SHIV SHAKTI PIPE UDYOG, ensuring unmatched expertise and reliability.</p>
          <p className="text-xl text-primary/80 mb-2">Our <span className="text-blu font-bold">advanced manufacturing techniques</span> utilize state-of-the-art technology to produce high-quality HDPE pipes and accessories that meet industry standards. </p>
          <p className="text-xl text-primary/80 mb-2">With a  <span className="text-blu font-bold">strong quality commitment</span> we rigorously test every product to guarantee durability, efficiency, and superior performance, making us a trusted partner for all your piping solutions.</p>
        </section>

      </main>
      <CTASection />
      <Footer />
    </div>
  );
}
