import { Route, Routes } from "react-router-dom";
import {
  Dashboard,
  Login,
  Faqs,
  History,
  UnderConstruction,
  Profile,
  PageNotFound,
} from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/history" element={<History />} />
      <Route path="/reports" element={<UnderConstruction />} />
      <Route path="/cases" element={<UnderConstruction />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/subscription" element={<UnderConstruction />} />
      <Route path="/settings" element={<UnderConstruction />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
