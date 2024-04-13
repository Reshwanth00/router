import React, { useState } from "react";
import classes from "./preview.module.css";
import p1 from "./search.png";
import p2 from "./download.png";
import p3 from "./profile (1).png";
import p4 from "./question.png";
import p5 from "./teach.jpg";
import p6 from "./layer.png";
import p7 from "./down-arrow.png";
import p8 from "./Template1.png";
import p9 from "./Template2.png";
import p10 from "./Template3.png";
import { useHistory } from 'react-router-dom';

const App = () => {
  const [showDetails, setShowDetails] = useState(false);
  const history = useHistory();
  const formHandler = () => {
    history.push("/form");
  }
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <div className={classes.headerLeft}>
          <div className={classes.logoContainer}>
            <img src={p2} alt="SAP Logo" className={classes.logo} />
            <span className={classes.companyName}>
              SAP Innovation Technology
            </span>
          </div>
          <div className={classes.Text}>Invoice Builder</div>
          <div className={classes.blueStripe}>
            <div className={classes.dropdownBox}>
              <div className={classes.dropdownItem}>My Forms</div>
              <div className={classes.dropdownItem}>Templates</div>
              <div className={classes.dropdownItem}>Integrations</div>
              <div className={classes.dropdownItem}>Products</div>
              <div className={classes.dropdownItem}>Support</div>
              <div className={classes.dropdownItem}>Enterprise</div>
              <div className={classes.dropdownItem}>Pricing</div>
            </div>
          </div>
        </div>
        <div className={classes.headerMiddle}>
          <div className={classes.newCustomerForm}>
            New Customer Invoice Form
          </div>
        </div>
        <div className={classes.headerRight}>
          <div className={classes.Collaborators}>
            <img
              src={p3}
              alt="Add collaborator"
              className={classes.headerIcon}
            />{" "}
            Add collaborator
          </div>
          <div className={classes.help}>
            <img src={p4} alt="Help" className={classes.headerIcon} /> Help
          </div>
          <div className={classes.profileicon}>
            <div className={classes.Blank}></div>
            <img src={p5} className={classes.pic} alt="Profile" />
          </div>
        </div>
      </header>
      <div className={classes.textBelowBlueStripe}>
        <div className={classes.chooseTemplate}>Choose a template</div>
        <div className={classes.exploreTemplates}>
          Explore 10,000+ ready-made templates to create a form in minutes or
          create form from scratch
        </div>
      </div>
      <div className={classes.searchbox}>
        <input
          type="text"
          placeholder="Search..."
          className={classes.searchInput}
        />
        <button className={classes.searchButton}>
          <img src={p1} alt="Search" className={classes.searchIcon} />
        </button>
      </div>

      <div className={classes.templatebox}>
        <div className={classes.sidebar}>
          <div className={classes.sidebarHeading}>E-sign Compatible</div>
          <div className={classes.sidebarHeading}>
            Sort By
            <img src={p7} className={classes.arrow}></img>
          </div>
          <div className={classes.sidebarHeading}>
            Form Layout
            <img src={p7} className={classes.arrow}></img>
          </div>

          <div>
            <div className={classes.sidebarHeading} onClick={toggleDetails}>
              TYPES
              <img src={p7} className={classes.arrow}></img>
            </div>
            {showDetails && (
              <div className={classes.sidebarContent}>
                <div>
                  Order Forms<span>2,410</span>
                </div>
                <div>
                  Registration Forms<span>2,301</span>
                </div>
                <div>
                  Event Registration Forms<span>544</span>
                </div>
                <div>
                  Payment Forms<span>258</span>
                </div>
                <div>
                  Application Forms<span>2,210</span>
                </div>
                <div>
                  File Upload Forms<span>112</span>
                </div>
                <div>
                  Booking Forms<span>821font-size: larger;</span>
                </div>
                <div>
                  Survey Templates<span>2,096</span>
                </div>
                <div>
                  Consent Forms<span>1,400</span>
                </div>
                <div>
                  RSVP Forms<span>176</span>
                </div>
                <div>
                  Appointment Forms<span>265</span>
                </div>
                <div>
                  Contact Forms<span>492</span>
                </div>
                <div>
                  Questionnaire Templates<span>501</span>
                </div>
                <div>
                  Signup Forms<span>318</span>
                </div>
                <div>
                  Salesforce Forms<span>147</span>
                </div>
                <div>
                  Voting<span>77</span>
                </div>
              </div>
            )}
          </div>
          <div>
            <div className={classes.sidebarHeading}>
              INDUSTRIES
              <img src={p7} className={classes.arrow}></img>
            </div>
          </div>
          <div>
            <div className={classes.sidebarHeading}>
              LANGUAGE
              <img src={p7} className={classes.arrow}></img>
            </div>
          </div>
        </div>

        <div className={classes.templatepdf1}>
          <div className={classes.imgcontainer}>
            <img src={p8} className={classes.img} alt="Template 1" />
            <div className={classes.previewtext}>New Customer Invoice</div>
          </div>
          <div className={classes.use} onClick={formHandler}>Use Template</div>
        </div>
        <div className={classes.templatepdf1}>
          <div className={classes.imgcontainer}>
            <img src={p9} className={classes.img} alt="Template 2" />
            <div className={classes.previewtext}>Business Invoice</div>
          </div>
          <div className={classes.use} onClick={formHandler}>Use Template</div>
        </div>
        <div className={classes.templatepdf1}>
          <div className={classes.imgcontainer}>
            <img src={p10} className={classes.img} alt="Template 3" />
            <div className={classes.previewtext}>
              Personal Business Template
            </div>
          </div>
          <div className={classes.use} onClick={formHandler}>Use Template</div>
        </div>
        <div className={classes.templatepdf1}>
          <div className={classes.imgcontainer}>
            <img src={p8} className={classes.img} alt="Template 1" />
            <div className={classes.previewtext}>Professional Template</div>
          </div>
          <div className={classes.use} onClick={formHandler}>Use Template</div>
        </div>
      </div>

      <div className={classes.template}>
        <img src={p6} className={classes.layer}></img>
        My Templates
      </div>

      <footer className={classes.footer}>
      <div className={classes.footerContent}>
        <div className={classes.footerColumn}>
          <h4>Jotform</h4>
          <ul>
            <li>Create a Form</li>
            <li>My Forms</li>
            <li>Pricing</li>
            <li>Jotform Enterprise</li>
            <li>Examples</li>
            <li>Products</li>
            <li>Features</li>
            <li>Tools</li>
            <li>Alternatives</li>
            <li>Marketplace</li>
          </ul>
        </div>
        <div className={classes.footerColumn}>
          <h4>Templates</h4>
          <ul>
            <li>Form Themes</li>
            <li>Form Widgets</li>
            <li>Integrations</li>
            <li>Support</li>
          </ul>
        </div>
        <div className={classes.footerColumn}>
          <h4>Contact Us</h4>
          <ul>
            <li>User Guide</li>
            <li>Help</li>
            <li>Jotform Academy</li>
            <li>Webinars</li>
            <li>Professional Services</li>
            <li>Report Abuse</li>
            <li>Report Copyright Issue</li>
          </ul>
        </div>
        <div className={classes.footerColumn}>
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Media Kit</li>
            <li>In the News</li>
            <li>Newsletters</li>
            <li>Partnerships</li>
            <li>Blog</li>
            <li>Apps</li>
          </ul>
        </div>
      </div>
      <div className={classes.footerBottom}>
        <p>
          4 Embarcadero Center, Suite 780, San Francisco CA 94111 <br />
          © 2024 Jotform Inc. The name "Jotform" and the Jotform logo are
          registered trademarks of Jotform Inc.
        </p>
        <div className={classes.footerLanguage}>
          <span>English</span>
        </div>
        <div className={classes.footerLinks}>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Security</li>
            <li>Accessibility Statement</li>
          </ul>
        </div>
      </div>
    </footer>




    </div>
  );
};

export default App;
