import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <div className="mb-auto overflow-scroll">
        <main className="mx-auto  ">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
