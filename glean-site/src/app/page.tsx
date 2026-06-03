import Hero from "@/components/home/Hero";
import PlatformCards from "@/components/home/PlatformCards";
import InstallSection from "@/components/home/InstallSection";
import SocialProof from "@/components/home/SocialProof";
import UseCaseCards from "@/components/home/UseCaseCards";
import ComparisonSection from "@/components/home/ComparisonSection";
import LeadTable from "@/components/home/LeadTable";
import ICPPreview from "@/components/home/ICPPreview";

export default function Home() {
  return (
    <div className="home-container">
      <Hero />
      <SocialProof />
      <PlatformCards />
      <InstallSection />
      <UseCaseCards />
      <ComparisonSection />
      <LeadTable />
      <ICPPreview />
    </div>
  );
}
