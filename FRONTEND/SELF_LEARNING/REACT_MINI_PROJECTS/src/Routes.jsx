import React, { useContext, useEffect } from "react";
import {
  Navbar,
  JobBoardBulleting,
  Quiz,
  PwdGenerator,
  EmployeeDB,
  CurrencyConvertor,
  DraggableNodes,
  TodoList,
  FAQ,
  ProgressBar,
  CountDownTimer,
  InfiniteScroll,
  MortgageCalculator,
  OtpLogin,
  MultiInputSearch,
  CustomCarousel,
  FormWithoutYup,
  NavbarTailwind,
  Slider,
} from "./components/index";
import { GlobalContext } from "./contexts/GlobalContext";
const Routes = () => {
  const { theme } = useContext(GlobalContext);

  useEffect(() => {
    let mainDiv = document.getElementById("primary__section");
    if (theme === "") {
      mainDiv.classList.remove("dark");
    } else {
      mainDiv.classList.add("dark");
    }
  }, [theme]);

  return (
    <div id="primary__section" className="h-screen">
      {/* <Navbar /> */}

      {/* <NavbarTailwind /> */}
      {/* <CustomCarousel /> */}
      {/* <Slider /> */}
      {/* <InfiniteScroll /> */}
      {/* <MultiInputSearch /> */}
      {/* <OtpLogin /> */}
      {/* <CountDownTimer /> */}
      {/* <MortgageCalculator /> */}
      {/* <FAQ /> */}
      {/* <Quiz /> */}
      {/* <PwdGenerator /> */}
      {/* <EmployeeDB /> */}
      {/* <CurrencyConvertor /> */}
      {/* <JobBoardBulleting /> */}
      {/* <DraggableNodes /> */}
      {/* <TodoList /> */}
      {/* <ProgressBar /> */}
      {/* <FormWithoutYup /> */}
    </div>
  );
};

export default Routes;
