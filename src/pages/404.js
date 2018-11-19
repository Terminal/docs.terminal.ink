import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Global from './../components/Global';
import DocsLayout from '../components/DocsLayout';

class NotFoundPage extends React.Component {
  render() {
    return (
      <DocsLayout locale={this.props.pageContext.locale} type="bots">
        <Global />
        <div className="center">
          <h1>
            404<br />
            Not Found!
          </h1>
          <Link to="/">
            Go home
          </Link>
        </div>
      </DocsLayout>
    );
  }
}

NotFoundPage.propTypes = {
  pageContext: PropTypes.shape({
    locale: PropTypes.string
  })
};

export default NotFoundPage;
