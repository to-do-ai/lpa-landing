import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
  {
    id: 1,
    title: 'Connect',
    description: 'Create your form, embed our form widget on your site or connect via our API',
    icon: '🔌'
  },
  {
    id: 2,
    title: 'Collect',
    description: 'Visitors submit their contact details through your branded form',
    icon: '📝'
  },
  {
    id: 3,
    title: 'Engage',
    description: 'Leads receive instant email confirmation and AI voice call',
    icon: '🤖'
  },
  {
    id: 4,
    title: 'Qualify',
    description: 'Our AI agents follow up to qualify and score leads automatically',
    icon: '⭐'
  },
  {
    id: 5,
    title: 'Convert',
    description: 'Hot leads are routed to your team when they\'re ready to close',
    icon: '💰'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-700/10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-700/10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our intelligent lead processing system works seamlessly to keep your leads engaged and qualified immediately they submit the form.
          </p>
        </div>

        <div className="relative">
          {/* Timeline connector line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-blue-600 transform -translate-x-1/2 z-0"></div>
          
          <div className="space-y-28 relative z-10">
            {steps.map((step, index) => {
              // Important change: First step (index 0) should have text on left
              const isTextOnLeft = index % 2 === 0; 
              
              return (
                <motion.div 
                  key={step.id} 
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Center dot on timeline */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 z-10">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 border-4 border-gray-900 shadow-lg shadow-purple-500/30"></div>
                  </div>
                  
                  <div className={`flex flex-col ${isTextOnLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                    {/* TEXT SIDE */}
                    <div className="md:w-1/2 flex flex-col items-center md:items-start md:pr-12 pb-8 md:pb-0">
                      <div className={`text-center ${isTextOnLeft ? 'md:text-left' : 'md:text-right'} max-w-md`}>
                        <div className="inline-flex items-center justify-center bg-gray-800/80 rounded-full px-4 py-1 text-sm font-semibold text-purple-400 border border-purple-900/30 backdrop-blur-sm shadow-md mb-4">
                          Step {step.id}
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-purple-300">
                          {step.title}
                        </h3>
                        
                        <p className="text-lg text-gray-300 leading-relaxed">
                          {step.description}
                        </p>
                        
                        {/* Extra decorative line */}
                        <div className={`hidden md:block h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded mt-6 ${isTextOnLeft ? '' : 'ml-auto'}`}></div>
                      </div>
                    </div>
                    
                    {/* ICON SIDE */}
                    <div className="md:w-1/2 flex justify-center md:pl-12">
                      <div className="relative">
                        {/* Background glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full blur-xl"></div>
                        
                        {/* Icon container */}
                        <div className="relative bg-gray-800/90 rounded-full h-32 w-32 flex items-center justify-center text-5xl shadow-xl border border-gray-700/50 backdrop-blur-sm">
                          <div className="animate-pulse-slow">
                            {step.icon}
                          </div>
                        </div>
                        
                        {/* Decorative circles */}
                        <div className="absolute -top-3 -right-3 h-6 w-6 rounded-full bg-purple-500/70 blur-sm"></div>
                        <div className="absolute -bottom-2 -left-2 h-4 w-4 rounded-full bg-blue-500/70 blur-sm"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        
        {/* Add a final CTA at the bottom */}
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a 
            href="#pricing" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-md font-medium text-white hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg shadow-blue-600/30"
          >
            See Our Pricing
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
} 