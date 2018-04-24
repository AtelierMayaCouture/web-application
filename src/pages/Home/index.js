// src/components/Home/index.js
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import SplitSection from './../../components/SplitSection';

import FullWidthSlider from './FullWidthSlider';
import Testimonials from './Testimonials';
import Gallery from './Gallery';
import Features from './Features';

export default class Home extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={classnames('Home', className)}>
        {/* <!-- Fullwidth Slider --> */}
        <FullWidthSlider />

        {/* <!-- Split Section --> */}
        <SplitSection
          right
          title="Retouches"
          description={`
            Je propose différentes retouches sur toutes sortes de tissus, cependant je ne travaille pas le cuir.
            Changement de fermeture éclair, bas de pantalon, ameublement ou même relooker entièrement votre vêtement.
          `}
          background="images/home/retouches.jpg"
        />

        <SplitSection
          right={false}
          title="Cours de couture"
          description={`
            Les cours de coutures sont proposés tous les samedis matins de 9h30 à 12h30. Le prix est de 24€ pour les trois heures. Aucun engagement pendant l'année. Il faut s'inscrire par téléphone (06 23 57 12 53).

            Petits groupes jusqu\'à 4 personnes, tous niveaux confondus.

            Machine à coudre à votre disposition si nécessaire.
          `}
          bouton={{
            url: '/prix',
            text: 'Voir les tarifs',
          }}
          background="images/home/cours.jpg"
        />

        <SplitSection
          right
          title="Créations"
          description={`
            En étant styliste modéliste je peux réaliser vos idées à partir de simple croquis ou n\'importe quel modèle.
          `}
          background="images/home/creations.jpg"
        />
        {/* <!-- End Split Section --> */}

        {/* <!-- Split Section -->
        <section className="split-section bg-gray-lighter">
            <div className="clearfix relative">

                <div className="split-section-headings right">
                    <div className="ssh-table">
                        <div className="ssh-cell page-section bg-scroll" data-background="images/barbershop/split-section-2.jpg"></div>
                    </div>
                </div>
                <div className="split-section-content page-section">

                    <div className="split-section-wrapper left">

                        <div className="text align-center">
                            <h2 className="font-alt mt-0 mb-50 mb-xxs-20">We Provide The Full List of&nbsp;Barbering Services</h2>

                            <div className="row alt-features-grid mb-30 mb-xxs-20">

                                <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                                    <div className="alt-features-item align-center">
                                        <div className="alt-features-icon">
                                            <img src="images/barbershop/icon-1.png" style={{ width: 64 }} alt="" />
                                        </div>
                                        <h3 className="alt-features-title font-alt">Haircuts</h3>
                                    </div>
                                </div>
                                <div className="col-sm-4 wow fadeIn" data-wow-delay="0.2s">
                                    <div className="alt-features-item align-center">
                                        <div className="alt-features-icon">
                                            <img src="images/barbershop/icon-2.png" style={{ width: 64 }} alt="" />
                                        </div>
                                        <h3 className="alt-features-title font-alt">Shaves</h3>
                                    </div>
                                </div>
                                <div className="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
                                    <div className="alt-features-item align-center">
                                        <div className="alt-features-icon">
                                            <img src="images/barbershop/icon-3.png" style={{ width: 64 }} alt="" />
                                        </div>
                                        <h3 className="alt-features-title font-alt">Kids Style</h3>
                                    </div>
                                </div>

                            </div>


                            <p className="mb-50 mb-xxs-20">
                                Maecenas volutpat, diam enim sagittis quam, id&nbsp;porta quam.
                                Lorem ipsum dolor sit amet, c-r adipiscing elit volutpat, accumsan ligula semper metus pellentesque mattis.
                            </p>

                            <div>
                                <a href="special-barbershop-pricing.html" className="btn btn-mod btn-large btn-round">Get Pricing</a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
        {/* <!-- End Split Section --> */}


        {/* Testimonials */}
        <Testimonials />
        <Gallery />
        <Features />

      </div>
    );
  }
}
