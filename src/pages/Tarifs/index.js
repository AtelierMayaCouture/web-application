import React from 'react';

import Section from '../../components/Section';
import PageHeader from '../../components/PageHeader';

import { Retouches, Cours, Autres } from './components';

const Tarifs = () => {
  return (
    <div>

      <PageHeader
        title="Tarifs"
        background="images/home/retouches.jpg"
        style={{ backgroundPosition: '100% 50%' }}
      />

      <Section>
        <Retouches />
        <Cours />
        <Autres />
      </Section>

    </div>
  );
}

export default Tarifs;
