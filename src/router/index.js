import { Route, Routes } from "react-router-dom";
import { Dashboard, Login, Faqs, History } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
};

export default Router;
