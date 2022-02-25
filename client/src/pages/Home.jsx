import React from "react";
// import * from "../assets/Images";

function Home() {
  return (
    <>
      <section className="firstsection">
        <button></button>
      </section>
      <section className="secondsection">
        <h1>Virtual Events</h1>
        <article>
          Our platform provides you with the opportunity to attend real time  {/*  { require('../assets/Images/') } */}
          events through our tra shneeya tra shneeya am blind i cant see the
          text
        </article>
        <button></button>
        <figure className="sideimages">
          <img src={ require('../assets/Images/1.png') } alt="First-side" id="first" />
          <img src={ require('../assets/Images/2.png') } alt="Second-side" id="second" />
        </figure>
      </section>
      <section className="thirdsection">
        <figure className="icons">
          <img src={ require('../assets/Images/time.png') } alt="Time" id="time" />
          <img src={ require('../assets/Images/money.png') } alt="Money" id="money" />
          <img src= { require('../assets/Images/distance.png') } alt="Distance" id="distance" />
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
          <img src={ require('../assets/Images/texte2.png') } alt="Text" id="text" />
        </figure>
        <button></button>
      </section>
      <section className="sixthsection">
        <figure className="textimage">
          <img src={ require('../assets/Images/texte3.png') } alt="Steps" />
        </figure>
        <figure>
          <img
            src= { require('../assets/Images/freeyourmind.png') }
            alt="Free your mind"
            id="firstpic"
          />
          <img src= { require('../assets/Images/Getready.png') } alt="get ready" id="secondpic" />
          <img src= { require('../assets/Images/Liveit.png') } alt="live it" id="thirdpic" />
        </figure>
        <button></button>
      </section>
      <section className="seventhsection">
        <figure className="titleimg">
          <img src= { require('../assets/Images/texte4.png') } alt="text" />
        </figure>
        <figure>
          <img src= { require('../assets/Images/creative.png') } alt="creative" id="creative" />
          <img src= { require('../assets/Images/unique.png') } alt="unique" id="unique" />
          <img src= { require('../assets/Images/authentic.png') } alt="authentic" id="authentic" />
        </figure>
      </section>
      <section className="footer2">
        {/* <figure className="titletext">
                <img src="./Images/texte5.png" alt="title"/>
            </figure> */}
        <figure>
          <img src= { require('../assets/Images/basic_o.png') } alt="basic" id="basic" />
          <img src= { require('../assets/Images/ultumio.png') } alt="ultumio" id="ultumio" />
          <img src= { require('../assets/Images/partner_splan.png') }  alt="partner_s" id="partners" />
        </figure>
      </section>
    </>
  );
}

export default Home;
