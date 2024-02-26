import React from "react";
import Footer from "@/components/Footer";
import { AboutHeader } from "@/components/header";

const page = () => {
  return (
    <div className=" absolute  z-0 top-10 w-full  ">
      <header>
        <AboutHeader />
      </header>
      <div>
        {/* ----------------- */}
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default page;
