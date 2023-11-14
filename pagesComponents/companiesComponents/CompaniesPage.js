"use client";
import { Fade} from "react-reveal";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const CompaniesPage = ({ textEnter, textLeave }) => {
  const router = useRouter();
  let companies = useSelector((state) => state.news.allCompanies);
  return (
    <>
      <div className="about-bg-cover">
        <img src="/assets/img/company-bg.webp" className="about-bg" />
      </div>
      <div className="content-width-1 content-width-3">
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
                    <h2 className="cont-h2-1">Group Companies </h2>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body-width comapny-section">
        <div className="container">
          <div className="col-12">
            <div className="com-text">
              <h4>Main Group Companies</h4>
            </div>
          </div>
          <div className="col-12">
            <div className="row">
              {companies?.map((ele, i) => {
                return (
                  <div className="col-md-4 col-6" key={i}>
                    <div className="company-logo-cover">
                      <div className="company-logo justify-self-center align-self-center">
                        <img
                          src={ele?.acf?.company_logo || "/assets/img/tv3.png"}
                          alt=""
                        />
                      </div>
                      <div>
                        <h4>{ele?.title?.rendered}</h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="body-width next-article-div">
        <div className="container">
          <div className="col-12 d-flex justify-content-center">
            <div
              className="next-text-cover cursor-pointer"
              onClick={() => router.push("/contact-us")}
            >
              <h6>Next page</h6>
              <h4 className="">Get in touch</h4>
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
export default CompaniesPage;
