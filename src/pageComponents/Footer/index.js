import React from "react";

const Footer = () => {
  return (
    <footer className="small-section bg-gray-lighter footer pb-60">
      <div className="container">
        <div className="row mb-40 align-left">
          <div className="col-sm-12">
            <div className="row">
              {/* <!-- Phone --> */}
              <div className="col-sm-6 col-lg-3 pt-20 pb-20 pb-xs-0">
                <div className="contact-item">
                  <div className="ci-icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div className="ci-title font-alt">Appelez-moi</div>
                  <div className="ci-text">
                    <a href="tel:+33623571253">+33 6 23 57 12 53</a>
                  </div>
                </div>
              </div>
              {/* <!-- End Phone --> */}

              {/* <!-- Email --> */}
              <div className="col-sm-6 col-lg-3 pt-20 pb-20 pb-xs-0">
                <div className="contact-item">
                  <div className="ci-icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div className="ci-title font-alt">Email</div>
                  <div className="ci-text">
                    <a href="mailto:mayacouture@hotmail.fr">
                      mayacouture@hotmail.fr
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- End Email --> */}

              {/* <!-- Address --> */}
              <div className="col-sm-6 col-lg-3 pt-20 pb-20 pb-xs-0">
                <div className="contact-item">
                  <div className="ci-icon">
                    <i className="fa fa-map-marker"></i>
                  </div>
                  <div className="ci-title font-alt">Adresse</div>
                  <div className="ci-text">
                    19 rue de la Loi - 56.000 Vannes
                  </div>
                </div>
              </div>
              {/* <!-- End Address --> */}

              {/* <!-- Opening Time --> */}
              <div className="col-sm-6 col-lg-3 pt-20 pb-20 pb-xs-0">
                <div className="contact-item">
                  <div className="ci-icon">
                    <i className="fa fa-clock-o"></i>
                  </div>
                  <div className="ci-title font-alt">Heures d'ouvertures</div>
                  <div className="ci-text">
                    <small>
                      <table>
                        <tbody>
                          <tr>
                            <td>Lundi</td>
                            <td>Fermé</td>
                          </tr>
                          <tr>
                            <td>Mardi</td>
                            <td>9h - 12h30</td>
                          </tr>
                          <tr>
                            <td>Mercredi</td>
                            <td>9h - 12h30</td>
                            <td>
                              &nbsp;&amp; 14h - 18h30
                              <br />
                            </td>
                          </tr>
                          <tr>
                            <td>Jeudi</td>
                            <td>9h - 12h30</td>
                          </tr>
                          <tr>
                            <td>Vendredi</td>
                            <td>9h - 12h30</td>
                          </tr>
                          <tr>
                            <td>Samedi</td>
                            <td>
                              9h - 12h30
                              <br />
                            </td>
                          </tr>
                          <tr>
                            <td>Dimanche&nbsp;&nbsp;</td>
                            <td>Fermé</td>
                          </tr>
                        </tbody>
                      </table>
                    </small>
                  </div>
                </div>
              </div>
              {/* <!-- End Opening Time --> */}
            </div>
          </div>
        </div>

        {/* <!-- Divider --> */}
        <hr className="mt-0 mb-60 " />
        {/* <!-- End Divider --> */}

        {/* <!-- Social Links -->
          <div className="footer-social-links mb-30">
              <a href="#" title="Facebook" target="_blank"><i className="fa fa-facebook"></i></a>
              <a href="#" title="Twitter" target="_blank"><i className="fa fa-twitter"></i></a>
              <a href="#" title="Behance" target="_blank"><i className="fa fa-behance"></i></a>
              <a href="#" title="LinkedIn+" target="_blank"><i className="fa fa-linkedin"></i></a>
              <a href="#" title="Pinterest" target="_blank"><i className="fa fa-pinterest"></i></a>
          </div>
          {/* <!-- End Social Links --> */}

        {/* <!-- Footer Text --> */}
        <div className="footer-text">
          {/* <!-- Copyright --> */}
          <div className="footer-copy font-alt">
            &copy; Atelier Maya Couture 2020
          </div>
          {/* <!-- End Copyright --> */}

          <div className="footer-made">
            Made by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://aksels.me"
            >
              aksels.me
            </a>
          </div>
        </div>
        {/* <!-- End Footer Text --> */}
      </div>

      {/* <!-- Top Link --> */}
      <div className="local-scroll">
        <a href="#top" className="link-to-top">
          <i className="fa fa-caret-up"></i>
        </a>
      </div>
      {/* <!-- End Top Link --> */}
    </footer>
  );
};

export default Footer;
