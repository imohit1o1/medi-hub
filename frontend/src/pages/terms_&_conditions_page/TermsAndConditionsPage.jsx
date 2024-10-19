import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// Home Page Component
function HomePage() {
  return (
    <div>
      <h1>Welcome to Our Website</h1>
      <p>This is the home page. Please explore the content or visit our Terms and Conditions page for more details.</p>
    </div>
  );
}

// Terms and Conditions Page Component
function TermsAndConditionsPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Terms and Conditions</h1>
      <p>Welcome to our website. These terms and conditions outline the rules and regulations for the use of our website.</p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing this website, we assume you accept these terms and conditions. Do not continue to use the website if you do not agree to all the terms and conditions stated on this page.
      </p>

      <h2>2. Cookies</h2>
      <p>
        We employ the use of cookies. By using this website, you consent to the use of cookies in accordance with our privacy policy.
      </p>

      <h2>3. License</h2>
      <p>
        Unless otherwise stated, we own the intellectual property rights for all material on the website. All intellectual property rights are reserved.
      </p>

      <h2>4. User Obligations</h2>
      <ul>
        <li>Do not republish material from the website without proper credit.</li>
        <li>Do not sell, rent, or sub-license material from the website.</li>
        <li>Do not reproduce, duplicate or copy material from the website.</li>
      </ul>

      <h2>5. Limitation of Liability</h2>
      <p>
        We shall not be held responsible for any loss, damage, or injury caused by using our website, as far as applicable law permits.
      </p>

      <h2>6. Changes to Terms</h2>
      <p>
        We reserve the right to modify these terms and conditions at any time. Users will be notified of changes and updates as they occur.
      </p>

      <p>If you have any questions or concerns about these Terms, please contact us.</p>
    </div>
  );
}

// Footer Component with Link to Terms & Conditions
function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation
    if (emailPattern.test(email)) {
      // Simulate a successful subscription
      setMessage("Successfully subscribed to the newsletter!");
      setEmail(""); // Clear the input field
    } else {
      setMessage("Please enter a valid email address.");
    }
  };

  return (
    <footer className="footer">
      {/* Other existing footer content */}
      <div className="newsletter-section">
        <h2>Subscribe to Our Newsletter</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="email-input"
        />
        <button onClick={handleSubscribe} className="subscribe-button">
          Subscribe
        </button>
        {message && <p className="message">{message}</p>}
      </div>
    </footer>
  );
}

export default Footer;