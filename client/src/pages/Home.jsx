import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { FaTicketAlt } from "react-icons/fa";
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
            <div className="mt-4 pt-2 btn-book">
              <a
                href="/event"
                className="btn btn-primary btn-round btn-rounded w-25"
                // onClick={() => {
                //   dispatch(chooseEvent(goal._id));
                // }}
              >
                <FaTicketAlt /> Buy a Ticket
              </a>
            </div>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block firstsection w-100"
            src={require("../assets/Images/premierslide.png")}
            alt="Second slide"
          />
          <Carousel.Caption>
            <div className="mt-4 pt-2 btn-book">
              <a
                href="https://vimeo.com/99025203"
                className="video-play-icon text-white"
              >
                <i className="mdi mdi-play-circle-outline text-white mr-2"></i>
                Watch With VR Box
              </a>
            </div>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* <section className="firstsection">
        <button></button>
      </section> */}
      <section className="secondsection">
        <h1>Virtual Events</h1>
        <article>
          Our platform provides you with the opportunity to attend real time{" "}
          {/*  { require('../assets/Images/') } */}
          events through our tra shneeya tra shneeya am blind i cant see the
          text
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
      <section className="footer2">
        {/* <figure className="titletext">
                <img src="./Images/texte5.png" alt="title"/>
            </figure> */}
        <figure>
          <img
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
          />
        </figure>
      </section>
    </>
  );
}

export default Home;
