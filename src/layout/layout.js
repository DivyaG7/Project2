import { Outlet } from "react-router-dom";
import Header from "../componenets/Header/Header";
import VerticalNavbar from "../componenets/VerticalNavigation/VerticalNavbar";
import Footer from "../componenets/Footer";
function Layout() {
  return (
    <>
      <Header />
      <VerticalNavbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
export default Layout;