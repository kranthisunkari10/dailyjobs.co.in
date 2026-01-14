import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './HomePage.css'

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="homepage">
      <motion.section 
        className="hero"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container">
          <motion.div className="hero-content" variants={itemVariants}>
            <motion.h1 
              className="hero-title"
              variants={itemVariants}
            >
              Find Blue Collar Jobs
              <span className="gradient-text"> Near You</span>
            </motion.h1>
            <motion.p 
              className="hero-subtitle"
              variants={itemVariants}
            >
              DailyJobs connects job seekers with employers through an innovative map-based job portal. 
              Search, apply, and contact employers directly - all in one platform.
            </motion.p>
            <motion.div 
              className="hero-cta"
              variants={itemVariants}
            >
              <Link to="/for-job-seekers" className="btn btn-primary">
                Find Jobs
              </Link>
              <Link to="/for-employers" className="btn btn-secondary">
                Post Jobs
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <section className="features">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How DailyJobs Works
          </motion.h2>
          
          <div className="features-grid">
            {[
              {
                icon: '🗺️',
                title: 'Map-Based Job Search',
                description: 'Browse jobs on an interactive map. Find opportunities near your location with ease.'
              },
              {
                icon: '📱',
                title: 'Direct Contact',
                description: 'Call employers directly. Quick and convenient communication - completely free for job seekers!'
              },
              {
                icon: '💼',
                title: 'Easy Applications',
                description: 'Apply to jobs with just a few clicks. Track your applications in real-time.'
              },
              {
                icon: '💳',
                title: 'Credit System',
                description: 'Employers buy plans/credits and get both Phone and Contact credits. Job seekers use the platform for free!'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="for-whom">
        <div className="container">
          <motion.div 
            className="for-whom-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div 
              className="for-whom-card employers"
              variants={itemVariants}
            >
              <h2>For Employers</h2>
              <p>Post jobs, manage applications, and connect with qualified candidates. Use our credit system to access candidate contacts and phone numbers.</p>
              <Link to="/for-employers" className="btn btn-outline">
                Learn More →
              </Link>
            </motion.div>

            <motion.div 
              className="for-whom-card jobseekers"
              variants={itemVariants}
            >
              <h2>For Job Seekers</h2>
              <p>Search jobs on the map, apply with ease, and contact employers directly. Find blue collar opportunities in your area.</p>
              <Link to="/for-job-seekers" className="btn btn-outline">
                Learn More →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
