import React from "react";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftNavbar from "../Components/Layout/LeftNavbar";
import RightNav from "../Components/Layout/RightNav";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-4">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-6">
        <aside className="left col-span-3">
          <LeftNavbar></LeftNavbar>
        </aside>
        <section className="main-content col-span-6">
          <Outlet></Outlet>
        </section>

        <aside className="right col-span-3">
          <RightNav></RightNav>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
