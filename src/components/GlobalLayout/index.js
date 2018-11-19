import React from 'react';
import PropTypes from 'prop-types';

import './../ModestaCSS/css/modesta.min.css';
import './../ModestaCSS/css/twemoji.min.css';
import './../index.scss';

class GlobalLayout extends React.Component {
  render() {
    return (
      <div className="main-window">
        {this.props.children}
      </div>
    );
  }
}

GlobalLayout.propTypes = {
  children: PropTypes.any,
  locale: PropTypes.string
};

export default GlobalLayout;
