import React from 'react';
import pure from 'recompose/pure';

import Section from '../../components/Section';
import PageHeader from '../../components/PageHeader';

const NotFound = () => {
  return (
    <div>

      <PageHeader
        title="404 - NotFound"
        background="images/barbershop/section-bg-4.jpg"
      />

      <Section>
        Cette page n'existe pas ... revenir à <a href="/">l'accueil</a> ?
      </Section>

    </div>
  );
}

export default pure(NotFound);
