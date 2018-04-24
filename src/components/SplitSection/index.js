import React from 'react';
import pure from 'recompose/pure';

const Component = ({ title, description, right, bouton, background, style }) => {
  return (
    <section className="split-section bg-gray-lighter" id="about">
        <div className="clearfix relative">
          {/* <!-- Section Headings --> */}
          <div className={`split-section-headings ${right ? 'left' : 'right'}`}>
            <div className="ssh-table">
              <div className="ssh-cell page-section bg-scroll" data-background={background}
                style={{
                  background: `url(${background})`,
                  backgroundSize: '100% auto',
                  backgroundRepeat: 'no-repeat',
                  ...style
                }}
              />
            </div>
          </div>
          {/* <!-- End Section Headings --> */}

            {/* <!-- Section Content --> */}
            <div className="split-section-content page-section">

                <div className={`split-section-wrapper ${right ? 'right' : 'left'}`}>

                    <div className="text align-center">
                        <h2 className="font-alt mt-0 mb-50 mb-xxs-20">{title}</h2>

                        <p className="mb-50 mb-xxs-20">{description}
                        </p>

                        { bouton &&
                          <div>
                            <a href={bouton.url} className="btn btn-mod btn-large btn-round">{bouton.text}</a>
                          </div>
                        }

                    </div>
                </div>

            </div>
            {/* <!-- End Section Content --> */}

        </div>
    </section>
  );
}

export default pure(Component);
