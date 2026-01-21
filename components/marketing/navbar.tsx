// import { useState} from 'react';
import { Button } from '@/app/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/app/components/ui/avatar';
import { 
  Menu, X, LogOut, Truck,
} from 'lucide-react';

export const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Truck className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Innovative Logistics</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
           
              <>
                <button className="text-gray-600 hover:text-gray-900">Home</button>
                <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
                <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
                <button className="text-gray-600 hover:text-gray-900">About</button>
              </>
          
          </div>

          <div className="hidden md:flex items-center gap-4">
            
                <Button  variant="ghost">Login</Button>
                <Button >Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          {/* <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button> */}
        </div>

        {/* Mobile Menu */}
        {/* {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            {!user && (
              <>
                <button onClick={() => { onNavigate('landing'); setMobileMenuOpen(false); }} className="block text-gray-600">Home</button>
                <a href="#features" className="block text-gray-600">Features</a>
                <a href="#pricing" className="block text-gray-600">Pricing</a>
              </>
            )}
            {user ? (
              <>
                <Button onClick={() => { onNavigate('dashboard'); setMobileMenuOpen(false); }} className="w-full">Dashboard</Button>
                <Button onClick={() => { onLogout(); setMobileMenuOpen(false); }} variant="outline" className="w-full">Logout</Button>
              </>
            ) : (
              <>
                <Button onClick={() => { onNavigate('login'); setMobileMenuOpen(false); }} variant="outline" className="w-full">Login</Button>
                <Button onClick={() => { onNavigate('register'); setMobileMenuOpen(false); }} className="w-full">Get Started</Button>
              </>
            )}
          </div>
        )} */}
      </div>
    </nav>
  );
};