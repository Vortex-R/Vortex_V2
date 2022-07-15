import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import React, { useEffect } from "react";
import {
  GanttComponent,
  Inject,
  Edit,
  Selection,
} from "@syncfusion/ej2-react-gantt";
import { FiSettings } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Footer,
  Header,
  Navbar,
  Sidebar,
  ThemeSettings,
} from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";

const data = [
  {
    TaskID: 1,
    TaskName: "Project Initiation",
    StartDate: new Date("04/02/2019"),
    EndDate: new Date("04/21/2019"),
    subtasks: [
      {
        TaskID: 2,
        TaskName: "Identify Site location",
        StartDate: new Date("04/02/2019"),
        Duration: 4,
        Progress: 50,
      },
      {
        TaskID: 3,
        TaskName: "Perform Soil test",
        StartDate: new Date("04/02/2019"),
        Duration: 4,
        Progress: 50,
        Predecessor: "2FS",
      },
      {
        TaskID: 4,
        TaskName: "Soil test approval",
        StartDate: new Date("04/02/2019"),
        Duration: 4,
        Progress: 50,
      },
    ],
  },
  {
    TaskID: 5,
    TaskName: "Project Estimation",
    StartDate: new Date("04/02/2019"),
    EndDate: new Date("04/21/2019"),
    subtasks: [
      {
        TaskID: 6,
        TaskName: "Develop floor plan for estimation",
        StartDate: new Date("04/04/2019"),
        Duration: 3,
        Progress: 50,
      },
      {
        TaskID: 7,
        TaskName: "List materials",
        StartDate: new Date("04/04/2019"),
        Duration: 3,
        Progress: 50,
      },
      {
        TaskID: 8,
        TaskName: "Estimation approval",
        StartDate: new Date("04/04/2019"),
        Duration: 3,
        Progress: 50,
        Predecessor: "7SS",
      },
    ],
  },
];

const Planification = () => {
  const navigate = useNavigate();
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

  const taskFields = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    duration: "Duration",
    progress: "Progress",
    child: "subtasks",
    dependency: "Predecessor",
  };
  const editSettings = {
    allowTaskbarEditing: true,
    allowEditing: true,
    mode: "Auto",
  };

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
              <Header category="Page" title="Planification" />

              <GanttComponent
                dataSource={data}
                taskFields={taskFields}
                editSettings={editSettings}
                allowSelection={true}
                height="400px"
              >
                <Inject services={[Edit, Selection]} />
              </GanttComponent>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Planification;
