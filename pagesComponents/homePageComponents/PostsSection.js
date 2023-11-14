"use client";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentIdx,
  setAllArticlesIds,
  setArrayIds,
  setPostIds,
  setPosts,
  setYears,
} from "@/redux/articleSlice";
import useGetFetch from "@/hooks/useGetFetch";
import {
  setAllAboutPageTexts,
  setAllBrandPageTexts,
  setAllBrands,
  setAllCompanies,
  setAllHomePageTexts,
  setAllOffices,
} from "@/redux/newsSlice";
import { useRouter } from "next/navigation";

const PostsSection = ({ navbar }) => {
  const [dataResources, setDataResources] = useState([]);

  const router = useRouter();
  const dispatch = useDispatch();
  let allArrayPosts = useSelector((state) => state.articles.arrayIds);
  // const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://cms.mg.com.gh/wp-json/wp/v2/posts?per_page=50", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        setDataResources(res.data);
        dispatch(setPosts(res.data));
        const arrayids = res.data.map((ele) => ele?.slug);
        const allpostIds = res.data.map((ele) => ele?.id);
        const years = res.data.map((ele) => ele?.modified);
        dispatch(setAllArticlesIds(allpostIds));
        dispatch(setYears(years));
        dispatch(setArrayIds(arrayids));
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const articlePage = (e, i, id) => {
    router.push(`/article/${i}`);
    let index = allArrayPosts.findIndex((ele) => ele == i);
    dispatch(setCurrentIdx(index));
  };
  return (
    <div
      className={
        navbar
          ? "body-width post-section-bg"
          : "body-width post-section-bg-active"
      }
    >
      <div className="container">
        <div className="col-12">
          <div className="row justify-content-between">
            {dataResources.slice(0, 9).map((ele, i, id) => {
              return (
                <div className="col-md-4 col-6">
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
                          {moment(ele?.date).format("LL")} | {ele?.x_categories}
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostsSection;
