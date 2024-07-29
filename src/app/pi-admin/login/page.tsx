import LoginForm from '@/components/LoginForm'
import React from 'react'

const LoginPage = () => {
  return (
    <main className='h-screen w-screen flex items-center justify-center'>
      <section className='container max-w-lg'>
        <LoginForm />
      </section>
    </main>
  )
}

export default LoginPage