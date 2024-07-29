"use client"
import Sidebar from '@/components/Sidebar'
import { AdminContexts } from '@/contexts/AdminSessionContext'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect } from 'react'

const AdminHome = () => {
  const router = useRouter();
  const { session, user } = useContext(AdminContexts);

  useEffect(() => {
    if (!session) {
      router.push("/pi-admin/login");
    }
  }, [session, router]);

  if (!session) {
    return <p>Access Denied</p>;
  }

  return (
    <div>
      <Sidebar user={user} />
    </div>
  );
}


export default AdminHome