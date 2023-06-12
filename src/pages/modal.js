import React, { useState } from 'react';
import { Modal } from '@soluto-private/aui-react-modal';
import { Button } from '@soluto-private/mx-asurion-ui-react';
import Layout from '../components/layout';

export const MyApp = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <Layout>
      <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
      <Modal isOpen={isModalOpen} onCloseModal={() => setIsModalOpen(false)}>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
          <Modal.Subtitle>Subtitle goes here</Modal.Subtitle>
        </Modal.Header>
        <Modal.Content>some content here</Modal.Content>
        <Modal.Footer>
          <Button onClick={() => setIsModalOpen(false)}>Continue</Button>
          <Button onClick={() => setIsModalOpen(false)} variant="outline">
            Back
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
};
export default MyApp;
