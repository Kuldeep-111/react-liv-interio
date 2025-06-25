import { useEffect } from "react"; // ✅ MISSING
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetails";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Service from "./pages/Service";
import Blogs from "./pages/Blogs";
import Layout from "./components/layout/Layout";
import "aos/dist/aos.css";
import AOS from "aos";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/utilities/ScrollToTop";
import Disclaimer from "./pages/Disclaimer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Dashboard from "./pages/admin/Dashboard";
import Login from "./pages/admin/login";
import EditBlog from "./pages/admin/edit-blog";
import AddBlog from "./pages/admin/add-blog";
import NotFound from "./pages/NotFound";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <ScrollToTop />
      <Routes>
        {/* Routes with layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/services" element={<Service />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>

        {/* Standalone routes (no layout) */}
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/edit-blog/:id" element={<EditBlog />} />
        <Route path="/admin/add-blog" element={<AddBlog />} />

        {/* NotFound (no layout) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
