"use client";
import { Fade } from "react-reveal";
import { motion } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";

const ContactUsPage = ({ textEnter, textLeave }) => {
  let offices = useSelector((state) => state.news.allOffices);

  const [currentPlace, setCurrentPlace] = useState("51");

  const handlePlaceClick = (e) => {
    setCurrentPlace(e.target.id);
  };
  return (
    <>
      <div className="content-width-4">
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
                    <h1 className="my-auto">CONTACT US</h1>
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
                    <h2 className="cont-h2-2">
                      Have questions, looking to join our{" "}
                      <span> team or want to know more about</span> advertising
                      with us?{" "}
                    </h2>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="hr-2"></div>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-md-3">
                <div className="contact-footer">
                  <div>
                    <h4>Advertise</h4>
                  </div>
                  <a href="mailto:ads@mg.com.gh?subject=I%20want%20to%20advertise">
                    <h3>ads@mg.com.gh</h3>
                    <h5>+233 302763458</h5>
                    <h5>+233 302763462</h5>
                  </a>
                </div>
                <div className="hr-3"></div>
              </div>
              <div className="col-md-3">
                <div className="contact-footer">
                  <div>
                    <h4>Careers</h4>
                  </div>
                  <a href="mailto:careers@mg.com.gh?subject=Jobs">
                    <h3>careers@mg.com.gh</h3>
                  </a>
                </div>
                <div className="hr-3"></div>
              </div>
              <div className="col-md-3">
                <div className="contact-footer">
                  <div>
                    <h4>Press inquiries</h4>
                  </div>
                  <a href="mailto:press@mg.com.gh?subject=Press%20inquiry">
                    <h3>press@mg.com.gh</h3>
                  </a>
                </div>
                <div className="hr-3"></div>
              </div>
              <div className="col-md-3">
                <div className="contact-footer">
                  <div>
                    <h4>General</h4>
                  </div>
                  <a href="mailto:info@mg.com.gh?subject=General">
                    <h3>info@mg.com.gh</h3>
                  </a>
                </div>
                <div className="hr-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="office-section">
        <div className="container">
          <div className="col-12 col-md-12">
            <div className="row">
              <div className="col-12 col-md-12">
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
                        OUR OFFICES
                      </motion.h1>
                    </Fade>
                  </div>
                </div>
              </div>
              <div className="col-12 d-block d-md-none">
                {offices?.map((ele, i) => {
                  return (
                    <div className="row">
                      <div className="col-8">
                        <div className="loc-mobile">
                          <div>
                            <h2>{ele?.name}</h2>
                          </div>
                          <div>
                            <h3>Locaton</h3>
                            <br />
                            <h4
                              dangerouslySetInnerHTML={{
                                __html: ele?.acf?.address,
                              }}
                            ></h4>
                          </div>
                          <div className="mt-4">
                            <h3>Phone</h3>
                            <br />
                            <a href={`tel:+${ele?.acf?.phone_number}`}>
                              <h4 className="text-underline">
                                {ele?.acf?.phone_number}
                              </h4>
                            </a>
                          </div>
                          <div className="">
                            <h3>Email</h3>
                            <br />
                            <h4>{ele?.acf?.email}</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="contact-img-cover">
                          <img src={ele?.acf?.office_image} alt="" />
                        </div>
                        <div className="hr-4"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="col-md-2 mr-t d-none d-md-block">
                {offices?.map((ele, i) => {
                  return (
                    <div className="d-block">
                      <h4
                        type="button"
                        className={
                          currentPlace === `${ele?.id}`
                            ? "h4-active cursor-pointer"
                            : "h4 cursor-pointer"
                        }
                        key={i}
                        id={ele?.id}
                        onClick={(e) => handlePlaceClick(e)}
                      >
                        {ele?.name}
                      </h4>
                    </div>
                  );
                })}
              </div>
              <div className="col-md-10 d-none d-md-block">
                {offices?.map((ele, i) => {
                  return (
                    <div key={i}>
                      {currentPlace === `${ele?.id}` && (
                        <Fade>
                          <div className="row place-content justify-content-between">
                            <div className="col-md-3">
                              <div>
                                <h4>{ele?.name}</h4>
                              </div>
                              <div>
                                <h2>Location</h2>
                                <h3
                                  dangerouslySetInnerHTML={{
                                    __html: ele?.acf?.address,
                                  }}
                                ></h3>
                              </div>
                              <div className="phone-mg">
                                <h2>Phone</h2>
                                <h3>{ele?.acf?.phone_number}</h3>
                              </div>
                              <div className="phone-mg1">
                                <h2>Email</h2>
                                <h3>{ele?.acf?.email}</h3>
                              </div>
                            </div>
                            <div className="col-md-7">
                              <div className="location-img-cover">
                                <img src={ele?.acf?.office_image} alt="" />
                              </div>
                            </div>
                          </div>
                        </Fade>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactUsPage;
