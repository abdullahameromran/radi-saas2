import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/lovable-uploads/93f82ba1-d250-45c6-9ec5-cbda4b746eb4.png" 
              alt="Radi Logo" 
              className="h-8 w-auto mb-4"
            />
            <p className="text-secondary-foreground/80 mb-6 max-w-md">
              {t('footerDesc')}
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@radi.sa</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+966 507169232</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Riyadh, Olaya</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('product')}</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-primary transition-colors">{t('features')}</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">{t('pricing')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('apiDocs')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('integrations')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('company')}</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-primary transition-colors">{t('aboutUs')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('blog')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('careers')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('contact')}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-secondary-foreground/60">
              {t('allRightsReserved')}
            </p>
            <div className="flex space-x-6 rtl:space-x-reverse mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-sm hover:text-primary transition-colors">{t('privacyPolicy')}</Link>
              <Link to="/terms-of-service" className="text-sm hover:text-primary transition-colors">{t('termsOfService')}</Link>
              <a href="#" className="text-sm hover:text-primary transition-colors">{t('cookiePolicy')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
