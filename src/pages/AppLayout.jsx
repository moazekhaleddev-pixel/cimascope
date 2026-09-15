import { Outlet } from "react-router-dom";
import AppHeader from "../components/header/AppHeader";
import Footer from "../components/comon/Footer";
import Notifications from "../components/comon/Notifications";
import ScrollToTop from "../components/comon/ScrollToTop";

export default function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <AppHeader />
      <Outlet />
      <Footer />
      <Notifications />
    </>
  );
}
