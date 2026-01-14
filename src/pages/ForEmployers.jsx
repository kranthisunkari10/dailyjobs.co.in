import { motion } from 'framer-motion'
import './PageStyles.css'

const ForEmployers = () => {
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
          <h1>For Employers</h1>
          <p className="page-subtitle">
            Connect with qualified blue collar job seekers and streamline your hiring process
          </p>
        </motion.div>

        <motion.section className="content-section" variants={itemVariants}>
          <h2>Why Choose DailyJobs?</h2>
          <div className="info-grid">
            <div className="info-card">
              <h3>📋 Post Jobs Easily</h3>
              <p>Create job listings quickly and reach thousands of qualified candidates in your area. Our map-based platform helps candidates find you easily.</p>
            </div>
            <div className="info-card">
              <h3>👥 Access Candidate Contacts</h3>
              <p>View contact information of applicants using Contact credits. Connect directly with candidates who have applied to your job postings.</p>
            </div>
            <div className="info-card">
              <h3>📞 Phone Credit System</h3>
              <p>Candidates can view your phone number (credits deducted from your account), enabling direct communication. This system ensures quality interactions.</p>
            </div>
            <div className="info-card">
              <h3>🔍 Candidate Search</h3>
              <p>Search for candidates with our paid candidate search feature. Find the perfect fit for your job requirements.</p>
            </div>
          </div>
        </motion.section>

        <motion.section className="content-section" variants={itemVariants}>
          <h2>How It Works</h2>
          <div className="steps-list">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Create Your Account</h3>
                <p>Sign up as an employer and complete your company profile. Verify your business details to build trust with candidates.</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Post Job Listings</h3>
                <p>Add job postings with detailed descriptions, location, salary, and requirements. Your jobs will appear on the interactive map for candidates to discover.</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Receive Applications</h3>
                <p>Candidates can apply directly to your job postings. Review applications and manage them through your employer dashboard.</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Buy Plans & Credits</h3>
                <p>Purchase plans/credits to get both Phone and Contact credits. Contact credits are deducted when you view applicant contact details. Phone credits are deducted when candidates view your contact number.</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Connect & Hire</h3>
                <p>Reach out to candidates, conduct interviews, and find the perfect match for your team. Use our candidate search feature to find qualified professionals.</p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section className="content-section highlight-section" variants={itemVariants}>
          <h2>Credit System Explained</h2>
          <div className="credit-info">
            <div className="credit-card">
              <h3>💳 Contact Credits</h3>
              <p>When candidates apply to your job postings, Contact credits are deducted from your account when you view their contact information. This helps you reach out to promising applicants directly.</p>
            </div>
            <div className="credit-card">
              <h3>📱 Phone Credits</h3>
              <p>Phone credits are deducted from your account when candidates view your contact number. This ensures quality communication and helps you connect with interested candidates.</p>
            </div>
            <div className="credit-card">
              <h3>💼 Credit Plans</h3>
              <p>When you buy plans/credits, you receive both Phone and Contact credits. All credits are deducted from your employer account when used. Job seekers use our platform for free.</p>
            </div>
          </div>
        </motion.section>

        <motion.section className="content-section" variants={itemVariants}>
          <h2>Get Started Today</h2>
          <p className="cta-text">
            Join DailyJobs and start connecting with qualified blue collar professionals. 
            Our platform makes hiring simple, efficient, and effective.
          </p>
          <p className="contact-info">
            Have questions? Contact us at <a href="mailto:support@dailyjobs.co.in">support@dailyjobs.co.in</a> or call <a href="tel:+919347302536">+91 9347302536</a>
          </p>
        </motion.section>
      </div>
    </motion.div>
  )
}

export default ForEmployers
