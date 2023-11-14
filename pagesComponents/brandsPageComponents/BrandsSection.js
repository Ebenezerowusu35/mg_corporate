"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import useGetFetch from "@/hooks/useGetFetch";
const BrandsSection = ({
  brandClicked,
  setBrandClicked,
  textEnter,
  textLeave,
}) => {
  let brands = useSelector((state) => state.news.allBrands);

  const { data: tags } = useGetFetch("/wp-json/wp/v2/tags");
  const [currentBrand, setCurrentBrand] = useState([]);
  const handleBrandClick = (ele) => {
    setCurrentBrand(ele);
    setBrandClicked(true);
  };
  const closeBrand = () => {
    setBrandClicked(false);
  };
  return (
    <>
      <div className="body-width brand-section">
        <div className="container">
          <div className="col-12">
            <div className="row">
              {brands?.map((ele, i) => {
                return (
                  <div
                    className="col-md-4 col-12 mb-4"
                    onClick={(e) => handleBrandClick(ele)}
                    key={i}
                  >
                    <div className="brand-card">
                      <div className="brand-img-cover">
                        <img
                          src={ele?.featured_media_src_url || <Skeleton />}
                          alt=""
                          className="img"
                        />
                      </div>
                      <div className="brand-overlay">
                        <img
                          src={ele?.acf?.brand_logo}
                          alt=""
                          className="logo-width"
                        />
                      </div>
                      <div className="brand-card-footer">
                        <div className="d-flex justify-content-between">
                          <div className="d-block">
                            <h4 className="brand-name">
                              {ele?.title?.rendered}
                            </h4>
                            <h3 className="br-name">{ele?.x_tags}</h3>
                          </div>
                          <div>
                            <img
                              src="/assets/img/textbox-arrow.png"
                              alt=""
                              className="footer-arr-width"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          brandClicked ? "member-left-div-active1" : "member-left-div1"
        }
      >
        <img src={currentBrand?.featured_media_src_url} alt="" />
      </div>
      <div
        className={
          brandClicked ? "member-right-div-active1" : "member-right-div1"
        }
      >
        <h4 className="text-dark">
          <div className="member-content-div">
            <div
              className="d-md-flex hamburger-cover1 justify-content-end cursor-pointer d-none my-auto"
              onClick={closeBrand}
            >
              <motion.h2
                animate={{ mixBlendMode: "difference" }}
                className="close-text my-auto"
              >
                Close
              </motion.h2>
              <motion.div
                animate={{ mixBlendMode: "difference" }}
                className="hamburger-line-22 my-auto"
              ></motion.div>
            </div>
            <div
              className={
                brandClicked
                  ? "d-flex hamburger-cover2-active justify-content-end cursor-pointer d-md-none my-auto"
                  : "d-flex hamburger-cover2 justify-content-end cursor-pointer d-md-none my-auto"
              }
              onClick={closeBrand}
            >
              <h2 className="close-text my-auto">Close</h2>
              <div className="hamburger-line-22 my-auto"></div>
            </div>
            <div className="member-content">
              <div className="name-w">
                <div>
                  <img
                    src={currentBrand?.acf?.brand_logo || NaN}
                    alt=""
                    className="brand-logo-width"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="row d-flex justify-content-between member-main-content1">
                  <div className="col-md-6 d-none d-md-block">
                    <motion.h2 animate={{ mixBlendMode: "difference" }}>
                      {currentBrand?.title?.rendered || ""}
                    </motion.h2>
                    {currentBrand?.x_metadata?.date_launched && (
                      <motion.h6 animate={{ mixBlendMode: "difference" }}>
                        Launched:{" "}
                        <span>{currentBrand?.acf?.date_launched}</span>
                      </motion.h6>
                    )}
                    {currentBrand?.acf?.leadership && (
                      <motion.h6 animate={{ mixBlendMode: "difference" }}>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: currentBrand?.acf?.leadership,
                          }}
                        ></span>
                      </motion.h6>
                    )}
                    {currentBrand?.acf?.company && (
                      <motion.h6
                        animate={{ mixBlendMode: "difference" }}
                        className="mt-5"
                      >
                        Related Company{" "}
                        <span>{currentBrand?.acf?.company[0]?.post_title}</span>
                      </motion.h6>
                    )}
                  </div>
                  <div className="col-md-6 col-12">
                    <motion.h2
                      animate={{ mixBlendMode: "difference" }}
                      dangerouslySetInnerHTML={{
                        __html: currentBrand?.content?.rendered || "",
                      }}
                    ></motion.h2>
                    <div>
                      {currentBrand?.acf?.social_media?.facebook && (
                        <a
                          href={currentBrand?.acf?.social_media?.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/assets/img/fb.png"
                            alt=""
                            className="socials-width me-2 cursor-pointer"
                          />
                        </a>
                      )}
                      {currentBrand?.acf?.social_media?.instagram && (
                        <a
                          href={currentBrand?.acf?.social_media?.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/assets/img/insta.png"
                            alt=""
                            className="socials-width me-2 cursor-pointer"
                          />
                        </a>
                      )}
                      {currentBrand?.acf?.social_media?.twitter && (
                        <a
                          href={currentBrand?.acf?.social_media?.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/assets/img/twit.png"
                            alt=""
                            className="socials-width cursor-pointer"
                          />
                        </a>
                      )}
                    </div>
                    {currentBrand?.acf?.brand_website && (
                      <a
                        href={currentBrand?.acf?.brand_website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <motion.input
                          animate={{ mixBlendMode: "difference" }}
                          type="button"
                          value="visit website"
                          className="btn btn-outline-white rounded-pill px-lg-5 mt-4"
                          onMouseEnter={textEnter}
                          onMouseLeave={textLeave}
                        />
                      </a>
                    )}
                  </div>
                  <div className="col-12 d-md-none d-block my-5">
                    <motion.h2 animate={{ mixBlendMode: "difference" }}>
                      {currentBrand?.title?.rendered || ""}
                    </motion.h2>
                    {currentBrand?.x_metadata?.date_launched && (
                      <motion.h6 animate={{ mixBlendMode: "difference" }}>
                        Launched:{" "}
                        <span>{currentBrand?.acf?.date_launched}</span>
                      </motion.h6>
                    )}
                    {currentBrand?.acf?.leadership && (
                      <motion.h6 animate={{ mixBlendMode: "difference" }}>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: currentBrand?.acf?.leadership,
                          }}
                        ></span>
                      </motion.h6>
                    )}
                    {currentBrand?.acf?.company && (
                      <motion.h6
                        animate={{ mixBlendMode: "difference" }}
                        className="mt-5"
                      >
                        Related Company:{" "}
                        <span>{currentBrand?.acf?.company[0]?.post_title}</span>
                      </motion.h6>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </h4>
      </div>
    </>
  );
};
export default BrandsSection;
