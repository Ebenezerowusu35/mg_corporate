"use client";
import { motion } from "framer-motion";
import { Fade, Zoom } from "react-reveal";
import { useState } from "react";
import { useSelector } from "react-redux";
import BoardMembersSection from "@/pagesComponents/aboutPageComponents/BoardMembersSection.js";
import ExecutiveMembersSection from "@/pagesComponents/aboutPageComponents/ExecutiveMembersSection.js";
import SeniorMembersSection from "@/pagesComponents/aboutPageComponents/SeniorMembersSection";
import { useRouter } from "next/navigation";

const AboutUSPage = ({ textEnter, textLeave }) => {
  const [boardClicked, setBoardClicked] = useState(false);
  const [executiveClicked, setExecutiveClicked] = useState(false);
  const [seniorClicked, setSeniorClicked] = useState(false);
  if (typeof document !== "undefined") {
    boardClicked
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
    executiveClicked
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
    seniorClicked
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
  }
  const router = useRouter();

  let aboutpage = useSelector((state) => state.news.allAboutPageTexts);

  return (
    <>
      <div className="about-bg-cover">
        <img src="/assets/img/about-bg.png" className="about-bg" />
      </div>
      <div className="content-width-1">
        <div className="container">
          <div className="col-12">
            <div
              className="d-flex mb-4"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              <div className="line mt-1 mt-lg-2 me-2"></div>
              <div className="content-font">
                <div>
                  <Fade bottom cascade>
                    <h1 className="my-auto">ABOUT US</h1>
                  </Fade>
                </div>
              </div>
            </div>
            <div
              className="content-font-1"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              <div className="content-font-1-h2">
                <Fade left cascade>
                  <div>
                    <h2
                      className="cont-h2-1"
                      dangerouslySetInnerHTML={{
                        __html: aboutpage?.acf?.hero_text,
                      }}
                    ></h2>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body-width media-section">
        <div className="container">
          <div className="col-12">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="company-text">
                  <h2>{aboutpage?.acf?.inner_page?.headline}</h2>
                  <Fade bottom cascade>
                    <h4
                      dangerouslySetInnerHTML={{
                        __html: aboutpage?.acf?.inner_page?.paragraph,
                      }}
                    ></h4>
                  </Fade>
                </div>
              </div>
              <div className="col-md-6">
                <div className="float-md-end image-cover">
                  <img src={aboutpage?.acf?.inner_page?.side_image} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body-width our-values-section">
        <div className="container">
          <div className="col-12">
            <div className="our-values-text">
              <Fade left>
                <h4>Our Core Values </h4>
              </Fade>
            </div>
          </div>
          <div className="col-12">
            <div className="row justify-content-between">
              {aboutpage?.acf?.core_values?.map((ele, i) => {
                return (
                  <div className="col-md-4 mt-md-4" key={i}>
                    <div className="our-values-text">
                      <div className="line-text">
                        <Fade top>
                          <h3>{ele?.value}</h3>
                        </Fade>
                        <div className="underline"></div>
                      </div>
                      <Fade bottom>
                        <h5>{ele?.description}</h5>
                      </Fade>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="body-width body-height1-active">
        <div className="container">
          <div className="col-12">
            <div className="row">
              <div className="col-md-6">
                <div>
                  <div className="d-flex mb-2 mb-md-4">
                    <motion.div
                      animate={{ mixBlendMode: "difference" }}
                      className="line me-2 my-auto"
                    ></motion.div>
                    <div className="content-font-4">
                      <motion.h2
                        className="my-auto"
                        animate={{ mixBlendMode: "difference" }}
                      >
                        <Fade bottom cascade>
                          Our Mission
                        </Fade>
                      </motion.h2>
                    </div>
                  </div>
                  <div className="content-font-5">
                    <motion.h1
                      className="my-auto"
                      animate={{ mixBlendMode: "difference" }}
                    >
                      <Fade bottom>
                        is to lead the creation and delivery of high-quality
                        media content that informs, educates, and entertains our
                        viewers and listeners, while attracting and retaining
                        the best talent to increase shareholder value.
                      </Fade>
                    </motion.h1>
                  </div>
                </div>
                <div className="mt-md-5 mt-4">
                  <div className="d-flex mb-2 mb-md-4 my-auto">
                    <motion.div
                      animate={{ mixBlendMode: "difference" }}
                      className="line me-2 my-auto"
                    ></motion.div>
                    <div className="content-font-4">
                      <motion.h2
                        className="my-auto"
                        animate={{ mixBlendMode: "difference" }}
                      >
                        <Fade bottom cascade>
                          Our Vision
                        </Fade>
                      </motion.h2>
                    </div>
                  </div>
                  <div className="content-font-5">
                    <motion.h1
                      className="my-auto"
                      animate={{ mixBlendMode: "difference" }}
                    >
                      <Fade bottom>
                        is to be the leading media Organization in Africa &
                        beyond by 2025.
                      </Fade>
                    </motion.h1>
                  </div>
                </div>
              </div>
              <div className="col md-6 mt-md-0 mt-5">
                <div>
                  <Zoom>
                    <img
                      src="/assets/img/MEDIA_GENERAL.png"
                      alt=""
                      className="img-fluid"
                    />
                  </Zoom>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body-width our-values-section">
        <div className="container">
          <div className="col-12">
            <div className="row justify-content-between">
              <div className="col-md-6 mt-5">
                <div className="our-values-text">
                  <h4>MG In Numbers</h4>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      {aboutpage?.acf?.in_numbers.map((ele, i) => {
                        return (
                          <div className="col-md-4 col-6 mt-5" key={i}>
                            <div className="mg-num">
                              <h4>{ele?.number}</h4>
                              <div className="line-under"></div>
                              <Fade bottom>
                                <h3>{ele?.description}</h3>
                              </Fade>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <HistorySection /> */}
      <BoardMembersSection
        boardClicked={boardClicked}
        Fade={Fade}
        motion={motion}
        setBoardClicked={setBoardClicked}
      />
      <ExecutiveMembersSection
        executiveClicked={executiveClicked}
        Fade={Fade}
        motion={motion}
        setExecutiveClicked={setExecutiveClicked}
      />
      <SeniorMembersSection
        seniorClicked={seniorClicked}
        setSeniorClicked={setSeniorClicked}
        Fade={Fade}
        motion={motion}
      />

      <div className="body-width next-article-div">
        <div className="container">
          <div className="col-12 d-flex justify-content-center">
            <div
              className="next-text-cover cursor-pointer"
              onClick={() => router.push("/our-brands")}
            >
              <h6>Next page</h6>
              <h4 className="">See our brands</h4>
              <div className="lineunder"></div>
              <div className="arrow-div">
                <img src="/assets/img/textbox-arrow.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUSPage;
