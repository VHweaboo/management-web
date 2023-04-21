import React from 'react';
import "./footer_style.css";

function Footer() {

  return (
    <div>
      <footer class="bg-cyan text-white">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h3>About Us</h3>
              <p>Just a weaboo chilling around</p>
            </div>
            <div class="col-md-6">
              <h3>Contact Us</h3>
              <ul class="list-unstyled">
                <li><i class="fas fa-map-marker-alt"></i> Havard Tan Phong, District 7, Ho Chi Minh City</li>
                <li><i class="fas fa-envelope"></i> wbjn@gmail.com</li>
                <li><i class="fas fa-phone"></i> 0123 456 789</li>
              </ul>
            </div>
          </div>
          <hr></hr>
          <p class="text-center mb-0">Copyright by &copy; Weaboo Janai - VTI Trainee</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
