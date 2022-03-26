import { Outlet } from "react-router-dom";
import Header from "layout/Header/Header";

function LayoutPrincipal() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default LayoutPrincipal;
