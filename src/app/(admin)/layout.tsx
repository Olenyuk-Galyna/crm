import React from 'react';
import Sidebar from '@/app/components/sidebar';

export interface LayoutProps {
  children: React.ReactNode;
  header: React.ReactNode;
  toolbar: React.ReactNode;
  modal: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Sidebar />
      <div className="ml-60">{children}</div>
    </div>
  );
}
