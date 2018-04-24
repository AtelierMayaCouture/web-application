import React from 'react';

import Section from '../../../components/Section';

const FeatureItem = ({ title, content, icon }) => (
    <div className="col-sm-6 col-md-4 col-lg-4">
      <div className="alt-features-item align-center">
          <div className="alt-features-icon">
              <span className={icon}></span>
          </div>
          <h3 className="alt-features-title font-alt">{title}</h3>
          <div className="alt-features-descr align-left">
            {content}
          </div>
      </div>
  </div>
)

const Features = () => (
  <Section>
    {/* Title */}
    <h2 className="section-title font-alt mb-70 mb-sm-40">
      L'Atelier Maya c'est..
    </h2>

    {/* Featurs */}
    <div className="row multi-columns-row alt-features-grid">
      {
        [
          {
            title: '.. de la qualité',
            content: 'Je prendrai autant soin de vos petites et grandes retouches, que de vos projets les plus créatifs',
            icon: 'icon-scissors',
          },
          {
            title: '.. de l\'efficacité',
            content: 'Des délais courts pour vos retouches et vos créations. Mais la qualité sera toujours prioritaire à la rapidité !',
            icon: 'icon-clock',
          },
          {
            title: '+ de 10 ans d\'experience',
            content: 'Je serai ravie de vous accueillir dans ma boutique créée en 2009 ! Et toujours avec le sourire !',
            icon: 'icon-heart',
          },
        ].map( item => <FeatureItem key={item.icon} {...item} />)
      }
    </div>
  </Section>
);

export default Features;
