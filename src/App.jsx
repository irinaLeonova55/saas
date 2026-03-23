import react from 'react';
import { useState, useEffect } from 'react';

import './App.css';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Features from './sections/Features';
import ProblemSolution from './sections/ProblemSolution';
import Pricing from './sections/Pricing';
import Faq from './sections/Faq';
import HowItWorks from './sections/HowItWorks';
import Footer from './sections/Footer';
import Calculator from './sections/Calculator';
import ModalWindow from './components/ModalWindow';
import ThankYouWindow from './components/ThankYouWindow';
import Burger from './components/Burger';

function App() {
  const [emailFooter, setEmailFooter] = useState('');
  const [emailModal, setEmailModal] = useState('');
  const [textModal, setTextModal] = useState('');
  const [isWindow, setIsWindow] = useState(false);
  const [isThankYouWindow, setIsThankYouWindow] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isBurger, setIsBurger] = useState(false);

  const handleEmailFooter = (e) => {
    setEmailFooter(e.target.value);
  };

  const handleSubscribed = (e) => {
    e.preventDefault();
    if (!emailFooter.includes('@')) return;
    setEmailFooter('');
    setIsSubscribed(true);
  };

  const handleEmailModal = (e) => {
    e.preventDefault();
    setEmailModal(e.target.value);
  };

  const handleTextModal = (e) => {
    e.preventDefault();
    setTextModal(e.target.value);
  };

  const handleSubmitButton = (e) => {
    e.preventDefault();

    if (!emailModal) return;
    setEmailModal('');
    setTextModal('');
    setIsWindow(false);
    setIsThankYouWindow(true);
  };

  useEffect(() => {
    document.body.style.overflow = isBurger ? 'hidden' : 'auto';
  }, [isBurger]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsBurger(false);
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="App">
      <Navbar setIsBurger={setIsBurger} />
      <main className="px-3 md:px-5">
        <Hero />
        <ProblemSolution />
        <Calculator />
        <Features />
        <HowItWorks />
        <Pricing setIsWindow={setIsWindow} />
        <Faq />
      </main>
      <Footer
        emailFooter={emailFooter}
        handleEmailFooter={handleEmailFooter}
        handleSubscribed={handleSubscribed}
      />
      {isWindow && (
        <ModalWindow
          emailModal={emailModal}
          handleEmailModal={handleEmailModal}
          textModal={textModal}
          handleTextModal={handleTextModal}
          handleSubmitButton={handleSubmitButton}
          setIsWindow={setIsWindow}
        />
      )}
      {isThankYouWindow && (
        <ThankYouWindow
          onClick={() => setIsThankYouWindow(false)}
          title="You're on the list"
          desc="Thanks for requesting a demo. Our team will review your request and contact you shortly to schedule a walkthrough of how AI can optimize your ad campaigns."
        />
      )}

      {isSubscribed && (
        <ThankYouWindow
          onClick={() => setIsSubscribed(false)}
          title="You're subscribed"
          desc="We'll occasionally send insights on AI-driven advertising, campaign optimization, and strategies to get more leads from your ads."
        />
      )}

      <Burger setIsBurger={setIsBurger} isBurger={isBurger} />
    </div>
  );
}

export default App;
