"use client"
import { AdminContexts } from '@/contexts/AdminSessionContext';
import { User } from '@/models/User.model';
import React, { useEffect, useState } from 'react';

import { getSession, login, logout } from "@/lib";
import { ObjectId } from 'mongoose';
import { useRouter } from 'next/navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const router = useRouter();

  const [user, setUser] = useState<User>({
    _id: "" as unknown as ObjectId,
    username: "",
    email: "",
    password: "",
    adminType: "",
    access: [""],
  });

  const [session, setSession] = useState<any>();
  
  useEffect(() => {
    const initializeSession = async () => {
      const sessionData = await getSession();
      if (sessionData && sessionData.user) {
        setUser(sessionData.user);
        setSession(sessionData);
      }
    };
    initializeSession();
  }, []);

  const loginFunc = async ({ email, password }: { email: string, password: string }) : Promise<boolean> => {
    const u : User | undefined = await login({ email: email, password: password });

    if (!u) {
      return false;
    }
    else {
      setUser({
        _id: u._id,
        username: u.username,
        email: u.email,
        password: u.password,
        adminType: u.adminType,
        access: u.access,
      });
      setSession(await getSession());
      router.push("/pi-admin");
      return true;
    }
  }

  
  const logoutFunc = async () => {
    await logout();
    // setUser(null);
    // setSession(null);
    router.push("/login");
  }

  return (
    <main>
      <AdminContexts.Provider value={{ user, setUser, session, setSession, login: loginFunc, logout: logoutFunc }}>
        {children}
      </AdminContexts.Provider>
    </main>
  );
}