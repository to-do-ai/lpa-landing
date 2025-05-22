import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DemoProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  formSubmitted: boolean;
}

export default function Demo({ isOpen, onClose, onSubmit, formSubmitted }: DemoProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [interest, setInterest] = useState('');
  const [currentStage, setCurrentStage] = useState(0);
  const [showProcessingSteps, setShowProcessingSteps] = useState(false);

  // Simulated lead processing steps that happen after form submission
  const processingSteps = [
    { text: 'Receiving lead information...', delay: 1000 },
    { text: 'Sending welcome email...', delay: 2000 },
    { text: 'Scheduling first AI call...', delay: 3000 },
    { text: 'Creating lead profile...', delay: 4000 },
    { text: 'Lead processing complete! Check your email and expect a call soon.', delay: 5000 }
  ];

  useEffect(() => {
    if (formSubmitted) {
      setShowProcessingSteps(true);
      
      processingSteps.forEach((step, index) => {
        setTimeout(() => {
          setCurrentStage(index);
        }, step.delay);
      });
    } else {
      setShowProcessingSteps(false);
      setCurrentStage(0);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formSubmitted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-80 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative bg-gray-900 rounded-xl shadow-2xl max-w-lg w-full mx-auto overflow-hidden"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Request a Demo</h2>
          
          {!formSubmitted ? (
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300">Company</label>
                  <input
                    type="text"
                    id="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-300">What are you interested in?</label>
                  <select
                    id="interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="">Select an option</option>
                    <option value="product-demo">Product Demo</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="integration">Integration Possibilities</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-md hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    Submit Lead
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="h-1 w-full bg-gray-700 rounded">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: `${(currentStage + 1) * 20}%` }}
                  className="h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded"
                />
              </div>
              
              <div className="min-h-[200px] flex flex-col justify-center">
                {showProcessingSteps && (
                  <div className="space-y-4">
                    {processingSteps.slice(0, currentStage + 1).map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mr-3">
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-200">{step.text}</span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
              
              <button
                onClick={onClose}
                className={`w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-md hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-opacity ${
                  currentStage === processingSteps.length - 1 ? 'opacity-100' : 'opacity-50 cursor-not-allowed'
                }`}
                disabled={currentStage !== processingSteps.length - 1}
              >
                Close
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
} 