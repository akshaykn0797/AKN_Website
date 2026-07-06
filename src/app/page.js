import Hero from '@/components/home/Hero';
import VenuesBand from '@/components/home/VenuesBand';
import RecentNews from '@/components/home/RecentNews';
import FeaturedResearch from '@/components/home/FeaturedResearch';

export default function HomePage() {
  return (
    <>
      <Hero />
      <VenuesBand />
      <RecentNews />
      <FeaturedResearch />
    </>
  );
}
