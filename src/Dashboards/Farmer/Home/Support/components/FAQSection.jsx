import React, { useState } from "react";
import { Search, ChevronDown, ChevronUp, Book, Lock, CreditCard, Settings } from "lucide-react";

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // ✅ Added search state

  const faqs = [
    { question: "How do I reset my password?", answer: "Click 'Forgot Password' on the login page and follow the email instructions." },
    { question: "Where can I find my invoices?", answer: "Go to Account Settings → Billing section to download invoices." },
    { question: "How do I contact support?", answer: "Use our help desk, email support@example.com, or call +1 800-123-4567." },
    { question: "What is the refund policy?", answer: "Full refunds available within 30 days. Contact billing support." },
    { question: "How can I join the community?", answer: "Click 'Join Community' on our website—free & quick!" },
  ];

  const categories = [
    { icon: <Book className="w-7 h-7" />, title: "Getting Started", description: "New users guide" },
    { icon: <Lock className="w-7 h-7" />, title: "Account & Security", description: "Privacy, account recovery" },
    { icon: <CreditCard className="w-7 h-7" />, title: "Billing & Payments", description: "Subscriptions, refunds" },
    { icon: <Settings className="w-7 h-7" />, title: "Technical Issues", description: "Troubleshooting, common errors" },
  ];

  // ✅ Filter FAQs based on search query
  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* 🔍 Search Bar */}
      <div className="relative max-w-lg mx-auto mb-10">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
        <input
          type="text"
          placeholder="Search FAQs or Help Topics..."
          className="w-full pl-12 pr-4 py-3 bg-white/70 backdrop-blur-lg border border-gray-300 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          value={searchQuery} // ✅ Controlled input
          onChange={(e) => setSearchQuery(e.target.value)} // ✅ Update search state
        />
      </div>

      {/* ❓ FAQ Accordion */}
      <div className="space-y-4 mb-12">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <div key={index} className="glass shadow-lg border border-gray-200 rounded-xl transition-transform">
              <button
                className="w-full px-6 py-5 flex justify-between items-center text-gray-900 font-medium"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                {faq.question}
                {openFaq === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openFaq === index && (
                <div className="px-6 pb-5 text-gray-600 transition-all duration-300">{faq.answer}</div>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No matching FAQs found.</p>
        )}
      </div>

      {/* 🔹 Category Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="p-6 glass rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all transform hover:-translate-y-1"
          >
            <div className="text-blue-600 mb-4">{category.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
            <p className="mt-2 text-gray-600">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
