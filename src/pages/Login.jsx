import { motion } from 'framer-motion'
import './Login.css'

const Login = () => {
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
      transition: { duration: 0.5 }
    }
  }

  return (
    <motion.div 
      className="login-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        <motion.div className="login-card" variants={itemVariants}>
          <motion.div 
            className="coming-soon-badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            Coming Soon
          </motion.div>
          
          <h1>Login with Mobile</h1>
          <p className="login-subtitle">
            Secure login using your mobile number. Access your DailyJobs account and manage your profile.
          </p>

          <div className="login-info">
            <div className="info-item">
              <span className="info-icon">📱</span>
              <div>
                <h3>Mobile Number Login</h3>
                <p>Quick and secure authentication using your mobile number with OTP verification.</p>
              </div>
            </div>
            
            <div className="info-item">
              <span className="info-icon">🔒</span>
              <div>
                <h3>Secure & Private</h3>
                <p>Your data is protected with industry-standard security measures. Privacy is our priority.</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">⚡</span>
              <div>
                <h3>Quick Access</h3>
                <p>Login in seconds and access your job applications, saved jobs, and profile instantly.</p>
              </div>
            </div>
          </div>

          <div className="coming-soon-message">
            <p>We're working hard to bring you the best login experience. The mobile login feature will be available soon!</p>
            <p className="contact-note">
              For assistance, contact us at <a href="mailto:support@dailyjobs.co.in">support@dailyjobs.co.in</a> or <a href="tel:+919347302536">+91 9347302536</a>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Login
