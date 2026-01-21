import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/app/components/ui/card';
import { 
  MapPin, Zap, Bell, 
  BarChart3, Target, Shield
} from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: <MapPin className="h-8 w-8 text-blue-600" />,
      title: "Live Shipment Tracking",
      description: "Monitor all deliveries in real-time with GPS tracking and automated status updates"
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Smart Route Planning",
      description: "AI-powered algorithms optimize delivery routes to save time and fuel costs"
    },
    {
      icon: <Bell className="h-8 w-8 text-blue-600" />,
      title: "Customer Updates",
      description: "Automatic SMS and email notifications keep customers informed at every step"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      title: "Performance Insights",
      description: "Track KPIs, delivery times, and operational efficiency with comprehensive analytics"
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Seamless Integrations",
      description: "Connect with your existing tools including Shopify, WooCommerce, and major carriers"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with industry standards to protect your data"
    }
  ];

  return (
    <div id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need to Succeed</h2>
          <p className="text-xl text-gray-600">Powerful features designed for modern logistics operations</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <Card key={idx} className="border-2 hover:border-blue-600 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};