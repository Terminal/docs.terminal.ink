import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import { Link } from 'gatsby';

class Navigation extends React.Component {
  componentDidMount() {
    this.open.addEventListener('click', () => {
      if (this.navside && this.navside.style) {
        this.navside.style.transform = 'translateX(0px)';
      }
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-container') && this.navside && this.navside.style) {
        this.navside.style.transform = 'translateX(-250px)';
      }
    });
  }

  render() {
    return (
      <div className="nav-container">
        <span ref={elem => this.open = elem} id="menu-icon"></span>
      
        <div className="nav-content">
          <h4 className="center">
            <Link to="/">
              Terminal.ink Developer Portal
            </Link>
          </h4>
        </div>
      
        <div ref={elem => this.navside = elem} className="sidenav" style={({transform: 'translateX(-250px)'})}>
          <Link to="/">
            Home
          </Link>
          <a href="https://ls.terminal.ink">
            Bot List
          </a>
        </div>
      </div>
    );
  }
}

Navigation.propTypes = {
  title: PropTypes.string
};

export default Navigation;
