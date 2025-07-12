import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="m-auto min-h-[100vh] max-w-xl">
      <Outlet />
    </div>
  );
};
