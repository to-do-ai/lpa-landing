import { motion } from 'framer-motion';
import Image from 'next/image';

const team = [
  {
    name: 'Oludayo Awe',
    role: 'CEO & Co-founder',
    bio: '10+ years in AI and machine learning. Previously led AI initiatives at Google.',
    image: '/dayo-awe.jpg'
  },
  {
    name: 'Anthony Oliko',
    role: 'CTO & Co-founder',
    bio: 'Former NLP researcher at MIT. Built voice recognition systems for Fortune 500 companies.',
    image: '/ao2.jpeg'
  },
  {
    name: 'Isaac Terngu Adom',
    role: 'CPO & Co-founder',
    bio: 'Product leader with experience at Salesforce and HubSpot. Expert in CRM integration.',
    image: '/isaac-adom.jpg'
  }
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We&apos;re a passionate group of experts in AI, machine learning, and customer acquisition
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="h-64 relative">
                <Image 
                  src={member.image} 
                  alt={member.name}
                  fill
                  className="object-cover"
                  priority={index < 2}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-purple-400 mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 