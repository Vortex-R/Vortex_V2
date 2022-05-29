import React from "react";
import ContactForm from "../components/ContactForm";
import OldFooter from "../components/OldFooter";
import OldHeader from "../components/OldHeader";

function Contact() {
  return (
    <>
      <OldHeader />
      <section>
        <div className="w-100 pt-180 pb-180 page-title-wrap text-center black-layer opc5 position-relative">
          <div
            className="fixed-bg"
            style={{ backgroundImage: "url(assets/images/parallax8.jpg)" }}
          ></div>
          <div className="container">
            <div className="page-title-inner d-inline-block">
              <h1 className="mb-0">Contact Us</h1>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html" title="">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item active">Contact Us</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section>
        <ContactForm />
      </section>
      <OldFooter />
    </>
  );
}

export default Contact;
