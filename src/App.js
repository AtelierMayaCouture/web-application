import React, { Component } from 'react';


import Navigation from './pageComponents/Navigation';
import Footer from './pageComponents/Footer';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <span>

        {/* <!-- Page Loader --> */}
        <div className="page-loader">
            <div className="loader">Loading...</div>
        </div>
        {/* <!-- End Page Loader --> */}

        {/* <!-- Page Wrap --> */}
        <div className="page" id="top">
            {/* <!-- Navigation panel --> */}
            <Navigation />

            {this.props.children}

            {/* <!-- Section -->
            <section className="page-section">
                <div className="container relative">

                    <div className="section-text align-center">
                        <div className="row">
                            <div className="col-sm-8 col-sm-offset-2">
                                <div className="align-center mb-50 mb-xs-20">
                                    <img src="images/barbershop/image-2.png" width="180" height="180" alt="" />
                                </div>
                                <p className="lead">
                                    We provide barbering experience that customers love, day after day after day. It&nbsp;is&nbsp;not a&nbsp;big secret. People just want more of it.
                                </p>
                                <div>
                                    <a href="#" className="btn btn-mod btn-medium btn-round">Book an Appointment</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* <!-- End Section --> */}


            <Footer />


        </div>
      </span>
    );
  }
}
export default App;
