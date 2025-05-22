import { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "How quickly does the AI agent contact new leads?",
    answer: "Our AI agent sends an email confirmation immediately after form submission. Voice calls can be scheduled to happen within minutes of lead submission or according to your preferred timing."
  },
  {
    question: "Can I customize the questions asked by the AI voice agent?",
    answer: "Yes, you can fully customize the script used by our AI voice agents to align with your qualification criteria and brand voice."
  },
  {
    question: "Which CRM systems does LPAgents integrate with?",
    answer: "We integrate with popular CRMs including Salesforce, HubSpot, Pipedrive, and more. We also offer a REST API for custom integrations and can work with spreadsheet solutions like Google Sheets."
  },
  {
    question: "What happens when a lead is qualified?",
    answer: "When a lead meets your qualification criteria, the system can automatically notify your sales team via email, SMS, or direct CRM assignment. You can fully customize the routing logic based on lead scores and other attributes."
  },
  {
    question: "Is LPAgents GDPR and CCPA compliant?",
    answer: "Yes, we take data privacy seriously and are fully compliant with GDPR, CCPA, and other data protection regulations. We provide all necessary tools for consent management and data subject rights."
  },
  {
    question: "How natural does the AI voice sound?",
    answer: "Our AI voice technology uses the latest advances in natural language processing to sound human-like with natural conversational flows, appropriate pauses, and voice inflections."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-20 bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-300">
            Everything you need to know about our lead processing system
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-4 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-medium text-white text-left">{faq.question}</h3>
                <svg
                  className={`w-5 h-5 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-4 pt-0 text-gray-300">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 