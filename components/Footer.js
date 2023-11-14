"use client";
import { useCallback, useState, React } from "react";
import { Fade } from "react-reveal";
import Link from "next/link";
import useGetFetch from "@/hooks/useGetFetch";

const Footer = ({ textEnter, textLeave, txtEnter }) => {
  const { data: offices } = useGetFetch("/wp-json/wp/v2/office");
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const toggleFunc = useCallback(() => setToggle(!toggle));

  return (
    <div className="footer-width">
      <div className="container">
        <div className="col-12">
          <div className="row justify-content-between">
            {/* <div className="col-md-12">
              <div className="row">
                <div className="d-block d-md-none">
                  <button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                    className="btn btn-outline-white rounded-pill px-lg-4 py-lg-2"
                  >
                    Quick Links
                  </button>
                </div>
              </div>
            </div> */}
            <div className="d-block d-md-none">
              {/* <Collapse in={open}>
                <div id="example-collapse-text"> */}
              <div className="col-md-6">
                <div className="col-md-12">
                  <div className="row justify-content-between">
                    <div className="col-md-4 col-6">
                      <div className="footer-name-header">
                        <h4 onMouseEnter={textEnter} onMouseLeave={textLeave}>
                          Navigation
                        </h4>
                      </div>
                      <div className="footer-name-header">
                        <a href="/">
                          <h5 onMouseEnter={textEnter} onMouseLeave={textLeave}>
                            Home
                          </h5>
                        </a>

                        <a href="/about-us">
                          <h5 onMouseEnter={textEnter} onMouseLeave={textLeave}>
                            About
                          </h5>
                        </a>
                        <a href="/our-brands">
                          <h5 onMouseEnter={textEnter} onMouseLeave={textLeave}>
                            Brands
                          </h5>
                        </a>
                        <a href="/news">
                          <h5 onMouseEnter={textEnter} onMouseLeave={textLeave}>
                            News
                          </h5>
                        </a>
                        <a href="/contact-us">
                          <h5 onMouseEnter={textEnter} onMouseLeave={textLeave}>
                            Careers
                          </h5>
                        </a>
                        <a href="/contact-us">
                          <h5 onMouseEnter={textEnter} onMouseLeave={textLeave}>
                            Contact
                          </h5>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="footer-name-header">
                        <h4 onMouseEnter={textEnter} onMouseLeave={textLeave}>
                          Legal
                        </h4>
                      </div>
                      <div className="footer-name-header">
                        <a
                          href="https://info.mg.com.gh/legal/cookie-policy/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <h5 onMouseEnter={textEnter} onMouseLeave={textLeave}>
                            Cookies
                          </h5>
                        </a>
                        <a
                          href="https://info.mg.com.gh/legal/privacy-policy/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <h5 onMouseEnter={textEnter} onMouseLeave={textLeave}>
                            Privacy
                          </h5>
                        </a>
                        <a
                          href="https://info.mg.com.gh/legal/terms"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <h5 onMouseEnter={textEnter} onMouseLeave={textLeave}>
                            Terms
                          </h5>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="footer-name-header">
                        <h4 onMouseEnter={textEnter} onMouseLeave={textLeave}>
                          Offices
                        </h4>
                      </div>
                      <div className="footer-name-header">
                        {offices?.map((ele, i) => {
                          return (
                            <h5
                              onMouseEnter={textEnter}
                              onMouseLeave={textLeave}
                              key={i}
                            >
                              {ele?.name}
                            </h5>
                          );
                        })}

                        <a href="/contact-us">
                          <h5 onMouseEnter={textEnter} onMouseLeave={textLeave}>
                            See all
                          </h5>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="row justify-content-between mt-4 d-none d-md-flex">
                    <div className="col-md-4">
                      <img
                        src="/assets/img/MEDIA_GENERAL.png"
                        alt=""
                        className="img-fluid footer-logo"
                        onMouseEnter={textEnter}
                        onMouseLeave={textLeave}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="d-flex footer-base">
                        <h4 onMouseEnter={textEnter} onMouseLeave={textLeave}>
                          {" "}
                          ©2023 Media General | All Rights Reserved.{" "}
                          <span className="">Powered By MG Digital</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* </div>
              </Collapse> */}
            </div>

            <div className="col-md-6 d-none d-md-block">
              <div className="col-md-12">
                <div className="row justify-content-between">
                  <div className="col-md-4 col-6">
                    <div className="footer-name-header">
                      <h4 onMouseEnter={textEnter} onMouseLeave={textLeave}>
                        Navigation
                      </h4>
                    </div>
                    <div className="footer-name-header">
                      <a href="/">
                        <h5 onMouseEnter={textEnter} onMouseLeave={textLeave}>
                          Home
                        </h5>
                      </a>
                      <a href="/about-us">
                        <h5 onMouseEnter={textEnter} onMouseLeave={textLeave}>
                          About
                        </h5>
                      </a>
                      <a href="/our-brands">
                        <h5 onMouseEnter={textEnter} onMouseLeave={textLeave}>
                          Brands
                        </h5>
                      </a>
                      <a href="/news">
                        <h5 onMouseEnter={textEnter} onMouseLeave={textLeave}>
                          News
                        </h5>
                      </a>
                      <a href="">
                        <h5 onMouseEnter={textEnter} onMouseLeave={textLeave}>
                          Careers
                        </h5>
                      </a>
                      <a href="">
                        <h5 onMouseEnter={textEnter} onMouseLeave={textLeave}>
                          Contacts
                        </h5>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="footer-name-header">
                      <h4 onMouseEnter={textEnter} onMouseLeave={textLeave}>
                        Legal
                      </h4>
                    </div>
                    <div className="footer-name-header">
                      <a
                        href="https://info.mg.com.gh/legal/cookie-policy/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h5 onMouseEnter={textEnter} onMouseLeave={textLeave}>
                          Cookies
                        </h5>
                      </a>
                      <a
                        href="https://info.mg.com.gh/legal/privacy-policy/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h5 onMouseEnter={textEnter} onMouseLeave={textLeave}>
                          Privacy
                        </h5>
                      </a>
                      <a
                        href="https://info.mg.com.gh/legal/terms"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h5 onMouseEnter={textEnter} onMouseLeave={textLeave}>
                          Terms
                        </h5>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="footer-name-header">
                      <h4 onMouseEnter={textEnter} onMouseLeave={textLeave}>
                        Offices
                      </h4>
                    </div>
                    <div className="footer-name-header">
                      {offices?.map((ele) => {
                        return (
                          <h5 onMouseEnter={textEnter} onMouseLeave={textLeave}>
                            {ele?.name}
                          </h5>
                        );
                      })}

                      <a href="/contact-us">
                        <h5 onMouseEnter={textEnter} onMouseLeave={textLeave}>
                          See all
                        </h5>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="row justify-content-between mt-4 d-none d-md-flex">
                  <div className="col-md-4">
                    <img
                      src="/assets/img/logo1.svg"
                      alt=""
                      className="img-fluid footer-logo"
                      onMouseEnter={textEnter}
                      onMouseLeave={textLeave}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="d-flex footer-base">
                      <h4 onMouseEnter={textEnter} onMouseLeave={textLeave}>
                        {" "}
                        ©2023 Media General Ghana Ltd | All Rights Reserved.
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 align-content-between d-flex d-md-block pos-rel">
              <div className="row justify-content-end align-items-end g-5">
                <div className="col-md-12">
                  <div className="ms-md-5">
                    <div className="footer-name-header sm-font">
                      <h4 onMouseEnter={textEnter} onMouseLeave={textLeave}>
                        Subcribe to our Newsletter
                      </h4>
                    </div>
                    <div
                      className="footer-textbox"
                      onMouseEnter={textEnter}
                      onMouseLeave={textLeave}
                    >
                      <input
                        type="text"
                        name=""
                        id=""
                        className="custom-textbox"
                        placeholder="Email"
                      />
                      <img
                        src="/assets/img/textbox-arrow.png"
                        alt=""
                        className="icon-position"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-12 justify-content-end d-flex align-items-end">
                  <div className="justify-content-end">
                    <div className="d-flex socials mt-3 mt-md-0">
                      <a
                        href="https://www.facebook.com/mediageneralghana"
                        target="_blank"
                      >
                        <img
                          src="/assets/img/facebook.svg"
                          alt="Facebook"
                          className="me-3"
                        />
                      </a>
                      <a
                        href="https://www.instagram.com/mediagenerals"
                        target="_blank"
                      >
                        <img
                          src="/assets/img/instagram.svg"
                          alt="Instagram"
                          className="me-3"
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/mediageneralgh"
                        target="_blank"
                      >
                        <img
                          src="/assets/img/linkedin.svg"
                          alt="LinkedIn"
                          className="me-3"
                        />
                      </a>
                      <a
                        href="https://twitter.com/MediaGeneralGH"
                        target="_blank"
                      >
                        <img src="/assets/img/twitter.svg" alt="Twitter" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row justify-content-between mt-4 d-flex d-md-none">
                <div className="col-md-4">
                  <img
                    src="/assets/img/logo1.svg"
                    alt=""
                    className="img-fluid footer-logo"
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                  />
                </div>
                <div className="col-md-8">
                  <div className="d-flex footer-base">
                    <h4 onMouseEnter={textEnter} onMouseLeave={textLeave}>
                      {" "}
                      ©2023 Media General Ghana Ltd | All Rights Reserved.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
