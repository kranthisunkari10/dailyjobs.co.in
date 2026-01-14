import { motion } from 'framer-motion'
import './ContactUs.css'

const ContactUs = () => {
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
      className="contact-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        <motion.div className="contact-header" variants={itemVariants}>
          <h1>Contact Us</h1>
          <p className="contact-subtitle">
            Get in touch with us. We're here to help with any questions or concerns.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div className="contact-info-section" variants={itemVariants}>
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3>Email Us</h3>
              <p>Send us an email and we'll get back to you as soon as possible.</p>
              <a href="mailto:support@dailyjobs.co.in" className="contact-link">
                support@dailyjobs.co.in
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📱</div>
              <h3>Call Us</h3>
              <p>Speak directly with our support team during business hours.</p>
              <a href="tel:+919347302536" className="contact-link">
                +91 9347302536
              </a>
            </div>
          </motion.div>

          <motion.div className="about-section" variants={itemVariants}>
            <h2>About DailyJobs</h2>
            <p>
              DailyJobs is a blue collar job portal that revolutionizes how job seekers find opportunities and how employers connect with talent. 
              Our map-based platform makes it easy to discover jobs nearby and connect directly with employers.
            </p>
            <p>
              Job seekers can search for jobs on an interactive map, apply with ease, and contact employers directly - all completely free! 
              Employers buy plans/credits and receive both Phone and Contact credits. Contact credits are deducted when employers view candidate information, and Phone credits are deducted when candidates view employer contact numbers.
            </p>
            <p>
              We also offer a paid candidate search feature for employers looking to find the perfect fit for their job requirements.
            </p>
          </motion.div>

          <motion.div className="business-hours" variants={itemVariants}>
            <h2>Business Hours</h2>
            <p>Our support team is available to assist you during the following hours:</p>
            <div className="hours-list">
              <div className="hours-item">
                <span className="day">Monday - Friday</span>
                <span className="time">9:00 AM - 6:00 PM IST</span>
              </div>
              <div className="hours-item">
                <span className="day">Saturday</span>
                <span className="time">10:00 AM - 4:00 PM IST</span>
              </div>
              <div className="hours-item">
                <span className="day">Sunday</span>
                <span className="time">Closed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default ContactUs
