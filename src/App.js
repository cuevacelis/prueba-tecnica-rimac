import { Routes, Route } from "react-router-dom";
import LayoutPrincipal from "layout/LayoutPrincipal/LayoutPrincipal.jsx";
import LoginPage from "pages/Login/Login";
import PlanPage from "pages/Plan/Plan";
import ThanksPage from "pages/Thanks/Thanks";
import UserProvider from "contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<LayoutPrincipal />}>
          <Route index element={<LoginPage />} />
          <Route path="plan" element={<PlanPage />} />
          <Route path="thanks" element={<ThanksPage />} />
        </Route>
      </Routes>
    </UserProvider>
  );
}

export default App;
