"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReactTyped from "react-typed";
// import PostsSection from "./homeComponents/PostsSection";
import { Fade } from "react-reveal";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import PostsSection from "./PostsSection";
import useGetFetch from "@/hooks/useGetFetch";
import {
  setAllAboutPageTexts,
  setAllBrandPageTexts,
  setAllBrands,
  setAllCompanies,
  setAllHomePageTexts,
  setAllOffices,
} from "@/redux/newsSlice";
function Hompage() {
  const dispatch = useDispatch();
  const { data: homepage } = useGetFetch("/wp-json/wp/v2/pages/3246");
  const { data: aboutpage } = useGetFetch("/wp-json/wp/v2/pages/3286");
  const { data: brandpage } = useGetFetch("/wp-json/wp/v2/pages/3308");
  const { data: brands } = useGetFetch("/wp-json/wp/v2/brand");
  const { data: offices } = useGetFetch("/wp-json/wp/v2/office");
  const { data: companies } = useGetFetch("/wp-json/wp/v2/company");

  dispatch(setAllHomePageTexts(homepage));
  dispatch(setAllAboutPageTexts(aboutpage));
  dispatch(setAllBrandPageTexts(brandpage));
  dispatch(setAllBrands(brands));
  dispatch(setAllOffices(offices));
  dispatch(setAllCompanies(companies));
  const router = useRouter();
  const homePageElements = useSelector((state) => state.news.allHomePageTexts);

  const [navbar, setNavbar] = useState(false);
  const [navbarAbout, setNavbarAbout] = useState(false);

  const changeBackground = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY >= 1800) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
      if (window.scrollY >= 5380) {
        setNavbar(false);
      }
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground);
  }
  let str = homePageElements?.acf?.about_text_marquee;
  let arr = str?.split(",");
  return (
    <div className="hom">
      <div className="video-cover">
        <video
          src={homePageElements?.acf?.hero_background_media}
          muted
          autoPlay
          loop
          className="video-background"
        />
      </div>
      <div className="content-width">
        <div className="container">
          <div className="col-12">
            <div
              className="d-flex mb-4"
            >
              <div className="line mt-1 mt-lg-2 me-2"></div>
              <div className="content-font">
                <div>
                  <Fade bottom cascade>
                    <h1 className="my-auto">WE ARE</h1>
                  </Fade>
                </div>
              </div>
            </div>
            <div
              className="content-font-1"
            >
              <Fade bottom cascade>
                <div className="content-font-1-h2">
                  <h2
                    className="cont-h2"
                    dangerouslySetInnerHTML={{
                      __html: homePageElements?.acf?.hero_text,
                    }}
                  ></h2>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div className="content-margin">
        <div className="container">
          <div className="col-12">
            <div
              className="d-flex mb-4"
            >
              <div className="line mt-1 mt-lg-2 me-2"></div>
              <div className="content-font">
                <Fade bottom cascade>
                  <h1 className="my-auto">WE ARE</h1>
                </Fade>
              </div>
            </div>
            <div className="content-font-2 cont-2-font">
              <Fade bottom cascade>
                <h2>
                  {homePageElements?.acf?.sub_hero_text}
                </h2>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          navbar ? "body-width body-height-active" : "body-width body-height"
        }
      >
        <div className="container">
          <div className="col-12">
            <div
              className="d-flex mb-5"
            >
              <motion.div
                className="line mt-1 mt-lg-2 me-2"
                animate={{ mixBlendMode: "difference" }}
              ></motion.div>
              <motion.div
                className="content-font"
                animate={{ mixBlendMode: "difference" }}
              >
                <Fade bottom cascade>
                  <h1 className="my-auto">ABOUT US</h1>
                </Fade>
              </motion.div>
            </div>
            <div className="content-font-3">
              <Fade bottom cascade>
                <motion.h2
                  animate={{ mixBlendMode: "difference" }}
                >
                  {homePageElements?.acf?.about_text}
                </motion.h2>
                <motion.h2
                  className="text-underline"
                  animate={{ mixBlendMode: "difference" }}
                >
                  <ReactTyped
                    strings={["content.", "information.", "knowledge"]}
                    loop={Infinity}
                    wrapper="span"
                    typeSpeed={150}
                    backSpeed={100}
                  />
                </motion.h2>
              </Fade>
            </div>
          </div>
          <motion.div className="mt-5" animate={{ mixBlendMode: "difference" }}>
            <Fade bottom cascade>
              <input
                type="button"
                value="learn more"
                className="btn btn-outline-white rounded-pill px-lg-5"
              />
            </Fade>
          </motion.div>
        </div>
      </div>
      <div
        className={
          navbar ? "body-width body-height1-active" : "body-width body-height1"
        }
      >
        <div className="container">
          <div className="col-12">
            <div className="d-flex mb-4">
              <motion.div
                animate={{ mixBlendMode: "difference" }}
                className="line mt-1 mt-lg-2 me-2"
              ></motion.div>
              <div className="content-font">
                <Fade bottom cascade>
                  <motion.h1
                    className="my-auto"
                    animate={{ mixBlendMode: "difference" }}
                  >
                    OUR BRANDS
                  </motion.h1>
                </Fade>
              </div>
            </div>
            <div className="content-font-4">
              <Fade bottom cascade>
                <motion.h2
                  animate={{ mixBlendMode: "difference" }}
                >
                  {homePageElements?.acf?.brands_intro_text}
                </motion.h2>
              </Fade>
            </div>
          </div>
          <motion.div className="mt-5" animate={{ mixBlendMode: "difference" }}>
            <Fade bottom cascade>
              <input
                type="button"
                value="see all brands"
                className="btn btn-outline-white rounded-pill px-lg-5 mt-2"
                onClick={() => router.push("/our-brands")}
              />
            </Fade>
          </motion.div>
        </div>
      </div>
      <div className="logo-section bg-white">
        <div className="container">
          <div className="col-12">
            <div className="d-flex justify-content-between mb-5">
              <div className="logo-cover  d-flex align-items-center">
                <img
                  src="/assets/img/tv3.png"
                  alt=""
                  className="img-fluid"
                  width="60%"
                />
              </div>
              <div className="logo-cover d-flex align-items-center">
                <img
                  src="/assets/img/adesa.png"
                  alt=""
                  className="img-fluid"
                  width="60%"
                />
              </div>
              <div className="logo-cover d-flex align-items-center">
                <img src="/assets/img/akoma.png" alt="" width="60%" />
              </div>
              <div className="logo-cover d-flex align-items-center">
                <img src="/assets/img/newson3.png" alt="" width="60%" />
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex justify-content-between">
              <div className="logo-cover  d-flex align-items-center">
                <img
                  src="/assets/img/3fm.png"
                  alt=""
                  className="img-fluid"
                  width="60%"
                />
              </div>
              <div className="logo-cover d-flex align-items-center">
                <img
                  src="/assets/img/3xtra.png"
                  alt=""
                  className="img-fluid"
                  width="60%"
                />
              </div>
              <div className="logo-cover d-flex align-items-center">
                <img src="/assets/img/onua.png" alt="" width="60%" />
              </div>
              <div className="logo-cover d-flex align-items-center">
                <img src="/assets/img/mg-digital.png" alt="" width="60%" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body-width body-height1-active">
        <div className="container">
          <div className="col-12">
            <div className="d-flex mb-4">
              <motion.div
                animate={{ mixBlendMode: "difference" }}
                className="line mt-1 mt-lg-2 me-2"
              ></motion.div>
              <div className="content-font">
                <Fade bottom cascade>
                  <motion.h1
                    className="my-auto"
                    animate={{ mixBlendMode: "difference" }}
                  >
                    LATEST NEWS
                  </motion.h1>
                </Fade>
              </div>
            </div>
            <div className="content-font-4">
              <Fade bottom cascade>
                <motion.h2
                  animate={{ mixBlendMode: "difference" }}
                >
                  {homePageElements?.acf?.news_intro_text}
                </motion.h2>
              </Fade>
            </div>
          </div>
          <motion.div className="mt-5" animate={{ mixBlendMode: "difference" }}>
            <Fade bottom cascade>
              <input
                type="button"
                value="see all news"
                className="btn btn-outline-white rounded-pill px-lg-5 mt-2"
                onClick={() => router.push("/news")}
              />
            </Fade>
          </motion.div>
        </div>
      </div>
      <PostsSection navbar={navbar} />

      <div className="body-width join-section">
        <div className="container">
          <div className="col-12">
            <div className="join-background">
              <img src="/assets/img/join.jpg" alt="" />
            </div>
            <div className="d-flex mb-4">
              <motion.div
                animate={{ mixBlendMode: "difference" }}
                className="line mt-md-2 mt-1 me-2"
              ></motion.div>
              <div className="content-font">
                <Fade bottom cascade>
                  <motion.h1
                    className="my-auto"
                    animate={{ mixBlendMode: "difference" }}
                  >
                    JOIN OUR TEAM
                  </motion.h1>
                </Fade>
              </div>
            </div>
            <div className="content-font-4">
              <Fade bottom cascade>
                <motion.h2
                  animate={{ mixBlendMode: "difference" }}
                >
                  {homePageElements?.acf?.join_us_text}
                </motion.h2>
              </Fade>
            </div>
          </div>
          <motion.div className="mt-5" animate={{ mixBlendMode: "difference" }}>
            <Fade bottom cascade>
              <a href="/contact-us">
                <input
                  type="button"
                  value="get in touch"
                  className="btn btn-outline-white rounded-pill px-lg-4 mt-1"
                />
              </a>
            </Fade>
          </motion.div>
        </div>
      </div>
      <div className="scroll">
        <div className="RightToLeft">
          <p>{homePageElements?.acf?.reach_marquee_top} —</p>
          <p>{homePageElements?.acf?.reach_marquee_top} —</p>
          <p>{homePageElements?.acf?.reach_marquee_top} —</p>
        </div>
        <div className="LeftToRight">
          <p>{homePageElements?.acf?.reach_marquee_bottom} —</p>
          <p>{homePageElements?.acf?.reach_marquee_bottom} —</p>
          <p>{homePageElements?.acf?.reach_marquee_bottom} —</p>
        </div>
      </div>
    </div>
  );
}

export default Hompage;
