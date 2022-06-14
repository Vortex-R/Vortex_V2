import React from "react";
import { SiToggl } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlice";
import Login from "./auth/Login";
import Register from "./auth/Register";

function OldHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());

    navigate("/");
  };
  return (
    <>
      <header className="stick style1 w-100">
        <div className="container">
          <div className="logo-menu-wrap w-100 d-flex sm:flex-wrap  align-items-center justify-content-between pr-4">
            <div className="logo">
              <h1 className="mb-0">
                <a href="/" title="Home">
                  <img
                    className="img-fluid w-1/2 md:w-3/4 h-1/2"
                    src="assets/images/logo11.png"
                    alt="Logo"
                    srcSet="../assets/images/logo11.png"
                  />
                </a>
              </h1>
            </div>
            <nav
              className="d-inline-flex align-items-center"
              style={{ marginLeft: "-4rem" }}
            >
              <div className="header-left">
                <ul className="mb-0 list-unstyled d-inline-flex">
                  <li className="menu-item-has-children">
                    <a href="/" title="">
                      Home
                    </a>
                  </li>
                  {user && (
                    <li>
                      <a href="/streaming" title="">
                        Streaming
                      </a>
                    </li>
                  )}
                  {/* <li>
                    <a href="/events" title="">
                      Events
                    </a>
                  </li> */}
                  {/* <li className="menu-item-has-children">
                    <a href="/events" title="">
                      Events
                    </a>
                    <ul className="children mb-0 list-unstyled">
                      <li>
                        <a href="/events" title="">
                          Events List
                        </a>
                      </li>
                      <li>
                        <a href="/event-details" title="">
                          Event Detail
                        </a>
                      </li>
                    </ul>
                  </li> */}

                  {user && user.result.role === 2 && (
                    <li>
                      <a href="/dashboard" title="">
                        Dashboard
                      </a>
                    </li>
                  )}

                  <li>
                    <a href="/about" title="">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/contact" title="">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="header-right-btns ">
                {user ? (
                  <a className="btn " onClick={onLogout}>
                    <SiToggl className="text-2xl" />
                  </a>
                ) : (
                  <a className="user-btn" href="" title="">
                    <i className="flaticon-user"></i>
                  </a>
                )}
                {/* <a className="search-btn" href="" title="">
                  <i className="flaticon-magnifying-glass"></i>
                </a> */}
                <a className="menu-btn" href="" title="">
                  <i className="flaticon-menu"></i>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <div className="menu-wrap">
        <span className="menu-close">
          <i className="fas fa-times"></i>
        </span>
        <ul className="mb-0 list-unstyled w-100">
          <li>
            <a href="/" title="">
              Home
            </a>
          </li>
          {user && (
            <li>
              <a href="/streaming" title="">
                Streaming
              </a>
            </li>
          )}
          {user && user.result.role === 2 && (
            <li>
              <a href="/dashboard" title="">
                Dashboard
              </a>
            </li>
          )}

          {/* <li>
            <a href="/events" title="">
              Events
            </a>
          </li> */}
          {/* <li className="menu-item-has-children">
            <a href="/events" title="">
              Events
            </a>
            <ul className="children list-unstyled">
              <li>
                <a href="/events" title="">
                  Events List
                </a>
              </li>
              <li>
                <a href="/event-details" title="">
                  Event Detail
                </a>
              </li>
            </ul>
          </li> */}

          <li>
            <a href="/about" title="">
              About
            </a>
          </li>
          <li>
            <a href="/contact" title="">
              Contact
            </a>
          </li>
        </ul>
        <div className="social-links4 d-flex flex-wrap">
          <a className="facebook" href="" title="Facebook" target="_blank">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="pinterest" href="" title="Pinterest" target="_blank">
            <i className="fab fa-pinterest-p"></i>
          </a>
          <a className="twitter" href="" title="Twitter" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="vimeo" href="" title="Vimeo" target="_blank">
            <i className="fab fa-vimeo-v"></i>
          </a>
        </div>
      </div>
      <div className="header-search d-flex flex-wrap justify-content-center align-items-center w-100">
        <span className="search-close-btn">
          <i className="fas fa-times"></i>
        </span>
        <form>
          <input type="text" placeholder="Search" />
        </form>
      </div>
      <Login />
      <Register />
    </>
  );
}

export default OldHeader;
