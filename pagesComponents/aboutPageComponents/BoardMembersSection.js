import useGetFetch from "@/hooks/useGetFetch";
import { useState } from "react";
const BoardMembersSection = ({
  boardClicked,
  motion,
  Fade,
  setBoardClicked,
}) => {
  const { data: boards } = useGetFetch("/wp-json/wp/v2/people?order=asc&designation=48&per_page=50");
  const { data: name } = useGetFetch("/wp-json/wp/v2/designation/48");

  var boardIds = [];
  boards?.map((ele, index) => boardIds?.push(ele?.id));
  const [currentBoard, setCurrentBoard] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleBoardClick = (e, ele) => {
    setCurrentBoard(ele);
    setBoardClicked(true);
    let indx = boardIds?.findIndex((num) => num == ele?.id);
    setCurrentIndex(indx);
  };
  const closeBoard = () => {
    setBoardClicked(false);
  };

  const onNextBoard = () => {
    setBoardClicked(false);

    setTimeout(() => {
      setBoardClicked(true);
      let nextId = currentIndex;
      if (nextId < boardIds.length - 1) {
        var nextBoardId = boardIds[currentIndex + 1];
        var nextBoard = nextBoardId;
        setCurrentIndex(currentIndex + 1);
      } else {
        nextBoard = boardIds[0];
        setCurrentIndex(0);

        nextId = 0;
      }
      let selectedId;
      let selectedBoard = [nextBoard];
      let selectedBoardValues = [];
      boards?.map((ele, i) => {
        selectedId = selectedBoard?.includes(ele?.id);
        if (selectedId === true) {
          selectedBoardValues.push(ele);
        }
        setCurrentBoard(selectedBoardValues[0]);
      });
    }, 1000);
  };

  const onPrevBoard = (e) => {
    setBoardClicked(false);

    setTimeout(() => {
      setBoardClicked(true);
      let prevId = currentIndex;
      if (prevId > 1) {
        var prevBoardId = boardIds[currentIndex - 1];
        var prevBoard = prevBoardId;
        setCurrentIndex(currentIndex - 1);
      } else {
        prevBoard = boardIds[boardIds.length - 1];
        setCurrentIndex(boardIds.length - 1);

        prevId = boardIds.length - 1;
      }
      let selectedId;
      let selectedBoard = [prevBoard];
      let selectedBoardValues = [];
      boards?.map((ele, i) => {
        selectedId = selectedBoard?.includes(ele?.id);
        if (selectedId === true) {
          selectedBoardValues.push(ele);
        }
        setCurrentBoard(selectedBoardValues[0]);
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
                <div className="people-text">
                  <Fade left>
                    <h4>
                      Meet the people who drive the{" "}
                      <span> business forward</span>
                    </h4>
                  </Fade>
                </div>
              </div>
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
                    {boards?.map((ele, i) => {
                      return (
                        <div
                          className="col-md-3 col-6 cursor-pointer"
                          onClick={(e) => handleBoardClick(e, ele)}
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
        className={boardClicked ? "member-left-div-active" : "member-left-div"}
      >
        <img
          src={currentBoard?.featured_media_src_url || "/assets/img/image1.png"}
          alt=""
        />
      </div>
      <div
        className={
          boardClicked ? "member-right-div-active" : "member-right-div"
        }
      >
        <h4 className="text-dark">
          <div className="member-content-div">
            <div
              className="d-md-flex hamburger-cover1 justify-content-end cursor-pointer d-none my-auto"
              onClick={closeBoard}
            >
              <h2 className="close-text my-auto">Close</h2>
              <div className="hamburger-line-22 my-auto"></div>
            </div>
            <div
              className={
                boardClicked
                  ? "d-flex hamburger-cover2-active justify-content-end cursor-pointer d-md-none my-auto"
                  : "d-flex hamburger-cover2 justify-content-end cursor-pointer d-md-none my-auto"
              }
              onClick={closeBoard}
            >
              <h2 className="close-text my-auto">Close</h2>
              <div className="hamburger-line-22 my-auto"></div>
            </div>
            <div className="member-content">
              <div className="name-w">
                <h4>{currentBoard?.title?.rendered}</h4>
                <h3>{currentBoard?.acf?.role}</h3>
              </div>
              <div className="member-main-content">
                <h2
                  dangerouslySetInnerHTML={{
                    __html: currentBoard?.content?.rendered,
                  }}
                ></h2>
              </div>
              <div className="member-footer">
                <div className="d-flex justify-content-between">
                  <div className="my-auto">
                    <h4 className="my-auto">
                      {name?.name} / {currentIndex + 1} - {boards?.length}
                    </h4>
                  </div>
                  <div className="d-flex">
                    <img
                      src="/assets/img/arr-left.png"
                      alt=""
                      className="arr-size"
                      onClick={() => onPrevBoard()}
                    />
                    <img
                      src="/assets/img/arrow-right.png"
                      alt=""
                      className="arr-size ms-3 cursor-pointer"
                      onClick={() => onNextBoard()}
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
export default BoardMembersSection;
