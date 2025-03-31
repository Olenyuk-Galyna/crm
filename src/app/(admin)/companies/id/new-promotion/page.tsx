import React from 'react';
import Toolbar from '@/app/components/toolbar';
import SearchInput from '@/app/components/search-input';
('use client');

import React from 'react';
import PromotionForm from '@/app/components/promotion-form';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return (
    <div className="py-6 px-10">
      <PromotionForm companyId={params.id} />
    </div>
  );
}
