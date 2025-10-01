import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { useState, useEffect } from "react";

const PricingSection = () => {
  const { t, language } = useLanguage();
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [billingPeriod, setBillingPeriod] = useState('monthly'); // 'monthly' or 'annual'

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://try.radi.sa/version-live/api/1.1/wf/get_plans');
        const data = await response.json();
        
        if (data.status === 'success' && data.response?.plans) {
          const transformedPlans = data.response.plans.map((plan, index) => ({
            name: language === 'ar' ? plan.plan_name : plan.plan_name_en,
            monthlyPrice: plan.monthly_price,
            monthlyDiscountedPrice: plan.monthly_discounted_price,
            annualPrice: plan.annual_price,
            annualDiscountedPrice: plan.annual_discounted_price,
            threeMonthPrice: plan["3_month_price"],
            threeMonthDiscountedPrice: plan["3_month_discounted_price"],
            monthlyDiscountValue: plan.monthly_Discount_vlue,
            annualDiscountValue: plan.annual_Discount_vlue,
            threeMonthDiscountValue: plan["3_month_Discount_vlue"],
            currency: "ر.س",
            description: language === 'ar' ? plan.description : plan.description_en,
            popular: index === 1, // Make the second plan popular (Pro plan)
            features: language === 'ar' ? plan["What_does_it_offer?"] : plan["What_does_it_offer?_en"],
            subscriptionType: plan.subscription_type
          }));
          
          // Add the "Coming Soon" plan if there are only 2 plans from API
          if (transformedPlans.length === 2) {
            transformedPlans.push({
              name: t('ultra'),
              monthlyPrice: t('comingSoon'),
              annualPrice: t('comingSoon'),
              currency: "",
              description: t('ultraDesc'),
              popular: false,
              features: [
                t('everythingPro'),
                t('posIntegration'),
                t('advancedAnalytics'),
                t('customReporting'),
                t('apiAccess'),
                t('accountManager'),
                t('whiteLabelOptions')
              ]
            });
          }
          
          setPlans(transformedPlans);
        }
      } catch (err) {
        setError(err.message);
        console.error('Error fetching plans:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, [language, t]);

  const getCurrentPrice = (plan) => {
    if (plan.monthlyPrice === t('comingSoon')) return t('comingSoon');
    
    if (billingPeriod === 'annual') {
      return plan.annualDiscountedPrice || plan.annualPrice;
    }
    return plan.monthlyDiscountedPrice || plan.monthlyPrice;
  };

  const getOriginalPrice = (plan) => {
    if (plan.monthlyPrice === t('comingSoon')) return null;
    
    if (billingPeriod === 'annual') {
      return plan.annualDiscountedPrice && plan.annualDiscountedPrice !== plan.annualPrice ? plan.annualPrice : null;
    }
    return plan.monthlyDiscountedPrice && plan.monthlyDiscountedPrice !== plan.monthlyPrice ? plan.monthlyPrice : null;
  };

  const getDiscountPercentage = (plan) => {
    if (billingPeriod === 'annual') {
      return plan.annualDiscountValue;
    }
    return plan.monthlyDiscountValue;
  };

  if (loading) {
    return (
      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">جاري تحميل الخطط...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-red-500">خطأ في تحميل الخطط: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('pricingTitle')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('pricingSubtitle')}
          </p>
          
          {/* Billing Period Toggle */}
          <div className="flex items-center justify-center mb-8">
            <div className="bg-muted rounded-lg p-1 flex">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  billingPeriod === 'monthly'
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                شهرياً
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  billingPeriod === 'annual'
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                سنوياً
                <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-100">
                  وفر حتى 40%
                </Badge>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const currentPrice = getCurrentPrice(plan);
            const originalPrice = getOriginalPrice(plan);
            const discountPercent = getDiscountPercentage(plan);
            
            return (
              <Card 
                key={index} 
                className={`relative bg-card shadow-lg hover:shadow-xl transition-all duration-500 border animate-fade-in hover:scale-105 ${
                  plan.popular ? 'scale-105 ring-2 ring-primary' : ''
                } ${currentPrice === t('comingSoon') ? 'opacity-60 grayscale' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1">
                    <Star className="h-4 w-4 mr-1 rtl:mr-0 rtl:ml-1" />
                    {t('mostPopular')}
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      {originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">
                          {originalPrice} {plan.currency}
                        </span>
                      )}
                      {discountPercent && (
                        <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                          -{discountPercent}%
                        </Badge>
                      )}
                    </div>
                    <span className="text-4xl font-bold">
                      {currentPrice === t('comingSoon') ? currentPrice : `${currentPrice} ${plan.currency}`}
                    </span>
                    {currentPrice !== t('comingSoon') && (
                      <span className="text-muted-foreground">
                        /{billingPeriod === 'annual' ? 'سنة' : 'شهر'}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground mt-2">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features && plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3 rtl:space-x-reverse">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 ${
                      plan.popular 
                        ? 'bg-primary hover:bg-primary/90 text-white' 
                        : 'bg-secondary hover:bg-secondary/80'
                    }`}
                    disabled={currentPrice === t('comingSoon')}
                    onClick={currentPrice === t('comingSoon') ? undefined : () => window.open('https://try.radi.sa/', '_blank')}
                  >
                    {currentPrice === t('comingSoon') ? t('comingSoon') : t('startFreePricing')}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <p className="text-muted-foreground mb-4">
            {t('trialInfo')}
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span>{t('support247')}</span>
            <span>{t('dataMigration')}</span>
            <span>{t('trainingIncluded')}</span>
            <span>{t('uptimeSLA')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
