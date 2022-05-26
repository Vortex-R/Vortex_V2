import React from "react";
import EventFom from "../components/event/EventFom";

function Dashboard() {
  return (
    <>
      <section>
        <div className="w-100 pt-180 pb-180 page-title-wrap text-center black-layer opc5 position-relative">
          <div
            className="fixed-bg"
            style={{ backgroundImage: "url(assets/images/parallax8.jpg)" }}
          ></div>
          <div className="container">
            <div className="page-title-inner d-inline-block">
              <h1 className="mb-0">Dashboard</h1>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/" title="">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a href="/dashboard" title="">
                    Dashboard
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <EventFom />
    </>
  );
}

export default Dashboard;
