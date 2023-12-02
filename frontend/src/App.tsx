import { Outlet } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
