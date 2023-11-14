"use client";
import moment from "moment/moment.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { Fade } from "react-reveal";
import { useRef } from "react";

import PagePagination from "../../components/PagePagination.js";
import {
  setCategoryIds,
  setCurrentIdx,
  setPostIds,
} from "@/redux/articleSlice.js";
import { useParams, useRouter, useSearchParams } from "next/navigation.js";
import {
  setCategory,
  setCategorySlug,
  setCurrentPage,
  setYear,
} from "@/redux/newsSlice.js";

const NewsSection = ({ setShowCat, showCat, setShowYear, showYear }) => {
  const [dataResources, setDataResources] = useState([]);
  const { year, slug } = useParams();
  const [userInput, setUserInput] = useState({
    category: "",
    year: "",
  });
  const [totalPage, setTotalPage] = useState(1);

  const searchParams = useSearchParams();

  let page = searchParams.get("page")

  // const location = useLocation();

  // useEffect(() => {
  //   if (location.pathname === "/news") {
  //     dispatch(setCategory(null));
  //     dispatch(setYear(null));
  //     dispatch(setCategorySlug(null));
  //   }
  // }, []);
  const handleUserInput = (e) => {
    setUserInput((userInput) => ({
      ...userInput,
      [e.target.name]: e.target.value,
    }));
  };

  let { category, yearNum, categorySlug, currentPage } = useSelector(
    (state) => state.news
  );

  const router = useRouter();
  const dispatch = useDispatch();
  let allArrayPosts = useSelector((state) => state.articles.arrayIds);
  let foo = useSelector((state) => state.articles);

  const [isloading, setLoading] = useState(false);
  const [categoryId, setCategoryId] = useState([]);

  let allCats = useSelector((state) => state.articles.categoryIds);
  // useEffect(() => {
  //   if (location.pathname === "/news" && location.search === "") {
  //     router.push("/news?page=1");
  //   }
  // }, [location]);
  useEffect(() => {
    axios
      .get("https://cms.mg.com.gh/wp-json/wp/v2/categories", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        let map = new Map();
        const ids = res.data.map((ele) => map.set(ele?.id, ele?.slug));
        dispatch(setCategoryIds(map));
        setCategoryId(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const onCategoryChange = (e, id, slug) => {
    router.push(
      `/news/${yearNum ?? year ?? "all"}/${slug ?? category ?? "all"}`
    );
    let currentPage = "1";
    dispatch(setCurrentPage(currentPage));
    dispatch(setCategory(id));
    dispatch(setCategorySlug(slug));
  };
  // const onYearChange = (e, ele) => {
  //   router.push(`/news/${ele ?? "all"}/${slug ?? "all"}`);
  //   dispatch(setYear(ele));
  // };

  const articlePage = (e, i, id) => {
    router.push(`/article/${i}`);
    let index = allArrayPosts.findIndex((ele) => ele == i);
    dispatch(setCurrentIdx(index));
  };

  const dates = [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014];
  let id;

  useEffect(() => {
    if (page == "") {
      page = "1";
    }
    if (parseInt(page)) {
      dispatch(setCurrentPage(page));
    }
  }, [page]);

  useEffect(() => {
    let url = "";
    if (category) {
      url = `https://cms.mg.com.gh/wp-json/wp/v2/posts?per_page=9&categories=${category}&page=${currentPage}`;
    } else {
      url = `https://cms.mg.com.gh/wp-json/wp/v2/posts?per_page=9&page=${currentPage}`;
    }
    setLoading(false);
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        setTotalPage(res.headers["x-wp-totalpages"]);
        setDataResources(res.data);
        setLoading(true);
        // const arrayids = res.data.map((ele) => ele?.slug);
        // dispatch(setArrayIds(arrayids));
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response);
      });
  }, [currentPage]);

  const toggleShowCat = () => {
    setShowCat(!showCat);
  };

  const toggleShowYear = () => {
    setShowYear(!showYear);
  };

  const clearFilter = () => {
    dispatch(setCategory(null));
    dispatch(setYear(null));
    dispatch(setCategorySlug(null));
    router.push(`/news`);
  };

  return (
    <div className="body-width post-section-bg">
      <div className="container">
        <div className="col-12">
          <div className="d-md-flex mt-md-4 mobile-bottom">
            {/* <div className="custom-cover me-md-3 mb-3 mt-5 mt-md-0 mb-md-0">
              <div
                className="d-flex custom-select cursor-pointer"
                onClick={toggleShowYear}
              >
                <div>
                  <img
                    src="/assets/img/arrow-down.png"
                    alt=""
                    className="arr-down"
                  />
                </div>
                <div className="content-text">{yearNum ?? "Year"}</div>
              </div>
              {showYear && (
                <div>
                  <ul className="list-cover">
                    {dates?.map((ele, i) => (
                      <li
                        key={i}
                        className="list-items"
                        onClick={(e) => onYearChange(e, ele)}
                      >
                        <h4>{ele}</h4>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div> */}
            <div className="custom-cover">
              <div
                className="d-flex custom-select cursor-pointer"
                onClick={toggleShowCat}
              >
                <div>
                  <img
                    src="/assets/img/arrow-down.png"
                    alt=""
                    className="arr-down"
                  />
                </div>
                <div className="text-capitalize content-text">
                  {categorySlug ?? "Category"}
                </div>
              </div>
              {showCat && (
                <div>
                  <ul className="list-cover">
                    {categoryId?.map((ele, i) => (
                      <li
                        key={i}
                        className="list-items"
                        onClick={(e) => onCategoryChange(e, ele?.id, ele?.slug)}
                      >
                        <h4
                          dangerouslySetInnerHTML={{
                            __html: ele?.name,
                          }}
                          className="text-capitalize"
                        ></h4>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            {(category || year) && (
              <div onClick={clearFilter} className="ms-md-3 mt-3 mt-md-0">
                <button className="btn btn-dark rounded-pill">
                  clear filter
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="col-12">
          <div className="row news-pics">
            {isloading ? (
              <>
                {dataResources?.length === 0 ? (
                  <div className="no-data">
                    <i> No News Available</i>
                  </div>
                ) : (
                  dataResources?.map((ele, i, id) => {
                    return (
                      <div className="col-md-4 col-6">
                        <Fade bottom>
                          <div
                            className="tilting-card-wrapper cursor-pointer mb-5"
                            key={i}
                            onClick={(e) =>
                              articlePage(e, (i = ele?.slug), (id = ele?.id))
                            }
                          >
                            <div className="mouse-position-tracker"></div>
                            <div className="mouse-position-tracker"></div>
                            <div className="mouse-position-tracker"></div>
                            <div className="mouse-position-tracker"></div>
                            <div className="mouse-position-tracker"></div>
                            <div className="mouse-position-tracker"></div>
                            <div className="mouse-position-tracker"></div>
                            <div className="mouse-position-tracker"></div>
                            <div className="mouse-position-tracker"></div>
                            <div
                              className="tilting-card-body"
                              style={{
                                backgroundImage: `url(${ele?.featured_media_src_url})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }}
                            >
                              <div className="card-overlay"></div>
                              <div className="card-text">
                                <h4>
                                  {moment(ele?.date).format("LL")} |{" "}
                                  {ele?.x_categories}
                                </h4>
                                <h3
                                  className="text-white"
                                  dangerouslySetInnerHTML={{
                                    __html: ele?.title?.rendered,
                                  }}
                                ></h3>
                              </div>
                            </div>
                          </div>
                        </Fade>
                      </div>
                    );
                  })
                )}
              </>
            ) : (
              <div className="no-data">
                <i className="fas fa-spinner fa-spin mr-2"></i>
              </div>
            )}
          </div>
        </div>
        <div className="justify-content-center mb-5 mb-md-0">
          <PagePagination
            setTotalPage={setTotalPage}
            totalPage={totalPage}
            setCurrentPage={(e) => dispatch(setCurrentPage(e))}
          />
        </div>
      </div>
    </div>
  );
};
export default NewsSection;
