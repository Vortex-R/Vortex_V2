import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
  PdfExport,
  ExcelExport,
} from "@syncfusion/ej2-react-grids";

import { customersData, customersGrid } from "../../data/dummy";
import { Header } from "../../components";

import React, { useEffect } from "react";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar, ThemeSettings } from "../../components";
import "../../App.css";

import { useStateContext } from "../../contexts/ContextProvider";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, reset } from "../../features/profiles/profileSlice";
import avatar3 from "../../data/avatar3.png";

const Customers = () => {
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
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = [
    "Add",
    "Edit",
    "Delete",
    "Update",
    "Cancel",
    "PdfExport",
    "ExcelExport",
  ];
  const editing = {
    allowDeleting: true,
    allowEditing: true,
    allowAdding: true,
    allowPdfExport: true,
    allowExcelExport: true,
  };

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  const customersData = profiles.map((profile) => ({
    CustomerID: profile?._id,
    CustomerName: profile?.name,
    CustomerEmail: profile?.email,
    CustomerImage: avatar3,
    ProjectName: profile?.phone,
    Status: profile?.situation,
    Weeks: "40",
    Budget: "$2.4k",
  }));

  return (
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
              <Header category="Page" title="Customers" />
              <GridComponent
                id="grid"
                dataSource={customersData}
                enableHover
                allowPaging
                pageSettings={{ pageCount: 5 }}
                selectionSettings={selectionsettings}
                toolbar={toolbarOptions}
                editSettings={editing}
                allowSorting={true}
                allowExcelExport={true}
                allowPdfExport={true}
              >
                <ColumnsDirective>
                  {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                  {customersGrid.map((item, index) => (
                    <ColumnDirective key={index} {...item} />
                  ))}
                </ColumnsDirective>
                <Inject
                  services={[
                    Page,
                    Selection,
                    Toolbar,
                    Edit,
                    Sort,
                    Filter,
                    PdfExport,
                    ExcelExport,
                  ]}
                />
              </GridComponent>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Customers;
