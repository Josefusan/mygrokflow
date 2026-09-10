import { BackgroundVideo } from "@/components/landing/background-video";
import { CaseStudy } from "@/components/landing/case-study";
import { CustomSolution } from "@/components/landing/custom-solution";
import { Faq } from "@/components/landing/faq";
import { LandingFooter } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { Integrations } from "@/components/landing/integrations";
import { LandingNav } from "@/components/landing/nav";
import { Playbook } from "@/components/landing/playbook";
import { Process } from "@/components/landing/process";
import { Rates } from "@/components/landing/rates";
import { Statement } from "@/components/landing/statement";
import { SystemFlow } from "@/components/landing/system-flow";
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
        <SystemFlow />
        <Process />
        <CaseStudy />
        <Playbook />
        <Rates />
        <CustomSolution />
        <Integrations />
        <Faq />
      </main>
      <LandingFooter />
    </div>
  );
}
