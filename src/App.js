import { Routes, Route } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import LayoutPrincipal from "layout/LayoutPrincipal/LayoutPrincipal.jsx";
import LoginPage from "pages/Login/Login";
import PlanPage from "pages/Plan/Plan";
import ThanksPage from "pages/Thanks/Thanks";

function App() {
  return (
    <NextUIProvider disableBaseline>
      <Routes>
        <Route path="/" element={<LayoutPrincipal />}>
          <Route index element={<LoginPage />} />
          <Route path="plan" element={<PlanPage />} />
          <Route path="thanks" element={<ThanksPage />} />
        </Route>
      </Routes>
    </NextUIProvider>
  );
}

export default App;
