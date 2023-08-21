import React from "react";
import Bg_umbrella1 from '../assets/images/png/Bg_umbrella1.png'
import Bg_umbrella3 from '../assets/images/png/Bg_umbrella3.png'

const Roadmap = () => {
  return (
    <>
      <section className="position-relative">
        <img className="roadmap-bg-img" src={Bg_umbrella3} alt="Background Umbrella" />
        <img className="roadmap-bg-img2" src={Bg_umbrella1} alt="Bg-Umbrella-Image" />
        

        <div class="intro pt-5 mt-5">
          <h4 className=" d-flex  justify-content-center text-white fs-48 fw-700 ff-lato">Road<span className="fc-primary fs-48 fw-700 ff-lato ">Map</span></h4>
        </div>
        <div className="bg_roadmap mt-5">
          <main className="pt-5">
            <article class="stop stop1 ">
              <div class="text-white text-sm-end text text-1">
                <h6 className="ff-lato fs-24 fw-400 ">
                  March 2022
                </h6> 
                <p>
                  1000 Drops Launch on Ethereum
                </p>
              </div>
            </article>
            <article class="stop stop2">
              <div class=" text-white text-start text text-2">
                <h6 className="ff-lato fs-24 fw-400 ">
                  March 2022
                </h6>
                <p>
                  1000 Drops Launch on Ethereum
                </p>
              </div>
            </article>
            <article class="stop stop3">
              <div class=" text-white text-sm-end text text-1">
                <h6 className="ff-lato fs-24 fw-400 ">
                  March 2022
                </h6>
                <p>Creation of Treasury</p>
              </div>
            </article>
            <article class="stop stop4">
              <div class=" text-white text-start text text-2">
                <h6 className="ff-lato fs-24 fw-400 ">
                  April 2022
                </h6>
                <p>
                  Our First Airdrop
                </p>
              </div>
            </article>
            <article class="stop stop5">
              <div class=" text-white text-sm-end text text-1">
                <h6 className="ff-lato fs-24 fw-400 ">
                  June 2022
                </h6>
                <p>Major Collabs</p>
              </div>
            </article>
            <article class="stop stop6">
              <div class=" text-white text-start text text-2">
                <h6 className="ff-lato fs-24 fw-400 ">
                  Sometime in Q3
                </h6>
                <p>Cyber Celebs come on Ethereum</p>
              </div>
            </article>
            <article class="stop stop7">
              <div class=" text-white text-sm-end text text-1">
                <h6 className="ff-lato fs-24 fw-400">
                  Sometime in Q3
                </h6>
                <p>Streetwear + Merch</p>
              </div>
            </article>
            <article class="stop stop8">
              <div class=" text-white text-start text text-2">
                <h6 className="ff-lato fs-24 fw-400 ">
                  Sometime in Q4
                </h6>
                <p>Enhanced Partnerships</p>
              </div>
            </article>
          </main>
        </div>
     </section>
    </>
  );
};

export default Roadmap;