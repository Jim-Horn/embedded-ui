import React from 'react';

export const formOptions = {
  firstName: ['John', 'David', 'Michael', 'Sarah', 'Emily'],
  lastName: ['Doe', 'Smith', 'Johnson', 'Brown', 'Lee'],
  email: [
    'johndoe@example.com',
    'smith@example.com',
    'johnson@example.com',
    'brown@example.com',
    'lee@example.com',
  ],
  phone: [
    '123-456-7890',
    '987-654-3210',
    '555-123-4567',
    '888-777-9999',
    '333-222-1111',
  ],
  address1: [
    '123 Main Street',
    '456 Elm Street',
    '789 Oak Street',
    '321 Pine Street',
    '555 Maple Street',
  ],
  zip: ['10001', '90001', '60601', '77001', '33101'],
  cityStateMap: {
    'New York': 'NY',
    'Los Angeles': 'CA',
    Chicago: 'IL',
    Houston: 'TX',
    Miami: 'FL',
  },
};

export const summary = {
  customerIdentifier: '1234567890',
  sku: 'client-sku',
  price: '24.99',
  type: 'Asurion Protection Plan',
  dateTime: new Date(),
};

export const TsAndCs = () => (
  <>
    <h1>Terms and Conditions</h1>

    <h2>1. Lorem Ipsum</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor, urna
      sit amet aliquam consequat, sapien metus ultricies nisi, a tristique metus
      tortor a neque. Vestibulum pulvinar lorem non eleifend varius. Aliquam
      eleifend magna vel lobortis ultricies. Donec sed justo eget dolor
      dignissim ultricies. Sed vitae quam ac arcu malesuada venenatis. Maecenas
      ut consectetur justo. Fusce ac finibus velit. Fusce scelerisque, velit ut
      fringilla vulputate, arcu sapien laoreet ipsum, at tempus nunc ante vitae
      risus. Fusce elementum ipsum felis, sed facilisis justo sagittis sed.
    </p>

    <h2>2. Nullam Mollis</h2>
    <p>
      Nullam mollis elit vitae velit rutrum bibendum. Suspendisse vitae enim
      sapien. Mauris eget sem fermentum, scelerisque sem a, rutrum quam.
      Curabitur hendrerit tristique malesuada. Duis lacinia urna vitae enim
      ullamcorper, in lacinia ipsum facilisis. Aenean vel est feugiat, euismod
      dolor eget, volutpat massa. Vestibulum efficitur justo et felis rutrum
      aliquet. Praesent condimentum semper erat, sit amet tristique erat
      consequat at. Nulla sed pretium mi. Pellentesque consequat eleifend
      mauris, eget tempus lectus efficitur in. In sit amet velit libero.
      Suspendisse rhoncus lobortis tortor, in elementum ligula ultricies at.
      Suspendisse potenti.
    </p>

    <h2>3. Praesent Posuere</h2>
    <p>
      Praesent posuere magna et purus ullamcorper, sit amet gravida nisl
      consequat. Donec iaculis, lacus at eleifend bibendum, odio metus semper
      libero, in euismod dui ligula in enim. Nulla facilisi. Quisque tempor
      lacinia diam id euismod. Vestibulum ante ipsum primis in faucibus orci
      luctus et ultrices posuere cubilia Curae; Cras consectetur felis ac orci
      eleifend, non congue lectus varius. Sed et nibh vitae purus malesuada
      scelerisque.
    </p>

    <h2>4. Ut Ipsum</h2>
    <p>
      Ut ipsum justo, tristique in erat id, egestas venenatis enim. Vivamus
      interdum ligula purus, sit amet ultrices metus iaculis sit amet. Donec
      elementum venenatis tellus id egestas. Duis tempus feugiat sapien id
      consectetur. Nunc pulvinar faucibus mauris, in rutrum risus faucibus sed.
      Cras tempor efficitur fringilla. Suspendisse condimentum congue magna, sit
      amet dapibus lacus ullamcorper nec. Sed luctus tellus sapien, ut tempus
      nisl ullamcorper sed. Fusce vitae vestibulum nisi, ut volutpat quam.
    </p>

    <h2>5. In Quam</h2>
    <p>
      In quam ante, eleifend ac mauris vitae, eleifend elementum lectus. Nullam
      at consectetur nunc. Sed fermentum, massa a dapibus congue, orci nunc
      malesuada mauris, eu consequat nunc lectus eget nulla. Nullam ultrices
      pulvinar nunc in varius. Morbi blandit augue sed nisi finibus tristique.
      Aenean hendrerit eleifend purus in luctus. Curabitur tristique posuere
      tellus non dictum. Sed gravida purus id tincidunt vulputate. Fusce ut
      lobortis tortor.
    </p>

    <h2>6. Suspendisse Potenti</h2>
    <p>
      Suspendisse potenti. Morbi bibendum magna vitae nulla rutrum facilisis.
      Sed eu metus vitae orci congue ultricies. Sed et sapien ac quam bibendum
      aliquam nec sit amet odio. Vestibulum ante ipsum primis in faucibus orci
      luctus et ultrices posuere cubilia Curae; Sed luctus quam nec lectus
      cursus, ac varius odio volutpat. Ut non ex tortor. Phasellus at dictum
      nisi. In pretium malesuada turpis at convallis.
    </p>

    <h2>7. Conclusion</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam
      rutrum, vestibulum elit eu, varius neque. Sed consequat varius aliquam.
      Quisque eu nunc eu lectus efficitur rhoncus. Nulla a malesuada mi, eu
      pretium ex. Morbi vitae lectus ut sem aliquam sagittis. Vestibulum
      ullamcorper consectetur massa, ut finibus felis posuere id. In blandit
      bibendum congue.
    </p>

    <footer>
      <p>
        These terms and conditions were last updated on:{' '}
        <time datetime="2023-06-15">June 15, 2023</time>
      </p>
    </footer>
  </>
);
