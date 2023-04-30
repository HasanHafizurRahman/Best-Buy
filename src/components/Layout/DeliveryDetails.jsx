import React, { useState } from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiTakeMyMoney } from "react-icons/gi";
import styles from "../../styles/styles";
import Footer from "./Footer";
import Header from "./Header";

const DeliveryDetails = () => {
  return (
    <div>
      <Header activeHeading={5} />
      <header>
        <div
          class="w-full bg-center bg-cover h-[28rem]"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/184Nm66/low-angle-view-happy-senior-manager-greeting-his-employees-factory-warehouse-me-are-shaking-hands.jpg)",
          }}
        >
          <div class="flex items-center justify-start w-80 h-80 ml-6 pl-6 bg-white">
            <div class="text-left">
              <h1 class="text-3xl font-semibold text-gray-800">
                Free shipping on all purchases with E Mart
              </h1>
              <h2 class="text-md text-gray-900 pt-2">
                As a member of E Mart, you get free shipping on everything you
                shop. In addition, you will receive selected offers as well as
                unique benefits and newsletters.
              </h2>
            </div>
          </div>
        </div>
      </header>
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-12 mx-auto">
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <CiDeliveryTruck size={40} />

              <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                Free Delivery
              </h1>

              <p class="mt-2 text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida
                sem feugiat.
              </p>
            </div>

            <div>
              <svg class="w-8 h-8" viewBox="0 0 30 30" fill="none">
                <path
                  d="M27.3633 7.08984H26.4844V6.21094C26.4844 4.75705 25.3015 3.57422 23.8477 3.57422H4.39453C2.94064 3.57422 1.75781 4.75705 1.75781 6.21094V21.1523H0.878906C0.393516 21.1523 0 21.5459 0 22.0312V23.7891C0 25.2429 1.18283 26.4258 2.63672 26.4258H27.3633C28.8172 26.4258 30 25.2429 30 23.7891V9.72656C30 8.27268 28.8172 7.08984 27.3633 7.08984ZM3.51562 6.21094C3.51562 5.72631 3.9099 5.33203 4.39453 5.33203H23.8477C24.3323 5.33203 24.7266 5.72631 24.7266 6.21094V7.08984H20.332C18.8781 7.08984 17.6953 8.27268 17.6953 9.72656V21.1523H3.51562V6.21094ZM1.75781 23.7891V22.9102H17.6953V23.7891C17.6953 24.0971 17.7489 24.3929 17.8465 24.668H2.63672C2.15209 24.668 1.75781 24.2737 1.75781 23.7891ZM28.2422 23.7891C28.2422 24.2737 27.8479 24.668 27.3633 24.668H20.332C19.8474 24.668 19.4531 24.2737 19.4531 23.7891V9.72656C19.4531 9.24193 19.8474 8.84766 20.332 8.84766H27.3633C27.8479 8.84766 28.2422 9.24193 28.2422 9.72656V23.7891Z"
                  fill="#2D3748"
                />
                <path
                  d="M24.7266 21.1523H22.9688C22.4834 21.1523 22.0898 21.5459 22.0898 22.0312C22.0898 22.5166 22.4834 22.9102 22.9688 22.9102H24.7266C25.212 22.9102 25.6055 22.5166 25.6055 22.0312C25.6055 21.5459 25.212 21.1523 24.7266 21.1523Z"
                  fill="#4299E1"
                />
                <path
                  d="M23.8477 12.3633C24.3331 12.3633 24.7266 11.9698 24.7266 11.4844C24.7266 10.999 24.3331 10.6055 23.8477 10.6055C23.3622 10.6055 22.9688 10.999 22.9688 11.4844C22.9688 11.9698 23.3622 12.3633 23.8477 12.3633Z"
                  fill="#4299E1"
                />
              </svg>

              <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                Best Electronic Gadget
              </h1>

              <p class="mt-2 text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida
                sem feugiat.
              </p>
            </div>

            <div>
              <GiTakeMyMoney size={40} />

              <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                Best Deals
              </h1>

              <p class="mt-2 text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida
                sem feugiat.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Condition />
      <Footer />
    </div>
  );
};
const Condition = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <div className={`${styles.section} my-8`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Conditions</h2>
      <div className="mx-auto space-y-4">
        {/* single Faq */}

        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(5)}
          >
            <span className="text-lg font-medium text-gray-900">
              Can I change or cancel my order?
            </span>
            {activeTab === 5 ? (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 5 && (
            <div className="mt-4">
              <p className="text-base text-gray-500">
                Unfortunately, once an order has been placed, we are not able to
                make changes or cancellations. If you no longer want the items
                you've ordered, you can return them for a refund within 30 days
                of delivery.
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(6)}
          >
            <span className="text-lg font-medium text-gray-900">
              Do you offer international shipping?
            </span>
            {activeTab === 6 ? (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 6 && (
            <div className="mt-4">
              <p className="text-base text-gray-500">
                Currently, we only offer shipping within the United States.
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(7)}
          >
            <span className="text-lg font-medium text-gray-900">
              What payment methods do you accept?
            </span>
            {activeTab === 7 ? (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 7 && (
            <div className="mt-4">
              <p className="text-base text-gray-500">
                We accept visa,mastercard,paypal payment method also we have
                cash on delivery system.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetails;
