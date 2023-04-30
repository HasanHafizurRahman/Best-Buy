import React from "react";
import { useNavigate } from "react-router-dom";

const Delivery = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/deliveryDetails");
  };
  return (
    <div onClick={handleNavigate} className="cursor-pointer">
      <header>
        <div
          class="w-full bg-center bg-cover h-[38rem]"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/3MK6VRb/B9724723674-Z-1-20200926152641-000-G4-PGOEI4-Q-1-0.jpg)",
          }}
        >
          <div class="flex items-center justify-center w-full h-full bg-gray-900/40">
            <div class="text-center">
              <h1 class="text-3xl font-semibold text-white lg:text-4xl">
                Free Shipping for <span class="text-[#5ce578]">12</span> Months
              </h1>
              <h2 class="text-2xl text-[#5ce578] font-semibold">
                Free Delivery
              </h2>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Delivery;
