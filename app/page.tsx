import { Navbar } from '@/components/marketing/navbar'
import { Hero } from '@/components/marketing/hero'
import { Features } from '@/components/marketing/features';
import { Pricing } from '@/components/marketing/pricing';
import { Footer } from '@/components/marketing/footer';
export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Features />
    <Pricing />
    <Footer />
    </>
  );
}
