import Header from "./components/Header";
import Hero from "./components/Hero";
import VideoVsl from "./components/VideoVsl";
import QuemEKeyla from "./components/QuemEKeyla";
import Memoria from "./components/Memoria";
import Bio from "./components/Bio";
import Trajetoria from "./components/Trajetoria";
import Territorio from "./components/Territorio";
import Values from "./components/Values";
import Causas from "./components/Causas";
import Plan from "./components/Plan";
import Authenticity from "./components/Authenticity";
import SloganFeature from "./components/SloganFeature";
import FinalCta from "./components/FinalCta";
import ParticiparCta from "./components/ParticiparCta";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import StickyMobileCta from "./components/StickyMobileCta";
import Modal from "./components/Modal";
import LeadForm from "./components/LeadForm";
import Reveal from "./components/Reveal";
import RetentionPopupTrigger from "./components/RetentionPopupTrigger";
import IntroSplash from "./components/IntroSplash";
import AccessibilityBar from "./components/AccessibilityBar";
import WhatsAppFloating from "./components/WhatsAppFloating";
import { LeadModalProvider, useLeadModal } from "./context/LeadModalContext";

function LeadModal() {
  const { open, closeModal } = useLeadModal();
  return (
    <Modal open={open} onClose={closeModal}>
      <LeadForm onDone={closeModal} />
    </Modal>
  );
}

function App() {
  return (
    <LeadModalProvider>
      <div className="min-h-screen pb-[72px] md:pb-0">
        <IntroSplash />
        <div className="fixed top-0 inset-x-0 z-50">
          <AccessibilityBar />
          <Header />
        </div>
        <Hero />

        {/* Vídeo logo após o Hero: primeira coisa relevante que quem chega vê */}
        <Reveal>
          <VideoVsl />
        </Reveal>

        <Reveal>
          <QuemEKeyla />
        </Reveal>
        <Reveal>
          <Memoria />
        </Reveal>
        <Reveal>
          <Bio />
        </Reveal>
        <Reveal>
          <Trajetoria />
        </Reveal>
        <Reveal>
          <Territorio />
        </Reveal>
        <Reveal>
          <Values />
        </Reveal>
        <Reveal>
          <Causas />
        </Reveal>
        <Reveal>
          <Plan />
        </Reveal>
        <Reveal>
          <Authenticity />
        </Reveal>
        <SloganFeature />
        <Reveal>
          <FinalCta />
        </Reveal>
        <Reveal>
          <ParticiparCta />
        </Reveal>

        <Footer />
        <CookieBanner />
        <StickyMobileCta />
        <WhatsAppFloating />
        <LeadModal />
        <RetentionPopupTrigger />
      </div>
    </LeadModalProvider>
  );
}

export default App;
