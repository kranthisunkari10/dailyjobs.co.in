import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Header.css'

const Header = () => {
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/for-employers', label: 'For Employers' },
    { path: '/for-job-seekers', label: 'For Job Seekers' },
    { path: '/contact-us', label: 'Contact Us' },
    { path: '/login', label: 'Login' },
  ]

  const handleLinkClick = (e, path) => {
    if (location.pathname === path) {
      e.preventDefault()
    }
  }

  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-container">
        <Link to="/" className="logo" onClick={(e) => handleLinkClick(e, '/')}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="logo-text">DailyJobs</span>
          </motion.div>
        </Link>

        <nav className="nav">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, link.path)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="playstore-badge">
          <motion.div
            className="badge-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            📱 App coming to Play Store soon!
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
