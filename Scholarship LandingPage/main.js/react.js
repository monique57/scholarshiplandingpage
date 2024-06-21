import React from 'react';
import './styles.css'; // Import the CSS file

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src="your-logo.svg" alt="Scholarship Region Logo" />
          </div>
          <nav className="nav">
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Scholarships</a></li>
              <li><a href="#">For Organizations</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Login</a></li>
              <li><button className="get-started">Get Started</button></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1>Unlock Your Potential with Global Scholarships</h1>
          <p>Explore a range of opportunities to help fund your education and achieve your dreams. Apply now and invest in your future.</p>
          <div className="search-bar">
            <input type="text" placeholder="Search for scholarships" />
            <button>Search</button>
          </div>
        </div>
      </section>

      <section className="featured-scholarships">
        <div className="container">
          <h2>Featured Scholarships</h2>
          <div className="scholarship-cards">
            <div className="scholarship-card">
              <h3>Switzerland CEIR Student Scholarship 2024 | Fully Funded</h3>
              <p>May 08, 2023</p>
            </div>
            <div className="scholarship-card">
              <h3>France Emile Boutmy Scholarship 2024 | Fully Funded</h3>
              <p>May 08, 2023</p>
            </div>
            <div className="scholarship-card">
              <h3>NEXTSHIP International Scholarship 2024 | Fully Funded</h3>
              <p>May 08, 2023</p>
            </div>
          </div>
          <button className="learn-more">Learn More</button>
        </div>
      </section>

      <section className="partnerships">
        <div className="container">
          <h2>Partnerships</h2>
          <p>Trusted by thousands of students and leading academic institutions.</p>
          <div className="partner-logos">
            <img src="fedex-logo.png" alt="FedEx Logo" />
            <img src="amazon-logo.png" alt="Amazon Logo" />
            <img src="airbnb-logo.png" alt="Airbnb Logo" />
            <img src="microsoft-logo.png" alt="Microsoft Logo" />
            <img src="ola-logo.png" alt="Ola Logo" />
            <img src="google-logo.png" alt="Google Logo" />
            <img src="oyo-logo.png" alt="OYO Logo" />
            <img src="walmart-logo.png" alt="Walmart Logo" />
          </div>
        </div>
      </section>

      <section className="why-scholarship-region">
        <div className="container">
          <h2>Why Scholarship Region?</h2>
          <p>With a comprehensive history of helping students achieve their goals, Scholarship Region is at the forefront of shaping the next generation of leaders and change-makers.</p>
          <div className="benefits">
            <div className="benefit">
              <h3>Proven Track Record</h3>
              <p>We have a very long history of helping students achieve their goals. We take pride in this legacy of success and strive to ensure the success of all those who seek our assistance.</p>
            </div>
            <div className="benefit">
              <h3>Comprehensive Support</h3>
              <p>Scholarship Region provides a range of services to help students through the entire scholarship application process, including providing accurate, timely guidance and enhancing opportunities.</p>
            </div>
            <div className="benefit">
              <h3>Trusted Partnerships</h3>
              <p>Endorsed by prestigious educational institutions and leading organizations globally, we are recognized as a trusted resource for a variety of higher education opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="get-started">
        <div className="container">
          <div className="how-to-get-started">
            <h2>Here is an easier way to get started</h2>
            <p>Unlock the door to your Scholarship success with these essential steps.</p>
            <div className="steps">
              <div className="step">
                <div className="step-icon">
                  {/* Replace with your icon */}
                </div>
                <h3>Explore and Identify Scholarships</h3>
                <p>Start by browsing our comprehensive database of scholarships. Use the search filters and options to find opportunities that align with your academic interests.</p>
              </div>
              <div className="step">
                <div className="step-icon">
                  {/* Replace with your icon */}
                </div>
                <h3>Create Your Profile and Gather Application Materials</h3>
                <p>Begin by creating a standout profile that highlights your accomplishments that align with your aspirations. Next, gather necessary documents for scholarships that match your qualifications.  Read scholarship descriptions carefully to ensure you submit all necessary documents.</p>
              </div>
              <div className="step">
                <div className="step-icon">
                  {/* Replace with your icon */}
                </div>
                <h3>Submit Your Applications and Track Progress</h3>
                <p>Review all information for accuracy and completeness before submitting. After submitting your applications, use our platform to track their statuses.</p>
              </div>
            </div>
            <button className="find-scholarships">Find Scholarships</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2023 Scholarship Region. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;