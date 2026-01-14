import { motion } from 'framer-motion'
import './PageStyles.css'

const ForJobSeekers = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <motion.div 
      className="page-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        <motion.div className="page-header" variants={itemVariants}>
          <h1>For Job Seekers</h1>
          <p className="page-subtitle">
            Find blue collar jobs near you with our innovative map-based job search platform
          </p>
        </motion.div>

        <motion.section className="content-section" variants={itemVariants}>
          <h2>Why DailyJobs?</h2>
          <div className="info-grid">
            <div className="info-card">
              <h3>🗺️ Map-Based Job Search</h3>
              <p>Browse jobs on an interactive map. See opportunities in your neighborhood and nearby areas. Find the perfect job location that suits you.</p>
            </div>
            <div className="info-card">
              <h3>📍 Location-Based Results</h3>
              <p>Search for jobs by location. Our platform shows you jobs near your current location, making it easy to find work close to home.</p>
            </div>
            <div className="info-card">
              <h3>📞 Direct Employer Contact</h3>
              <p>Contact employers directly by viewing their contact numbers. Call them immediately to discuss job opportunities and schedule interviews. No payment required - it's free for job seekers!</p>
            </div>
            <div className="info-card">
              <h3>⚡ Quick Applications</h3>
              <p>Apply to jobs with just a few taps. No lengthy forms - submit your application quickly and efficiently.</p>
            </div>
          </div>
        </motion.section>

        <motion.section className="content-section" variants={itemVariants}>
          <h2>How It Works</h2>
          <div className="steps-list">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Create Your Profile</h3>
                <p>Sign up as a job seeker and create your profile. Add your skills, experience, and preferred job types to help employers find you.</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Browse Jobs on Map</h3>
                <p>Open the map view and explore job opportunities in your area. See job locations, types, and details at a glance.</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Search & Filter</h3>
                <p>Use search filters to find jobs by category, salary range, location, and more. Narrow down your options to find the perfect match.</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Apply to Jobs</h3>
                <p>Submit applications to jobs that interest you. Your profile information is shared with employers when you apply.</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Contact Employers</h3>
                <p>View employer contact numbers and call them directly to discuss the job and move forward with your application. No credits or payment needed - completely free for job seekers!</p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section className="content-section highlight-section" variants={itemVariants}>
          <h2>Free for Job Seekers</h2>
          <div className="credit-info">
            <div className="credit-card">
              <h3>🆓 Completely Free</h3>
              <p>DailyJobs is completely free for job seekers! You can search jobs, apply to positions, and contact employers directly without any charges or credit purchases. All platform features are available to you at no cost.</p>
            </div>
            <div className="credit-card">
              <h3>📞 Direct Contact</h3>
              <p>View employer contact numbers and call them directly to discuss opportunities. Employers purchase credits/plans, so you don't need to worry about any payments. Focus on finding your perfect job!</p>
            </div>
          </div>
        </motion.section>

        <motion.section className="content-section" variants={itemVariants}>
          <h2>Find Your Dream Job Today</h2>
          <p className="cta-text">
            Join thousands of job seekers using DailyJobs to find blue collar opportunities. 
            Our map-based platform makes job hunting easier than ever.
          </p>
          <p className="contact-info">
            Need help? Contact us at <a href="mailto:support@dailyjobs.co.in">support@dailyjobs.co.in</a> or call <a href="tel:+919347302536">+91 9347302536</a>
          </p>
        </motion.section>
      </div>
    </motion.div>
  )
}

export default ForJobSeekers
