import React from 'react';
import pure from 'recompose/pure';

// global components
import Section from '../../components/Section';
import PageHeader from '../../components/PageHeader';

// local components
import Hours from './components/Hours';

const Horaires = () => {
  return (
    <div>

      <PageHeader
        title="Horaires"
        background="images/horaires.jpg"
        style={{ backgroundPosition: '100% 50%' }}
      />

      <Section>
        <Hours />
      </Section>

    </div>
  );
}

export default pure(Horaires);
