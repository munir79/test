import Footer from '@/component/shared/Footer';
import Navbar from '@/component/shared/Navbar';
import React from 'react';

const PublicLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default PublicLayout;
