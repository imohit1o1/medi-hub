import React from "react";
import { Hero, WhyUs, Testimonials } from "../../import-export/ImportExport";

function Home() {
  return (
    //give an overflow-hidden class at x-axis
    <div className="overflow-x-hidden">
      <Hero />
      {/* <WhyUs /> */}
      {/* <TopSpecialities /> */}
      <Testimonials />
      {/* <Contributors /> */}
    </div>
  );
}

export default Home;
