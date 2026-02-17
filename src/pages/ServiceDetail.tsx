import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { ArrowRight, Check, Star } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
}

export default function ServiceDetail() {
  const { serviceId } = useParams()

  // Service details database
  const services: { [key: string]: any } = {
    'website-development': {
      title: 'Website Development',
      tagline: 'Build Your Digital Storefront',
      description: 'Custom, responsive websites that convert visitors into customers. Our websites are optimized for speed, SEO, and user experience.',
      icon: '🌐',
      imageUrl: '/images/website-development.jpg',
      features: [
        'Custom website design and development',
        'Responsive and mobile-friendly design',
        'eCommerce website development',
        'Landing page design for marketing',
        'SEO-optimized website structure',
        'Website speed optimization',
        'Website maintenance and support',
      ],
      pricing: '$500 - $2,000',
      videoBreakdown: 'Affordable pricing based on your specific requirements',
      portfolioItems: [
        {
          title: 'E-Commerce Store Launch',
          desc: 'Built a complete online store with payment integration and inventory management',
          result: '3.5x sales increase in 6 months',
          image: '🛍️',
          imageUrl: '/images/website-ecommerce.jpg'
        },
        {
          title: 'SaaS Landing Page',
          desc: 'High-converting landing page that generates qualified leads',
          result: '45% conversion rate on free trial signups',
          image: '📱',
          imageUrl: '/images/website-saas.jpg'
        },
        {
          title: 'Corporate Website Redesign',
          desc: 'Modern, professional website for established company',
          result: 'Mobile traffic increased by 280%',
          image: '🏢',
          imageUrl: '/images/website-corporate.jpg'
        },
        {
          title: 'Service Business Website',
          desc: 'Local business website with booking system',
          result: '150+ bookings in first 3 months',
          image: '📅',
          imageUrl: '/images/website-booking.jpg'
        },
      ],
      testimonials: [
        {
          name: 'Sarah Johnson',
          role: 'E-Commerce Owner',
          quote: 'My sales tripled after they redesigned my website. Best investment ever!',
          rating: 5
        },
        {
          name: 'Mark Chen',
          role: 'Startup Founder',
          quote: 'Professional, fast, and results-driven. They delivered exactly what I needed.',
          rating: 5
        },
      ]
    },
    'app-development': {
      title: 'App Development',
      tagline: 'Mobile Apps That Engage',
      description: 'Native and cross-platform mobile applications with intuitive UI/UX design. We build apps that users love and businesses need.',
      icon: '📱',
      features: [
        'Android app development',
        'iOS app development',
        'Cross-platform app solutions',
        'User-friendly UI/UX design',
        'Scalable backend development',
        'API integrations',
        'App testing and deployment',
      ],
      pricing: '$500 - $2,000',
      videoBreakdown: 'Friendly pricing tailored to your project scope',
      portfolioItems: [
        {
          title: 'Fitness Tracking App',
          desc: 'iOS & Android app with real-time workout tracking and social features',
          result: '50K+ downloads, 4.8★ rating',
          image: '💪',
          imageUrl: '/images/app-fitness.jpg'
        },
        {
          title: 'Food Delivery App',
          desc: 'Full-stack app with restaurant listings, payment, and order tracking',
          result: 'Processing 5,000+ orders monthly',
          image: '🍕',
          imageUrl: '/images/app-delivery.jpg'
        },
        {
          title: 'Business Management Tool',
          desc: 'Cross-platform app for team collaboration and project management',
          result: 'Used by 200+ companies',
          image: '👥',
          imageUrl: '/images/app-business.jpg'
        },
        {
          title: 'Educational Platform',
          desc: 'Interactive learning app with video lessons and progress tracking',
          result: '100K+ active users',
          image: '📚',
          imageUrl: '/images/app-education.jpg'
        },
      ],
      testimonials: [
        {
          name: 'Alex Patel',
          role: 'App Startup Founder',
          quote: 'They built exactly what I envisioned. Fast delivery, excellent support.',
          rating: 5
        },
        {
          name: 'Lisa Martinez',
          role: 'Business Manager',
          quote: 'The app transformed how our team works. Highly recommend!',
          rating: 5
        },
      ]
    },
    'n8n-automation': {
      title: 'n8n Automation & Workflow Solutions',
      tagline: 'Eliminate Manual Work',
      description: 'Automate your business processes with n8n workflows. Save time, reduce errors, and scale operations without hiring more staff.',
      icon: '⚙️',
      imageUrl: '/images/n8n-automation.jpg',
      features: [
        'Workflow automation for businesses',
        'CRM automation',
        'Email automation systems',
        'WhatsApp automation integration',
        'Social media automation',
        'Data synchronization between platforms',
        'Time-saving and cost reduction',
      ],
      pricing: '$500 - $3,000',
      portfolioItems: [
        {
          title: 'CRM Lead Automation',
          desc: 'Automated lead qualification and follow-up workflows',
          result: 'Saved 20 hours/week, 60% more leads processed',
          image: '🔄',
          videoUrl: '/videos/lead-automation.mp4'
        },
        {
          title: 'Email Marketing Automation',
          desc: 'Triggered email sequences based on customer behavior',
          result: '35% open rate, 8% conversion',
          image: '📧',
          videoUrl: '/videos/email-automation.mp4'
        },
        {
          title: 'Social Media + WhatsApp Integration',
          desc: 'Auto-responder for social media inquiries via WhatsApp',
          result: 'Responds to 500+ inquiries daily automatically',
          image: '💬',
          videoUrl: '/videos/whatsapp-automation.mp4'
        },
        {
          title: 'Data Sync Across Platforms',
          desc: 'Syncs data between Shopify, CRM, and Google Sheets automatically',
          result: 'Eliminated manual data entry, 15 hours saved/week',
          image: '🔗',
          videoUrl: '/videos/data-sync.mp4'
        },
      ],
      testimonials: [
        {
          name: 'John Smith',
          role: 'Sales Manager',
          quote: 'Automation cut our response time from hours to seconds. Game changer!',
          rating: 5
        },
        {
          name: 'Emma Davis',
          role: 'Marketing Director',
          quote: 'Our team productivity increased dramatically. Worth every penny.',
          rating: 5
        },
      ]
    },
    'agentic-ai': {
      title: 'Agentic AI Solutions',
      tagline: 'AI That Works For You 24/7',
      description: 'Intelligent AI agents that automate complex tasks, handle customer interactions, and drive business growth. Your AI team member never sleeps.',
      icon: '🤖',
      imageUrl: '/images/agentic-ai-showcase.jpg',
      features: [
        'AI agents for business automation',
        'AI chatbots for websites',
        'AI customer support automation',
        'AI-powered lead generation',
        'AI data analysis systems',
        'Smart decision-making systems',
        'Future-ready AI transformation',
      ],
      pricing: '$1,000 - $5,000',
      portfolioItems: [
        {
          title: 'AI Customer Support Bot',
          desc: 'Handles 70% of support inquiries without human intervention',
          result: 'Reduced support costs by 60%, 24/7 availability',
          image: '🎧',
          videoUrl: '/videos/ai-support.mp4'
        },
        {
          title: 'AI Lead Generation Agent',
          desc: 'Identifies and qualifies leads from website visitors',
          result: '40% more qualified leads, 50% lower cost per lead',
          image: '🎯',
          imageUrl: '/images/ai-leads.jpg'
        },
        {
          title: 'AI Data Analysis System',
          desc: 'Analyzes customer data and provides business insights',
          result: 'Identified $200K+ revenue opportunities',
          image: '📊',
          imageUrl: '/images/ai-analytics.jpg'
        },
        {
          title: 'AI Sales Assistant',
          desc: 'AI agent that follows up with prospects and closes deals',
          result: 'Closed $500K in sales autonomously',
          image: '💰',
          videoUrl: '/videos/ai-sales.mp4'
        },
      ],
      testimonials: [
        {
          name: 'Robert Wilson',
          role: 'E-Commerce CEO',
          quote: 'The AI agent is like having 10 support staff working 24/7. Incredible ROI.',
          rating: 5
        },
        {
          name: 'Victoria Lee',
          role: 'Startup Founder',
          quote: 'AI transformation was smoother than expected. Results exceeded expectations.',
          rating: 5
        },
      ]
    },
    'brand-videos': {
      title: 'Brand Videos & Product Shoots',
      tagline: 'Professional Marketing Videos for Your Brand',
      description: 'Elevate your brand with professional product videos and commercial shoots. From concept to delivery, we handle everything with cinematic quality and attention to detail.',
      icon: '🎬',
      imageUrl: '/images/brand-videos-showcase.jpg',
      features: [
        'Professional product video shooting',
        'Commercial advertising videos',
        'Brand storytelling and promotional content',
        'Professional cinematography and equipment',
        'On-location and studio shoots',
        'Multi-camera professional setup',
        'Post-production editing and color grading',
        'Music and sound design integration',
        'Special effects and motion graphics',
        'Delivery in multiple formats (4K, Full HD)',
      ],
      pricing: '$800 - $3,000 per shoot',
      portfolioItems: [
        {
          title: 'Product Launch Video',
          desc: 'Professional product video for e-commerce brand featuring multi-angle shots and transitions',
          result: '250% increase in product click-through rate',
          image: '🎥',
          videoUrl: '/videos/product-launch.mp4'
        },
        {
          title: 'Brand Story Commercial',
          desc: 'Cinematic brand storytelling video showcasing company mission and values',
          result: 'Viral social media campaign with 500K+ views',
          image: '📹',
          imageUrl: '/images/brand-story.jpg'
        },
        {
          title: 'Real Estate Video Tour',
          desc: 'Professional property showcase with drone footage and 4K quality',
          result: '45% faster property sales',
          image: '🏠',
          videoUrl: '/videos/real-estate.mp4'
        },
        {
          title: 'Food & Beverage Commercial',
          desc: 'Appetizing product photography and videography for F&B business',
          result: 'Increased foot traffic by 35%',
          image: '🍔',
          imageUrl: '/images/food-commercial.jpg'
        },
      ],
      testimonials: [
        {
          name: 'Sarah Khan',
          role: 'E-Commerce Business Owner',
          quote: 'The product videos completely transformed our online sales. Professional quality, affordable price.',
          rating: 5
        },
        {
          name: 'Ahmed Hassan',
          role: 'Marketing Director',
          quote: 'Best investment we made this year. Their team made the entire shoot process smooth and stress-free.',
          rating: 5
        },
      ]
    },
    'portfolio-development': {
      title: 'Portfolio Development',
      tagline: 'Showcase Your Talent & Land More Clients',
      description: 'Stand out with a professionally designed portfolio website. Perfect for freelancers, designers, photographers, and creative professionals showcasing their work.',
      icon: '💼',
      imageUrl: '/images/portfolio-showcase.jpg',
      features: [
        'Professional portfolio website design',
        'Responsive and modern layouts',
        'Project showcase galleries with filters',
        'Interactive portfolio pieces',
        'SEO-optimized portfolio structure',
        'Fast loading and performance optimization',
        'Custom domain setup',
        'Portfolio maintenance and updates',
        'Contact form integration',
        'Social media links integration',
      ],
      pricing: '$15 - $30 (varies by complexity)',
      portfolioItems: [
        {
          title: 'Designer Portfolio - Basic',
          desc: 'Clean, modern portfolio for graphic designers with project galleries',
          result: '3x enquiries, client retention improved',
          image: '🎨',
          imageUrl: '/images/designer-portfolio.jpg'
        },
        {
          title: 'Photographer Portfolio - Professional',
          desc: 'Premium photography portfolio with advanced galleries and filters',
          result: '50% more bookings within 3 months',
          image: '📸',
          imageUrl: '/images/photographer-portfolio.jpg'
        },
        {
          title: 'Developer Portfolio',
          desc: 'Tech portfolio for web developers showcasing projects and skills',
          result: 'Got 5 high-value contract offers',
          image: '💻',
          videoUrl: '/videos/dev-portfolio.mp4'
        },
        {
          title: 'Freelancer Showcase',
          desc: 'Multi-service freelancer portfolio with testimonials and case studies',
          result: 'Increased rates by 40%, better clients',
          image: '⭐',
          imageUrl: '/images/freelancer-portfolio.jpg'
        },
      ],
      testimonials: [
        {
          name: 'Maria Garcia',
          role: 'Freelance Designer',
          quote: 'My new portfolio looks amazing! I\'ve received way more client inquiries since launching it.',
          rating: 5
        },
        {
          name: 'James Wilson',
          role: 'Web Developer',
          quote: 'Professional portfolio helped me land my dream job. Highly recommended!',
          rating: 5
        },
      ]
    },
    'lms': {
      title: 'LMS (Learning Management System)',
      tagline: 'Complete Digital Learning Platform for Education',
      description: 'Empower your university, college, or educational institution with a complete Learning Management System. Everything you need for online education in one platform.',
      icon: '📚',
      imageUrl: '/images/lms-showcase.jpg',
      features: [
        'Complete learning platform for universities, colleges & students',
        'Course management and organization',
        'Student enrollment and progress tracking',
        'Interactive quizzes and assessments',
        'Assignment submission and grading',
        'Discussion forums and collaboration tools',
        'Video content hosting and streaming',
        'Certificate generation and digital badges',
        'Mobile-responsive learning interface',
        'Advanced analytics and reporting',
        'Customizable branding and themes',
      ],
      pricing: '$500+ (depends on client requirements)',
      portfolioItems: [
        {
          title: 'University LMS Implementation',
          desc: 'Complete LMS setup for University with 1000+ students across 20+ courses',
          result: '95% student satisfaction, 45% improved engagement',
          image: '🎓',
          imageUrl: '/images/university-lms.jpg'
        },
        {
          title: 'Online Coaching Platform',
          desc: 'LMS for online coaching institute with live classes and recorded content',
          result: 'Scaled to 500+ students, 300% revenue growth',
          image: '👨‍🏫',
          videoUrl: '/videos/coaching-lms.mp4'
        },
        {
          title: 'Corporate Training Platform',
          desc: 'Employee training LMS with compliance tracking and certifications',
          result: '60% more employees completed training programs',
          image: '💼',
          imageUrl: '/images/corporate-training.jpg'
        },
        {
          title: 'Skill Development Academy',
          desc: 'Complete LMS for online skill development courses and certifications',
          result: '10,000+ students enrolled, $200K+ monthly revenue',
          image: '🚀',
          imageUrl: '/images/skill-academy.jpg'
        },
      ],
      testimonials: [
        {
          name: 'Dr. Ahmed Ali',
          role: 'University Director',
          quote: 'The LMS transformed our online teaching. Students love the interface, and administration is seamless.',
          rating: 5
        },
        {
          name: 'Fatima Khan',
          role: 'Online Academy Owner',
          quote: 'Best decision for our business. LMS helped us scale from 100 to 500+ students effortlessly.',
          rating: 5
        },
      ]
    },
  }

  const service = services[serviceId || '']

  if (!service) {
    return (
      <div className="pt-20 pb-12 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Service Not Found</h1>
          <Link to="/services" className="text-accent-blue hover:text-accent-orange">
            Back to Services
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 pb-12">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-primary-800 to-transparent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-6xl mb-6">{service.icon}</div>
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">{service.title}</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-6">{service.tagline}</p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">{service.description}</p>
          
          {/* Service Hero Image */}
          {service.imageUrl && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="max-w-4xl mx-auto mb-8"
            >
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full rounded-xl shadow-2xl object-cover h-96"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">What's Included</h2>
          <motion.div
            className="glass p-12 rounded-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              {service.features.map((feature: string, i: number) => (
                <div key={i} className="flex gap-4">
                  <Check className="w-6 h-6 text-accent-blue flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio / Past Work */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center gradient-text">Our Recent Work</h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            See how we've helped businesses like yours achieve remarkable results
          </p>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {service.portfolioItems.map((item: any, i: number) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="glass p-8 rounded-xl hover:border-accent-blue/50 smooth-transition overflow-hidden"
              >
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-6">{item.desc}</p>
                <div className="bg-accent-blue/10 border border-accent-blue/20 p-4 rounded-lg">
                  <p className="text-accent-blue font-semibold">✓ {item.result}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">What Clients Say</h2>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {service.testimonials.map((testimonial: any, i: number) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="glass p-8 rounded-xl"
              >
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating).fill(0).map((_, j) => (
                    <Star key={j} size={18} className="fill-accent-orange text-accent-orange" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 gradient-text">Pricing</h2>
            <p className="text-2xl text-gray-300 mb-8">{service.pricing}</p>
            <p className="text-gray-400 mb-8">Custom pricing available based on your specific needs</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-accent-blue to-accent-orange rounded-lg font-semibold hover:shadow-lg glow-accent smooth-transition flex items-center justify-center gap-2"
              >
                Book a Free Consultation <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 border-2 border-accent-blue text-accent-blue rounded-lg font-semibold hover:bg-accent-blue/10 smooth-transition"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Services */}
      <section className="py-12 px-4 text-center">
        <Link
          to="/services"
          className="text-accent-blue hover:text-accent-orange smooth-transition font-semibold"
        >
          ← Back to All Services
        </Link>
      </section>
    </div>
  )
}
