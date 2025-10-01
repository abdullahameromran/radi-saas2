import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart3, 
  MessageCircle, 
  Globe, 
  Shield, 
  Zap, 
  Users,
  Clock,
  FileText,
  Bot
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Features = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Globe,
      title: t('multiLocation'),
      description: t('multiLocationDesc')
    },
    {
      icon: BarChart3,
      title: t('realTimeAnalytics'),
      description: t('realTimeAnalyticsDesc')
    },
    {
      icon: MessageCircle,
      title: t('directResponse'),
      description: t('directResponseDesc')
    },
    {
      icon: Bot,
      title: t('aiInsights'),
      description: t('aiInsightsDesc')
    },
    {
      icon: Clock,
      title: t('automatedReports'),
      description: t('automatedReportsDesc')
    },
    {
      icon: FileText,
      title: t('smartFiltering'),
      description: t('smartFilteringDesc')
    },
    {
      icon: Shield,
      title: t('secureIntegration'),
      description: t('secureIntegrationDesc')
    },
    {
      icon: Users,
      title: t('teamCollaboration'),
      description: t('teamCollaborationDesc')
    },
    {
      icon: Zap,
      title: t('instantAlerts'),
      description: t('instantAlertsDesc')
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('featuresTitle')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('featuresSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 border-0">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;