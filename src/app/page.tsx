// src/app/page.tsx
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TrendingCollections from './components/TrendingCollection';
import TopCreators from './components/TopCreators';
import Categories from './components/Categories';
import DiscoverMoreNFTs from './components/DiscoverMoreNFTs';
import HowItWorks from './components/HowItWorks';
import JoinWeeklyDigest from './components/JoinWeeklyDigest';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <TrendingCollections />
      <TopCreators />
      <Categories />
      <DiscoverMoreNFTs />
      <HowItWorks />
      <JoinWeeklyDigest />
      <Footer />
    </>
  );
}