import { BackgroundVideo } from "@/components/landing/background-video";
import { LandingFooter } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { LandingNav } from "@/components/landing/nav";
import { Process } from "@/components/landing/process";
import { Rates } from "@/components/landing/rates";
import { Statement } from "@/components/landing/statement";
import { Work } from "@/components/landing/work";

export function Landing() {
  return (
    <div className="mgf-landing relative">
      <BackgroundVideo />
      <LandingNav />
      <main id="main">
        <Hero />
        <Statement />
        <Work />
        <Process />
        <Rates />
      </main>
      <LandingFooter />
    </div>
  );
}
