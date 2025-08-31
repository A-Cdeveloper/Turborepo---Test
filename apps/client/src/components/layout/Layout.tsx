import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-screen-lg mx-auto">
      <Header />
      <main className="flex-1 py-3">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
