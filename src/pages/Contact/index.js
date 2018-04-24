import React from 'react';
import pure from 'recompose/pure';

import Section from '../../components/Section';
import PageHeader from '../../components/PageHeader';

import ContactForm from './components/ContactForm';

const Contact = () => {
  return (
    <div>

      <PageHeader
        title="Contact"
        background="images/home/cours.jpg"
      />

      <Section>
        <ContactForm />
      </Section>

    </div>
  );
}

export default pure(Contact);
