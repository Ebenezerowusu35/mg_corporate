import useGetFetch from "@/hooks/useGetFetch";
import { useState } from "react";
const ExecutiveMembersSection = ({
  executiveClicked,
  motion,
  Fade,
  setExecutiveClicked,
}) => {
  const { data: executives } = useGetFetch(
    "/wp-json/wp/v2/people?order=asc&designation=49&per_page=50"
  );
  const { data: name } = useGetFetch("/wp-json/wp/v2/designation/49");
  const [currentExecutive, setCurrentExecutive] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  var executiveIds = [];
  executives?.map((ele, index) => executiveIds?.push(ele?.id));

  const handleExecutiveClick = (e, ele) => {
    setCurrentExecutive(ele);
    setExecutiveClicked(true);
    let indx = executiveIds?.findIndex((num) => num == ele?.id);
    setCurrentIndex(indx);
  };
  const closeExecutive = () => {
    setExecutiveClicked(false);
  };
  const onNextExecutive = () => {
    setExecutiveClicked(false);

    setTimeout(() => {
      setExecutiveClicked(true);
      let nextId = currentIndex;
      if (nextId < executiveIds.length - 1) {
        var nextExcutiveId = executiveIds[currentIndex + 1];
        var nextExecutive = nextExcutiveId;
        setCurrentIndex(currentIndex + 1);
      } else {
        nextExecutive = executiveIds[0];
        setCurrentIndex(0);

        nextId = 0;
      }
      let selectedId;
      let selectedV = [nextExecutive];
      let selectedOrderValues = [];
      executives?.map((ele, i) => {
        selectedId = selectedV?.includes(ele?.id);
        if (selectedId === true) {
          selectedOrderValues.push(ele);
        }
        setCurrentExecutive(selectedOrderValues[0]);
      });
    }, 1000);
  };

  const onPrevExecutive = (e) => {
    setExecutiveClicked(false);

    setTimeout(() => {
      setExecutiveClicked(true);
      let prevId = currentIndex;
      if (prevId > 1) {
        var prevExcutiveId = executiveIds[currentIndex - 1];
        var prevExecutive = prevExcutiveId;
        setCurrentIndex(currentIndex - 1);
      } else {
        prevExecutive = executiveIds[executiveIds.length - 1];
        setCurrentIndex(executiveIds.length - 1);

        prevId = executiveIds.length - 1;
      }
      let selectedId;
      let selectedExecutive = [prevExecutive];
      let selectedExecutiveValues = [];
      executives?.map((ele, i) => {
        selectedId = selectedExecutive?.includes(ele?.id);
        if (selectedId === true) {
          selectedExecutiveValues.push(ele);
        }
        setCurrentExecutive(selectedExecutiveValues[0]);
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
                    {executives?.map((ele, i) => {
                      return (
                        <div
                          className="col-md-3 col-6 cursor-pointer"
                          onClick={(e) => handleExecutiveClick(e, ele)}
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
        className={
          executiveClicked ? "member-left-div-active" : "member-left-div"
        }
      >
        <img
          src={
            currentExecutive?.featured_media_src_url || "/assets/img/image1.png"
          }
          alt=""
        />
      </div>
      <div
        className={
          executiveClicked ? "member-right-div-active" : "member-right-div"
        }
      >
        <h4 className="text-dark">
          <div className="member-content-div">
            <div
              className="d-md-flex hamburger-cover1 justify-content-end cursor-pointer d-none my-auto"
              onClick={closeExecutive}
            >
              <h2 className="close-text my-auto">Close</h2>
              <div className="hamburger-line-22 my-auto"></div>
            </div>
            <div
              className={
                executiveClicked
                  ? "d-flex hamburger-cover2-active justify-content-end cursor-pointer d-md-none my-auto"
                  : "d-flex hamburger-cover2 justify-content-end cursor-pointer d-md-none my-auto"
              }
              onClick={closeExecutive}
            >
              <h2 className="close-text my-auto">Close</h2>
              <div className="hamburger-line-22 my-auto"></div>
            </div>
            <div className="member-content">
              <div className="name-w">
                <h4>{currentExecutive?.title?.rendered}</h4>
                <h3>{currentExecutive?.acf?.role}</h3>
              </div>
              <div className="member-main-content">
                <h2
                  dangerouslySetInnerHTML={{
                    __html: currentExecutive?.content?.rendered,
                  }}
                ></h2>
              </div>
              <div className="member-footer">
                <div className="d-flex justify-content-between">
                  <div className="my-auto">
                    <h4 className="my-auto">
                      {name?.name} / {currentIndex + 1} - {executives?.length}
                    </h4>
                  </div>
                  <div className="d-flex">
                    <img
                      src="/assets/img/arr-left.png"
                      alt=""
                      className="arr-size cursor-pointer"
                      onClick={() => onPrevExecutive()}
                    />
                    <img
                      src="/assets/img/arrow-right.png"
                      alt=""
                      className="arr-size ms-3 cursor-pointer"
                      onClick={() => onNextExecutive()}
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
export default ExecutiveMembersSection;
