import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { FaPlayCircle, FaTicketAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { chooseEvent } from "../features/goals/goalSlice";
function Home({ goal }) {
  const dispatch = useDispatch();

  return (
    <>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className="d-block firstsection w-100"
            src={require("../assets/Images/premierslide.png")}
            alt="First slide"
          />

          <Carousel.Caption>
            <div className="btn-register-1">
              <a
                href="/event"
                className="btn btn-soft-info btn-rounded f-30   text-white mx-2"
                // onClick={() => {
                //   dispatch(chooseEvent(goal._id));
                // }}
              >
                Register now
              </a>
            </div>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block firstsection1 vh-100"
            src={require("../assets/Images/ticdce.jpg")}
            alt="Second slide"
          />
          <Carousel.Caption>
            <div className="btn-register-2">
              <a
                href="/event"
                className="btn btn-soft-info btn-rounded f-30 text-white mx-2"
              >
                <FaPlayCircle />
                Register now
              </a>
            </div>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* <section className="firstsection">
        <button></button>
      </section> */}
      <section className="secondsection">
        <h1>Virtual Events</h1>
        <article style={{ fontSize: "20px" }}>
          Our platform provides you with the opportunity to attend real time
          events through an immersive unique experience saving time and costs
        </article>
        <button></button>
        <figure className="sideimages">
          <img
            src={require("../assets/Images/1.png")}
            alt="First-side"
            id="first"
          />
          <img
            src={require("../assets/Images/2.png")}
            alt="Second-side"
            id="second"
          />
        </figure>
      </section>
      <section className="thirdsection">
        {/* <div className="advantages">
          <h1>Our Main Advantages</h1>
        </div> */}
        <figure className="icons">
          <img
            src={require("../assets/Images/time.png")}
            alt="Time"
            id="time"
          />
          <img
            src={require("../assets/Images/money.png")}
            alt="Money"
            id="money"
          />
          <img
            src={require("../assets/Images/distance.png")}
            alt="Distance"
            id="distance"
          />
        </figure>
        <button id="timee"></button>
        <button id="moneyy"></button>
        <button id="distancee"></button>

        {/* <figure>
                <img src="./Images/fleche.png" alt="Arrow" id="imgtime"/>
                <img src="./Images/fleche.png" alt="Arrow" id="imgmoney"/>
                <img src="./Images/fleche.png" alt="Arrow" id="imgdistance"/>
            </figure>
            <button id="unavailability"></button>
            <button id="lack"></button>
            <button id="transport"></button>
            <button id="lastinsection"></button> */}
      </section>
      <section className="fourthsection"></section>
      <section className="fifthsection">
        <figure>
          <img
            src={require("../assets/Images/texte2.png")}
            alt="Text"
            id="text"
          />
        </figure>
        <button></button>
      </section>
      <section className="sixthsection">
        <figure className="textimage">
          <img src={require("../assets/Images/texte3.png")} alt="Steps" />
        </figure>
        <figure>
          <img
            src={require("../assets/Images/freeyourmind.png")}
            alt="Free your mind"
            id="firstpic"
          />
          <img
            src={require("../assets/Images/Getready.png")}
            alt="get ready"
            id="secondpic"
          />
          <img
            src={require("../assets/Images/Liveit.png")}
            alt="live it"
            id="thirdpic"
          />
        </figure>
        <button></button>
      </section>
      <section className="seventhsection">
        <figure className="titleimg">
          <img src={require("../assets/Images/texte4.png")} alt="text" />
        </figure>
        <figure>
          <img
            src={require("../assets/Images/creative.png")}
            alt="creative"
            id="creative"
          />
          <img
            src={require("../assets/Images/unique.png")}
            alt="unique"
            id="unique"
          />
          <img
            src={require("../assets/Images/authentic.png")}
            alt="authentic"
            id="authentic"
          />
        </figure>
      </section>
      <section className="pricing">
        {/* <figure className="titletext">
                <img src="./Images/texte5.png" alt="title"/>
            </figure> */}
        <div className="pricingplan">
          <h2 style={{ textAlign: "center" }}>Basic'O</h2>
          <hr
            style={{
              width: "70%",
              color: "white",
              border: "2px solid cyan",
            }}
          />
          <ul style={{ listStyleType: "circle", color: "white" }}>
            <li>Live Streaming Access</li>
            <li>Profile</li>
            <li>Mini Communities</li>
          </ul>
        </div>
        <div className="pricingplan">
          <h2 style={{ textAlign: "center" }}>Ultumi'O</h2>
          <hr
            style={{
              width: "70%",
              color: "white",
              border: "2px solid cyan",
            }}
          />
          <ul style={{ listStyleType: "circle", color: "white" }}>
            <li>Basic'o</li>
            <li>Avatar & Customization</li>
            <li>Virtual Goods Market</li>
            <li>Photography</li>
            <li>Vocal Chat</li>
            <li>Pictures</li>
            <li>Private Rooms</li>
            <li>Promotion Codes</li>
            <li>Event autographs</li>
            <li>Relive the XP</li>
          </ul>
        </div>

        <div className="pricingplan">
          <h2 style={{ textAlign: "center" }}>Partner's plan</h2>
          <hr
            style={{
              width: "70%",
              color: "white",
              border: "2px solid cyan",
            }}
          />
          <ul style={{ listStyleType: "circle", color: "white" }}>
            <li>Ticketing System</li>
            <li>Planification Templates</li>
            <li>Data Analytics</li>
            <li>Promotion</li>
            <li>Sponsorship Panels</li>
            <li>Tech Support</li>
          </ul>
        </div>

        {/* <img
            src={require("../assets/Images/basic_o.png")}
            alt="basic"
            id="basic"
          />
          <img
            src={require("../assets/Images/ultumio.png")}
            alt="ultumio"
            id="ultumio"
          />
          <img
            src={require("../assets/Images/partner_splan.png")}
            alt="partner_s"
            id="partners"
          /> */}
      </section>
    </>
  );
}

export default Home;
