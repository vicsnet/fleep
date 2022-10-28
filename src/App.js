import ContactUs from "./pages/ContactUs";
import LandingPage from "./pages/LandingPage";
import PricingPlan from "./pages/PricingPlan";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import UseCases from "./pages/UseCases";
import { Routes, Route } from "react-router-dom";
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
      </Routes>
    </div>
  );
}

export default App;
