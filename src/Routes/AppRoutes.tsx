import HomePage from "@/Pages/HomePage/HomePage";
import AboutPage from "@/Pages/AboutPage/AboutPage";
import ServicePage from "@/Pages/ServicePage/ServicePage";
import PoliciesPage from "@/Pages/PoliciesPage/PoliciesPage";
import AftercarePage from "@/Pages/AftercarePage/AftercarePage";
import AppointmentPage from "@/Pages/AppointmentPage/AppointmentPage";
import { Route, Routes } from 'react-router-dom';


export default function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/services" element={<ServicePage />}/>
        <Route path="/policies" element={<PoliciesPage />}/>
        <Route path="/aftercare" element={<AftercarePage />}/>
        <Route path="/appointment" element={<AppointmentPage />}/>
      </Routes>
    </div>
  )
}