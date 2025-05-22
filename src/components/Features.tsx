import { motion } from 'framer-motion';

const features = [
  {
    icon: '⚡',
    title: 'Instant Response',
    description: 'Respond to leads within seconds with branded emails and AI voice calls'
  },
  {
    icon: '🧠',
    title: 'Smart Qualification',
    description: 'AI agents ask pre-set questions to qualify leads and score interest level'
  },
  {
    icon: '📈',
    title: 'Lead Tracking',
    description: 'Track all leads in real-time with enriched data and qualification scores'
  },
  {
    icon: '🔄',
    title: 'Automated Follow-ups',
    description: 'Schedule automated call and email sequences to keep leads engaged'
  },
  {
    icon: '🔌',
    title: 'Easy Integration',
    description: 'Connect with your CRM, spreadsheets, and other tools with simple APIs'
  },
  {
    icon: '🎯',
    title: 'Smart Routing',
    description: 'Route hot leads to your sales team only when they\'re ready to buy'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to capture, process, and convert leads efficiently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-xl p-8 shadow-lg shadow-blue-900/10"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 