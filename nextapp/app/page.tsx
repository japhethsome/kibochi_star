import Nav from '@/components/Nav/Nav';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Network from '@/components/Network/Network';
import Quality from '@/components/Quality/Quality';
import Farmers from '@/components/Farmers/Farmers';
import CompanyEmails from '@/components/CompanyEmails/CompanyEmails';
import Footer from '@/components/Footer/Footer';

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Network />
      <Quality />
      <Farmers />
      <CompanyEmails />
      <Footer />
    </>
  );
}

