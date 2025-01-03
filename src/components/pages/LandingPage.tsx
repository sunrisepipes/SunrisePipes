import { HeaderMenu } from "@/components/ui/HeaderMenu";
import HeroLanding from "@/components/ui/HeroLanding";
import CTASection from "@/components/ui/CTASection";
import { Footer } from "@/components/ui/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-primary-foreground">
      <HeaderMenu />
      <HeroLanding />
      <CTASection />
      <Footer />
    </div>
  );
}
