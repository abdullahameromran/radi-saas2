import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp, MessageCircle, Bell, Calendar, BarChart3 } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const DashboardPreview = () => {
  const recentReviews = [
    { name: "Sarah M.", rating: 5, comment: "Excellent service! Highly recommend...", time: "2h ago", platform: "Google" },
    { name: "John D.", rating: 4, comment: "Great experience, will come back...", time: "5h ago", platform: "Facebook" },
    { name: "Maria L.", rating: 5, comment: "Outstanding quality and service...", time: "1d ago", platform: "Yelp" }
  ];

  const { t } = useLanguage();

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {t('yourBusinessDashboard')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('yourBusinessDashboardDesc')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Dashboard mockup */}
          <div className="bg-card rounded-xl shadow-2xl border border-border p-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {/* Header */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
              <div>
                <h3 className="text-2xl font-bold text-foreground">Giuseppe's Italian Restaurant</h3>
                <p className="text-muted-foreground">Dashboard Overview</p>
              </div>
              <div className="flex items-center space-x-2">
                <Bell className="h-5 w-5 text-muted-foreground" />
                <Badge variant="secondary">3 New Reviews</Badge>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Star className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">4.9</p>
                      <p className="text-xs text-muted-foreground">Avg Rating</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                      <MessageCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">324</p>
                      <p className="text-xs text-muted-foreground">Total Reviews</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">+23%</p>
                      <p className="text-xs text-muted-foreground">This Month</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                      <BarChart3 className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">98%</p>
                      <p className="text-xs text-muted-foreground">Response Rate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Reviews */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageCircle className="h-5 w-5" />
                    <span>Recent Reviews</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentReviews.map((review, index) => (
                    <div key={index} className="flex space-x-3 p-3 bg-muted/30 rounded-lg">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-xs font-semibold text-primary">
                            {review.name.charAt(0)}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-sm font-medium text-foreground">{review.name}</span>
                          <div className="flex">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 text-yellow-500 fill-current" />
                            ))}
                          </div>
                          <Badge variant="outline" className="text-xs">{review.platform}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">{review.comment}</p>
                        <div className="flex items-center mt-1 space-x-2">
                          <Calendar className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{review.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bell className="h-5 w-5" />
                    <span>Automated Reports</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-green-600 dark:text-green-400">📱</span>
                      <span className="font-medium text-foreground">WhatsApp Report</span>
                      <Badge variant="secondary">Sent</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Weekly summary sent every Monday</p>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-blue-600 dark:text-blue-400">📧</span>
                      <span className="font-medium text-foreground">Email Report</span>
                      <Badge variant="secondary">Scheduled</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Detailed analytics every Friday</p>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-purple-600 dark:text-purple-400">🔔</span>
                      <span className="font-medium text-foreground">Instant Alerts</span>
                      <Badge variant="secondary">Active</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Real-time notifications for new reviews</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;