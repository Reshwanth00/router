import React from 'react';
import classes from './form.module.css'; 
import p2 from './download.png';
import p3 from './profile (1).png';
import p4 from './question.png';
import p5 from './teach.jpg';
import p6 from './heading (1).png'
import p7 from './id-card.png'
import p8 from './mail (1).png';
import p9 from './location (1).png';
import p10 from './event.png';
import p11 from './calendar (1).png';
import p12 from './curvature (1).png';
import p13 from './feature.png';

import p14 from './images (1).png';


  const Invoice = () => {
    // Sample product data
    const products = [
      { name: 'Product 1', quantity: 1, unitPrice: 10 },
      { name: 'Product 2', quantity: 2, unitPrice: 20 },
      { name: 'Product 3', quantity: 3, unitPrice: 30 },
      { name: 'Product 4', quantity: 4, unitPrice: 40 },
      { name: 'Product 5', quantity: 5, unitPrice: 50 },
    ];
  
    // Calculate total amount
    const totalAmount = products.reduce((total, product) => {
      return total + product.quantity * product.unitPrice;
    }, 0);
  
    // Shipping charge and GST
    const shippingCharge = 10;
    const gstCost = (totalAmount * 0.18).toFixed(2); // Assuming GST is 18%
  
    // Total amount including shipping and GST
    const grandTotal = totalAmount + shippingCharge + parseFloat(gstCost);
  
  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <div className={classes.headerLeft}>
          <div className={classes.logoContainer}>
            <img src={p2} alt="SAP Logo" className={classes.logo} />
            <span className={classes.companyName}>SAP Innovation Technology</span>
          </div>
          <div className={classes.Text}>Invoice Builder</div>
          <div className={classes.blueStripe}>
            <div className={classes.invoiceText1}>BUILD</div>
            <div className={classes.invoiceText2}>SETTING</div>
            <div className={classes.invoiceText3}>PDF View</div>
          </div>
        </div>
        <div className={classes.headerMiddle}>
          <div className={classes.newCustomerForm}>New Customer Invoice Form</div>
        </div>
        <div className={classes.headerRight}>
          <div className={classes.Collaborators}>
            <img src={p3} alt="Add collaborator" className={classes.headerIcon} /> Add collaborator
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

      <div className={classes.sidebar}>
        <ul>
          <li><img src={p6} alt="Home Icon" className={classes.sidebarIcon} /><a href="#">Heading</a></li>
          <li><img src={p7} alt="Drafts Icon" className={classes.sidebarIcon} /><a href="#">Full Name</a></li>
          <li><img src={p8} alt="Shared Icon" className={classes.sidebarIcon} /><a href="#">Email</a></li>
          <li><img src={p9} alt="Shared Icon" className={classes.sidebarIcon} /><a href="#">Address</a></li>
          <li><img src={p10} alt="Shared Icon" className={classes.sidebarIcon} /><a href="#">Date picker</a></li>
          <li><img src={p11} alt="Home Icon" className={classes.sidebarIcon} /><a href="#">Appointment</a></li>
          <li><img src={p12} alt="Drafts Icon" className={classes.sidebarIcon} /><a href="#">Signature</a></li>
          <li><img src={p13} alt="Shared Icon" className={classes.sidebarIcon} /><a href="#">Product List</a></li>
        </ul>
      </div>

      <div className={classes.invoice}>
      <div className={classes.head}>
        <h2>INVOICE</h2>
      </div>
      <div className={classes.header}>
        <div className={classes.companyinfo}>
          <div className={classes.companylogo}>
            <img src={p2} className={classes.logo} alt="Company Logo" />
            <p>SAP Innovation Technology</p>
          </div>
        </div>
        <div className={classes.companydetails}>
          <p><strong>Invoice Number:</strong> INV-123</p>
          <p><strong>Client Number:</strong> CLT-456</p>
          <p><strong>Date:</strong> 12/04/2024</p>
        </div>
      </div>
      <hr />

      <div className={classes.billinginfo}>
        <div className={classes.billingaddress}>
          <h3>Billing Address</h3>
          <p><strong>Company Name:</strong> Awesome Company</p>
          <p><strong>Address :</strong>123 Anywhere St., </p>
          <p> Any City, ST 12345 </p>
          <p><strong>Ph. Number</strong> 123-456-7890 </p>
          <p><strong>Email:</strong>hello@reallygreatsite.com </p>
          <p><strong>Website:</strong>www.reallygreatsite.com </p>
          
         
        </div>
        <div className={classes.billingdetails}>
          <h3>Shipping Address</h3>
          <p><strong>Company Name:</strong> Olivia Wilson</p>
          <p><strong>Account Number:</strong> 0123 4567 8901</p>
          <p><strong>Credit Card:</strong> 0123 4567 8901 2345</p>
          <p><strong>Address:</strong> "123 Anywhere St., </p>
          <p>Any City, ST 12345"</p>
        </div>
      </div>
      <hr />

      <div className={classes.productdetails}>
        <h3>Product Details</h3>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>${product.unitPrice.toFixed(2)}</td>
                <td>${(product.quantity * product.unitPrice).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={classes.total}>
        <p>Total: ${totalAmount.toFixed(2)}</p>
        <p>Shipping Charge: ${shippingCharge.toFixed(2)}</p>
        <p>GST (18%): ${gstCost}</p>
        <p><strong>Grand Total: ${grandTotal.toFixed(2)}</strong></p>
      </div>

      <hr />

      <div className={classes.signature}>
        <img src={p14} className={classes.sign} alt="Signature" />
        <h3>Signature</h3>
      </div>
    </div>
  

    
    </div>
  );
};

export default Invoice;