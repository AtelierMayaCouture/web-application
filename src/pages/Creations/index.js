import React from 'react';

import Section from '../../components/Section';
import PageHeader from '../../components/PageHeader';

import data from './data';

const PhotoItem = ({ alt, src }) => (
  <div className="col-sm-6 col-md-4 col-lg-4 mb-sm-10">
    <div className="post-prev-img">
      <a href={`images/creations/${src}.jpg`} className="lightbox-gallery-2 mfp-image">
        <img src={`images/creations/thumbnails/${src}_tn.jpg`} alt={alt} />
      </a>
    </div>
  </div>
)

const Tarifs = () => {
  return (
    <div>

      <PageHeader
        title="Creations"
        background="images/home/creations.jpg"
      />

      <Section>

        {/* Photo Grid */}
        <div className="row multi-columns-row mb-30 mb-xs-10">
          { data.map( i => <PhotoItem key={i.src} {...i} />) }
        </div>

        <section className="page-section bg-dark bg-dark-alfa-50" data-background="images/barbershop/section-bg-1.jpg">
            <div className="container relative">

                <div className="align-center">
                    <h3 className="banner-heading font-alt mb-40">Créer le vêtement de vos rêves</h3>
                    <div className="local-scroll">
                        <a href="tel:+33623571253" className="btn btn-mod btn-w btn-medium">Appelez-moi — 06 23 57 12 53</a>
                    </div>
                </div>

            </div>
        </section>

      </Section>

    </div>
  );
}

export default Tarifs;
