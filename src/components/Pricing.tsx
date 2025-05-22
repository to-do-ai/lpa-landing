import { useState } from 'react';
import { motion } from 'framer-motion';

const pricingPlans = [
  {
    name: 'Starter',
    price: '$49',
    period: 'per month',
    description: 'Perfect for small businesses just getting started',
    features: [
      'Up to 100 leads/month',
      'Email follow-up',
      'Basic AI voice agent',
      'Lead scoring',
      'Email notifications'
    ],
    cta: 'Start Free Trial',
    popular: false
  },
  {
    name: 'Professional',
    price: '$149',
    period: 'per month',
    description: 'For growing businesses with active marketing campaigns',
    features: [
      'Up to 500 leads/month',
      'Advanced voice AI agent',
      'Custom call scripts',
      'CRM integration',
      'Lead enrichment',
      'Priority support'
    ],
    cta: 'Start Free Trial',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For larger businesses with high-volume lead generation',
    features: [
      'Unlimited leads',
      'White-labeled solution',
      'Advanced integrations',
      'Dedicated account manager',
      'Custom AI training',
      'API access'
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  
  return (
    <section id="pricing" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
          
          <div className="mt-6 inline-flex items-center p-1 bg-gray-800 rounded-lg">
            <button
              className={`px-4 py-2 text-sm rounded-md transition-colors ${
                !isAnnual ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white' : 'text-gray-300'
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 text-sm rounded-md transition-colors ${
                isAnnual ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white' : 'text-gray-300'
              }`}
              onClick={() => setIsAnnual(true)}
            >
              Annual <span className="text-xs opacity-75">(Save 20%)</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${
                plan.popular 
                  ? 'border-2 border-purple-500 relative bg-gray-800'
                  : 'border border-gray-700 bg-gray-800'
              } rounded-2xl p-8 shadow-lg`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold tracking-wider py-1 px-4 rounded-full">
                  MOST POPULAR
                </div>
              )}
              
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="ml-1 text-gray-400">{plan.period}</span>
              </div>
              <p className="text-gray-400 mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 px-4 rounded-md font-medium transition-colors ${
                plan.popular
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                  : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 