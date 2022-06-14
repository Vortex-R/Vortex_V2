import React, { useEffect } from "react";
import { SiAirplayvideo } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import live from "assets/images/resources/blog-detail-img.jpg";
import { getGoals, reset } from "../../features/goals/goalSlice";

function Live() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/");
    }

    dispatch(getGoals());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  return (
    <>
      <section>
        <div className="w-100 pt-140 pb-120 position-relative ">
          <div className="container ">
            <div className="page-wrap w-100">
              <div className="row justify-content-center">
                <div className="col-md-12 col-sm-12 col-lg-8">
                  <div className="blog-detail w-100">
                    <div className="blog-detail-info w-100 ">
                      <h2 className="mb-0 justify-content-center">
                        Brilliant Experiences That Delight
                      </h2>
                      <div className="post-meta2">
                        <span className="post-date thm-clr">
                          {" "}
                          {new Date(goals[0]?.startDate).toLocaleString(
                            "en-US"
                          )}
                        </span>
                        <span className="post-author">
                          {user?.result.name}'s Event
                        </span>
                        <i className="post-cmt p-1 ">
                          <SiAirplayvideo className="ml-0.5" />
                        </i>
                      </div>
                    </div>
                    <div className="blog-detail-desc w-100">
                      <div className="blog-detail-gallery w-100">
                        <div className="detail-video position-relative w-100">
                          <a
                            className="d-inline-block position-absolute play-btn"
                            data-fancybox
                            href={goals[1]?.link}
                            title="Video"
                          >
                            <svg
                              version="1.1"
                              className="play"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              x="0px"
                              y="0px"
                              height="10rem"
                              width="10rem"
                              viewBox="0 0 100 100"
                              enable-background="new 0 0 100 100"
                              xmlSpace="preserve"
                            >
                              <path
                                className="stroke-dotted"
                                fill="none"
                                stroke="#fff"
                                d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7 C97.3,23.7,75.7,2.3,49.9,2.5"
                              ></path>
                              <path
                                className="icon"
                                fill="#fff"
                                d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z"
                              ></path>
                            </svg>
                          </a>
                          <img
                            className="img-fluid w-100"
                            src={
                              "../assets/images/resources/blog-detail-img.jpg"
                            }
                            alt="Blog Detail Image 5"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Live;
