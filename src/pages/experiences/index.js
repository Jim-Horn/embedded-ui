import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import { Link } from 'gatsby';

const SiteMap = ({ data }) => {
  const edges = data.allSitePage.edges;
  return (
    <Layout>
      <h1>Client experiences</h1>
      <ul>
        {edges.map(node => {
          const name = node.node.path
            .replace('/experiences/', '')
            .replace(/\/$/, '');
          return (
            name !== '' && (
              <li>
                <Link to={node.node.path}>{name}</Link>
              </li>
            )
          );
        })}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allSitePage(
      sort: { path: ASC }
      filter: { path: { regex: "/experiences/" } }
    ) {
      edges {
        node {
          path
        }
      }
    }
  }
`;

export default SiteMap;
