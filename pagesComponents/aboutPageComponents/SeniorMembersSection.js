import useGetFetch from "@/hooks/useGetFetch";
import { useState } from "react";

const SeniorMembersSection = ({
  seniorClicked,
  setSeniorClicked,
  motion,
  Fade,
}) => {
  const { data: seniors } = useGetFetch(
    "/wp-json/wp/v2/people?order=asc&designation=50&per_page=50"
  );
  const { data: name } = useGetFetch("/wp-json/wp/v2/designation/50");
  const [currentSenior, setCurrentSenior] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  var seniorIds = [];
  seniors?.map((ele, index) => seniorIds?.push(ele?.id));

  const handleSeniorClick = (e, ele) => {
    setCurrentSenior(ele);
    setSeniorClicked(true);
    let indx = seniorIds?.findIndex((num) => num == ele?.id);
    setCurrentIndex(indx);
  };
  const closeSenior = () => {
    setSeniorClicked(false);
  };
  const onNextSenior = () => {
    setSeniorClicked(false);

    setTimeout(() => {
      setSeniorClicked(true);
      let nextId = currentIndex;
      if (nextId < seniorIds.length - 1) {
        var nextSeniorId = seniorIds[currentIndex + 1];
        var nextSenior = nextSeniorId;
        setCurrentIndex(currentIndex + 1);
      } else {
        nextSenior = seniorIds[0];
        setCurrentIndex(0);

        nextId = 0;
      }
      let selectedId;
      let selectedSenior = [nextSenior];
      let selectedSeniorValues = [];
      seniors?.map((ele, i) => {
        selectedId = selectedSenior?.includes(ele?.id);
        if (selectedId === true) {
          selectedSeniorValues.push(ele);
        }
        setCurrentSenior(selectedSeniorValues[0]);
      });
    }, 1000);
  };

  const onPrevSenior = (e) => {
    setSeniorClicked(false);

    setTimeout(() => {
      setSeniorClicked(true);
      let prevId = currentIndex;
      if (prevId > 1) {
        var prevSeniorId = seniorIds[currentIndex - 1];
        var prevSenior = prevSeniorId;
        setCurrentIndex(currentIndex - 1);
      } else {
        prevSenior = seniorIds[seniorIds.length - 1];
        setCurrentIndex(seniorIds.length - 1);

        prevId = seniorIds.length - 1;
      }
      let selectedId;
      let selectedSenior = [prevSenior];
      let selectedSeniorValues = [];
      seniors?.map((ele, i) => {
        selectedId = selectedSenior?.includes(ele?.id);
        if (selectedId === true) {
          selectedSeniorValues.push(ele);
        }
        setCurrentSenior(selectedSeniorValues[0]);
      });
    }, 1000);
  };
  return (
    <>
      <div className="body-width board-section">
        <div className="container">
          <div className="col-12">
            <div className="row justify-content-between">
              <div className="col-md-12">
                <div className="d-flex mb-4 mb-md-4 my-auto">
                  <motion.div
                    animate={{ mixBlendMode: "difference" }}
                    className="line my-auto me-2"
                  ></motion.div>
                  <div className="content-fon my-auto">
                    <Fade bottom cascade>
                      <motion.h1
                        className="my-auto"
                        animate={{ mixBlendMode: "difference" }}
                      >
                        {name?.name}
                      </motion.h1>
                    </Fade>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    {seniors?.map((ele, i) => {
                      return (
                        <div
                          className="col-md-3 col-6 cursor-pointer"
                          onClick={(e) => handleSeniorClick(e, ele)}
                          key={i}
                        >
                          <div className="card-text-cover">
                            <div className="people-card mb-md-3">
                              <img
                                src={
                                  ele?.featured_media_src_url ||
                                  "/assets/img/image1.png"
                                }
                                alt=""
                              />
                            </div>
                            <div className="people-card-name mb-4">
                              <h4 className="mt-2">{ele?.title?.rendered}</h4>
                              <h3>{ele?.acf?.role}</h3>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={seniorClicked ? "member-left-div-active" : "member-left-div"}
      >
        <img
          src={
            currentSenior?.featured_media_src_url || "/assets/img/image1.png"
          }
          alt=""
        />
      </div>
      <div
        className={
          seniorClicked ? "member-right-div-active" : "member-right-div"
        }
      >
        <h4 className="text-dark">
          <div className="member-content-div">
            <div
              className="d-md-flex hamburger-cover1 justify-content-end cursor-pointer d-none my-auto"
              onClick={closeSenior}
            >
              <h2 className="close-text my-auto">Close</h2>
              <div className="hamburger-line-22 my-auto"></div>
            </div>
            <div
              className={
                seniorClicked
                  ? "d-flex hamburger-cover2-active justify-content-end cursor-pointer d-md-none my-auto"
                  : "d-flex hamburger-cover2 justify-content-end cursor-pointer d-md-none my-auto"
              }
              onClick={closeSenior}
            >
              <h2 className="close-text my-auto">Close</h2>
              <div className="hamburger-line-22 my-auto"></div>
            </div>
            <div className="member-content">
              <div className="name-w">
                <h4>{currentSenior?.title?.rendered}</h4>
                <h3>{currentSenior?.acf?.role}</h3>
              </div>
              <div className="member-main-content">
                <h2
                  dangerouslySetInnerHTML={{
                    __html: currentSenior?.content?.rendered,
                  }}
                ></h2>
              </div>
              <div className="member-footer">
                <div className="d-flex justify-content-between">
                  <div className="my-auto">
                    <h4 className="my-auto">
                      {name?.name} / {currentIndex + 1} - {seniors?.length}
                    </h4>
                  </div>
                  <div className="d-flex">
                    <img
                      src="/assets/img/arr-left.png"
                      alt=""
                      className="arr-size cursor-pointer"
                      onClick={() => onPrevSenior()}
                    />
                    <img
                      src="/assets/img/arrow-right.png"
                      alt=""
                      className="arr-size ms-md-3 ms-3 cursor-pointer"
                      onClick={() => onNextSenior()}
                    />
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
export default SeniorMembersSection;
