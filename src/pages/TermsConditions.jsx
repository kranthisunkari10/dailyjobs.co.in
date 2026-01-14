import { motion } from 'framer-motion'
import './LegalPages.css'

const TermsConditions = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  }

  return (
    <motion.div 
      className="legal-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        <motion.div className="legal-header" variants={itemVariants}>
          <h1>Terms & Conditions</h1>
          <p className="last-updated">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </motion.div>

        <motion.div className="legal-content" variants={itemVariants}>
          <section className="legal-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using DailyJobs ("the Platform", "we", "us", or "our"), you accept and agree to be bound by the terms and provision of this agreement. 
              If you do not agree to these Terms & Conditions, please do not use our services.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Description of Service</h2>
            <p>
              DailyJobs is a blue collar job portal that connects job seekers with employers through a map-based platform. Our services include:
            </p>
            <ul>
              <li>Job search and browsing capabilities on an interactive map</li>
              <li>Job application submission and management</li>
              <li>Direct contact between job seekers and employers</li>
              <li>Credit system (Phone Credits and Contact Credits) for accessing contact information</li>
              <li>Candidate search functionality for employers (paid feature)</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. User Accounts and Registration</h2>
            <p>
              To use certain features of DailyJobs, you must register for an account. You agree to:
            </p>
            <ul>
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain and update your account information to keep it accurate</li>
              <li>Maintain the security of your account credentials</li>
              <li>Accept responsibility for all activities that occur under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Credit System</h2>
            <p>
              Only employers purchase plans/credits on our Platform. When employers buy plans/credits, they receive both Phone Credits and Contact Credits. 
              Job seekers can use the Platform for free and do not need to purchase any credits.
            </p>
            
            <h3>4.1 Phone Credits</h3>
            <p>
              Phone credits are deducted from the employer's account when job seekers view employer contact numbers. Credits are deducted from the employer's account at the time of use.
            </p>
            
            <h3>4.2 Contact Credits</h3>
            <p>
              Contact credits are deducted from the employer's account when employers view contact information of job applicants. Credits are deducted when you access candidate contact details. 
              All credit purchases are final and non-refundable unless required by law.
            </p>

            <h3>4.3 Candidate Search</h3>
            <p>
              Employers may purchase access to our candidate search feature. This is a paid service subject to separate terms and pricing.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. User Conduct</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the Platform for any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>Violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
              <li>Infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>Harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>Submit false or misleading information</li>
              <li>Upload or transmit viruses or any other type of malicious code</li>
              <li>Collect or track the personal information of others</li>
              <li>Spam, phish, pharm, pretext, spider, crawl, or scrape</li>
              <li>Interfere with or disrupt the Platform or servers or networks connected to the Platform</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Job Listings and Applications</h2>
            <p>
              Employers are responsible for the accuracy and legality of their job postings. Job seekers are responsible for the accuracy of their applications and profile information. 
              DailyJobs does not guarantee employment or job placement. We act as a platform connecting employers and job seekers.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Privacy and Data Protection</h2>
            <p>
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Platform, to understand our practices regarding the collection and use of your personal information.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Intellectual Property</h2>
            <p>
              The Platform and its original content, features, and functionality are owned by DailyJobs and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Limitation of Liability</h2>
            <p>
              DailyJobs shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Platform. 
              Our total liability to you for all claims arising from or related to the use of the Platform shall not exceed the amount you paid to us in the twelve (12) months prior to the action giving rise to liability.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Termination</h2>
            <p>
              We may terminate or suspend your account and bar access to the Platform immediately, without prior notice or liability, for any reason, including but not limited to a breach of the Terms. 
              Upon termination, your right to use the Platform will immediately cease.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. 
              What constitutes a material change will be determined at our sole discretion.
            </p>
          </section>

          <section className="legal-section">
            <h2>12. Contact Information</h2>
            <p>
              If you have any questions about these Terms & Conditions, please contact us at:
            </p>
            <p>
              Email: <a href="mailto:support@dailyjobs.co.in">support@dailyjobs.co.in</a><br />
              Phone: <a href="tel:+919347302536">+91 9347302536</a>
            </p>
          </section>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default TermsConditions
