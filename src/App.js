import { Routes, Route } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import LayoutPrincipal from "layout/LayoutPrincipal/LayoutPrincipal.jsx";
import LoginPage from "pages/Login/Login";
import PlanPage from "pages/Plan/Plan";
import ThanksPage from "pages/Thanks/Thanks";
import UserProvider from "contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <NextUIProvider disableBaseline>
        <Routes>
          <Route path="/" element={<LayoutPrincipal />}>
            <Route index element={<LoginPage />} />
            <Route path="plan" element={<PlanPage />} />
            <Route path="thanks" element={<ThanksPage />} />
          </Route>
        </Routes>
      </NextUIProvider>
    </UserProvider>
  );
}

export default App;
