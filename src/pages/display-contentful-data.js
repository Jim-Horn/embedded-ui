import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import styled from 'styled-components';

const StyledPre = styled.pre`
  white-space: break-spaces;
`;

const ContentfulData = ({ data }) => (
  <Layout>
    <h1>{data.allContentfulPost.edges[0].node.name}</h1>
    <p>Contentful data:</p>
    <StyledPre>{JSON.stringify(data, null, 2)}</StyledPre>
  </Layout>
);
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

export default ContentfulData;
