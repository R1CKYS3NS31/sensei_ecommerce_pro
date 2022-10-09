import React from "react";
import { Announcement } from "../components/announcement/Announcement";
import { Categories } from "../components/categories/Categories";
import { Footer } from "../components/footer/Footer";
import { NavBar } from "../components/navBar/NavBar";
import { Newsletter } from "../components/newsletter/Newsletter";
import { Products } from "../components/products/Products";
import { Slider } from "../components/slider/Slider";

export const Homepage = () => {
  return (
    <div>
      <NavBar />
      <Announcement />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};
