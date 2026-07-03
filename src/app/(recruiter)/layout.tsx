import React from 'react';
import { RecruiterNavbar } from '@/components/layout/Navbar/RecruiterNavbar';

export default function RecruiterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <RecruiterNavbar />
      {children}
    </>
  );
}
