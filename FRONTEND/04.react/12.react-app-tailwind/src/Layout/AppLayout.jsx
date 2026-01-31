import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Suspense } from "react";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<h1>Loading....</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default AppLayout;
