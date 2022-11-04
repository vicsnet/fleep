import ContactUs from "./pages/ContactUs";
import LandingPage from "./pages/LandingPage";
import PricingPlan from "./pages/PricingPlan";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import UseCases from "./pages/UseCases";
import { Routes, Route } from "react-router-dom";
import Registration from "./pages/Auth/Registration";
import Login from "./pages/Auth/Login";
import ForgotPwd from "./pages/Auth/ForgotPwd";
import ResetPwd from "./pages/Auth/ResetPwd";
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
        <Route path="registration" element={ <Registration />} />
        <Route path="login" element={ <Login />} />
        <Route path="forgotpassword" element={ <ForgotPwd />} />
        <Route path="resetpassword" element={ <ResetPwd />} />
      </Routes>
    </div>
  );
}

export default App;
