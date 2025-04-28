
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ThankYouSection from "@/components/ThankYouSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Success = () => {
  const navigate = useNavigate();
  
  // In a real implementation, you would validate the purchase here
  // by checking URL parameters or session data
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <ThankYouSection />
      </div>
      <Footer />
    </div>
  );
};

export default Success;
