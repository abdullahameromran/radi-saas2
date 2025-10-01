import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ar: {
    // Header
    home: "الرئيسية",
    about: "من نحن", 
    features: "المميزات",
    pricing: "الأسعار",
    getStarted: "ابدأ الآن",
    
    // Hero
    heroTitle: "نمنحك فهمًا عميقًا لآراء عملائك، ونساعدك على تطوير عملك",
    heroSubtitle: "بمساعدة الذكاء الاصطناعي، حوّل ملاحظات العملاء إلى فرص نمو",
    startFreeTrial: "اشترك الآن",
    watchDemo: "شاهد العرض التوضيحي",
    
    // Client Logos
    trustedBy: "موثوق من قبل الشركات الرائدة",
    trustedSubtitle: "انضم إلى مئات الشركات التي تستخدم رادي بالفعل لتحسين تجربة العملاء",
    restaurants: "المطاعم",
    cafe: "المقاهي", 
    hospitality: "الضيافة",
    fitness: "اللياقة / المنتجعات",
    beauty: "صالونات التجميل",
    shopping: "التسوق",
    pharmacies: "الصيدليات",
    hotels: "الفنادق",
    events: "الفعاليات",
    attractions: "المعالم السياحية",
    averageRating: "4.9/5 متوسط التقييم",
    reviewIncrease: "250% زيادة متوسط المراجعات",
    monitoring: "24/7 مراقبة تلقائية",
    
    // Features
    featuresTitle: "كل ما تحتاجه لإتقان ملاحظات العملاء",
    featuresSubtitle: "يوفر رادي مجموعة شاملة من الأدوات لمساعدتك على فهم وتحليل والرد على مراجعات العملاء عبر جميع مواقعك",
    multiLocation: "إدارة المواقع المتعددة",
    multiLocationDesc: "ربط ومراقبة مراجعات جوجل عبر جميع مواقع أعمالك من لوحة تحكم واحدة",
    realTimeAnalytics: "تحليلات فورية",
    realTimeAnalyticsDesc: "احصل على رؤى فورية مع تحليل المشاعر واتجاهات التقييم وأنماط ملاحظات العملاء",
    directResponse: "إدارة الردود المباشرة",
    directResponseDesc: "رد على مراجعات جوجل مباشرة من لوحة التحكم دون تبديل المنصات",
    aiInsights: "رؤى مدعومة بالذكاء الاصطناعي",
    aiInsightsDesc: "تصنيف تلقائي للمراجعات حسب المواضيع مثل الطعام والخدمة والجو والأسعار",
    automatedReports: "تقارير تلقائية",
    automatedReportsDesc: "تلقي تقارير يومية وأسبوعية وشهرية عبر الواتساب مع مقاييس الأداء الرئيسية",
    smartFiltering: "تصفية ذكية",
    smartFilteringDesc: "تصفية المراجعات حسب الفرع والتقييم ونطاق التاريخ ووقت اليوم والمواضيع المكتشفة بالذكاء الاصطناعي",
    secureIntegration: "تكامل آمن",
    secureIntegrationDesc: "مصادقة OAuth2 تضمن الاتصال الآمن بملف تعريف أعمال جوجل الخاص بك",
    teamCollaboration: "تعاون الفريق",
    teamCollaborationDesc: "وصول قائم على الأدوار للمديرين والمشرفين والمشاهدين مع أذونات قابلة للتخصيص",
    instantAlerts: "تنبيهات فورية",
    instantAlertsDesc: "احصل على إشعار فوري عند تلقي تقييمات منخفضة أو ملاحظات سلبية",
    
    // Pricing
    pricingTitle: "أسعار بسيطة وشفافة",
    pricingSubtitle: "اختر الخطة المثالية لحجم أعمالك واحتياجاتك. جميع الخطط تتضمن تجربة مجانية لمدة 7 أيام",
    basic: "أساسي",
    pro: "محترف",
    ultra: "متقدم",
    comingSoon: "قريباً",
    month: "/شهر",
    basicDesc: "مثالي للشركات ذات الموقع الواحد",
    proDesc: "رائع للشركات النامية",
    ultraDesc: "للعمليات على مستوى المؤسسة",
    mostPopular: "الأكثر شعبية",
    startFreePricing: "ابدأ التجربة المجانية",
    
    // Basic features
    accessGoogle: "الوصول إلى مراجعات جوجل",
    viewReviews: "عرض المراجعات لكل فرع",
    filterReviews: "تصفية حسب الفرع والتقييم والتاريخ والوقت",
    linkToGoogle: "رابط للمراجعة على جوجل",
    downloadReports: "تحميل تقارير CSV و PDF",
    dailyReports: "تقارير يومية وأسبوعية وشهرية",
    whatsappReports: "تقارير أسبوعية عبر الواتساب والإيميل",
    
    // Pro features
    everythingBasic: "كل شيء في الأساسي",
    aiInsightsBusiest: "رؤى ذكية (أوقات الذروة)",
    topicDetection: "اكتشاف المواضيع (طعام، خدمة، جو، سعر)",
    filterTopics: "تصفية حسب المواضيع المكتشفة بالذكاء الاصطناعي",
    sentimentAnalysis: "تحليل متقدم للمشاعر",
    badReviewAlerts: "تنبيهات المراجعات السيئة",
    prioritySupport: "دعم أولوي",
    
    // Ultra features
    everythingPro: "كل شيء في المحترف",
    posIntegration: "تكامل نقاط البيع مع فوديكس",
    advancedAnalytics: "لوحة تحكم تحليلات متقدمة",
    customReporting: "تقارير مخصصة",
    apiAccess: "وصول API",
    accountManager: "مدير حساب مخصص",
    whiteLabelOptions: "خيارات العلامة البيضاء",
    
    // Footer
    footerDesc: "حوّل مراجعات جوجل إلى ذكاء أعمال قابل للتنفيذ. جمع تلقائي، رؤى مدعومة بالذكاء الاصطناعي، وتقارير واتساب",
    product: "المنتج",
    company: "الشركة",
    apiDocs: "وثائق API",
    integrations: "التكاملات",
    aboutUs: "حولنا",
    blog: "المدونة",
    careers: "الوظائف",
    contact: "اتصل بنا",
    privacyPolicy: "سياسة الخصوصية",
    termsOfService: "شروط الخدمة", 
    cookiePolicy: "سياسة ملفات تعريف الارتباط",
    allRightsReserved: "© 2025 رادي. جميع الحقوق محفوظة",
    
    // Contact info
    email: "البريد الإلكتروني: info@radi.sa",
    phone: "الهاتف: +966 507169232",
    location: "الموقع: الرياض، العليا",
    
    // Trial info
    trialInfo: "جميع الخطط تتضمن تجربة مجانية لمدة 7 أيام • إلغاء في أي وقت",
    support247: "✓ دعم 24/7",
    dataMigration: "✓ ترحيل البيانات",
    trainingIncluded: "✓ تدريب مشمول",
    uptimeSLA: "✓ اتفاقية مستوى الخدمة 99.9%",
    
    // About Section
    ourValues: "قيمنا",
    ourVision: "رؤيتنا", 
    ourMission: "مهمتنا",
    valuesDesc: "الابتكار المتمحور حول العميل، والرؤى القائمة على البيانات، وتجربة المستخدم السلسة",
    visionDesc: "أن نصبح المنصة الرائدة لذكاء المراجعات في الشرق الأوسط وما بعده",
    missionDesc: "تمكين الشركات بتحليلات المراجعات الذكية التي تحفز رضا العملاء ونمو الأعمال",
    
    // Why Choose Radi
    whyChooseRadi: "لماذا تختار رادي؟",
    multiLocationSupport: "دعم المواقع المتعددة",
    multiLocationSupportDesc: "إدارة المراجعات عبر مواقع غير محدودة مع تحليلات وتقارير مركزية",
    automatedIntelligence: "الذكاء التلقائي",
    automatedIntelligenceDesc: "الذكاء الاصطناعي يصنف المراجعات تلقائياً، ويكتشف المشاعر، ويحدد الاتجاهات دون تدخل يدوي",
    arabicEnglishSupport: "دعم العربية والإنجليزية",
    arabicEnglishSupportDesc: "مصمم لسوق الشرق الأوسط مع دعم ثنائي اللغة كامل وفهم ثقافي",
    whatsappIntegration: "تكامل الواتساب",
    whatsappIntegrationDesc: "تلقي التقارير والتنبيهات التلقائية مباشرة على الواتساب للتنبه الفوري",
    
    // Additional translations
    aboutRadi: "حول رادي",
    aboutRadiDesc: "رادي (راضي) تعني \"راضٍ\" باللغة العربية، مما يعكس مهمتنا في مساعدة الشركات على تحقيق رضا العملاء من خلال إدارة المراجعات الذكية والرؤى القابلة للتنفيذ.",
    powerfulAnalyticsDashboard: "لوحة تحليلات قوية",
    powerfulAnalyticsDashboardDesc: "احصل على رؤى مفصلة حول مراجعات العملاء مع تحليلات شاملة وتقارير تلقائية ترسل عبر الواتساب والإيميل ومراقبة في الوقت الفعلي.",
    yourBusinessDashboard: "لوحة تحكم أعمالك",
    yourBusinessDashboardDesc: "احصل على نظرة عامة كاملة على سمعة أعمالك مع لوحة التحكم البديهية. راقب المراجعات وتتبع الاتجاهات وأدر حضورك الرقمي من مكان واحد.",
    topPerformingBusinesses: "أفضل الشركات أداءً",
    topPerformingBusinessesDesc: "شاهد كيف تستخدم الشركات الرائدة منصتنا لتعزيز سمعتها الرقمية ودرجات رضا العملاء.",
    
    
    // Privacy Policy
    privacyPolicyTitle: "سياسة الخصوصية",
    backToHome: "العودة للرئيسية",
    lastUpdated: "آخر تحديث",
    dataCollection: "جمع البيانات",
    dataCollectionContent: "نحن في رادي نلتزم بحماية خصوصيتك. نجمع البيانات اللازمة فقط لتقديم خدماتنا بأفضل جودة، بما في ذلك معلومات الاتصال ومراجعات العملاء وبيانات التحليل.",
    dataUsage: "استخدام البيانات",
    dataUsageContent: "نستخدم البيانات المجمعة لتحليل مراجعات العملاء، تقديم رؤى مفيدة، تحسين خدماتنا، والتواصل معك بخصوص حسابك والتحديثات المهمة.",
    dataSharing: "مشاركة البيانات",
    dataSharingContent: "لا نشارك بياناتك الشخصية مع أطراف ثالثة إلا في الحالات المطلوبة قانونياً أو للشركاء الموثوقين الذين يساعدوننا في تقديم الخدمة.",
    dataSecurity: "أمان البيانات",
    dataSecurityContent: "نستخدم أحدث تقنيات الأمان والتشفير لحماية بياناتك. جميع البيانات محمية بمعايير أمان عالمية ومخزنة في خوادم آمنة.",
    userRights: "حقوق المستخدم",
    userRightsContent: "لك الحق في الوصول إلى بياناتك، تعديلها، أو حذفها في أي وقت. كما يمكنك إلغاء الاشتراك من رسائلنا التسويقية.",
    contactUs: "اتصل بنا",
    contactUsContent: "إذا كان لديك أي استفسارات حول سياسة الخصوصية، يرجى التواصل معنا:",
    
    // Terms of Service
    termsOfServiceTitle: "شروط الخدمة",
    serviceDescription: "وصف الخدمة",
    serviceDescriptionContent: "رادي منصة لإدارة وتحليل مراجعات العملاء باستخدام الذكاء الاصطناعي. نقدم أدوات تحليل متقدمة ورؤى مفيدة لتحسين تجربة العملاء.",
    userResponsibilities: "مسؤوليات المستخدم",
    userResponsibilitiesContent: "يجب عليك استخدام الخدمة بطريقة قانونية ومسؤولة، عدم انتهاك حقوق الآخرين، والحفاظ على أمان حسابك ومعلوماتك.",
    serviceAvailability: "توفر الخدمة",
    serviceAvailabilityContent: "نسعى لتوفير الخدمة على مدار الساعة، لكن قد تحدث انقطاعات مؤقتة للصيانة أو التحديثات. سنبذل قصارى جهدنا لتقليل هذه الانقطاعات.",
    paymentTerms: "شروط الدفع",
    paymentTermsContent: "جميع الرسوم مستحقة الدفع مقدماً حسب الخطة المختارة. يمكن إلغاء الاشتراك في أي وقت مع احتفاظك بالخدمة حتى نهاية فترة الدفع.",
    termination: "إنهاء الخدمة",
    terminationContent: "يمكنك إنهاء حسابك في أي وقت. كما نحتفظ بالحق في إنهاء الحسابات التي تنتهك شروط الخدمة.",
    limitation: "تحديد المسؤولية",
    limitationContent: "مسؤوليتنا محدودة بقيمة الخدمة المدفوعة. لا نتحمل مسؤولية الأضرار غير المباشرة أو الخسائر التجارية.",
    contactUsTerms: "للاستفسارات حول شروط الخدمة، يرجى التواصل معنا:"
  },
  en: {
    // Header  
    home: "Home",
    about: "About",
    features: "Features", 
    pricing: "Pricing",
    getStarted: "Get Started",
    
    // Hero
    heroTitle: "Transform Your Google Reviews Into Business Intelligence",
    heroSubtitle: "Automated collection, AI-powered insights, and WhatsApp reporting for multi-location businesses",
    startFreeTrial: "Start Free Trial",
    watchDemo: "Watch Demo",
    
    // Client Logos
    trustedBy: "Trusted by Leading Businesses",
    trustedSubtitle: "Join hundreds of businesses already using Radi to improve their customer experience",
    restaurants: "Restaurants",
    cafe: "Cafe",
    hospitality: "Hospitality", 
    fitness: "Fitness / Spa",
    beauty: "Beauty Saloon",
    shopping: "Shopping",
    pharmacies: "Pharmacies",
    hotels: "Hotels",
    events: "Events",
    attractions: "Attractions",
    averageRating: "4.9/5 Average Rating",
    reviewIncrease: "250% Average Review Increase",
    monitoring: "24/7 Automated Monitoring",
    
    // Features
    featuresTitle: "Everything You Need to Master Customer Feedback",
    featuresSubtitle: "Radi provides a comprehensive suite of tools to help you understand, analyze, and respond to customer reviews across all your locations",
    multiLocation: "Multi-Location Management",
    multiLocationDesc: "Connect and monitor Google Reviews across all your business locations from a single dashboard",
    realTimeAnalytics: "Real-Time Analytics", 
    realTimeAnalyticsDesc: "Get instant insights with sentiment analysis, rating trends, and customer feedback patterns",
    directResponse: "Direct Response Management",
    directResponseDesc: "Reply to Google Reviews directly from your dashboard without switching platforms",
    aiInsights: "AI-Powered Insights",
    aiInsightsDesc: "Automatically categorize reviews by topics like food, service, atmosphere, and pricing",
    automatedReports: "Automated Reports",
    automatedReportsDesc: "Receive daily, weekly, and monthly reports via WhatsApp with key performance metrics",
    smartFiltering: "Smart Filtering", 
    smartFilteringDesc: "Filter reviews by branch, rating, date range, time of day, and AI-detected topics",
    secureIntegration: "Secure Integration",
    secureIntegrationDesc: "OAuth2 authentication ensures secure connection to your Google Business Profile",
    teamCollaboration: "Team Collaboration",
    teamCollaborationDesc: "Role-based access for admins, managers, and viewers with customizable permissions",
    instantAlerts: "Instant Alerts",
    instantAlertsDesc: "Get notified immediately when you receive low ratings or negative feedback",
    
    // Pricing
    pricingTitle: "Simple, Transparent Pricing", 
    pricingSubtitle: "Choose the perfect plan for your business size and needs. All plans include 7-day free trial",
    basic: "Basic",
    pro: "Pro", 
    ultra: "Ultra",
    comingSoon: "Coming Soon",
    month: "/month",
    basicDesc: "Perfect for single location businesses",
    proDesc: "Great for growing businesses", 
    ultraDesc: "For enterprise-level operations",
    mostPopular: "Most Popular",
    startFreePricing: "Start Free Trial",
    
    // Basic features
    accessGoogle: "Access Google reviews",
    viewReviews: "View reviews per branch",
    filterReviews: "Filter by branch, rating, date, time", 
    linkToGoogle: "Link to review on Google",
    downloadReports: "Download CSV & PDF reports",
    dailyReports: "Daily, Weekly, Monthly reports",
    whatsappReports: "Weekly WhatsApp & Email reports",
    
    // Pro features
    everythingBasic: "Everything in Basic",
    aiInsightsBusiest: "AI insights (busiest times)",
    topicDetection: "Topic detection (food, service, atmosphere, price)",
    filterTopics: "Filter by AI-detected topics",
    sentimentAnalysis: "Advanced sentiment analysis", 
    badReviewAlerts: "Bad review alerts",
    prioritySupport: "Priority support",
    
    // Ultra features
    everythingPro: "Everything in Pro",
    posIntegration: "POS integration with Foodics",
    advancedAnalytics: "Advanced analytics dashboard",
    customReporting: "Custom reporting",
    apiAccess: "API access",
    accountManager: "Dedicated account manager",
    whiteLabelOptions: "White-label options",
    
    // Footer
    footerDesc: "Transform your Google Reviews into actionable business intelligence. Automated collection, AI-powered insights, and WhatsApp reporting",
    product: "Product",
    company: "Company",
    apiDocs: "API Documentation", 
    integrations: "Integrations",
    aboutUs: "About Us",
    blog: "Blog",
    careers: "Careers",
    contact: "Contact",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    cookiePolicy: "Cookie Policy", 
    allRightsReserved: "© 2025 Radi. All rights reserved",
    
    // Contact info
    email: "Email: info@radi.sa",
    phone: "Phone: +966 507169232",
    location: "Location: Riyadh, Olaya",
    
    // Trial info
    trialInfo: "All plans include 7-day free trial • Cancel anytime",
    support247: "✓ 24/7 Support",
    dataMigration: "✓ Data Migration",
    trainingIncluded: "✓ Training Included",
    uptimeSLA: "✓ 99.9% Uptime SLA",
    
    // About Section
    ourValues: "Our Values",
    ourVision: "Our Vision",
    ourMission: "Our Mission", 
    valuesDesc: "Customer-centric innovation, data-driven insights, and seamless user experience",
    visionDesc: "To become the leading platform for review intelligence in the Middle East and beyond",
    missionDesc: "To empower businesses with intelligent review analytics that drive customer satisfaction and business growth",
    
    // Why Choose Radi
    whyChooseRadi: "Why Choose Radi?",
    multiLocationSupport: "Multi-Location Support",
    multiLocationSupportDesc: "Manage reviews across unlimited locations with centralized analytics and reporting",
    automatedIntelligence: "Automated Intelligence", 
    automatedIntelligenceDesc: "Our AI automatically categorizes reviews, detects sentiment, and identifies trends without manual intervention",
    arabicEnglishSupport: "Arabic & English Support",
    arabicEnglishSupportDesc: "Built for the Middle East market with full bilingual support and cultural understanding",
    whatsappIntegration: "WhatsApp Integration",
    whatsappIntegrationDesc: "Receive automated reports and alerts directly on WhatsApp for instant awareness",
    
    // Additional translations
    aboutRadi: "About Radi",
    aboutRadiDesc: "Radi (راضي) means \"satisfied\" in Arabic, reflecting our mission to help businesses achieve customer satisfaction through intelligent review management and actionable insights.",
    powerfulAnalyticsDashboard: "Powerful Analytics Dashboard",
    powerfulAnalyticsDashboardDesc: "Get detailed insights into your customer reviews with comprehensive analytics, automated reports sent via WhatsApp & Email, and real-time monitoring.",
    yourBusinessDashboard: "Your Business Dashboard",
    yourBusinessDashboardDesc: "Get a complete overview of your business reputation with our intuitive dashboard. Monitor reviews, track trends, and manage your online presence from one place.",
    topPerformingBusinesses: "Top Performing Businesses",
    topPerformingBusinessesDesc: "See how leading businesses are using our platform to boost their online reputation and customer satisfaction scores.",
    
    // Privacy Policy English
    privacyPolicyTitle: "Privacy Policy",
    backToHome: "Back to Home",
    lastUpdated: "Last Updated",
    dataCollection: "Data Collection",
    dataCollectionContent: "At Radi, we are committed to protecting your privacy. We collect only the necessary data to provide our services with the best quality, including contact information, customer reviews, and analytics data.",
    dataUsage: "Data Usage",
    dataUsageContent: "We use the collected data to analyze customer reviews, provide useful insights, improve our services, and communicate with you regarding your account and important updates.",
    dataSharing: "Data Sharing",
    dataSharingContent: "We do not share your personal data with third parties except in legally required cases or with trusted partners who help us provide the service.",
    dataSecurity: "Data Security",
    dataSecurityContent: "We use the latest security and encryption technologies to protect your data. All data is protected by global security standards and stored on secure servers.",
    userRights: "User Rights",
    userRightsContent: "You have the right to access, modify, or delete your data at any time. You can also unsubscribe from our marketing messages.",
    contactUs: "Contact Us",
    contactUsContent: "If you have any questions about our privacy policy, please contact us:",
    
    // Terms of Service English
    termsOfServiceTitle: "Terms of Service",
    serviceDescription: "Service Description",
    serviceDescriptionContent: "Radi is a platform for managing and analyzing customer reviews using artificial intelligence. We provide advanced analytics tools and useful insights to improve customer experience.",
    userResponsibilities: "User Responsibilities",
    userResponsibilitiesContent: "You must use the service legally and responsibly, not violate others' rights, and maintain the security of your account and information.",
    serviceAvailability: "Service Availability",
    serviceAvailabilityContent: "We strive to provide the service 24/7, but temporary interruptions may occur for maintenance or updates. We will do our best to minimize these interruptions.",
    paymentTerms: "Payment Terms",
    paymentTermsContent: "All fees are due in advance according to the selected plan. You can cancel your subscription at any time while retaining the service until the end of the payment period.",
    termination: "Termination",
    terminationContent: "You can terminate your account at any time. We also reserve the right to terminate accounts that violate the terms of service.",
    limitation: "Limitation of Liability",
    limitationContent: "Our liability is limited to the value of the paid service. We are not responsible for indirect damages or business losses.",
    contactUsTerms: "For inquiries about terms of service, please contact us:"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ar'); // Default to Arabic

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'ar' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
    
    // Set document direction based on language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    console.error('useLanguage must be used within a LanguageProvider');
    // Return default values to prevent crash
    return {
      language: 'ar' as const,
      setLanguage: () => {},
      t: (key: string) => key
    };
  }
  return context;
};