import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Check } from 'lucide-react';
export const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: 0,
      period: "forever",
      description: "Perfect for trying out our platform",
      features: [
        "Up to 50 shipments/month",
        "Basic tracking",
        "Email notifications",
        "7-day data retention",
        "Community support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: 49,
      period: "month",
      description: "For growing businesses",
      features: [
        "Up to 500 shipments/month",
        "Advanced tracking & analytics",
        "SMS + Email notifications",
        "Route optimization",
        "90-day data retention",
        "Priority support",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: 199,
      period: "month",
      description: "For large-scale operations",
      features: [
        "Unlimited shipments",
        "Everything in Professional",
        "Custom integrations",
        "Advanced API access",
        "Unlimited data retention",
        "Dedicated account manager",
        "SLA guarantee",
        "White-label options"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div id="pricing" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">Choose the perfect plan for your business</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <Card key={idx} className={`relative ${plan.popular ? 'border-blue-600 border-2 shadow-xl scale-105' : 'border-2'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600">Most Popular</Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};