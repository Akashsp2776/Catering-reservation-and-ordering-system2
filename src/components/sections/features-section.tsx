'use client'

import { motion } from 'framer-motion'
import { 
  SparklesIcon,
  ClockIcon,
  CreditCardIcon,
  EyeIcon,
  GiftIcon,
  TruckIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
  ShareIcon,
  ChartBarIcon,
  GlobeAltIcon,
  MicrophoneIcon
} from '@heroicons/react/24/outline'

export function FeaturesSection() {
  const features = [
    {
      icon: SparklesIcon,
      title: 'AI-Powered Recommendations',
      description: 'Get personalized menu suggestions based on your preferences, dietary restrictions, and order history.',
      color: 'text-primary-600'
    },
    {
      icon: ClockIcon,
      title: 'Real-Time Reservations',
      description: 'Book tables instantly with live availability updates and virtual waitlist management.',
      color: 'text-secondary-600'
    },
    {
      icon: EyeIcon,
      title: 'AR Menu Visualization',
      description: 'See 3D models of dishes before ordering with our cutting-edge augmented reality feature.',
      color: 'text-accent-600'
    },
    {
      icon: CreditCardIcon,
      title: 'Contactless Payments',
      description: 'Secure, fast payments with QR codes, mobile wallets, and split billing options.',
      color: 'text-success-600'
    },
    {
      icon: GiftIcon,
      title: 'Smart Loyalty Program',
      description: 'Earn rewards with our gamified loyalty system featuring tiers, badges, and exclusive perks.',
      color: 'text-warning-600'
    },
    {
      icon: TruckIcon,
      title: 'Live Order Tracking',
      description: 'Track your order in real-time from kitchen to your doorstep with precise ETA updates.',
      color: 'text-error-600'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Dietary Safety',
      description: 'Advanced allergen filtering and dietary preference matching for safe dining experiences.',
      color: 'text-primary-600'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'AI Chat Support',
      description: '24/7 intelligent customer support with instant responses and human escalation.',
      color: 'text-secondary-600'
    },
    {
      icon: ShareIcon,
      title: 'Social Integration',
      description: 'Share your dining experiences and discover new restaurants through social features.',
      color: 'text-accent-600'
    },
    {
      icon: ChartBarIcon,
      title: 'Advanced Analytics',
      description: 'Comprehensive business insights with predictive analytics and performance metrics.',
      color: 'text-success-600'
    },
    {
      icon: GlobeAltIcon,
      title: 'Multi-Language Support',
      description: 'Accessible in multiple languages with localized content and currency support.',
      color: 'text-warning-600'
    },
    {
      icon: MicrophoneIcon,
      title: 'Voice Ordering',
      description: 'Place orders using voice commands with our advanced speech recognition technology.',
      color: 'text-error-600'
    }
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Cutting-Edge Features for Modern Dining
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the future of food ordering and catering with our comprehensive suite of advanced features
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-gray-200 dark:hover:border-gray-600"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`p-3 rounded-lg bg-white dark:bg-gray-800 shadow-sm group-hover:shadow-md transition-shadow`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
