import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { 
  ArrowRight,
} from 'lucide-react';
export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">🚀 Now serving 500+ companies worldwide</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Streamline Your <span className="text-blue-600">Logistics Operations</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-time tracking, route optimization, and automated delivery management in one powerful platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button  size="lg" className="text-lg px-8">
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Watch Demo
            </Button>
          </div>
          <div className="pt-8">
            <div className="bg-white rounded-xl shadow-2xl p-2 max-w-4xl mx-auto border">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=400&fit=crop" 
                alt="Dashboard Preview" 
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};