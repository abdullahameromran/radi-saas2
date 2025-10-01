import { Card, CardContent } from "@/components/ui/card";
import { Star, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const TopBusinesses = () => {
  const { t } = useLanguage();
  const topBusinesses = [
    {
      name: "Giuseppe's Italian Restaurant",
      type: "Restaurant",
      rating: 4.9,
      reviews: 324,
      location: "Downtown",
      image: "🍝"
    },
    {
      name: "Sunset Café & Bistro",
      type: "Café",
      rating: 4.8,
      reviews: 256,
      location: "Beach District",
      image: "☕"
    },
    {
      name: "Grand Plaza Hotel",
      type: "Hotel",
      rating: 4.7,
      reviews: 189,
      location: "City Center",
      image: "🏨"
    },
    {
      name: "FitZone Wellness Spa",
      type: "Fitness/Spa",
      rating: 4.9,
      reviews: 147,
      location: "Wellness District",
      image: "💪"
    },
    {
      name: "Belle Beauty Salon",
      type: "Beauty Salon",
      rating: 4.8,
      reviews: 203,
      location: "Fashion Quarter",
      image: "💄"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {t('topPerformingBusinesses')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('topPerformingBusinessesDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {topBusinesses.map((business, index) => (
            <Card 
              key={business.name} 
              className="bg-card shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hover:scale-105 border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{business.image}</div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{business.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{business.type}</p>
                
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="font-semibold text-foreground">{business.rating}</span>
                  <span className="text-sm text-muted-foreground">({business.reviews})</span>
                </div>
                
                <div className="flex items-center justify-center space-x-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span>{business.location}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <p className="text-muted-foreground">
            Join <span className="font-semibold text-primary">500+</span> businesses already improving their reputation
          </p>
        </div>
      </div>
    </section>
  );
};

export default TopBusinesses;