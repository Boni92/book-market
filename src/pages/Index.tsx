
import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DescriptionSection from "@/components/DescriptionSection";
import ChaptersSection from "@/components/ChaptersSection";
import PurchaseSection from "@/components/PurchaseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ThankYouSection from "@/components/ThankYouSection";

const Index = () => {
  const [purchaseCompleted, setPurchaseCompleted] = useState(false);

  // In a real implementation, this would be determined by a URL parameter
  // or a state management solution after a successful payment
  const showThankYou = false; // Set to true to show the thank you page

  return (
    <div className="min-h-screen">
      <Header />
      
      {showThankYou ? (
        <ThankYouSection />
      ) : (
        <>
          <HeroSection />
          <DescriptionSection />
          <ChaptersSection />
          <TestimonialsSection />
          <PurchaseSection />
          
          <section className="bg-white py-20">
            <div className="container-custom max-w-2xl">
              <h2 className="section-title text-center mb-8">¿Tienes preguntas?</h2>
              <ContactForm />
            </div>
          </section>
        </>
      )}
      
      <Footer />
    </div>
  );
};

export default Index;
