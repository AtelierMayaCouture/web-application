import React from 'react';

const data = [
  {
    content: 'Idéal, très professionnel ! C\'est rapide et toujours avec le sourire ! Personne de très bons conseils, je recommande vivement !',
    author: 'G. LDM'
  },
  {
    content: 'Très bien, Maya a pu changer la fermeture éclair de mon pantalon de moto sans problème, au top !',
    author: 'A. L.'
  }
];

const Item = ({ content, author }) => (
  <div>
    <div className="container relative">
      <div className="row">
        <div className="col-md-8 col-md-offset-2 align-center">
          {/* <!-- Section Icon --> */}
          <div className="section-icon">
            <span className="icon-quote"></span>
          </div>
          {/* <!-- Section Title --> */}
          <h3 className="small-title font-alt">Vos avis?</h3>
          <blockquote className="testimonial white">
            <p>{content}</p>
            <footer className="testimonial-author">{author}</footer>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <section className="page-section bg-dark bg-dark-alfa-30 fullwidth-slider" data-background="images/barbershop/section-bg-1.jpg">
    { data.map(item => <Item key={item.author} {...item} />)}
  </section>
);

export default Testimonials;
