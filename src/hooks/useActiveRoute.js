import { useLocation } from "react-router-dom";

export default function useActiveRoute(path) {
  const location = useLocation();

  const getActiveRoute = (path) => {
    const currentPath = location?.pathname?.includes(path);
    if (path === "/" && location?.pathname !== "/") return false;
    if (location) return currentPath ?? false;
  };
  return getActiveRoute(path);
}
