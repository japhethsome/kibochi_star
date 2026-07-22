import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Network from '@/components/Network/Network';
import Quality from '@/components/Quality/Quality';
import Farmers from '@/components/Farmers/Farmers';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Network />
      <Quality />
      <Farmers />
    </>
  );
}
