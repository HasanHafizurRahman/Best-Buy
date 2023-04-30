import React, { useState } from "react";

const PhotoGrid = () => {
  return (
    <>
      <div class="container mx-auto p-8">
        <div class="flex flex-row flex-wrap -mx-2">
          <div class="w-full md:w-1/2 h-64 md:h-auto mb-4 px-2">
            <div
              class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
              style={{
                backgroundImage:
                  "url(https://d1aeri3ty3izns.cloudfront.net/media/48/487469/1200/preview.jpg)",
              }}
            >
              <p
                style={{
                  borderBottomRightRadius: "50px",
                }}
                class="w-48 p-3 text-gray-800 font-semibold bg-[#5ce578] shadow-lg left-12 -top-4 "
              >
                10% Discount on first purchase!
              </p>
            </div>
          </div>
          <div class="w-full md:w-1/2 mb-4 px-2">
            <div class="flex flex-col sm:flex-row md:flex-col -mx-2">
              <div class="w-full sm:w-1/2 md:w-full h-48 xl:h-64 mb-4 sm:mb-0 md:mb-4 px-2">
                <div
                  class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
                  style={{
                    backgroundImage:
                      "url(https://th.bing.com/th/id/OIP.6lcAHc8qpp3nVmXGTkAzMgHaE8?pid=ImgDet&rs=1)",
                  }}
                >
                  <p
                    style={{
                      borderBottomRightRadius: "50px",
                    }}
                    class="w-48 p-3 text-gray-800 font-semibold bg-[#5ce578] shadow-lg left-12 -top-4 "
                  >
                    Free shipping!
                  </p>
                </div>
              </div>
              <div class="w-full sm:w-1/2 md:w-full h-48 xl:h-64 px-2">
                <div
                  class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
                  style={{
                    backgroundImage:
                      "url(https://th.bing.com/th/id/OIP.RWHRhLS6dNTCikk6rSZ9nQHaEK?pid=ImgDet&rs=1)",
                  }}
                >
                  <p
                    style={{
                      borderBottomRightRadius: "50px",
                    }}
                    class="w-48 p-3 text-gray-800 font-semibold bg-[#5ce578] shadow-lg left-12 -top-4 "
                  >
                    Upto 20% cashback!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full sm:w-1/3 h-32 md:h-48 mb-4 sm:mb-0 px-2">
            <div
              class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
              href="#"
              title="Link"
              style={{
                backgroundImage:
                  "url(https://th.bing.com/th/id/OIP.xsprrPm3qQHkl2VlR1h6TAHaDn?pid=ImgDet&rs=1)",
              }}
            >
              <p
                style={{
                  borderBottomRightRadius: "50px",
                }}
                class="w-48 p-3 text-gray-800 font-semibold bg-[#5ce578] shadow-lg left-12 -top-4 "
              >
                Fast Delivery!
              </p>
            </div>
          </div>
          <div class="w-full sm:w-1/3 h-32 md:h-48 mb-4 sm:mb-0 px-2">
            <div
              class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
              href="#"
              title="Link"
              style={{
                backgroundImage:
                  "url(https://th.bing.com/th/id/R.347e3e2c1f5131b8fb0bf2007e689c15?rik=NE%2bPeYCowQ6ZYA&pid=ImgRaw&r=0)",
              }}
            >
              <p
                style={{
                  borderBottomRightRadius: "50px",
                }}
                class="w-48 p-3 text-gray-800 font-semibold bg-[#5ce578] shadow-lg left-12 -top-4 "
              >
                100% Quality Products!
              </p>
            </div>
          </div>
          <div class="w-full sm:w-1/3 h-32 md:h-48 px-2">
            <div
              class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
              href="#"
              title="Link"
              style={{
                backgroundImage:
                  "url(https://d1aeri3ty3izns.cloudfront.net/media/48/487469/1200/preview.jpg)",
              }}
            >
              <p
                style={{
                  borderBottomRightRadius: "50px",
                }}
                class="w-48 p-3 text-gray-800 font-semibold bg-[#5ce578] shadow-lg left-12 -top-4 "
              >
                Best Deals!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoGrid;
