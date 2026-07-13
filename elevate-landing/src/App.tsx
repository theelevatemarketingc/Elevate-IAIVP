import AuroraBackground from './components/AuroraBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionDivider from './components/SectionDivider';
// import PlatformSection from './components/PlatformSection';
import HowItWorks from './components/HowItWorks';
import EfficiencyProof from './components/EfficiencyProof';
import LivingCurriculumMap from './components/LivingCurriculumMap';
// import ROICalculator from './components/ROICalculator';
import QualityGate from './components/QualityGate';
import StakeholderBenefits from './components/StakeholderBenefits';
import VisionSection from './components/VisionSection';
import CustomLMS from './components/CustomLMS';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <AuroraBackground />
      <Navbar />

      <main className="page-main">
        <Hero />

        {/* Platform section — paused for now
        <SectionDivider label="// INSTITUTIONAL PLATFORM LAYER" />
        <PlatformSection />
        */}

        <HowItWorks />

        <SectionDivider label="// PRODUCTION METRICS TELEMETRY" />
        <EfficiencyProof />

        <SectionDivider label="// LIVING CURRICULUM CONSTELLATION" />
        <LivingCurriculumMap />

        {/* ROI Calculator — paused for now
        <SectionDivider label="// INSTITUTIONAL ROI ENGINE" />
        <ROICalculator />
        */}

        <SectionDivider label="// COMPLIANCE QUALITY GATE" />
        <QualityGate />

        <SectionDivider label="// THE REAL IMPACT" />
        <StakeholderBenefits />

        <SectionDivider label="// IMMERSIVE VISION LAYER" />
        <VisionSection />

        <SectionDivider label="// CUSTOM LMS INTEGRATION" />
        <CustomLMS />

        <SectionDivider label="// CONSULTATION PROTOCOL" />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}

export default App;
