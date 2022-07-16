import React, { useEffect, useState } from "react";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';


import { kanbanData, kanbanGrid } from "../../data/dummy";
import {
  Footer,
  Header,
  Navbar,
  Sidebar,
  ThemeSettings,
} from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { addPlanification, getPlanifications } from "../../service/planification";

const Kanban = () => {
  const navigate = useNavigate();
  const [planifications, setPlanifications] = useState([])
  const { user, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    // if (user && user.role !== 2) {
    //   navigate("/");
    // }
    if (!user || user.result.role !== 2) {
      navigate("/");
    }
  }, [user, navigate, isError, message]);
  const add = async (e) => {
    e.preventDefault()
    let data = {
      Id: "Task Mehdi Hrairi",
      Title: "Task Mehdi Hrairi",
      Status: "Open",
      Summary: "Analyze the new requirements gathered from the customer.",
      Type: "Story",
      Priority: "Low",
      Tags: "Analyze,Customer",
      Estimate: 3.5,/* 
      userId: "62202539da9949b43716b636", */
      Assignee: "Nancy Davloio",
      RankId: 1,
      Color: "#02897B",
      ClassName: "e-story, e-low, e-nancy-davloio",
    }
    kanbanData.push(data)
    /* const added = await addPlanification(data)
    if (added) {
      kanbanData.push(added)
      const plans = await handleGetPlanifications()
      setPlanifications(plans)
    } */

  }
  const handleGetPlanifications = async (e) => {
    e.preventDefault()
    const planificationsData = await getPlanifications();
    if (planificationsData) setPlanifications(planificationsData)
  }
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
              <Header category="Page" title="Execution" />
              <KanbanComponent
                id="kanban"
                keyField="Status"
                dataSource={kanbanData}
                cardSettings={{ contentField: "Summary", headerField: "Id" }}

              >
                <ButtonComponent cssClass='e-flat' onClick={e => add(e)}>Add</ButtonComponent>
                <ColumnsDirective>
                  {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                  {kanbanGrid.map((item, index) => (
                    <ColumnDirective key={index} {...item} />
                  ))}
                </ColumnsDirective>
              </KanbanComponent>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Kanban;
