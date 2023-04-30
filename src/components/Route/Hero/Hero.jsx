import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div class="container px-6 py-16 mx-auto">
      <div class="items-center lg:flex">
        <div class="w-full lg:w-1/2">
          <div class="lg:max-w-lg">
            <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
              Best place to choose <br /> your{" "}
              <span class="text-gray-600 ">products</span>
            </h1>

            <p class="mt-3 text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              beatae error laborum ab amet sunt recusandae? Reiciendis natus
              perspiciatis optio.
            </p>

            <button class="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-gray-700 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              Shop Now
            </button>
          </div>
        </div>

        <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <img
            class="w-full h-full lg:max-w-3xl"
            src="https://merakiui.com/images/components/Catalogue-pana.svg"
            alt="Catalogue-pana.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
