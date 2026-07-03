import React from 'react';
import { ClientNavbar } from '@/components/layout/Navbar/ClientNavbar';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ClientNavbar />
      {children}
    </>
  );
}
