import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Offer from "./pages/Offer";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
// import Reviews from "./pages/Reviews";
import News from "./pages/News";
import Reservation from "./pages/Reservation";
import Layout from "./components/Layout";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Academy from "./pages/Academy";
import Footgolf from "./pages/Footgolf";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/footgolf" element={<Footgolf />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
        <LanguageSwitcher />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
