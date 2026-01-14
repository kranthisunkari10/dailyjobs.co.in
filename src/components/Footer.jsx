import { Link, useLocation } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const location = useLocation()

  const handleLinkClick = (e, path) => {
    if (location.pathname === path) {
      e.preventDefault()
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>DailyJobs</h3>
            <p>Connecting blue collar job seekers with employers through an innovative map-based platform.</p>
            <div className="contact-info">
              <p>📧 <a href="mailto:support@dailyjobs.co.in">support@dailyjobs.co.in</a></p>
              <p>📱 <a href="tel:+919347302536">+91 9347302536</a></p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/" onClick={(e) => handleLinkClick(e, '/')}>Home</Link></li>
              <li><Link to="/for-employers" onClick={(e) => handleLinkClick(e, '/for-employers')}>For Employers</Link></li>
              <li><Link to="/for-job-seekers" onClick={(e) => handleLinkClick(e, '/for-job-seekers')}>For Job Seekers</Link></li>
              <li><Link to="/contact-us" onClick={(e) => handleLinkClick(e, '/contact-us')}>Contact Us</Link></li>
              <li><Link to="/login" onClick={(e) => handleLinkClick(e, '/login')}>Login</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/terms-conditions" onClick={(e) => handleLinkClick(e, '/terms-conditions')}>Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy" onClick={(e) => handleLinkClick(e, '/privacy-policy')}>Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>About</h4>
            <p>DailyJobs is a blue collar job portal featuring map-based job search, direct employer contact, and a credit system for seamless connections between job seekers and employers.</p>
            <div className="playstore-notice">
              <p>📱 App coming to Play Store soon!</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} DailyJobs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
