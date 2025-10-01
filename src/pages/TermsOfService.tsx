import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t('backToHome')}
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {t('termsOfServiceTitle')}
            </h1>
            <p className="text-muted-foreground">
              {t('lastUpdated')}: أكتوبر 2024
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-foreground space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">{t('serviceDescription')}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('serviceDescriptionContent')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t('userResponsibilities')}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('userResponsibilitiesContent')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t('serviceAvailability')}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('serviceAvailabilityContent')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t('paymentTerms')}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('paymentTermsContent')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t('termination')}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('terminationContent')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t('limitation')}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('limitationContent')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t('contactUs')}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('contactUsTerms')}
              </p>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p><strong>البريد الإلكتروني:</strong> info@radi.sa</p>
                <p><strong>الهاتف:</strong> +966 507169232</p>
                <p><strong>العنوان:</strong> الرياض، العليا</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;