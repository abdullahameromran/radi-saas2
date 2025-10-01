import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const AboutSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('aboutRadi')}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('aboutRadiDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gradient-card shadow-card border-0 text-center">
              <CardContent className="pt-8">
                <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-full w-fit">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t('ourMission')}</h3>
                <p className="text-muted-foreground">
                  {t('missionDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-0 text-center">
              <CardContent className="pt-8">
                <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-full w-fit">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t('ourVision')}</h3>
                <p className="text-muted-foreground">
                  {t('visionDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-0 text-center">
              <CardContent className="pt-8">
                <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-full w-fit">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t('ourValues')}</h3>
                <p className="text-muted-foreground">
                  {t('valuesDesc')}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-card rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold mb-6 text-center">{t('whyChooseRadi')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">{t('automatedIntelligence')}</h4>
                <p className="text-muted-foreground text-sm">
                  {t('automatedIntelligenceDesc')}
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">{t('multiLocationSupport')}</h4>
                <p className="text-muted-foreground text-sm">
                  {t('multiLocationSupportDesc')}
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">{t('whatsappIntegration')}</h4>
                <p className="text-muted-foreground text-sm">
                  {t('whatsappIntegrationDesc')}
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">{t('arabicEnglishSupport')}</h4>
                <p className="text-muted-foreground text-sm">
                  {t('arabicEnglishSupportDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;