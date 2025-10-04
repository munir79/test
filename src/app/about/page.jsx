import React from 'react';
import PublicLayout from '../PublicLayout';
import About from '@/component/About';

const page = () => {
  return (
    <div>
      <PublicLayout>
        <About />
      </PublicLayout>
    </div>
  );
};

export default page;
