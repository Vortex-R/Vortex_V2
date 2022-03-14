/* eslint-disable react/jsx-no-undef */
import {
  FaCloudDownloadAlt,
  FaDharmachakra,
  FaFireAlt,
  FaHome,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
  FaUserAlt,
  FaUserEdit,
  FaUsersCog,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    window.location.reload();
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={require("../assets/Images/MainLogo.png")} alt="Logo" />
        </Link>
      </div>
      <ul>
        {user ? (
          <>
            {user.result.role == 2 ? (
              <>
                <li>
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      window.open(
                        "https://wetransfer.com/downloads/cd3821d0d722de38d8064d4938f19e6b20220314204336/b398d6?fbclid=IwAR3IoBsjBwUbf-ZBoRkZgCw-qqKirx2hg3hTLwRUds1HKz37TV2dYmRSEXI",
                        "_blank"
                      )
                    }
                  >
                    <FaCloudDownloadAlt /> Download APK
                  </button>
                </li>
                <li>
                  <Link to="/event">
                    <FaFireAlt /> Event
                  </Link>
                </li>
                <li>
                  <Link to="/users">
                    <FaUsersCog /> Users
                  </Link>
                </li>
                <li>
                  <Link to="/dashbord">
                    <FaDharmachakra /> Dashbord
                  </Link>
                </li>
                <li>
                  <button className="btn btn-secondary" onClick={onLogout}>
                    <FaSignOutAlt /> Logout
                  </button>
                </li>
              </>
            ) : user.result.role == 1 ? (
              <>
                <li>
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      window.open(
                        "https://wetransfer.com/downloads/cd3821d0d722de38d8064d4938f19e6b20220314204336/b398d6?fbclid=IwAR3IoBsjBwUbf-ZBoRkZgCw-qqKirx2hg3hTLwRUds1HKz37TV2dYmRSEXI",
                        "_blank"
                      )
                    }
                  >
                    <FaCloudDownloadAlt /> Download APK
                  </button>
                </li>
                <li>
                  <Link to="/event">
                    <FaFireAlt /> Event
                  </Link>
                </li>
                <li>
                  <Link to="/organizer">
                    <FaUserAlt /> Profile
                  </Link>
                </li>

                <li>
                  <button className="btn btn-secondary" onClick={onLogout}>
                    <FaSignOutAlt /> Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      window.open(
                        "https://wetransfer.com/downloads/cd3821d0d722de38d8064d4938f19e6b20220314204336/b398d6?fbclid=IwAR3IoBsjBwUbf-ZBoRkZgCw-qqKirx2hg3hTLwRUds1HKz37TV2dYmRSEXI",
                        "_blank"
                      )
                    }
                  >
                    <FaCloudDownloadAlt /> Download APK
                  </button>
                </li>
                <li>
                  <Link to="/event">
                    <FaFireAlt /> Event
                  </Link>
                </li>
                <li>
                  <Link to="/profile">
                    <FaUserAlt /> Profile
                  </Link>
                </li>

                <li>
                  <button className="btn btn-secondary" onClick={onLogout}>
                    <FaSignOutAlt /> Logout
                  </button>
                </li>
              </>
            )}
          </>
        ) : (
          <>
            <li>
              <button
                className="btn btn-primary"
                onClick={() =>
                  window.open(
                    "https://wetransfer.com/downloads/cd3821d0d722de38d8064d4938f19e6b20220314204336/b398d6?fbclid=IwAR3IoBsjBwUbf-ZBoRkZgCw-qqKirx2hg3hTLwRUds1HKz37TV2dYmRSEXI",
                    "_blank"
                  )
                }
              >
                <FaCloudDownloadAlt /> Download APK
              </button>
            </li>
            <li>
              <Link to="/login">
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to="/register">
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
