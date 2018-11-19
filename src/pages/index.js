import React from 'react';
import Global from './../components/Global';
import DocsLayout from './../components/DocsLayout';
import { graphql } from 'gatsby';

export default class Homepage extends React.Component {
  render() {
    const pages = this.props.data.allMarkdownRemark.edges;
    const categories = {};

    pages.forEach((page) => {
      categories[page.node.fields.category];
    });

    return (
      <DocsLayout>
        <Global />
        <h1>Select a service...</h1>
        <ul>
          {pages.map(bot => (
            <li key={bot.node.fields.permalink}><a href={bot.node.fields.permalink}>{bot.node.frontmatter.pagename}</a></li>
          ))}
        </ul>
        <a href="https://app.netlify.com/start/deploy?repository=https://github.com/terminal/docs.terminal.ink">
          <img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" />
        </a>
      </DocsLayout>
    );
  }
}

export const pageQuery = graphql`
  {
    allMarkdownRemark(filter: {fields: { filename: { eq: "index" }}}) {
      edges {
        node {
          fields {
            filename
            permalink
          }
          frontmatter {
            pagename
          }
        }
      }
    }
  }
`;
