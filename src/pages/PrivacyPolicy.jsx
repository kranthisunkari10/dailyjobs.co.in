import { motion } from 'framer-motion'
import './LegalPages.css'

const PrivacyPolicy = () => {
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
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </motion.div>

        <motion.div className="legal-content" variants={itemVariants}>
          <section className="legal-section">
            <h2>1. Introduction</h2>
            <p>
              DailyJobs ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our blue collar job portal platform ("Platform").
            </p>
            <p>
              Please read this Privacy Policy carefully. By using our Platform, you consent to the data practices described in this policy.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Information We Collect</h2>
            
            <h3>2.1 Personal Information</h3>
            <p>We collect information that you provide directly to us, including:</p>
            <ul>
              <li><strong>Account Information:</strong> Name, email address, mobile number, password, and profile information</li>
              <li><strong>Job Seeker Information:</strong> Resume, work experience, skills, education, location, and job preferences</li>
              <li><strong>Employer Information:</strong> Company name, business details, job postings, and company information</li>
              <li><strong>Application Information:</strong> Job applications, application history, and communication records</li>
              <li><strong>Payment Information:</strong> Credit card details, billing information (processed through secure payment gateways)</li>
            </ul>

            <h3>2.2 Automatically Collected Information</h3>
            <p>When you use our Platform, we automatically collect certain information, including:</p>
            <ul>
              <li>Device information (device type, operating system, browser type)</li>
              <li>IP address and location data</li>
              <li>Usage data (pages visited, features used, time spent)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our Platform and services</li>
              <li>Process job applications and connect job seekers with employers</li>
              <li>Facilitate communication between job seekers and employers</li>
              <li>Process payments and manage credit systems (Phone Credits and Contact Credits)</li>
              <li>Send you updates, notifications, and marketing communications (with your consent)</li>
              <li>Personalize your experience and show relevant job listings</li>
              <li>Detect, prevent, and address technical issues and security threats</li>
              <li>Comply with legal obligations and enforce our Terms & Conditions</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Information Sharing and Disclosure</h2>
            <p>We may share your information in the following circumstances:</p>
            
            <h3>4.1 With Employers/Job Seekers</h3>
            <ul>
              <li>Job applications are shared with relevant employers</li>
              <li>Employer contact information may be shared with job seekers (Phone Credits are deducted from employer accounts)</li>
              <li>Job seeker contact information may be shared with employers (Contact Credits are deducted from employer accounts)</li>
            </ul>

            <h3>4.2 Service Providers</h3>
            <p>We may share information with third-party service providers who perform services on our behalf, such as payment processing, data analytics, and hosting services.</p>

            <h3>4.3 Legal Requirements</h3>
            <p>We may disclose information if required by law, court order, or governmental authority, or to protect our rights, property, or safety, or that of our users.</p>

            <h3>4.4 Business Transfers</h3>
            <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.</p>
          </section>

          <section className="legal-section">
            <h2>5. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. 
              These measures include:
            </p>
            <ul>
              <li>Encryption of data in transit and at rest</li>
              <li>Secure authentication and access controls</li>
              <li>Regular security assessments and updates</li>
              <li>Secure payment processing</li>
            </ul>
            <p>
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, 
              we cannot guarantee absolute security.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Credit System and Data Access</h2>
            <p>
              Our Platform uses a credit system where only employers purchase plans/credits. Employers receive both Phone Credits and Contact Credits when they buy plans. 
              Job seekers use the Platform for free and do not need to purchase credits.
            </p>
            <ul>
              <li><strong>Phone Credits:</strong> Deducted from employer accounts when job seekers view employer contact numbers. This action is logged for security and audit purposes.</li>
              <li><strong>Contact Credits:</strong> Deducted from employer accounts when employers view job applicant contact information. Access is tracked and logged.</li>
            </ul>
            <p>
              All credit-based data access is monitored and logged to prevent misuse and ensure security. Credits are deducted only from employer accounts.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Your Rights and Choices</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access and update your personal information through your account settings</li>
              <li>Delete your account and request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your personal data</li>
              <li>Object to certain processing of your information</li>
            </ul>
            <p>To exercise these rights, please contact us using the contact information provided below.</p>
          </section>

          <section className="legal-section">
            <h2>8. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our Platform and store certain information. 
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, 
              you may not be able to use some portions of our Platform.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to provide our services, comply with legal obligations, 
              resolve disputes, and enforce our agreements. When you delete your account, we will delete or anonymize your personal information, 
              subject to applicable legal retention requirements.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Children's Privacy</h2>
            <p>
              Our Platform is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. 
              If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page 
              and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="legal-section">
            <h2>12. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
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

export default PrivacyPolicy
