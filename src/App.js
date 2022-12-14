import React from "react";
import ContactUs from "./pages/ContactUs";
import LandingPage from "./pages/LandingPage";
import PricingPlan from "./pages/PricingPlan";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import UseCases from "./pages/UseCases";
import { Routes, Route, BrowserRouter } from "react-router-dom";
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
import Upgrade from "./componets/Upgrade";
import Images from "./componets/Images";
import WalletPage from "./pages/wallet/WalletPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="useCases" element={<UseCases />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="pricingPlan" element={<PricingPlan />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="registration" element={<Registration />} />
        <Route path="login" element={<Login />} />
        <Route path="forgotpassword" element={<ForgotPwd />} />
        <Route path="resetpassword" element={<ResetPwd />} />
        <Route path="upgrade" element={<Upgrade />} />

        <Route path="/" element={<Sidebar />}>
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="event" element={<Event />} />

          <Route path="history" element={<History />} />

          <Route path="notification" element={<Notification />} />

          <Route path="settings" element={<Settings />} />
          <Route path="users" element={<Users />} />
          <Route path="profile" element={<Profile />} />
          <Route path="event/created-event" element={<CreatedEvent />} />
          <Route path="wallet" element={<WalletPage />} />
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
