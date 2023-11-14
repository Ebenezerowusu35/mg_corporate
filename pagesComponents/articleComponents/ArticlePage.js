// "use client";
import moment from "moment";
import { Fade } from "react-reveal";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import { setCurrentIdx } from "@/redux/articleSlice";

const ArticlePage = ({ textEnter, textLeave }) => {
  const { slug } = useParams();

  let allArrayPosts = useSelector((state) => state.articles.arrayIds);
  let currentIndex = useSelector((state) => state.articles.currentIndex);
  const router = useRouter();
  const [currentPost, setCurrentPost] = useState(
    slug || allArrayPosts[currentIndex]
  );

  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://cms.mg.com.gh/wp-json/wp/v2/posts?slug=${currentPost}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const onNextArticle = () => {
    let nextId = parseInt(currentIndex);
    if (nextId < allArrayPosts.length - 1) {
      var nextArrayId = allArrayPosts[currentIndex + 1];
      var nextSlug = nextArrayId;
      dispatch(setCurrentIdx(currentIndex + 1));
      router.push(`/article/${nextSlug}`);
    } else {
      let nextSlug = allArrayPosts[0];
      dispatch(setCurrentIdx(0));
      router.push(`/article/${nextSlug}`);

      nextId = 0;
    }
  };

  return (
    <>
      <div className="content-width-2">
        <div className="container">
          <div className="col-12 col-md-12">
            <div className="row">
              <div className="col-md-6 side-fix col-12">
                <div
                  className="d-flex mb-4 "
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >
                  <div className="content-font1">
                    <div>
                      <Fade bottom cascade>
                        <h1 className="my-auto">
                          {moment(data[0]?.date).format("LL")} |{" "}
                          {data[0]?.x_categories}
                        </h1>
                      </Fade>
                    </div>
                    <div className="word-cover">
                      <Fade left cascade>
                        <h2
                          dangerouslySetInnerHTML={{
                            __html: data[0]?.title?.rendered,
                          }}
                        ></h2>
                      </Fade>
                    </div>
                    <div className="share-text">
                      <h1>Share</h1>
                    </div>

                    <div className="d-flex socials1">
                      <a
                        href="https://www.linkedin.com/company/mediageneralgh"
                        target="_blank"
                      >
                        <div>
                          <img
                            src="/assets/img/linkedIn.png"
                            alt="LinkedIn"
                            className="me-3 socials-color"
                          />
                        </div>
                      </a>
                      <a
                        href="https://twitter.com/MediaGeneralGH"
                        target="_blank"
                      >
                        <div>
                          <img
                            src="/assets/img/twit.png"
                            alt="Twitter"
                            className="me-3 socials-color"
                          />
                        </div>
                      </a>
                      <a href="" target="_blank">
                        <div>
                          <img
                            src="/assets/img/fb.png"
                            alt="Facebook"
                            className="me-3 socials-color"
                          />
                        </div>
                      </a>
                    </div>

                    <div className="mt-md-5 mobile-space">
                      <a href="/news">
                        <div className="d-flex my-auto">
                          <div className="">
                            <img
                              src="/assets/img/arrow-left.png"
                              alt=""
                              className="img-fluid left-arrow-width my-auto"
                            />
                          </div>
                          <div className="back-mg ms-2 my-auto">
                            <h6 className="my-auto">Back to news</h6>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-center col-12">
                <div className="row">
                  <div className="content-cover">
                    <div className="col-md-12">
                      <div className="news-img-cover2">
                        <img
                          src={data[0]?.featured_media_src_url}
                          alt=""
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mt-md-3 mt-3 col-12">
                      <div className="content-cover">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: data[0]?.content?.rendered,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body-width next-article-div">
        <div className="container">
          <div className="col-12 d-flex justify-content-center">
            <div
              className="next-text-cover cursor-pointer"
              onClick={onNextArticle}
            >
              <h4 className="">Next Article</h4>
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
export default ArticlePage;
