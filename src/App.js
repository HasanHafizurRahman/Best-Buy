import React, { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigation,
} from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  ActivationPage,
  HomePage,
  ProductsPage,
  BestSellingPage,
  EventsPage,
  FAQPage,
  CheckoutPage,
  PaymentPage,
  OrderSuccessPage,
  ProductDetailsPage,
  ProfilePage,
  ShopCreatePage,
  SellerActivationPage,
  ShopLoginPage,
  DeliveryDetails,
} from "./Routes.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Store from "./redux/store";
// import { loadSeller, loadUser } from "./redux/actions/user";
import { useSelector } from "react-redux";
// import ProtectedRoute from "./ProtectedRoute";
// import { ShopHomePage } from "./ShopRoutes.js";
// import SellerProtectedRoute from "./SellerProtectedRoute";

const App = () => {
  const { loading } = useSelector((state) => state.user);

  useEffect(() => {
    // Store.dispatch(loadUser());
  }, []);
  return (
    <>
      {loading ? null : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignupPage />} />
            <Route
              path="/activation/:activation_token"
              element={<ActivationPage />}
            />
            <Route
              path="/seller/activation/:activation_token"
              element={<SellerActivationPage />}
            />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:name" element={<ProductDetailsPage />} />
            <Route path="/best-selling" element={<BestSellingPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/deliveryDetails" element={<DeliveryDetails />} />
            <Route
              path="/checkout"
              element={<CheckoutPage />}
              // element={
              //   <ProtectedRoute isAuthenticated={isAuthenticated}>
              //     <CheckoutPage />
              //   </ProtectedRoute>
              // }
            />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/order/success/:id" element={<OrderSuccessPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            {/* <Route
              path="/profile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <ProfilePage />
                </ProtectedRoute>
              }
            /> */}
            {/* shop Routes */}
            <Route path="/shop-create" element={<ShopCreatePage />} />
            <Route path="/shop-login" element={<ShopLoginPage />} />
            {/* <Route
              path="/shop/:id"
              element={
                <SellerProtectedRoute isSeller={isSeller}>
                  <ShopHomePage />
                </SellerProtectedRoute>
              }
            /> */}
          </Routes>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
