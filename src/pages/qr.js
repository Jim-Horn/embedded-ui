import * as React from 'react';
import QRCode from 'qrcode.react';
import Barcode from 'react-barcode';

import Layout from '../components/layout';
import Seo from '../components/seo';

const vendorId = 'workstart';

const QrPage = () => {
  const [qrValue, setQrValue] = React.useState(`${vendorId}-`);

  function getCode(value) {
    const newValue = value.replace(`${vendorId}-`, '');
    return `${vendorId}-${newValue}`;
  }
  return (
    <Layout>
      <h1>QR sample page</h1>
      <p>
        <input
          value={qrValue}
          onChange={e => setQrValue(getCode(e.target.value))}
        />
      </p>
      <p>
        <QRCode value={qrValue} />
      </p>
      <p>
        <Barcode value={qrValue} />
      </p>
    </Layout>
  );
};

export const Head = () => <Seo title="QR Sample page" />;

export default QrPage;
