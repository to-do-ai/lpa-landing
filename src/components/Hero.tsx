import { motion } from 'framer-motion';

interface HeroProps {
  onTryClick: () => void;
}

export default function Hero({ onTryClick }: HeroProps) {
  return (
    <div className="relative bg-black overflow-hidden">
      {/* Abstract gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-gray-900/10 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 py-24 md:py-32 lg:py-40">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 mb-6">
              Never Lose Another Lead
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
              AI-powered lead processing that keeps your leads hot and qualified
              until they&apos;re ready to close.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <button 
                onClick={onTryClick}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-md font-medium text-white hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg shadow-blue-600/30"
              >
                Try It Now
              </button>
              <a 
                href="#how-it-works" 
                className="px-8 py-4 bg-gray-800 rounded-md font-medium text-white hover:bg-gray-700 transition-all"
              >
                See How It Works
              </a>
            </div>
            
            <div className="mt-16">
              <p className="text-sm text-gray-500 mb-3">Trusted by forward-thinking companies</p>
              <div className="flex justify-center space-x-8 opacity-70">
                {/* Placeholder logos - you would replace these with actual client logos */}
                <div className="h-8 w-24 bg-gray-800 rounded"></div>
                <div className="h-8 w-24 bg-gray-800 rounded"></div>
                <div className="h-8 w-24 bg-gray-800 rounded"></div>
                <div className="h-8 w-24 bg-gray-800 rounded"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 