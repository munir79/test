import React from 'react';
import PublicLayout from '../PublicLayout';
import PropertyManagement from '@/component/PropertyManagement';

const page = () => {
  return (
    <div>
      <PublicLayout>
        <PropertyManagement />
      </PublicLayout>
    </div>
  );
};

export default page;
