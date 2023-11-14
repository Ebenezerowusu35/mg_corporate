'use client'
import React, { useState } from "react";
import NewsSection from "./NewsSection";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import {motion} from "framer-motion"
import { Fade } from "react-reveal";

function NewsPage({textEnter, textLeave}) {
  let allArrayYears = useSelector((state) => state.articles.years);
  const router = useRouter();
  const [showCat, setShowCat] = useState(false);
  const [showYear, setShowYear] = useState(false);

  const controlCat = () => {
    if (showCat === true) {
      setShowCat(false);
    }
  };
  const controlYear = () => {
    if (showYear === true) {
      setShowYear(false);
    }
  };
  return (
    <div
      onClick={() => {
        controlCat();
        controlYear();
      }}
    >
      <div className="body-width section-padding">
        <div className="container">
          <div className="col-12">
            <div className="d-flex mb-4">
              <motion.div
                animate={{ mixBlendMode: "difference" }}
                className="line my-auto me-2"
              ></motion.div>
              <div className="content-font my-auto">
                <Fade bottom cascade>
                  <motion.h1
                    className="my-auto"
                    animate={{ mixBlendMode: "difference" }}
                  >
                    NEWS
                  </motion.h1>
                </Fade>
              </div>
            </div>
            <div className="content-font-4">
              <Fade bottom cascade>
                <motion.h2
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                  animate={{ mixBlendMode: "difference" }}
                >
                  The Latest, news, events and launches from our
                  <span className="span">groups and brands.</span>
                </motion.h2>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <NewsSection
        allArrayYears={allArrayYears}
        setShowCat={setShowCat}
        showCat={showCat}
        setShowYear={setShowYear}
        showYear={showYear}
      />
      <div className="body-width next-article-div">
        <div className="container">
          <div className="col-12 d-flex justify-content-center">
            <div
              className="next-text-cover cursor-pointer"
              onClick={() => router.push("/contact-us")}
            >
              <h6>Next Page</h6>
              <h4 className="">Contact us</h4>
              <div className="lineunder"></div>
              <div className="arrow-div">
                <img src="/assets/img/textbox-arrow.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
