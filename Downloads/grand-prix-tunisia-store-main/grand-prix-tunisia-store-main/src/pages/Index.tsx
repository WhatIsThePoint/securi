
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import BestSellerSection from '@/components/BestSellerSection';
import NextRaceFeature from '@/components/NextRaceFeature';
import LimitedEditionAlert from '@/components/LimitedEditionAlert';
import SocialMediaFeeds from '@/components/SocialMediaFeeds';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-f1-black">
      <Header />
      <main>
        <HeroSection />
        <LimitedEditionAlert />
        <FeaturedProducts />
        <BestSellerSection />
        <NextRaceFeature />
        <SocialMediaFeeds />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
