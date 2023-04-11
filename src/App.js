import React from "react";
import ContactUs from "./pages/ContactUs";
import LandingPage from "./pages/LandingPage";
import PricingPlan from "./pages/PricingPlan";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import UseCases from "./pages/UseCases";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Registration from "./pages/Auth/Registration";
import Login from "./pages/Auth/Login";
import ForgotPwd from "./pages/Auth/ForgotPwd";
import ResetPwd from "./pages/Auth/ResetPwd";
import Sidebar from "./componets/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Event from "./pages/Dashboard/Event";
import History from "./pages/Dashboard/History";
import Notification from "./pages/Dashboard/Notification";
import Settings from "./pages/Dashboard/Settings";
import Users from "./pages/Dashboard/Users";
import Profile from "./pages/Dashboard/Profile";
import CreatedEvent from "./pages/Dashboard/Event/CreatedEvent";
import ModalProvider from "./store/ModalProvider";
import Images from "./componets/Images";
import WalletPage from "./pages/wallet/WalletPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./utils/PrivateRoute";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { SkeletonTheme } from 'react-loading-skeleton'
import Upgrade from "./pages/Upgrade";

function App() {
  const client = new QueryClient();

  
  return (
    
    
    
    
    <div className="App">
      <SkeletonTheme baseColor="" highlightColor="grey.700">
      <QueryClientProvider client={client}>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="useCases" element={<UseCases />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="pricingPlan" element={<PricingPlan />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="registration" element={<Registration />} />
        {/* <Route path="user/confirm_otp/:email/:id" element={<Registration />} /> */}
        <Route path="login" element={<Login />} />
        <Route path="forgotpassword" element={<ForgotPwd />} />
        <Route path="resetpassword" element={<ResetPwd />} />
        <Route path="upgrade" element={<Upgrade />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Sidebar />}>
            <Route path="dashboard" element={<Dashboard />} />

            <Route path="event" element={<Event />} />

            <Route path="history" element={<History />} />

            <Route path="notification" element={<Notification />} />

            <Route path="settings" element={<Settings />} />
            <Route path="users" element={<Users />} />
            <Route path="profile" element={<Profile />} />
            <Route path="event/created-event/:id" element={<CreatedEvent />} />
            <Route path="wallet" element={<WalletPage />} />
          </Route>
          {/* </PrivateRoute> */}
        </Route>
      </Routes>
      <ToastContainer />
      </QueryClientProvider>
    </SkeletonTheme>
    </div>
  );
}

export default App;
