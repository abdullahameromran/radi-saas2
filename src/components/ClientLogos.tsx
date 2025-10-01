import { useLanguage } from "@/hooks/useLanguage";
import { useEffect, useRef } from "react";

const ClientLogos = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const businessCategories = [
    { name: t('restaurants'), icon: "🍽️" },
    { name: t('cafe'), icon: "☕" },
    { name: t('hospitality'), icon: "🏨" },
    { name: t('fitness'), icon: "💪" },
    { name: t('beauty'), icon: "💄" },
    { name: t('shopping'), icon: "🛍️" },
    { name: t('pharmacies'), icon: "💊" },
    { name: t('hotels'), icon: "🏨" },
    { name: t('events'), icon: "🎉" },
    { name: t('attractions'), icon: "🎢" }
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let currentTranslate = 0;

    const animate = () => {
      currentTranslate -= 0.5; // Slower movement speed
      
      // Calculate the width of one complete set
      const cardWidth = 128; // Width including gap
      const totalWidth = businessCategories.length * cardWidth;
      
      // Reset smoothly when we've moved one complete set
      if (Math.abs(currentTranslate) >= totalWidth) {
        currentTranslate = 0;
      }
      
      if (scrollContainer) {
        scrollContainer.style.transform = `translateX(${currentTranslate}px)`;
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [businessCategories.length]);

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary-foreground mb-4">
            {t('trustedBy')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('trustedSubtitle')}
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex gap-4 whitespace-nowrap"
            style={{ 
              width: 'max-content',
              willChange: 'transform'
            }}
          >
            {[...businessCategories, ...businessCategories, ...businessCategories, ...businessCategories].map((category, index) => (
              <div 
                key={`${category.name}-${index}`}
                className="flex flex-col items-center justify-center p-4 bg-card rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 min-w-[120px] flex-shrink-0"
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <span className="text-xs font-medium text-card-foreground text-center whitespace-nowrap">
                  {category.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 rtl:space-x-reverse text-sm text-muted-foreground">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span className="text-2xl">⭐</span>
              <span>{t('averageRating')}</span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span className="text-2xl">📈</span>
              <span>{t('reviewIncrease')}</span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span className="text-2xl">⚡</span>
              <span>{t('monitoring')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;