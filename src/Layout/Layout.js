import React from "react";
import MobileNavbar from "../Components/MobileNavbar";
import Navbar from "../Components/Navbar";

const Layout = ({ children }) => {
  return (
    <main className="min-h-screen w-full bg-primary">
      <section className="pb-24 px-3 xl:px-0 md:mx-auto md:max-w-7xl bg-primary">
        <MobileNavbar />
        <Navbar />
        {children}
      </section>
    </main>
  );
};

export default Layout;
