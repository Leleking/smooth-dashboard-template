import { Route, Routes } from "react-router-dom";
import {
  Dashboard,
  Login,
  Faqs,
  History,
  UnderConstruction,
  Profile,
  PageNotFound,
  Reports,
  Cases,
  Subscription,
} from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/history" element={<History />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/cases" element={<Cases />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/subscription" element={<Subscription />} />
      <Route path="/settings" element={<UnderConstruction />} />
      <Route path="/underconstruction" element={<UnderConstruction />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
