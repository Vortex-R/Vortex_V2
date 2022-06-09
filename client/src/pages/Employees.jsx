import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Inject,
  Page,
  Search,
} from "@syncfusion/ej2-react-grids";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import React, { useEffect, useMemo } from "react";
import { FiSettings } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { Footer, Header, Navbar, Sidebar, ThemeSettings } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import { employeesData, employeesGrid } from "../data/dummy";
import { getUsers, reset } from "../features/profiles/profileSlice";
import avatar3 from "../data/avatar3.png";

const Employees = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const { user } = useSelector((state) => state.auth);
  const { profiles, isLoading, isError, message } = useSelector(
    (state) => state.profiles
  );
  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    // if (!user) {
    //   navigate("/login");
    // }

    dispatch(getUsers());

    return () => {
      dispatch(reset());
    };
  }, [navigate, isError, message, dispatch]);

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  const toolbarOptions = ["Search"];

  const editing = { allowDeleting: false, allowEditing: false };

  const employeesData = useMemo(
    () =>
      profiles
        ? [
            {
              EmployeeID: profiles[0]?._id,
              Name: profiles[0]?.name,
              Title: profiles[0]?.email,
              HireDate: profiles[0]?.gender,
              Country: profiles[0]?.phone,
              ReportsTo: profiles[0]?.situation,
              EmployeeImage: avatar3,
            },
          ]
        : [],
    [profiles]
  );

  return profiles ? (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <TooltipComponent content="Settings" position="Top">
            <button
              type="button"
              onClick={() => setThemeSettings(true)}
              style={{ background: currentColor, borderRadius: "50%" }}
              className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        <div
          className={
            activeMenu
              ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
              : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
          }
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar />
          </div>
          <div>
            {themeSettings && <ThemeSettings />}
            <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
              <Header category="Page" title="Employees" />
              <GridComponent
                dataSource={employeesData}
                width="auto"
                allowPaging
                allowSorting
                pageSettings={{ pageCount: 5 }}
                editSettings={editing}
                toolbar={toolbarOptions}
              >
                <ColumnsDirective>
                  {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                  {employeesGrid.map((item, index) => (
                    <ColumnDirective key={index} {...item} />
                  ))}
                </ColumnsDirective>
                <Inject services={[Search, Page]} />
              </GridComponent>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  ) : null;
};
export default Employees;
