import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An online grocery store is a digital platform that allows you to
          browse and purchase a diverse selection of groceries from the
          convenience of your home. With user-friendly navigation and secure
          payment options, you can shop for fresh produce, pantry staples, and
          household essentials with ease. Enjoy the convenience of ordering
          groceries online and have them delivered right to your doorstep.
          Experience hassle-free grocery shopping today.
        </p>
        <p>
          An online grocery store typically presents an extensive range of
          grocery items or household essentials, each accompanied by detailed
          descriptions. These descriptions often include images showcasing the
          products, prices, and any available variations like sizes or flavors.
          Each grocery item usually has its own dedicated page featuring
          pertinent details. Customers can navigate through these pages to
          explore the offerings and make informed choices. With user-friendly
          interfaces and secure checkout processes, online grocery stores
          provide a convenient and hassle-free shopping experience for shoppers
          seeking to fulfill their household needs from the comfort of their
          homes.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
