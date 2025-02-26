import { Locale } from '@/i18n.config';
import HeroSection from '@/app/components/HeroSection/HeroSection';
import './Home.scss';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <div className="home">
      <HeroSection />
    </div>
  );
}
