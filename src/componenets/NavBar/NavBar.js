import { Link, NavLink } from "react-router-dom";
import { FaPhoneAlt, FaAngleDown } from "react-icons/fa";
import { useState } from "react";

import styles from "../NavBar/NavBar.module.css";
import logo from "../../assets/navlogo.png";

const Grid = () => {
  const [isVerticalsOpen, setIsVerticalsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsVerticalsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsVerticalsOpen(false);
  };

  const verticalsSubNav = isVerticalsOpen && (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={styles.subNav}
    >
      <div className={styles.colnav}>
        <h3>BUZZ-Y-BEE</h3>
        <ul>
          <li>
            <Link to="/verticals/1">Digital Media Marketing</Link>
          </li>
          <li>
            <Link to="/verticals/2">Advertising Solutions</Link>
          </li>
          <li>
            <Link to="/verticals/2">Brand Strategy Services</Link>
          </li>
          <li>
            <Link to="/verticals/2">Printing & Design</Link>
          </li>
          <li>
            <Link to="/verticals/2">Packaging Solutions</Link>
          </li>
          <li>
            <Link to="/verticals/2">Proposal, Pitch and Designing</Link>
          </li>
          <li>
            <Link to="/verticals/2">Visual Strategies</Link>
          </li>
          <li>
            <Link to="/verticals/2">Content Creation</Link>
          </li>
        </ul>
      </div>
      <div className={styles.colnav}>
      <h3>IT SERVICES & SOURCES</h3>
        <ul>
          <li>
            <Link to="/verticals/1">IT Consulting</Link>
          </li>
          <li>
            <Link to="/verticals/2">Network Design and Implementation</Link>
          </li>
          <li>
            <Link to="/verticals/2">Cloud Services</Link>
          </li>
          <li>
            <Link to="/verticals/2">System Integration</Link>
          </li>
          <li>
            <Link to="/verticals/2">IT Support and Managed Services</Link>
          </li>
          <li>
            <Link to="/verticals/2">Data Backup and Recovery</Link>
          </li>
          <li>
            <Link to="/verticals/2">Cybersecurity</Link>
          </li>
          <li>
            <Link to="/verticals/2">Software Development</Link>
          </li>
        </ul>
      </div>
      <div className={styles.colnav}>
      <h3>CYBER SECURITY</h3>
        <ul>
          <li>
            <Link to="/verticals/1">Vulnerability Assessments</Link>
          </li>
          <li>
            <Link to="/verticals/2">Penetration Testing</Link>
          </li>
          <li>
            <Link to="/verticals/2">Security Audits</Link>
          </li>
          <li>
            <Link to="/verticals/2">Incident Response</Link>
          </li>
          <li>
            <Link to="/verticals/2">Security Awareness Training</Link>
          </li>
          <li>
            <Link to="/verticals/2">Network Monitoring</Link>
          </li>
          <li>
            <Link to="/verticals/2">Data Encryption and Protection</Link>
          </li>
          <li>
            <Link to="/verticals/2">Security Policy Development</Link>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className={styles["grid-container"]}>
      <div className={styles["column-1"]}>
        <div className={styles.row}>
          <Link to="/">
            <img src={logo} alt="Logo" className={styles.logo} />
          </Link>
        </div>
      </div>
      <div className={styles["column-2"]}>
        <div className={styles.row1}>
          <nav className={styles["horizontal-nav"]}>
            <ul className={styles["horizontal-nav1"]}>
              <li>
                <NavLink
                  to="/"
                  style={({ isActive }) => {
                    return { color: isActive ? "#BFAB6D" : "#000" };
                  }}
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  style={({ isActive }) => {
                    return { color: isActive ? "#BFAB6D" : "#000" };
                  }}
                >
                  ABOUT US
                </NavLink>
              </li>
              <li
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={styles.dropNav}
              >
                <NavLink
                  to="/verticals"
                  style={({ isActive }) => {
                    return { color: isActive ? "#BFAB6D" : "#000" };
                  }}
                >
                  <span className={styles.row2}>
                    VERTICALS <FaAngleDown className="icon" />
                  </span>
                </NavLink>
                {verticalsSubNav}
              </li>
              <li>
                <NavLink
                  to="/projects"
                  style={({ isActive }) => {
                    return { color: isActive ? "#BFAB6D" : "#000" };
                  }}
                >
                  PROJECTS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blogs"
                  style={({ isActive }) => {
                    return { color: isActive ? "#BFAB6D" : "#000" };
                  }}
                >
                  BLOGS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery"
                  style={({ isActive }) => {
                    return { color: isActive ? "#BFAB6D" : "#000" };
                  }}
                >
                  GALLERY
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  style={({ isActive }) => {
                    return { color: isActive ? "#BFAB6D" : "#000" };
                  }}
                >
                  <span className={styles.row2}>
                    <span>CONTACT US</span>
                    <FaPhoneAlt className="contact-icon" />
                  </span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Grid;