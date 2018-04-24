import React from 'react';

const dataMenu = [
  {
    key: '0-menu-nav',
    url: '/',
    label: 'Accueil',
  },
  {
    key: '1-menu-nav',
    url: '/horaires',
    label: 'Horaires',
  },
  {
    key: '2-menu-nav',
    url: '/tarifs',
    label: 'Tarifs',
  },
  {
    key: '3-menu-nav',
    url: '/creations',
    label: 'Créations',
  },
  {
    key: '4-menu-nav',
    url: '/contact',
    label: 'Contact',
  },
];

class Navigation extends React.Component {

  state = { open: false }

  toggleMenu = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <nav className="main-nav dark transparent stick-fixed">
          <div className="full-wrapper relative clearfix">
              {/* <!-- Logo --> */}
              <div className="nav-logo-wrap local-scroll" style={{ maxWidth: '80%', marginRight: 0 }}>
                  <a href="/" className="logo" style={{ maxWidth: 'none', paddingLeft: 10 }}>
                    {'ATELIER MAYA COUTURE'}
                  </a>
              </div>
              <div
                className="mobile-nav smallHeight active"
                onClick={this.toggleMenu}
                style={{ height: 75, lineHeight: 75, width: '20%', zIndex: 42 }}
              >
                <i className="fa fa-bars" />
              </div>

              {/* <!-- Main Menu --> */}
              <div
                className={`inner-nav desktop-nav ${this.state.open ? 'mobile-nav': ''}`}
              >
                  <ul className="clearlist local-scroll">
                    { dataMenu.map( item => <li key={item.key}><a href={item.url}>{item.label}</a></li>) }
                    <li>
                      <a href="tel:+33623571253">
                        <i className="fa fa-phone" style={{ display: 'inline-block', verticalAlign: 'sub' }} />
                        <span style={{ display: 'inline-block', paddingLeft: 10 }}>06 23 57 12 53</span>
                      </a>
                    </li>
                  </ul>
              </div>
          </div>
      </nav>
    );
  }
}

export default Navigation;
