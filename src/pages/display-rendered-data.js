import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import StyledLink from '../components/StyledLink';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { contentfulOptions } from '../utils';

const ContentfulPage = ({ data }) => {
  const node = data.allContentfulPost.edges[0].node.entry;
  return (
    <Layout>
      <StyledLink to="/display-contentful-data">Contentful data</StyledLink>
      <p>Rendered data:</p>
      <h1>{data.allContentfulPost.edges[0].node.name}</h1>
      {renderRichText(node, contentfulOptions)}
    </Layout>
  );
};
export const query = graphql`
  query {
    allContentfulPost(
      filter: { id: { eq: "3607aabc-45d8-51d9-a4c4-6bd19f2bc7bf" } }
    ) {
      edges {
        node {
          id
          name
          slug
          entry {
            raw
          }
        }
      }
    }
  }
`;

export default ContentfulPage;
