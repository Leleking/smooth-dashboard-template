import { Route, Routes } from "react-router-dom";
import { Dashboard, Login, Faqs, History, UnderConstruction } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/history" element={<History />} />
      <Route path="/reports" element={<UnderConstruction />} />
      <Route path="/cases" element={<UnderConstruction />} />
      <Route path="/profile" element={<UnderConstruction />} />
      <Route path="/subscription" element={<UnderConstruction />} />
      <Route path="/settings" element={<UnderConstruction />} />
    </Routes>
  );
};

export default Router;
