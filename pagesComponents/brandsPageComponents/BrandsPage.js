"use client";
import { motion } from "framer-motion";
import { Fade } from "react-reveal";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useRouter } from "next/navigation";
import BrandsSection from "./BrandsSection";
const BrandsPage = ({ textEnter, textLeave }) => {
  let brandpage = useSelector((state) => state.news.allBrandPageTexts);

  let allArrayYears = useSelector((state) => state.articles.years);
  const router = useRouter();
  const [brandClicked, setBrandClicked] = useState(false);
  if (typeof document !== "undefined") {
    brandClicked
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
  }
  return (
    <>
      <div className="body-width section-padding">
        <div className="container">
          <div className="col-12">
            <div className="row align-items-end">
              <div className="col-md-12 col-12">
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
                        OUR BRANDS
                      </motion.h1>
                    </Fade>
                  </div>
                </div>
                <div className="content-font-4">
                  <Fade left cascade>
                    <motion.h2
                      onMouseEnter={textEnter}
                      onMouseLeave={textLeave}
                      animate={{ mixBlendMode: "difference" }}
                    >
                      {brandpage?.acf?.headline}
                    </motion.h2>
                  </Fade>
                  <Fade left cascade>
                    <h5
                      dangerouslySetInnerHTML={{
                        __html: brandpage?.acf?.description,
                      }}
                    ></h5>
                  </Fade>
                </div>
              </div>
              {/* <div className="col-md-6 col-12">
                <div className="row mr-sm">
                  <div className="col-md-3 col-6">
                    <input
                      type="button"
                      className="btn btn-outline-dark rounded-pill btn-font"
                      value="All"
                    />
                  </div>
                  <div className="col-md-3 col-6">
                    <input
                      type="button"
                      className="btn btn-outline-dark rounded-pill btn-font"
                      value="News"
                    />
                  </div>
                  <div className="col-md-3 col-6">
                    <input
                      type="button"
                      className="btn btn-outline-dark rounded-pill btn-font"
                      value="Economy"
                    />
                  </div>
                  <div className="col-md-3 mb-md-4 col-6">
                    <input
                      type="button"
                      className="btn btn-outline-dark rounded-pill btn-font"
                      value="LifeStyle"
                    />
                  </div>
                  <div className="col-md-3 col-6">
                    <input
                      type="button"
                      className="btn btn-outline-dark rounded-pill btn-font"
                      value="Sports"
                    />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <BrandsSection
        brandClicked={brandClicked}
        setBrandClicked={setBrandClicked}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <div className="body-width next-article-div">
        <div className="container">
          <div className="col-12 d-flex justify-content-center">
            <div
              className="next-text-cover cursor-pointer"
              onClick={() => router.push("/news")}
            >
              <h6>Next Page</h6>
              <h4 className="">Latest News</h4>
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
export default BrandsPage;
