"use client";
import { useState } from "react";
import useGetFetch from "@/hooks/useGetFetch";
import { useParams, usePathname} from "next/navigation";

const Navbar = ({ textEnter, textLeave }) => {
  const pathname = usePathname();
  const { year, slug } = useParams();
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked((prev) => !prev);
  };
  if (typeof document !== "undefined") {
    clicked
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
  }
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY >= 100) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground);
  }

  const [cursorVariant, setCursorVariant] = useState("default");

  const vart = {
    default: { backgroundColor: "white", mixBlendMode: "difference" },
  };
  const txtLeave = () => setCursorVariant("default");
  const { data: dataResources } = useGetFetch("/wp-json/wp/v2/posts");

  return (
    <>
      <nav
        className={
          clicked | !navbar
            ? "navbar-width1 fixed-top"
            : "navbar-width fixed-top"
        }
      >
        <div className="col-lg-12">
          <div className="d-flex justify-content-between align-items-center">
            <div
              className={navbar ? "logo-size" : "logo-size-active"}
            >
              <a href="/">
                <img
                  src="/assets/img/logo1.svg"
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
            <div
              className="hamburger-menu cursor-pointer"
              onClick={handleClick}
            >
              {clicked ? (
                <div
                  className="d-flex hamburger-cover1"
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >
                  <h2 className="close-text">Close</h2>
                  <div className="hamburger-line-22 mt-2"></div>
                </div>
              ) : (
                <div
                  className="hamburger-cover"
                >
                  <div
                    className={
                      navbar
                        ? "hamburger-line-1"
                        : pathname === "/our-brands" ||
                          pathname === "/news" ||
                          pathname === `/news/${year}/${slug}` ||
                          pathname === `/article/${slug}`
                        ? "hamburger-line-111"
                        : "hamburger-line-11"
                    }
                  ></div>
                  <div
                    className={
                      navbar
                        ? "hamburger-line-2"
                        : pathname === "/our-brands" ||
                          pathname === "/news" ||
                          pathname === `/news/${year}/${slug}` ||
                          pathname === `/article/${slug}`
                        ? "hamburger-line-2222"
                        : "hamburger-line-222"
                    }
                  ></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      <div
        className={clicked ? "hamburger-content-active" : "hamburger-content"}
      >
        <div className="nav-content-width">
          <div className="container pos">
            <div className="col-12">
              <div className="row">
                <div className="col-md-6 mb-4 mb-md-0">
                  <div
                    className="content-font-1"
                  >
                    <a href="/">
                      <h4 className={clicked ? "text-h-cover" : "text-hover"}>
                        Home
                        <div className="under-line"></div>
                      </h4>
                    </a>
                    <a href="/about-us">
                      <h4 className={clicked ? "text-h-cover" : "text-hover"}>
                        About
                        <div className="under-line"></div>
                      </h4>
                    </a>
                    <a href="/companies">
                      <h4 className={clicked ? "text-h-cover" : "text-hover"}>
                        Group Companies
                        <div className="under-line"></div>
                      </h4>
                    </a>
                    <a href="/our-brands">
                      <h4 className={clicked ? "text-h-cover" : "text-hover"}>
                        Brands
                        <div className="under-line"></div>
                      </h4>
                    </a>
                    <a href="/news">
                      <h4 className={clicked ? "text-h-cover" : "text-hover"}>
                        News
                        <div className="under-line"></div>
                      </h4>
                    </a>
                    {/* <a href="">
                      <h4 className={clicked ? "text-h-cover" : "text-hover"}>
                        CSR
                        <div className="under-line"></div>
                      </h4>
                    </a> */}
                    <a href="/contact-us">
                      <h4 className={clicked ? "text-h-cover" : "text-hover"}>
                        Contact
                        <div className="under-line"></div>
                      </h4>
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="content-font-11 d-md-block d-none">
                    <h4
                      className="ms-4 mb-4"
                    >
                      Latest News
                    </h4>
                  </div>
                  <div
                    className="d-md-flex d-none"
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                  >
                    {dataResources?.slice(0, 2)?.map((ele, i) => {
                      return (
                        <div className="d-block news-cover ms-4" key={i}>
                          <div
                            className={
                              clicked
                                ? "news-img-cover"
                                : "news-img-cover-hover"
                            }
                          >
                            <img src={ele?.featured_media_src_url} alt="" />
                          </div>
                          <div className="title-font">
                            <h4
                              className="text-white"
                              dangerouslySetInnerHTML={{
                                __html: ele?.title?.rendered,
                              }}
                            ></h4>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex socials2">
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
                <a href="https://twitter.com/MediaGeneralGH" target="_blank">
                  <img
                    src="/assets/img/twitter.svg"
                    alt="Twitter"
                    className="me-3"
                  />
                </a>
              </div>
            </div>
            <div
              className="col-12"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              <div className="hr-color mt-3"></div>
            </div>
            <div className="col-12">
              <div className="d-md-flex d-block justify-content-between mt-3">
                <div
                  className="d-flex nav-base"
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >
                  <a
                    href="https://info.mg.com.gh/legal/cookie-policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h4 className={clicked ? "text-h-cover" : "text-hover"}>
                      Cookies
                    </h4>
                  </a>

                  <a
                    href="https://info.mg.com.gh/legal/privacy-policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h4
                      className={
                        clicked ? "text-h-cover ms-4" : "text-hover ms-4"
                      }
                    >
                      Privacy
                    </h4>
                  </a>
                  <a
                    href="https://info.mg.com.gh/legal/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h4
                      className={
                        clicked ? "text-h-cover ms-4" : "text-hover ms-4"
                      }
                    >
                      Terms
                    </h4>
                  </a>
                  <a href="/contact-us" className="mt-0">
                    <h4
                      className={
                        clicked ? "text-h-cover ms-4" : "text-hover ms-4"
                      }
                    >
                      Careers
                    </h4>
                  </a>
                </div>
                <div
                  className="d-flex nav-base"
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >
                  <h4 className={clicked ? "text-h-cover" : "text-hover"}>
                    {" "}
                    ©2022 Media General | All Rights Reserved.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
