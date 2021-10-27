import React, { useState } from "react";
import "./styles.scss";
import Header from "../components/ui/header";
import Backdrop from "../components/ui/backdrop";
import Footer from "../components/ui/footer";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Backdrop
        open={open}
        clicked={() => {
          setOpen(false);

          document.documentElement.classList.remove("_fixed");
          document.body.classList.remove("_fixed");
        }}
      />

      <Header
        isOpen={open}
        clicked={() => {
          setOpen(!open);

          document.documentElement.classList.toggle("_fixed");
          document.body.classList.toggle("_fixed");
        }}
      />

      <main className="main">{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
