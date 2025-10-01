import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { TrendingUp, Star, MessageCircle, Calendar } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const AnalyticsSection = () => {
  const reviewsData = [
    { month: "Jan", reviews: 145 },
    { month: "Feb", reviews: 189 },
    { month: "Mar", reviews: 234 },
    { month: "Apr", reviews: 287 },
    { month: "May", reviews: 321 },
    { month: "Jun", reviews: 298 }
  ];

  const ratingData = [
    { name: "5 Stars", value: 60, color: "#285856" },
    { name: "4 Stars", value: 25, color: "#10B981" },
    { name: "3 Stars", value: 10, color: "#F59E0B" },
    { name: "2 Stars", value: 3, color: "#EF4444" },
    { name: "1 Star", value: 2, color: "#DC2626" }
  ];

  const chartConfig = {
    reviews: {
      label: "Reviews",
      color: "#285856"
    }
  };

  const { t } = useLanguage();

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {t('powerfulAnalyticsDashboard')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('powerfulAnalyticsDashboardDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-card shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">4.8</p>
                  <p className="text-sm text-muted-foreground">Average Rating</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hover:scale-105" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">2,847</p>
                  <p className="text-sm text-muted-foreground">Total Reviews</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hover:scale-105" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">+15%</p>
                  <p className="text-sm text-muted-foreground">This Month</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hover:scale-105" style={{ animationDelay: "0.3s" }}>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">87</p>
                  <p className="text-sm text-muted-foreground">This Week</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <Card className="bg-card shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground">Monthly Review Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-80">
                <BarChart data={reviewsData}>
                  <XAxis 
                    dataKey="month" 
                    axisLine={false}
                    tickLine={false}
                    className="text-muted-foreground"
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    className="text-muted-foreground"
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar 
                    dataKey="reviews" 
                    fill="#285856" 
                    radius={[6, 6, 0, 0]}
                    className="hover:opacity-80 transition-opacity"
                  />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card className="bg-card shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground">Rating Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-80">
                <PieChart>
                  <Pie
                    data={ratingData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, value }) => `${value}%`}
                    labelLine={false}
                  >
                    {ratingData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.color}
                        className="hover:opacity-80 transition-opacity"
                      />
                    ))}
                  </Pie>
                  <ChartTooltip 
                    content={<ChartTooltipContent />}
                    formatter={(value, name) => [`${value}%`, name]}
                  />
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="bg-primary/5 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Automated Reporting</h3>
            <p className="text-muted-foreground mb-6">
              Get comprehensive reports delivered automatically to your WhatsApp and Email every week. 
              Stay updated on your business performance without manual tracking.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <span>📱</span>
                <span>WhatsApp Weekly Reports</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span>📧</span>
                <span>Email Notifications</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span>📊</span>
                <span>Custom Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;