
import { Button } from "@/components/ui/button";
import { Star, TrendingUp, MessageSquare, ArrowRight, Play } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hero = () => {
  const { t } = useLanguage();
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-32 pb-20 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-8 h-8 bg-accent rotate-45"></div>
        <div className="absolute top-20 left-32 w-6 h-6 bg-primary-foreground/20 rotate-45"></div>
        <div className="absolute top-40 left-20 w-4 h-4 bg-accent rotate-45"></div>
        <div className="absolute top-60 left-44 w-8 h-8 bg-primary-foreground/20 rotate-45"></div>
        <div className="absolute top-80 left-16 w-6 h-6 bg-accent rotate-45"></div>
        
        <div className="absolute top-10 right-10 w-8 h-8 bg-accent rotate-45"></div>
        <div className="absolute top-20 right-32 w-6 h-6 bg-primary-foreground/20 rotate-45"></div>
        <div className="absolute top-40 right-20 w-4 h-4 bg-accent rotate-45"></div>
        <div className="absolute top-60 right-44 w-8 h-8 bg-primary-foreground/20 rotate-45"></div>
        <div className="absolute top-80 right-16 w-6 h-6 bg-accent rotate-45"></div>

        <div className="absolute bottom-10 left-24 w-8 h-8 bg-accent rotate-45"></div>
        <div className="absolute bottom-20 left-48 w-6 h-6 bg-primary-foreground/20 rotate-45"></div>
        <div className="absolute bottom-40 left-12 w-4 h-4 bg-accent rotate-45"></div>
        
        <div className="absolute bottom-10 right-24 w-8 h-8 bg-accent rotate-45"></div>
        <div className="absolute bottom-20 right-48 w-6 h-6 bg-primary-foreground/20 rotate-45"></div>
        <div className="absolute bottom-40 right-12 w-4 h-4 bg-accent rotate-45"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight animate-fade-in text-white">
            {t('heroTitle')}
          </h1>
          
          <p className="text-lg md:text-xl mb-10 text-white/90 leading-relaxed max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {t('heroSubtitle')}
          </p>

          <div className="flex justify-center mb-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              onClick={() => window.open('https://try.radi.sa/', '_blank')}
              size="lg" 
              className="bg-white text-primary hover:bg-gray-50 font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 rounded-full shadow-xl hover:shadow-2xl"
            >
              {t('startFreeTrial')}
              <ArrowRight className="ml-2 h-5 w-5 rtl:ml-0 rtl:mr-2 rtl:rotate-180" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse bg-white/10 rounded-xl p-6 transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <Star className="h-7 w-7 text-accent" />
              <span className="text-lg font-semibold">{t('accessGoogle')}</span>
            </div>
            
            <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse bg-white/10 rounded-xl p-6 transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <TrendingUp className="h-7 w-7 text-accent" />
              <span className="text-lg font-semibold">{t('aiInsights')}</span>
            </div>
            
            <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse bg-white/10 rounded-xl p-6 transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <MessageSquare className="h-7 w-7 text-accent" />
              <span className="text-lg font-semibold">{t('whatsappReports')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
