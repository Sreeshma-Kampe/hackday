import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services';
import Vision from './Vision';
import Mission from './Mission';
import Feedback from './Feedback';
import Footer from './Footer';
import Chatbot from '../chatbot/PAMBot';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Vision />
      <Mission />
      <Chatbot/>
      <Feedback />
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;