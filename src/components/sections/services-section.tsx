import { 
  UserGroupIcon,
  BuildingOfficeIcon,
  HeartIcon,
  GiftIcon,
  ClockIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

export function ServicesSection() {
  const services = [
    {
      icon: UserGroupIcon,
      title: 'Corporate Events',
      description: 'Professional catering for business meetings, conferences, and corporate gatherings.',
      features: ['Business lunches', 'Conference catering', 'Office parties', 'Team building events']
    },
    {
      icon: HeartIcon,
      title: 'Weddings & Celebrations',
      description: 'Make your special day perfect with our elegant wedding and celebration catering.',
      features: ['Wedding receptions', 'Anniversary parties', 'Birthday celebrations', 'Holiday events']
    },
    {
      icon: GiftIcon,
      title: 'Private Parties',
      description: 'Intimate gatherings and private events with personalized menu options.',
      features: ['Dinner parties', 'Family gatherings', 'Cocktail parties', 'Themed events']
    }
  ]

  const features = [
    {
      icon: ClockIcon,
      title: 'On-Time Delivery',
      description: 'We guarantee punctual service for all your events'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Quality Assured',
      description: 'Fresh ingredients and professional preparation every time'
    },
    {
      icon: BuildingOfficeIcon,
      title: 'Full Service',
      description: 'Complete event planning and catering management'
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Catering Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From intimate dinners to large-scale events, we provide comprehensive catering solutions 
            tailored to your specific needs and preferences.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div key={service.title} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <service.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="bg-orange-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Why Choose CaterEase?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="inline-flex p-4 bg-white rounded-full shadow-sm mb-4">
                  <feature.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
