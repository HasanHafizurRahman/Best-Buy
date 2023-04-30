import React from "react";
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Categories from "../components/Route/Categories/Categories";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Events from "../components/Events/Events";
import Sponsored from "../components/Route/Sponsored";
import Footer from "../components/Layout/Footer";
import Testimonial from "../components/Layout/Testimonial";
import Delivery from "../components/Layout/Delivery";
// import { DeliveryDetails } from "../Routes";
import PhotoGrid from "../components/Layout/PhotoGrid";

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
      <Events />
      <FeaturedProduct />
      <Delivery />
      <Testimonial />
      <PhotoGrid />
      <Sponsored />
      <Footer />
    </div>
  );
};

export default HomePage;
