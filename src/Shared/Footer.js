import React from "react";

import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <React.Fragment>
      <footer class="text-center text-lg-start bg-light mt-4 text-muted">
        {/* <!-- Section: Social media --> */}
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* <!-- Left --> */}
          <div class="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* <!-- Left --> */}

          {/* <!-- Right --> */}
          <div>
            <Link to="" class="me-4 text-reset">
              <i class="fab fa-facebook-f"></i>
            </Link>
            <Link to="" class="me-4 text-reset">
              <i class="fab fa-twitter"></i>
            </Link>
            <Link to="" class="me-4 text-reset">
              <i class="fab fa-google"></i>
            </Link>
            <Link to="" class="me-4 text-reset">
              <i class="fab fa-instagram"></i>
            </Link>
            <Link to="" class="me-4 text-reset">
              <i class="fab fa-linkedin"></i>
            </Link>
            <Link to="" class="me-4 text-reset">
              <i class="fab fa-github"></i>
            </Link>
          </div>
          {/* <!-- Right --> */}
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links  --> */}
        <section class="">
          <div class="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div class="row mt-3">
              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3"></i>Cloud Binder
                </h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              {/* <!-- Grid column -->. */}

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <Link to="/home" class="text-reset">
                    Home
                  </Link>
                </p>
                <p>
                  <Link to="/login" class="text-reset">
                    LogIN
                  </Link>
                </p>
                <p>
                  <Link to="/signup" class="text-reset">
                    SignUp
                  </Link>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i class="fas fa-home me-3"></i> New York, NY 10012, US
                </p>
                <p>
                  <i class="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p>
                  <i class="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i class="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  --> */}

        {/* <!-- Copyright --> */}
        <div
          class="text-center p-4"
        >
          © 2023 Copyright:
          <Link class="text-reset fw-bold" to="/home">
            Cloud Binder
          </Link>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
    </React.Fragment>
  );
};

export default Footer;
