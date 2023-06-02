import * as React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';

const SamplePage = () => (
  <Layout>
    <h1>Sample page</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla
      consectetur magna, ac volutpat odio convallis in. Fusce elementum est ut
      enim consectetur efficitur. Morbi volutpat nisl ac feugiat commodo.
      Pellentesque commodo lorem sit amet sapien rutrum, id commodo nulla
      suscipit. Aenean dictum sapien nec fermentum feugiat. Vestibulum a mi a
      massa finibus dapibus a eu ligula. Integer a erat eu elit lacinia
      facilisis.
    </p>
  </Layout>
);

export const Head = () => <Seo title="404: Not Found" />;

export default SamplePage;
