import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import Features from "@/components/Features";
import TopBusinesses from "@/components/TopBusinesses";
import AnalyticsSection from "@/components/AnalyticsSection";
import DashboardPreview from "@/components/DashboardPreview";
import PricingSection from "@/components/PricingSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import WhatsAppSupport from "@/components/WhatsAppSupport";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ClientLogos />
      <Features />
      <TopBusinesses />
      <AnalyticsSection />
      <DashboardPreview />
      <PricingSection />
      <AboutSection />
      <Footer />
      <WhatsAppSupport />
    </div>
  );
};

export default Index;
